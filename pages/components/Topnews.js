import api from "../api/api";
import SearchResults from "./SearchResults";
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
function Topnews() {


    const { articles, loading } = api();

return(


  
   
    <div>

    {loading ?  <Segment>
      <Dimmer active inverted>
        <Loader inverted>Carregando</Loader>
      </Dimmer>

      
    </Segment> : 
      
<div className="container-topnews">
    <h1 className="topnews-title">Últimas Notícias</h1>
    <SearchResults articles={articles} /> </div>
}
    


    </div>





);

};


export default Topnews;