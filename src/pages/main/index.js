import React, {Component} from 'react';
import api from '../../services/api';
import FormProduct from '../FormProduct'
import ProductBox from '../ProductBox'
export default class Main extends Component {

    render(){
    return (
        <div className="products-list">
            <ProductBox/>
        </div>
    )
    }
}