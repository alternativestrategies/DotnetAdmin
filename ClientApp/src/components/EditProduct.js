import React, {Component} from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';

class EditProduct extends Component {
    state = {
        id: 0,
        product_name: "",
        product_description: "",
        category: "",
        product_img: ""
    }

    //component did mount to get the product
    componentDidMount(){
        axios.get('/api/Products/'+this.props.match.params.productId)
        .then(response => {
            this.setState({
                id: response.data.id,
                product_name: response.data.product_name,
                product_description: response.data.product_description,
                category: response.data.category,
                product_img: response.data.product_img
            })
            console.log(response.data.id)
        })
        .catch(err => {
            console.log(err);
        })
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
     
        const {id, product_name, product_description, category, product_img} = this.state;
        
        axios.put('/api/Products/'+this.props.match.params.productId, {id, product_name, product_description, category, product_img} )

        window.location = '/';
    }

    render(){
        return(
            <Container>
                <h1>Edit Page</h1>
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
          <input type="submit" value="Edit Product" className="btn btn-primary" />
        </div>
                </form>
                 
            </Container>
        )
    }
}

export default EditProduct;