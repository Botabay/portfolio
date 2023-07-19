import s from './Introduction.module.css'
import containerS from '../../../common/ContainerStyles.module.css'

export const Introduction = (): JSX.Element => {
    return (
        <div className={`${s.introduction} ${containerS.container}`}>
            <div className={s.aboutMeItem}>
                Hi!<br />
                My name is Bo.<br />
                And I'm a front-end developer.<br />
            </div>
            <div className={s.secondItem}>
                Second item.
            </div>
        </div>
    )
}