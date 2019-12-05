import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import UserTable from '../components/IndexUsuarios';
import AddUserForm from '../components/AddUsuarios';
import EditUserForm from '../components/EditarUsuarios';

import { 
    Row,
    Col,
    Container
 } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUser: { id: null, name: '', username: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshUserTable();
    }

    refreshUserTable() {
        this.usersData = api.get('api')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    addUser = user => {

        api.post('api', qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
    };

    deleteUser = id => {

        api.delete(`api/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        
        api.put(`api/${id}`, qs.stringify(user))
            .then(res => {

                this.refreshUserTable();
            });
        
        this.setState({ 
            currentUser: { id: null, name: '', username: '' }
        });

        this.setEditing(false);
    };

    editRow = user => {

        this.setState({ 
            currentUser: { id: user.id, name: user.name, username: user.username }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { users } = this.state;

        return (
            <Container>
                    
                    <Row>
                    {
                        this.state.editing ? (
                            <Col>
                                <h2>Alterar Usuário</h2>
                                <EditUserForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentUser={this.state.currentUser}
                                    updateUser={this.updateUser} 
                                />
                            </Col>
                        ) : (
                            <Col>
                                <h2>Adicionar Usuários</h2>
                                <AddUserForm addUser={this.addUser} />
                            </Col>
                        )
                    }
                    
                    <Col>
                        <h2>Usuários</h2>
                        <UserTable users={users} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </Col>
                    </Row>
            </Container>
        );
    };
};

export default Home;