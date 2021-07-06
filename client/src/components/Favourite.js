import React, { Component } from 'react'
import FavCards from './FavCards'
import axios from 'axios'
import UpdateModal from './UpdateModal'


export class Favourite extends Component {
   constructor(props) {
        super(props)

        this.state = {
             serverLink: process.env.REACT_APP_URL,
             showCocktail:false,
             cocktailArr:[],
             showModal:false,
             index:0,
             strDrink:'',
             strDrinkThumb:'',
           
        }
    }
    
    componentDidMount = async()=>{
      const newArr= await axios.get(`${this.state.serverLink}/getFavCocktail`)
      console.log(newArr.data);
      this.setState({
        showCocktail:true,
        cocktailArr:newArr.data
      })
    }

    deleteCocktail = async(index)=>{
        const id =this.state.cocktailArr[index]._id;
        const newArr = await axios.delete(`${this.state.serverLink}/deleteCocktail/${id}`)
        this.setState({
           
            cocktailArr:newArr.data
          })
    }
     

    updateCocktailModal=(idx)=>{
        const chosenCocktail=this.state.cocktailArr[idx];
        this.setState({
            showModal:true,

            strDrink:chosenCocktail.strDrink,
            strDrinkThumb:chosenCocktail.strDrinkThumb,
            index:idx,
          })
    }

    updateNameFun=(e=>this.setState({
        strDrink:e.target.valuee}))

    updateImageFun=(e=>this.setState({
        strDrinkThumb:e.target.valuee}))

        updateCocktaile= async(e)=>{
            e.preventDefault();
            const id =this.state.cocktailArr[this.state.index]._id;
            const cocktailData={
                strDrink:this.state.strDrink,
                strDrinkThumb:this.state.strDrinkThumb
            }
            let updateCocktaile = await axios.put(`${this.state.serverLink}/updateCoctail/${id}`)
            this.setState({
                cocktailArr:updateCocktaile.data
            })
        }

    render() {
        return (
            <div>
                {
                    this.state.showModal &&
                    <UpdateModal
                    strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    updateNameFun={this.state.updateNameFun}
                    updateImageFun={this.state.updateImageFun}
                    updateCocktaile={this.state.updateCocktaile}



                    />
                }
                 { this.state.showCocktail &&
                    this.state.cocktailArr.map((object,idx)=>{
            return (
                <FavCards
                object={object}
                idx={idx}
                deleteCocktail={this.deleteCocktail}
                updateCocktailModal={this.updateCocktailModal}
                />
            )
            
        })
    }
            </div>
        )
    }
}

export default Favourite
