import React from "react";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import { NEWS_API_KEY } from "../components/config";
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
    const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&sortBy=popularity&pageSize=40&apiKey=${NEWS_API_KEY}`;
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
      alert("Você fez muitas solicitações recentemente. As contas de desenvolvedor estão limitadas a 100 solicitações em um período de 24 horas (50 solicitações disponíveis a cada 12 horas). Atualize para um plano pago se precisar de mais solicitações.");
     
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
