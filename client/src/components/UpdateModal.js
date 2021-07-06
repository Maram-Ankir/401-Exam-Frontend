import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'

export class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title >Update</Modal.Title>
                    </Modal.Header>

                    <form >
                        <label>Name</label>
                        <br></br>
                        <input type='text' value={this.props.strDrink} onChange={this.props.updateNameFun}/>
                           <br></br>
                           <br></br>
                           <br></br>

                        <label>Image</label>
                        <br></br>
                        <input type='text' value= {this.props.strDrinkThumb} onChange={this.props.updateImageFun}/>
                    </form>

                    <Modal.Footer>
                        <Button onSubmit={e=>this.props.updateCocktaile} variant="secondary">Save</Button>
                        
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default UpdateModal
