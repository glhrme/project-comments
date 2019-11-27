import React, {Component} from 'react'

class User extends Component{
    render(){
        return(
            <p>Logado como: {this.props.email} <input type='button' value='Sair' onClick={this.props.logout}/></p>
        )
    }
}

export default User