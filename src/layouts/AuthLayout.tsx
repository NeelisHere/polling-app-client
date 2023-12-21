import { Flex, Box } from "@chakra-ui/react"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from 'react';
import toast from "react-hot-toast";
import { loginAPI, registerAPI } from "../services/api";
import { AxiosError } from "axios";
import { useCurrentUser } from "../providers/UserProvider";
import Loading from "../components/Loading";

const AuthLayout = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const contextValue = useCurrentUser();
    if (!contextValue) {
        return <Loading />
    }
    const { setCurrentUser } = contextValue;
    
    const onSubmit = async (data: FormDataType) => {
        try {
            setLoading(true)
            if (data.email) {
                const { data: payload } = await registerAPI(data)
                toast.success(`Registration successful. Hi, ${payload.user.username}.`)
                setCurrentUser(payload.user)
            } else {
                const { data: payload } = await loginAPI(data)
                toast.success(`Login successful. Welcome back ${payload.user.username}.`)
                setCurrentUser(payload.user)
            }
            navigate('/')
        } catch (error) {
            const err = error as AxiosError<FormErrorResponseType>
            console.log(err.response?.data)
            toast.error(err.response?.data?.message || 'Authentication failed!');
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