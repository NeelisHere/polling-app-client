/// <reference types="vite/client" />

type FormDataType = {
    username: string,
    email?: string,
    password: string
}

type AuthOutletPropsType = [
    loading: boolean,
    onSubmit: (data: RegisterFormDataType | LoginFormDataType) => void,
    handleGoogle: () => void
]

type FormErrorResponseType = { 
    success: boolean, 
    message: string 
}

type UserType = {
    _id: string,
    username: string,
    email: string,
    picture: string
}

type UserProviderProps = {
    children: ReactNode
}
  
type UserContextProps = {
    currentUser: UserType | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<UserType | null>>
}