import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        fetch("/api/Products")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                products: data
            })
        })
    }

    deleteProducts = (id) => {
        axios.delete('/api/Products/'+id)
         .then(response => { console.log(response.data)});
         this.setState({
             products : this.state.products.filter(p => p.id !== id)
         })
    }
    render(){
        // const {products } = this.state;
        return(
            <div className="grid">
               {
                   this.state.products.map(p =>{
                       return <div className="grid-item" key={p.id}>
                           <img className="grid-image" alt={`${p.product_name}`} src={`assets/img/${p.product_img}`}/>
                            <a className="delete" href="#" onClick={() => {this.deleteProducts(p.id)}}>x</a>

                           <h3>{p.product_name}</h3>
                            <p>{p.product_description}</p>
                            {/* <Link to={{pathname: `/product/${p.id}`, query:{id: p.id}}}>Details</Link> */}
                            <Link to={"/edit/" + p.id}>Edit</Link>
                       </div>
                   })
               } 
            </div>
        );
    }
}
export default Products;