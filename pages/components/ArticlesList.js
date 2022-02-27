import { Card, Container, Grid, GridColumn, Header, Image, List } from "semantic-ui-react";
import Modalnewslist from "../components/Modalnewslist"



  
const ArticleItem = props => {
  const { article } = props;
  
  return (
<div>

<List style={{padding: "10px"}}>
  
    <Grid>
   <GridColumn>
     <Card style={{width:"300px",height:"350px", boxShadow: "0px 0px 20px #10bbff"}}>
        
         <a href={article.url}>
         <Image src={article.urlToImage}  /></a>
          <Card.Header>
          <Header as="h3" style={{ margin: "8px 10px" }}>{article.title}</Header></Card.Header>
          
          <List.Description textAlign center style={{overflow: "hidden", margin: "1px 10px" }}>
            {article.description}
     </List.Description>

     <Card.Content extra>
          <List bulleted horizontal>
            <List.Item>
              <a href={article.url}>{article.source.name}</a>
            </List.Item>
            <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
          </List>
          </Card.Content>
         
          </Card>
       </GridColumn>
        </Grid>
</List>
</div>
    
  );
};

const ArticleList = props => {
  return (
    <Grid container columns={4} style={{padding: "20px", maxWidth: 600}}>
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </Grid>
  );
};

export default ArticleList;