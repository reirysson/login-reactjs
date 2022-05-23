import * as C from './styles'
import Input from '../../components/input'
import Button from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { signup } = useAuth()

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
          setError("Falta preencher um campo")
          return
        } else if (email !== emailConf) {
          setError("Os e-mails não são iguais")
          return
        }
    
        const res = signup(email, senha)
    
        if (res) {
          setError(res)
          return
        }
    
        alert("Usuário cadatrado com sucesso!")
        navigate("/")
      }
        

    return(
        <C.Container>
            <C.Label>Entre na sua conta</C.Label>
            <C.Content>
                <Input>
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange{(e) => [setEmail(e.target.value), setError("")]}
                </Input>
                <Input>
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                </Input>
                <Input>
                    type="password"
                    placeholder="Digite a sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                </Input>
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Registrar" onClick={handleSignup}></Button>
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entrar</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    )
}

export default Signup