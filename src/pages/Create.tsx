import { Box, Flex, FormControl, IconButton, Input, Spacer, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { FiPlus } from "react-icons/fi";
import { PiPlusBold } from "react-icons/pi";
import Options from "../components/Options";
import { nanoid } from "nanoid";

const Create = () => {
    const [options, setOptions] = useState<optionsInputType[]>([])
    const [optionText, setOptionText] = useState<string>('')
    const [questionText, setQuestionText] = useState<string>('')
    const handleCreatePoll = () => {
        const poll: PollType = {
            id: nanoid(),
            question: questionText,
            options
        }
        console.log(poll)
    }

    const handleOptionEnter = () => {
        const newOption: optionsInputType = {
            id: nanoid(),
            text: optionText
        }
        setOptions((prev) => [...prev, newOption])
    }

    return (
        <Box
            border={'1px solid #dedede'}
            borderRadius={'5px'}
            m={'20px'}
            p={'20px'}
            gap={4}
        >
            <Flex px={'10px'} w={'100%'} mb={'10px'}>
                <Text fontSize={'2xl'} fontWeight={'semibold'}>Create a Poll</Text>
                <Spacer />
                <IconButton
                    isRound={true}
                    variant='solid'
                    colorScheme="linkedin"
                    aria-label='Create'
                    fontSize='20px'
                    icon={<PiPlusBold />}
                    onClick={handleCreatePoll}
                />
            </Flex>
            <br />
            <FormControl>
                <Textarea
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder='Ask a question...'
                    size='sm'
                    value={questionText}
                />
                <br /><br />
                <Options options={options} setOptions={setOptions} />
                <br />
                <Flex>
                    <Input 
                        type="text"
                        placeholder="Add options..."
                        value={optionText}
                        onChange={(e) => {
                            setOptionText(e.target.value)
                        }}
                    />
                    <IconButton
                        isRound={true}
                        variant='solid'
                        ml={'5px'}
                        aria-label='Add'
                        fontSize='20px'
                        icon={<FiPlus />}
                        onClick={handleOptionEnter}
                    />
                </Flex>
            </FormControl>
        </Box>
    )
}

export default Create