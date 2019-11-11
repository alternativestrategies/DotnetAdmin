import React, {Component} from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';

class AddProduct extends Component {
    state = {
        product_name: "",
        product_description: "",
        category: "",
        product_img: ""
    }


    //on changes for name, description, category, img
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //onsubmit
    onSubmit = (e) => {
        e.preventDefault();

        const {product_name, product_description, category, product_img} = this.state;
        axios.post('/api/Products/', {product_name, product_description, category, product_img} )
        
        window.location = '/';
    }

    render(){
        return(
            <Container>
                <h1>Add Product</h1>
                <form onSubmit={this.onSubmit}>
                <label>Product Name</label>
                <input  
                    type="text"
                    required
                    name="product_name"
                    className="form-control"
                    value={this.state.product_name}
                    onChange={this.onChange}
                />
                <label>Product Description</label>
                <input  
                    type="text"
                    required
                    name="product_description"
                    className="form-control"
                    value={this.state.product_description}
                    onChange={this.onChange}
                />
                <label>Category</label>
                <input  
                    type="text"
                    required
                    name="category"
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChange}
                />
                <label>Image</label>
                <input  
                    type="text"
                    required
                    name="product_img"
                    className="form-control"
                    value={this.state.product_img}
                    onChange={this.onChange}
                />

                
                <div className="form-group">
          <input type="submit" value="Add Product" className="btn btn-primary" />
        </div>
                </form>
                 
            </Container>
        )
    }
}

export default AddProduct;