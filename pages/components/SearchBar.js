import React from "react";
import {useState} from 'react'
import { Button, Form, Container, Segment } from "semantic-ui-react";
import { NEWS_API_KEY} from "./config";
import SearchResults from "./SearchResults"




export default function SearchBar(){

const [articles, setArticles] = useState([]);




const handleInputChange = (e) => {
  e.preventDefault();
  const { value } = e.target;

  if (!value) return;

  const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&apiKey=${NEWS_API_KEY}`;

fetch(url)
.then((response) => response.json())
.then(({articles})=> setArticles(articles));


console.log('handleInputChange');
console.log('Articles', articles);

};

  return(

<>

    <div className="searchbar" >
   
    <Form>
     
<Form.Input name="search" id="search" onChange={handleInputChange}
placeholder='Procurar por Notícias' style={{boxShadow: '0 0 2em green'}}/>

    </Form>
 

  </div>



  <SearchResults articles={articles}/>




</>
  )
}












