import React from 'react';
import { Link } from 'react-router-dom';

// components
import Footer from '../components/Footer';
import MenuLayout from '../components/Menu';


function RegisterUser() {
    const [textName, setTextName] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setTwoArray([...twoArray, { id: Math.floor(Math.random() * 999), name: textName, email: textEmail, password: textPasswordR }])
    }
    const [textEmail, setTextEmail] = React.useState("")
    const [textPasswordR, setTextPasswordR] = React.useState("")
    const [twoArray, setTwoArray] = React.useState([])

    return (
        <div className="RegisterUser" id="RegisterUser">
            <MenuLayout />
            <head>
                <title>Cadastro</title>
            </head>
            <h1>Cadastro Novo Usuário</h1>
            <h4>Cadastrar novos usuários. Caso já possua usuário, seguir para tela de login.</h4>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label for="name_registerUser">Seu nome</label>
                    <input id="name_registerUser" name="name_registerUser" required="required" type="text" placeholder="example" onChange={(event) => {
                        setTextName(event.target.value)
                        console.log(textName)
                    }} />
                </div>
                <div>
                    <label for="email_registerUser">Seu e-mail</label>
                    <input id="email_registerUser" name="email_registerUser" required="required" type="email" placeholder="contato@example.com.br" onChange={(event) => {
                        setTextEmail(event.target.value)
                        console.log(textEmail)
                    }} />
                </div>
                <div>
                    <label for="password_registerUser">Sua senha</label>
                    <input id="password_registerUser" name="password_registerUser" required="required" type="password" placeholder="ex. 1234" onChange={(event) => {
                        setTextPasswordR(event.target.value)
                        console.log(textPasswordR)
                    }} />
                </div>
                <input type="submit" value="Cadastrar" />
                <input type="reset" value="Limpar" />
            </form>
            <div class="link">
                Já tem conta?
                <Link to="/"><button> Ir para Login </button></Link>
            </div>
            {
                twoArray.map((items, index) => {
                    return (
                        <li key={index}>
                            {items.id}-{items.name}-{items.email}-{items.password}
                        </li>
                    )
                })
            }
            <Footer />
        </div>
    );
};
export default RegisterUser;