import s from './SkillItem.module.css'

export const SkillItem = (): JSX.Element => {
    return (
        <div className={s.item}>
            <div className={s.imgContainer}>img</div>
            <div>React</div>
            <div className={s.description}>
                very detailed description...
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illo sint repellat quasi, magnam mollitia dic
            </div>
        </div>
    )
}