import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
// import styled from 'styled-components'

const Sort2 = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <div id="gnb">
            <button
                onClick={() => {
                    setIsToggled(!isToggled)
                }}
            >
                <FontAwesomeIcon icon={isToggled ? faXmark : faBars} />
                <span className="blind">전체메뉴 보기</span>
            </button>
            <Box as="ul" display={isToggled ? 'block' : 'none'}>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Music</li>
                <li>고객지원</li>
            </Box>
        </div>
    )
}

// const MenuList = styled.div`
//     ul {
//         /* display: ${(props) => (props.isToggled ? 'block' : 'none')}; */
//         display: ${({ isToggled }) => (isToggled ? 'block' : 'none')};
//         max-width: 100px;
//         padding: 20px;
//         border-radius: 4px;
//         background-color: #ffbf00;
//         border: 1px solid #ffbf00;
//     }
// `

export default Sort2
