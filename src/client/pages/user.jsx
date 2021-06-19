import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {nanoid} from 'nanoid';
import { getUsers } from '../APIs/userAPIs';


class User extends Component {

    state = {
        users: [],
        isLoading: true
    }

    componentDidMount () {
        getUsers().then(data => this.setState({users:data, isLoading:false}))
    }

    rowEvents = {
        onClick: (e, row, rowIndex) => {
            this.props.history.push(`/userdetails/${row.username}`)
          },

    }

    render() {
        const {users, isLoading} = this.state
        const options = {
            // pageStartIndex: 0,
            sizePerPage: 3,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
          };
          const columns = [
            {
              dataField: 'username',
              text: 'User Name',
            },
            {
              dataField: 'age',
              text: 'User Age'
            }
          ];
        return (
            <div className="mycontainer"> 
                <h2 style={{textAlign: 'center'}}>All Users</h2>
                <h5 style={{textAlign: 'center'}}>username and userage</h5>
                {isLoading ? (<h3>is loading....</h3> ) : (
                    <BootstrapTable
                        keyField="username"
                        data={ users }
                        columns={ columns }
                        pagination={ paginationFactory(options) }
                        rowEvents={ this.rowEvents } 
                    />
                )}

                {/* {isLoading? (<h3>is loading....</h3> ) : (
                    <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">User Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={nanoid()}>
                                    <td><Link to={`/userdetails/${user.username}`} style={{textDecoration: 'none', color: "black"}}>{user.username}</Link></td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
    
                    </tbody>
                </table>
                )} */}

            </div>
        )
    }
}

export default withRouter(User)
