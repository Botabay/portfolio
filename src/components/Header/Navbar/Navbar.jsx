import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <ul className={s.navbar}>
            <li>Main page</li>
            <li>Skills</li>
            <li>Works</li>
            <li>Contacts</li>
        </ul>
    )
}