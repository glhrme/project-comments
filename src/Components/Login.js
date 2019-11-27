import React, { Component } from 'react'

class Login extends Component{

    state = {
        email: '',
        passwd: ''
    }

    login = () =>{
        this.props.login(this.state.email, this.state.passwd)
    }


    handleChange = field => async event => {
        await this.setState({
            [field]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChange('email')} placeholder='Email' />
                <input type='password' onChange={this.handleChange('passwd')} placeholder='Passwd' />
                <input type='button' onClick={this.login} value='Enviar'/>
            </div>
        )
    }
}

export default Login