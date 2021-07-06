import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'


export class FavCards extends Component {
    render() {
        return (
            <div>
               <Card key ={this.props.idx} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {this.props.object.strDrinkThumb}/>
                    <Card.Body>
                        <Card.Title>{this.props.object.strDrink}</Card.Title>
    
                       
                        <Button onClick={()=>this.props.deleteCocktail(this.props.idx)} variant="primary">Delete</Button>
                        <Button onClick={()=>this.props.updateCocktailModal(this.props.idx)} variant="primary">Update</Button>
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}

export default FavCards
