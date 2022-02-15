import React from 'react'
import {Card,CardTitle,CardText, Button, Container} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'; 

function Home() {
  const notify = () => toast("Wow so easy!");   
  return (
    <div className="text-center">
      <ToastContainer />
        <Card color="info">
        <CardTitle tag="h5">
            Special Title Treatment
        </CardTitle>
        <CardText>
            With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Container>
            <Button color="primary" onClick={notify}>Start</Button>
            
        </Container>
        </Card>
        
    </div>
  )
}

export default Home