import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center; // Isso ajudará no alinhamento vertical
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    height: 2em; // Ajusta a altura do logo para corresponder à altura do texto
    width: auto; // Mantém a proporção do logo
    object-fit: contain; // Garante que o logo não seja distorcido
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
            <p><strong>Rodrigo</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo