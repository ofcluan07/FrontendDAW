import React, { useState, useEffect } from 'react';
import { 
    Row,
    Form,
    Col,
 } from 'reactstrap';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <Row>
            <Col>
            <Form onSubmit={submitForm}>
                <Row>
                    <div className="input-field col s12">

                        <input type="text" 
                            id={user.id} 
                            name="name"
                            value={user.name}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="name"></label>
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
                        <label htmlFor="username"></label>
                    </div>
                </Row>
                
                <Row>
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Alterar</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancelar</button>
                    </div>
                </Row>
            </Form>
            </Col>
        </Row>
    );
};

export default EditUserForm;
