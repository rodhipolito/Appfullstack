import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

function Header() {
    return (
        <HeaderContainer>
            <StyledLink to="/">
                <Logo/>
            </StyledLink>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header