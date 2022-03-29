import React from "react";
import {useState} from 'react'
import { Button, Form } from "semantic-ui-react";
import { NEWS_API_KEY} from "./config";
import SearchResults from "./SearchResults"




export default function SearchBar(){

const [articles, setArticles] = useState([]);


const handleInputChange = (e) => {
  e.preventDefault();
  const { value } = e.target;

  if (!value){
  setArticles([]);
  return;
  }


  const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&sortBy=popularity&pageSize=40&apiKey=${NEWS_API_KEY}`;

fetch(url)
.then((response) => response.json())
.then(({articles})=> setArticles(articles));


console.log('handleInputChange');
console.log('Articles', articles);

}





  return(

<>
<div className="container">

    <div className="searchbar" >
    <Form >
     <Form.Group>
<Form.Input
 icon='search' 
 name="search" 
 id="search" 
placeholder='Procurar por Notícias' 
onChange={handleInputChange}
/>


              </Form.Group>
    </Form>
 

  </div>

</div>

  <SearchResults articles={articles}/>




</>
  )
}