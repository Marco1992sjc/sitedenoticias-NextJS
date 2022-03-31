import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
} from "react";
import {
  Card,
  Header,
  Image,
  List,
  Modal
} from "semantic-ui-react";



export default function SearchResults({ articles }) {

  if (!articles || !articles.length) return null;

  const resultList = articles.map((item,idx) => {
    
    const delay = `${idx + 2}00ms`;
    const [open, setOpen] = React.useState(false);
    const ArticlesModal = forwardRef((props, ref) => {
    
      useImperativeHandle(ref, () => ({}));
       
      return (
        <Modal className="modal"
          closeIcon
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          
        >
          <Header icon="newspaper outline" content="Notícia" />

          <Modal.Content>
            <Image
              src={item.urlToImage}
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
                {item.title}
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
                <a target="blank" rel="noopener" href={item.url}>
                  {item.source.name}
                </a>
              </List.Item>
              <List.Item>{item.publishedAt.split("T")[0]}</List.Item>
            </List>
          </Modal.Content>
          <Modal.Actions></Modal.Actions>
        </Modal>
      );
    });

  

    return (
      <ul key={item.source.id} style={{ "--delay": delay }}>
        <li className="column">
         
            <ArticlesModal ref={childRef} />
         

          <Card classname="card" color="green" onClick={() => setOpen(true)}>
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
              <List  horizontal >
                <List.Item >
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
  const childRef = useRef();
  return <div className="search_results">{resultList}</div>;
}
