import { useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import switchOn from './assets/images/switch-on.svg'
import switchOff from './assets/images/switch-off.svg'
import switchImg from './assets/images/switch@2x.png'

const Switch = () => {
    const [isToggled, setIsToggled] = useState(false)
    const [isToggled2, setIsToggled2] = useState(false)

    return (
        <>
            <h1>Switch</h1>
            <Image
                onClick={() => {
                    setIsToggled(!isToggled)
                }}
                src={isToggled ? switchOn : switchOff}
                alt="switch"
                w={300}
            />
            <Box>{isToggled ? '켜짐' : '꺼짐'}'</Box>

            <Box
                onClick={() => {
                    setIsToggled2(!isToggled2)
                }}
                w={370}
                h={200}
                bg={`url(${switchImg}) no-repeat 0 ${isToggled2 ? 0 : '-290px'}`}
            />
        </>
    )
}

export default Switch
