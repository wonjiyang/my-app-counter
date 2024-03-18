import switchOn from './assets/images/switch-on.svg'
import switchOff from './assets/images/switch-off.svg'
import switchImg from './assets/images/switch@2x.png'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const Switch2 = () => {
    const [isToggled, setIsToggled] = useState(false)
    const [isToggled2, setIsToggled2] = useState(false)

    return (
        <>
            <div>
                <img
                    src={isToggled ? switchOn : switchOff}
                    alt="switch"
                    onClick={() => {
                        setIsToggled(!isToggled)
                    }}
                    style={{ width: 100, height: 100 }}
                />

                <div>{isToggled ? '켜짐' : '꺼짐'}</div>
            </div>

            <hr />

            <Box
                onClick={() => {
                    setIsToggled2(!isToggled2)
                }}
                w={300}
                h={200}
                bg={`url(${isToggled2 ? switchOn : switchOff}) no-repeat 0 0 / contain`}
            />

            <Box w={372} h={200} bg={`url(${switchImg}) no-repeat 0 ${isToggled2 ? 0 : '-287px'}`} />
        </>
    )
}

export default Switch2
