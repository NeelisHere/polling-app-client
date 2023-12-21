import { Avatar, Box, Text } from "@chakra-ui/react"
import Loading from "../components/Loading"
import { useCurrentUser } from "../providers/UserProvider"

const Profile = () => {
    const contextValue = useCurrentUser()
    if (!contextValue) {
        return <Loading />
    } 
    const { currentUser } = contextValue
    return (
        <Box>
            <Text>{ currentUser?.username }</Text>
            <Text>{ currentUser?.email }</Text>
            <Avatar 
                name={currentUser?.username}
                src={currentUser?.picture}
                size={'2xl'}
            />
        </Box>
    )
}

export default Profile