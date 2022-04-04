import React from "react";
import { Form, Loader } from "semantic-ui-react";
import SearchResults from "../components/SearchResults";
import api from '../api/api'



export default function SearchBar() {

  const {
    articles,
    loading,
  } = api();

  
//const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&sortBy=popularity&pageSize=40&apiKey=${API_KEY}`;


  const handleInputChange = ({articles}) => (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) {
      setArticles([]);
      return;
    }
 
    
console.log(loading)
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

  <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
      {(<SearchResults articles={articles} />)}
        
      </div>
    )}
    </div>

    </>
  );
}