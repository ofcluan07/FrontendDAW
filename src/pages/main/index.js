import React, {Component} from 'react';
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