
import React from "react";
import { Card, Grid, Header, Image, List } from "semantic-ui-react";
const ArticleItem = props => {
  const { article } = props;
  
  return (


    <List >
     <Grid>
     <Grid.Column>
     
     <Card color='blue' style={{width:"300px",height:"350px", boxShadow: "0px 0px 20px #10bbff"}}>
         <Card.Content>
          <a href={article.url}>
          <Image src={article.urlToImage}  /></a>
          <Card.Header>
          <Header as="h3" style={{ margin: "8px 0" }}>{article.title}</Header></Card.Header>
          <Card.Description>
          <List.Description style={{ margin: "10px 0" }}>
            {article.description}
          </List.Description></Card.Description>
          <List bulleted horizontal>

            <List.Item>
              <a href={article.url}>{article.source.name}</a>
            </List.Item> 
            <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
          </List>
          </Card.Content>
          </Card>
        


         </Grid.Column>
          </Grid>
          
</List>

    
  );
};

const ArticleList = props => {
  return (
    <List style={{ maxWidth: 600}}>
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </List>
  );
};

export default ArticleList;



