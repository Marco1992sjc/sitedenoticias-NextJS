import { useState, useEffect } from "react";

const api = () => {
  const [articles, setArticles] = useState({});
  const [filteredData, setFilteredData] = useState(articles);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=br&language=pt&sortBy=publishedAt&apiKey=1e1969a2d0c845f8a23799b7c654bd12`;
  // const url = `https://newsapi.org/v2/everything?q=&language=pt&sortBy=popularity&pageSize=40&apiKey=${API_KEY}`;
  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then(async (response) => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
        .then(({ articles }) => setArticles(articles))
        .catch((error) => {
          error.message;
          console.log(error.message);
          alert(error.message);
        })
        .finally(() => {
          setLoading(false);
        });

      console.log("handleInputChange");
      console.log("Articles", articles);
    };
    fetchData();
  }, []);

  return {
    articles,
    loading,
  };
};

export default api;

//1e1969a2d0c845f8a23799b7c654bd12
//27021da241244ac0a7450c9919578a04
//e9e06c01fcbd4c5781f773037c1a0506 error
