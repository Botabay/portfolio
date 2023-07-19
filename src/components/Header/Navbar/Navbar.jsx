import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className=''>
                <li>Main page</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}