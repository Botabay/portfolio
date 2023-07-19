import { Navbar } from "./Navbar/Navbar"
import s from './Header.module.css'

export const Header = (): JSX.Element => {
    return (
        <header className={s.header}>
            
            <Navbar />
        </header>
    )
}