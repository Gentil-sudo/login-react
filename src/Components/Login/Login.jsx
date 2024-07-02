import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './Login.css'

const Login = () => {

    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Envio')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder='E-mail'
                        onChange={(e) => SetUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha' onChange={(e) => SetPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="singup-link">
                    <a href="">Registrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login
