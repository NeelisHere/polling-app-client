import { Flex, Spinner } from "@chakra-ui/react"


const Loading = () => {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            w={'100%'}
            h={'100%'}
        >
            <Spinner 
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='cyan.500'
                size='xl'
            />
        </Flex>
    )
}

export default Loading