import { createContext, useState } from "react"

export const LoginContexts = createContext();
export const LoginContextsProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    //const [username, setUsername] = useState("ÖmerK")
return(
    <LoginContexts.Provider
    value={{
        isLogin, setIsLogin
        }}>
        {props.children}
    </LoginContexts.Provider>
)
}
