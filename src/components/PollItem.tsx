import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";

const PollItem = ({ poll }: PollPropsType) => {
    const [value, setValue] = useState('1')
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        { poll.question }
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction={'column'} p={'10px'} gap={4} my={'10px'}>
                            {
                                poll.options.map((option) => {
                                    return (
                                        <Radio
                                            key={nanoid()} 
                                            value={option.id}
                                        >
                                            { option.text }
                                        </Radio>
                                    )
                                })
                            }
                        </Stack>
                    </RadioGroup>
                </Box>
                <Flex>
                    <Button
                        leftIcon={<IoStatsChart />}
                        flexGrow={1}
                        mx={1}
                    >
                        View Stats
                    </Button>
                    <Button
                        leftIcon={<IoShareSocialSharp />}
                        flexGrow={1}
                        mx={1}
                    >
                        Share
                    </Button>
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default PollItem