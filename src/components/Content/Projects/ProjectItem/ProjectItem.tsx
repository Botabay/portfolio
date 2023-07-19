import s from './ProjectItem.module.css'

export const ProjectItem = (): JSX.Element => {
    return (
        <div className={s.item}>
            <div className={s.imgContainer}>
                <a href='#'>view</a>
            </div>
            <div
                className={s.aboutProjectContainer}
            >
                <h3><span>project title</span></h3>
                <div className={s.description}>
                    very detailed description...
                </div>
            </div>
        </div>
    )
}