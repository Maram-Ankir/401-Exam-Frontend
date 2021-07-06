import React, { Component } from 'react'
import axios from 'axios'
import CocktailCards from './CocktailCards'

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
             serverLink: process.env.REACT_APP_URL,
             showCocktail:false,
             cocktailArr:[]
           
        }
    }
    
    componentDidMount = async()=>{
      const newArr= await axios.get(`${this.state.serverLink}/cocktail`)
      console.log(newArr.data);
      this.setState({
        showCocktail:true,
        cocktailArr:newArr.data
      })
    }

    addToFav =async(cocktailData)=>{
        await axios.post(`${this.state.serverLink}/addtoToFav`,cocktailData)
    }
    render() {
   
        return (
            <div>
                    { this.state.showCocktail &&
         this.state.cocktailArr.map((object,idx)=>{
            return (
                <CocktailCards
                object={object}
                idx={idx}
                addToFav={this.addToFav}
                />
            )
            
        })
    }
            </div>
        )
    }
}

export default Main
