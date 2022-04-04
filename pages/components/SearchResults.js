import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState
} from "react";
import { Card, Header, Image, List, Modal } from "semantic-ui-react";
import ArtcilesModal from '../components/Modal'

export default function SearchResults ({ articles }) {
  



  if (!articles || !articles.length) return null;
  const resultList = articles.map((item, idx) => {
    
    const delay = `${idx + 2}00ms`;

    
    
      console.log("modal");
    const modalRef = useRef(false);
    const handleOpenModal = () => {
      modalRef.current.openModal();
    };
    return (
      <ul key={item.source.id} style={{ "--delay": delay }}>
        <li className="column">
          <ArtcilesModal ref={modalRef} />

          <Card 
          classname="card" 
          color="green" 
          onClick={handleOpenModal}>
            <Image src={item.urlToImage} />
            <Card.Header>
              <Header
                as="h3"
                style={{
                  overflow: "hidden",
                  maxHeight: "9ch",
                  margin: "0px 10px",
                }}
              >
                {item.title}
              </Header>
            </Card.Header>

            <List.Description
              textAlign
              center
              style={{ overflow: "hidden", margin: "1px 10px" }}
            >
              {item.description}
            </List.Description>

            <Card.Content extra>
              <List horizontal>
                <List.Item>
                  <a href={item.url}>{item.source.name}</a>
                </List.Item>
                <List.Item>{item.publishedAt.split("T")[0]}</List.Item>
              </List>
            </Card.Content>
          </Card>
        </li>
      </ul>
    );
  });

  return <div className="search_results">{resultList}</div>;
}