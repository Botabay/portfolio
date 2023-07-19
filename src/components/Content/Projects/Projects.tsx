import { ProjectItem } from './ProjectItem/ProjectItem'
import s from './Projects.module.css'
import containerS from '../../../common/ContainerStyles.module.css'

export const Projects = (): JSX.Element => {
    return (
        <div className={`${s.projects} ${containerS.container}`}>
            <h2><span>projects</span></h2>
            <div className={s.itemsBlock}>
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}