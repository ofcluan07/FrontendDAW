import React, { Component } from 'react';
import { 
    Table, 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';
import api from '../../services/api';

export default class FormProduct extends Component {

    state = { 
        products: []
    };

    setValues = (e, field) => {
        const { products } = this.state;
        products[field] = e.target.value;
        this.setState({ products });
    }

    create = () => {
        this.setState({ products: { descricao: '', quantidade: 0 } })
        this.props.productCreate(this.state.products);
    }
    componentDidMount(){
        this.loadProducts();
    }
    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({products: response.data.docs});
    }
   /* componentWillMount() {
        PubSub.subscribe('edit-product', (topic, product) => {
            this.setState({ products: product });
        });
    }*/

    render() {
        console.log(this.state.products)
        return (
            <Form>
                <FormGroup>
                    <Label for="description">Descrição:</Label>
                    <Input id="description" type="text" value={this.state.products.descricao} placeholder="Descrição do Produto..."
                    onChange={e => this.setValues(e, 'description') } />
                </FormGroup>
                <FormGroup>
                    <div className="form-row">
                        <div className="col-md-6">
                            <Label for="quantity">Quantidade:</Label>
                            <Input id="quantity" type="text" value={this.state.products.quantidade} placeholder="Qtd. de produtos disponíveis" 
                            onChange={e => this.setValues(e, 'quantity') } />
                        </div>
                    </div>
                </FormGroup>
                <Button color="primary" block onClick={this.create}> Gravar </Button>
            </Form>
        );
    }
}
