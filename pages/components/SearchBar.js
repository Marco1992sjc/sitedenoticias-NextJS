import React from "react";
import { useState, useCallback } from "react";
import { Form } from "semantic-ui-react";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [articles, setArticles] = useState("");
  const [loading, setLoading] = useState(false);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleInputChange = (value) => {
    if (!value) {
      setArticles([]);
      return;
    }
    const url = `https://newsapi.org/v2/everything?q=${value}&language=pt&sortBy=popularity&pageSize=40&apiKey=1e1969a2d0c845f8a23799b7c654bd12`;
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
        alert(
          "Você fez muitas solicitações recentemente. As contas de desenvolvedor estão limitadas a 100 solicitações em um período de 24 horas (50 solicitações disponíveis a cada 12 horas). Atualize para um plano pago se precisar de mais solicitações."
        );
      })
      .finally(() => {
        setLoading(false);
      });

    console.log("handleInputChange");
    console.log("Articles", articles);
  };

  const optimizedFn = useCallback(debounce(handleInputChange), []);

  return (
    <>
      <div className="container">
        <div className="searchbar">
          <Form>
            <Form.Group>
              <Form.Input
                size="large"
                name="search"
                id="search"
                placeholder="Procurar por Notícias"
                onChange={(e) => optimizedFn(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <SearchResults articles={articles} />
    </>
  );
}
