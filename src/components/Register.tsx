import { Button, Center, Input, Text, VStack } from '@chakra-ui/react'
import { FaGoogle } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { handleSubmit, register } = useForm<RegisterFormDataType>()
    const [loading, onSubmit, handleGoogle] = useOutletContext<AuthOutletPropsType>()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack w={'100%'} gap={3}>
                <Center>
                    <Text fontSize={'2xl'} fontWeight={'bold'}> 
                        Register
                    </Text>
                </Center>
                <Input 
                    type='text'
                    id='username'
                    placeholder='Enter username' 
                    { ...register('username') }
                />
                <Input 
                    type='email'
                    id='email'
                    placeholder='Enter email' 
                    { ...register('email') }
                />
                <Input 
                    type='password'
                    id='password'
                    placeholder='Enter password'
                    { ...register('password') }
                />
                <Text my={2} fontSize={'small'}> 
                    Already have an account? 
                    <Link 
                        style={{ marginLeft: '4px' }} 
                        to={'/auth/login'}
                    >
                        Login
                    </Link>
                </Text>
                <Button
                    
                    w={'100%'} 
                    onClick={handleGoogle} 
                    leftIcon={<FaGoogle/>}
                    isLoading={loading}
                >
                    Register with Google
                </Button>
                <Button
                    type='submit'
                    w={'100%'}
                    colorScheme='linkedin'
                    isLoading={loading}
                >
                    Register
                </Button>
            </VStack>
        </form>
    )
}

export default Register