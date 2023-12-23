import { Step, StepIndicator, StepNumber, StepSeparator, StepStatus, Box, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const OptionItem = ({ option, setOptions }: optionItemPropsType) => {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <Step key={option.id}>
            <StepIndicator
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                cursor={'pointer'}
                onClick={() => {
                    setOptions((prev) => prev.filter(({ id }) => id !== option.id))
                }}
            >
                <StepStatus incomplete={hover? <RxCross2 /> : <StepNumber />} />
            </StepIndicator>
            <Box flexShrink='0'>
                <Text>{option.text}</Text>
            </Box>
            <StepSeparator />
        </Step>
    )
}

export default OptionItem