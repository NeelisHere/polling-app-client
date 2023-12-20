import { Button, Center, Input, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom';


const Login = () => {
    const { handleSubmit, register } = useForm<LoginFormDataType>()
    const [loading, onSubmit, handleGoogle] = useOutletContext<AuthOutletPropsType>()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack w={'100%'} gap={3}>
                <Center>
                    <Text fontSize={'2xl'} fontWeight={'bold'}> 
                        Login
                    </Text>
                </Center>
                <Input 
                    type='text'
                    id='username'
                    placeholder='Enter username' 
                    { ...register('username') }
                />
                <Input 
                    type='password'
                    id='password'
                    placeholder='Enter password'
                    { ...register('password') }
                />
                <Text my={2} fontSize={'small'}> 
                    Don't have an account? 
                    <Link 
                        style={{ marginLeft: '4px' }} 
                        to={'/auth/register'}
                    >
                        Register
                    </Link>
                </Text>
                <Button
                    w={'100%'} 
                    onClick={handleGoogle} 
                    leftIcon={<FaGoogle/>}
                    isLoading={loading}
                >
                    Login with Google
                </Button>
                <Button
                    type='submit'
                    w={'100%'}
                    colorScheme='linkedin'
                    isLoading={loading}
                >
                    Login
                </Button>
            </VStack>
        </form>
    )
}

export default Login