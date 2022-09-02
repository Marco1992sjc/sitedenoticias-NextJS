import SearchBar from "./components/searchBar";
import SearchResults from "./components/SearchResults";
import api from "./api/api";
import Topnews from "./components/Topnews";



function index() {
  const { articles, loading } = api();

  return (
    <>
      <SearchBar />
     <Topnews />
    </>
  );
}

export default index;
