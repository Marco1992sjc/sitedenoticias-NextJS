import React from 'react'
import { Button, Header, Icon, Modal, Container, Image } from 'semantic-ui-react'


function ModalArticle() {


const [open, setOpen] = React.useState(false)


return(
    <Modal
    closeIcon
    open={open}
    trigger={Button1}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
  >
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
    <Header as="h3" style={{overflow: "hidden", maxHeight: "9ch", margin: "0px 10px" }}>{item.title}</Header>
<Container>
<Image src={item.urlToImage}  />
</Container>

<Container>
{item.description}
</Container>

  <Container>
  {item.source.name}
  </Container>


    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
  );
};


export default ModalArticle