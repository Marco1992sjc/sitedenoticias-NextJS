import React from "react";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import SearchResults from "../components/SearchResults";

export default function SearchBar() {
  const [articles, setArticles] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) {
      setArticles([]);
      return;
    }

    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&sortBy=popularity&pageSize=40&apiKey=${API_KEY}`;
    fetch(url)
    .then( async response => {
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
        
      }
      return response.json() 
    })
 .then( (({ articles }) => setArticles(articles))
    )
    .catch( error => {
      (error.message)
      console.log(error.message);
      alert(error.message);
     
    })
  
   

    

    console.log("handleInputChange");
    console.log("Articles", articles);
    };

  return (
    <>
      <div className="container">
        <div className="searchbar">
          <Form>
            <Form.Group>
              <Form.Input
                size="large"
                name="search"
                id="search"
                placeholder="Procurar por Notícias"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <SearchResults articles={articles} />
    </>
  );
}
