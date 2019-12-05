import React, { useState } from 'react';
import { 
    Row,
    Form,
    Col,
    Button
 } from 'reactstrap';

const AddUserForm = props => {

    const initialFormState = { name: '', username: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setUser({ ...user, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
    };

    return (
        <Row>
            <Col>
            <Form onSubmit={submitForm}>
                <Row>
                    <div className="input-field col s12">
                    <input type="text" 
                            id="name" 
                            name="name" 
                            value={user.name}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="name">Name</label>
                    </div>
                </Row>
                <Row>
                    <div className="input-field col s12">
                    <input 
                            type="text" 
                            name="username" 
                            value={user.username}
                            onChange={handleInputChange} 
                            required />
                    <label htmlFor="username">Username</label>
                    </div>
                </Row>
                
                <Row>
                    <div className="input-field col s12">
                        <Button color="sucess">Adicionar</Button>
                    </div>
                </Row>
            </Form>
            </Col>
        </Row>
    );
};

export default AddUserForm;
