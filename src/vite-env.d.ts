/// <reference types="vite/client" />

type LoginFormDataType = {
    username: string,
    password: string
}

type RegisterFormDataType = {
    username: string,
    email: string,
    password: string
}

type AuthOutletPropsType = [
    loading: boolean,
    onSubmit: (data: RegisterFormDataType | LoginFormDataType) => void,
    handleGoogle: () => void
]