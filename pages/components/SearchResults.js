import React from "react";
import { Card, Container, Grid, GridColumn, Header, Image, List } from "semantic-ui-react";



const SearchResults = ({articles}) =>{

if(!articles || !articles.length) return null;

const resultList = articles.map((item, idx)=>{

const delay = `${idx + 1}00ms`;


    return (

<li key={item.source.id} style={{'--delay': delay}} >


        <ul><Card className="card" style={{width:"300px",height:"350px"}}>
        
        <a href={item.url}>
        <Image src={item.urlToImage}  /></a>
         <Card.Header>
         <Header as="h3" style={{overflow: "hidden", maxHeight: "9ch", margin: "0px 10px" }}>{item.title}</Header></Card.Header>
         
         <List.Description textAlign center style={{overflow: "hidden", margin: "1px 10px" }}>
           {item.description}
    </List.Description>

    <Card.Content extra>
         <List bulleted horizontal>
           <List.Item>
             <a href={item.url}>{item.source.name}</a>
           </List.Item>
           <List.Item >{item.publishedAt.split("T")[0]}</List.Item>
         </List>
         </Card.Content>
         </Card></ul>
        
         </li>
    );
});

return(

<div className="search_results">
{resultList}



</div>



);
};

export default SearchResults;