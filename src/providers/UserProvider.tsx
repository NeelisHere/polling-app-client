import { createContext, useContext, useState } from "react";

const UserContext = createContext<UserContextProps|null>(null)

export const useCurrentUser = (): UserContextProps|null => useContext(UserContext)

const UserProvider = ({ children }: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<UserType|null>(null)
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            { children  }
        </UserContext.Provider>
    )
}

export default UserProvider