import {createContext, useState , useContext} from 'react'

const ThemeContext = createContext()

// Theme provider component
export function ThemeProvider ({children}){
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    const value = {theme, toggleTheme,isDark: theme === "dark"}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// custom Hook to use theme

export function useTheme(){
    const context=useContext(ThemeContext)

}

function ThemeToggler() {
    return (
        <div>ThemeToggler</div>
    )
}

export default ThemeToggler