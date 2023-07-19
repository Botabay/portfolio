import { SkillItem } from './SkillItem/SkillItem'
import s from './Skills.module.css'
import containerS from '../../../common/ContainerStyles.module.css'

export const Skills = () => {
    return (
        <div className={`${s.skills} ${containerS.container}`}>
            <h2><span>Skills</span></h2>
            <div className={s.itemsBlock}>
                <SkillItem />
                <SkillItem />
                <SkillItem />
            </div>
        </div>
    )
}