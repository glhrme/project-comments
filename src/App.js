import React from 'react'

import Comments from './Components/Comments'
import NewComment from './Components/NewComment'
import Login from './Components/Login'
import User from './Components/User'


class App extends React.Component {

  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    authError: '',
    isAuthError: false

  }

//Funções de login

  login = async (email, passwd) => {
    const { auth } = this.props
    //Limpando meu estado de login
    this.setState({
      authError: '',
      isAuthError: false
    })

    //Caso não consiga fazer login, irei setar estado com o códido do erro e avisar que há erro
    try{
      const user = await auth.signInWithEmailAndPassword(email, passwd)
    }catch(error){
      this.setState({
        authError: error.code,
        isAuthError: true
      })
    }
  }

  logout = async () => {
    const {auth} = this.props
    await auth.signOut()
  }

//------------------------
  sendComment = comment =>{
    const database = this.props.database
    //UM ID NOVO
    const id = database.ref().child('comments').push().key

    const comments = {};
    comments['comments/'+id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    }

    database.ref().update(comments);

    // this.setState({
    //   comments: [...this.state.comments, comment],
    // })
  }

  componentDidMount(){
    const {database, auth} = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    //Sempre que houver um mudança no estado, faça isso
    auth.onAuthStateChanged(user => {
      if(user){
        //Se user não está vazio, faça isso
        this.setState({
          isAuth: true,
          user: user
        })
      }else{
        this.setState({
          isAuth: false,
          user: {}
        })
      }
    })

  }
  
  render(){
    return (
      <div>


      {/* Caso não esteja logado */}
        { !this.state.isAuth && <Login login={this.login} /> }

      {/* NewComment */}
        
        { this.state.isAuth && <User email={this.state.user.email} logout={this.logout} /> }

        {this.state.isAuth && <NewComment sendComment={this.sendComment}/> }

      {/* Comments */}
        <Comments comments={this.state.comments}/>
      {/* Conditional Rendering */}
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    );
  }
}

export default App;
