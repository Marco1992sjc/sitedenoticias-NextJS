import React, { useState } from "react";
import { Card, Header, Image, List, Modal } from "semantic-ui-react";

export default function SearchResults({ articles }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const onClose = () => setModalIsOpen(undefined);

  if (!articles || !articles.length) return null;
  const resultList = articles.map((item, idx) => {
    const delay = `${idx + 1}00ms`;

    return (
      <>
        <li key={item.source.id} style={{ "--delay": delay }}>
          <Card
            className="card"
            color="green"
            onClick={() => {
              setModalData(item);
              setModalIsOpen(true);
            }}
          >
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
              center="true"
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

        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="modal"
            closeIcon
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            onOpen={() => setModalIsOpen(true)}
            onEsc={onClose}
          >
            <Header icon="newspaper outline" content="Notícia" />

            <Modal.Content>
              <Image
                src={modalData.urlToImage}
                fluid
                rounded
                centered
                size="xlarge"
                image
              />

              <List>
                <Header
                  textAlign="center"
                  as="h3"
                  style={{ maxHeight: "9ch", margin: "0px 10px" }}
                >
                  {modalData.title}
                </Header>

                <List.Description
                  textAlign="center"
                  style={{ overflow: "visible", margin: "1px 10px" }}
                >
                  {item.content}
                </List.Description>
              </List>

              <List horizontal>
                <List.Item>
                  <a target="blank" rel="noopener" href={modalData.url}>
                    {modalData.source.name}
                  </a>
                </List.Item>
                <List.Item>{modalData.publishedAt.split("T")[0]}</List.Item>
              </List>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
          </Modal>
        )}
      </>
    );
  });

  return (
    <div className="search_results">
      <ul>{resultList}</ul>
    </div>
  );
}
