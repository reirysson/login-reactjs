import * as C from './styles'

function Button({ Text, onClick, Type = "button" }) {
    return(
        <C.Button type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    )
}

export default Button