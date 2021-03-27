import React from "react";
import { getArticles } from "./api/api";
import ArticleList from "./components/articlesList";
import SearchBar from "./components/searchBar";
import { Container, Header, Loader} from "semantic-ui-react";

class index extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: ""
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults
    } = this.state;
    return (
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          procurar por Artigos
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center" }}>
         
        </p>
        {loading && (
         <Loader active inline='centered' />
       
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Encontrado {totalResults} Artigos em "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default index;
