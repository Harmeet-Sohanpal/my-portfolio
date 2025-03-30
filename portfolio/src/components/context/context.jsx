import React from 'react'
import { createContext , useState } from 'react'

export const themeContext = createContext();


export const ThemeProvider = (props)=>{

    const [theme, setTheme]  = useState('dark');
    const toggleTheme = () =>{
        setTheme((prevTheme)=>(prevTheme==='dark'?'light':'dark'))
    }

    return(
        <themeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </themeContext.Provider>
    )

}