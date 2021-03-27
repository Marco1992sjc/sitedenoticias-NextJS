import React from "react";
import { Card, Grid, Header, Image, List } from "semantic-ui-react";

const ArticleItem = props => {
  const { article } = props;
  
  return (


    <List horizontal>
     <Grid>
     <Grid.Column>
     
          <Card color='blue' style={{boxShadow: "0px 0px 20px #10bbff"}}>
          <Image src={article.urlToImage}  />
          <Header as="h3">{article.title}</Header>
          <List.Description style={{ margin: "10px 0" }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item>
              <a href={article.url}>{article.source.name}</a>
            </List.Item>
            <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
          </List>
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



