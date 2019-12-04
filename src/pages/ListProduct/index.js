import React, { Component } from 'react';
import { 
    Table, 
    Button,
} from 'reactstrap';


export default class ListProduct extends Component {

    delete = (id) => {
        this.props.deleteProduct(id);
    }

    onEdit = (product) => {
        //PubSub.publish('edit-product', product);
    }

    render() {
        const { products } = this.props;
        return (
            <Table className="table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Descrição</th>
                        <th>Qtde.</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Button color="info" size="sm" onClick={e => this.onEdit(product)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={e => this.delete(product.id)}>Deletar</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }   
}