import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"


const AuthLayout = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Outlet />
        </Flex>
    )
}

export default AuthLayout