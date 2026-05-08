import { useAppStore } from "../store/appstore.js";

function Navbar(){

    const theme = useAppStore((state)=>state.theme)
    const user = useAppStore((state)=>state.user)
    const toggleTheme = useAppStore((state)=>state.toggleTheme)
    const login = useAppStore((state)=>state.login)
    const logout = useAppStore((state)=>state.logout)

    return (
        <nav>
            <span>Theme : {theme}</span>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {user ? (
                <span>
                    Hi , {user.name}
                </span>
            ) : (
                <span>
                    Guest
                </span>
            ) }
            <button onClick={user ? logout : login}>{user ? 'Logout' : 'Login'}</button>
        </nav>
    )
}

export default Navbar;