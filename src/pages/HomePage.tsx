import { Box } from "@chakra-ui/react"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect } from "react"

const HomePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/create')
    }, [navigate])
    return (
        <Box
            // border={'2px solid red'}
            h={'100vh'}
            w={'100%'}
        >
            <Box
                // border={'2px solid red'}
                maxW={'700px'}
                m={'0 auto'}
            >
                <Navbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default HomePage