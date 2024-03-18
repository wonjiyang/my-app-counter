import styled from 'styled-components'
import Nav from './Nav'

// 함수 선언식
function Header({ nav, logo }) {
    return (
        <Hd>
            <h1>{logo}</h1>
            <Nav nav={nav} />
        </Hd>
    )
}
const Hd = styled.div`
    height: 100px;
    background-color: yellowgreen;
`

export default Header
