import s from './Footer.module.css'
export const Footer = () => {
    const arr=[0,1,2,3,4,5,6,7];
    return (
        <footer className={s.footer}>
            <div className={s.content}>
                <h2><span>Mister Bo</span></h2>
                <div className={s.arrContainer}>
                {arr.map(el=><span className={s.arr}></span>)}
                </div>
                <span className={s.allRightsReservedSpan}>© 2023 All rights reserved</span>
            </div>
        </footer>
    )
}