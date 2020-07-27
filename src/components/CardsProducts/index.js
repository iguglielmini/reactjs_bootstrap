import React, { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap';

class CardProducts extends Component {
    state = {
        cards: [
            {
                image: 'https://img.ibxk.com.br/2017/07/13/13155952652223.jpg?w=704',
                title: 'Card 1',
                text: 'Texto card 1',
            },
            {
                image: 'https://img.ibxk.com.br/2017/07/13/13155952652223.jpg?w=704',
                title: 'Card 2',
                text: 'Texto card 2',
            },
            {
                image: 'https://img.ibxk.com.br/2017/07/13/13155952652223.jpg?w=704',
                title: 'Card 3',
                text: 'Texto card 3',
            },
        ]
    };
    render() {
        return (
            <>

                
                    {this.state.cards.map(card =>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )}
             

            </>
        )
    }

}

export default CardProducts;