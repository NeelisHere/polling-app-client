import { Avatar, Box, Text } from "@chakra-ui/react"
import Loading from "../components/Loading"
import { useCurrentUser } from "../providers/UserProvider"
import { Outlet } from "react-router-dom"

const HomePage = () => {
    const contextValue = useCurrentUser()
    if (!contextValue) {
        return <Loading />
    }
    return (
        <Box
            border={'2px solid red'}
            h={'100vh'}
            w={'100%'}
        >
            <Box
                border={'2px solid red'}
                w={'200px'}
                m={'0 auto'}
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default HomePage