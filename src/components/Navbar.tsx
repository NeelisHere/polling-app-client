import { Button, Center } from "@chakra-ui/react"
import { useCallback } from "react"
import { NavLink } from "react-router-dom"


const Navbar = () => {

    const activeStyle = useCallback(
        ({ isActive } : { isActive: boolean }) => isActive? { color: '#00A3C4' } : {}, [])

    return (
        <Center
            // border={'2px solid black'}
            height={'100px'}
            gap={6}
        >
            <NavLink style={activeStyle} to={'/create'}>Create</NavLink>
            <NavLink style={activeStyle} to={'/my-polls'}>Polls</NavLink>
            <NavLink style={activeStyle} to={'/profile'}>Profile</NavLink>
            <Button >Logout</Button>
        </Center>
    )
}

export default Navbar