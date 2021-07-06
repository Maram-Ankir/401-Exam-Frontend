import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'

export class CocktailCards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {this.props.object.strDrinkThumb}/>
                    <Card.Body>
                        <Card.Title>{this.props.object.strDrink}</Card.Title>
    
                        <Button onClick={()=>this.props.addToFav(this.props.object)} variant="primary">Add To Fav</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CocktailCards
