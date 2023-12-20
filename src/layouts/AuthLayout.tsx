import { Flex, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { useState } from 'react';
import toast from "react-hot-toast";

const AuthLayout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    
    const onSubmit = (data: RegisterFormDataType | LoginFormDataType) => {
        try {
            setLoading(true)
            console.log(data)
        } catch (error) {
            console.log(error)
            toast.error('Authentication failed!')
        } finally {
            setLoading(false)
        }
    }
    const handleGoogle = () => {
        console.log('123')
    }

    return (
        <Flex 
            // border={'2px solid red'}
            h={'100vh'}
            justifyContent={'center'} 
            alignItems={'center'}
        >
            <Box 
                border={'1px solid #dedede'}
                padding={'20px'}
                minW={'300px'}
                borderRadius={'5px'}
                m={'20px'}
            >
                <Outlet context={[loading, onSubmit, handleGoogle]}/>
            </Box>
        </Flex>
    )
}

export default AuthLayout