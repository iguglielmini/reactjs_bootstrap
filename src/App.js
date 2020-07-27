import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousels';
import CardsProducts from './components/CardsProducts';
import CardDgimon from './components/CardsDigimon';
import { Row, Container, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <br></br>
      <Container>
        <Row>
          <CardsProducts />
        </Row>
        <br></br>
        <Row>
          <CardDgimon />
        </Row>
      </Container>
    </>
  );
}

export default App;
