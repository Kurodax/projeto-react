import React from 'react';

import { Link } from 'react-router-dom';

// components
import Footer from '../components/Footer';
import MenuLayout from '../components/Menu';

// assets
import '../App.css';

function App() {
  const [textEmail, setTextEmail] = React.useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    setOneArray([...OneArray, { id: Math.floor(Math.random() * 999), email: textEmail, password: textPassword }])
  }
  const [textPassword, setTextPassword] = React.useState("")
  const [OneArray, setOneArray] = React.useState([])

  return (
    <div className="App" id="App">
      <MenuLayout />
      <head>
        <title>Login</title>
      </head>
      <h1>Login</h1>
      <h4>Login para utilizar o sistema</h4>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label for="name_login">Seu email</label>
        <input id="name_login" name="name_login" required="required" type="email" placeholder="ex. contato@example.com.br" onChange={(event) => {
          setTextEmail(event.target.value)
        }} />
        <div>
          <label for="email_login">Seu senha</label>
          <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" onChange={(event) => {
            setTextPassword(event.target.value)
          }} />
        </div>
        <input type="checkbox" name="keepLogin" id="keepLogin" value="" />
        <label for="keepLogin">Manter-me logado</label>
        <input type="submit" value="Logar" />
        <input type="reset" value="Limpar" />
      </form>
      <div class="link">
        Ainda não tem conta?
        <Link to="/RegisterUser"><button>Cadastro Usuário </button></Link>
      </div>

      <Footer />
    </div>
  );
};

export default App;