import { forwardRef, useImperativeHandle, useState } from "react";
import { Button, Header, Image, List, Modal } from "semantic-ui-react";
import SearchResults from "../components/SearchResults";


const ArticlesModal  = (props, ref)  => {

  



    const [modalState, setModalState] = useState(false);
    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => setModalState(true)
    }));

    console.log('child rendered')

    if (!modalState) return null;

    return (
      <div >
     { articles.map((item) => (
      <Modal  article={articles}

        className="modal"
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
            image />

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
 ))}
</div>
   
    );
     };


export default forwardRef (ArticlesModal) 
     