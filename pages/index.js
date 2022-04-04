import React, {useRef} from "react";
import SearchBar from "./components/searchBar";
import { Container, Header, Loader, Card, Image, Dimmer} from "semantic-ui-react";
import SearchResults from "./components/SearchResults";
import api from "./api/api";
function index(){


  const {
    articles,
    loading,
  } = api();



  return(

    <>
    <SearchBar />
    <div>
    

       {loading  && <h4>Carregando</h4>}
    {!loading && (<div>{articles > 0 && <SearchResults articles={articles} />}</div>)}
  
   
    
    </div>
    


    </>

    
     ) 

}

export default index;