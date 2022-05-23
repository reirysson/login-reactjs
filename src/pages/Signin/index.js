import { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/button'
import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Signin() {
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [error, setError] = useState()

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Falta preencher um campo!")
            return
        }

        const res = signin(email, senha)

        if (res) {
            setError(res)
            return
        }

        navigate("/home")
    }

    return(
        <C.Container>
            <C.Label>Entre na sua conta</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite o seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite a sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <C.LabelSignup>
                    Não tem conta?
                    <C.Strong>
                        <Link to="/signup">&nbsp;Registrar conta</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    )
}

export default Signin