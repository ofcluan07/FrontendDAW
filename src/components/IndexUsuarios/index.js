import React from 'react';
import { 
   Table,
    Button,
} from 'reactstrap';

const IndexUsuarios = props => (
  
  <Table dark>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Login</th>
            <th>Ação</th>
        </tr>
    </thead>
        <tbody>
        {
            props.users.length > 0 ? (
                props.users.map (user => (

                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <Button color="warning" onClick={() => props.editRow(user)}>Editar </Button>
                            <Button color="danger" onClick={() => props.deleteUser(user.id)}>Excluir </Button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.users[0]} Não possui usuários.</td>
                    </tr>
                )
        }          
    </tbody>
</Table>
);
    
export default IndexUsuarios;