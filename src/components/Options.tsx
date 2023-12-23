import { Stepper, Box, Text } from '@chakra-ui/react'
import OptionItem from './OptionItem';
import { nanoid } from 'nanoid';

const Options = ({ options, setOptions }: optionsPropsType) => {
    
    return (
        <Box w={'100%'} p={'15px'}>
            <Stepper index={-1} orientation='vertical' gap={4}>
                {
                    options.map((option) => (
                        <OptionItem key={nanoid()} option={option} setOptions={setOptions} />
                    ))
                }
                {
                    options.length === 0
                    &&
                    <Text 
                        w={'100%'} 
                        textAlign={'center'} 
                        fontSize={'3xl'} 
                        fontWeight={'bold'} 
                        color={'#dedede'}
                    >
                        No options chosen yet!
                    </Text>
                }
            </Stepper>
        </Box>
    );
};

export default Options;
