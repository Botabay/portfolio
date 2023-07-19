import s from './AboutRemote.module.css'
import containerS from '../../../common/ContainerStyles.module.css'

export const AboutRemote = (): JSX.Element => {
    return (
        <div className={`${s.aboutRemote} ${containerS.container}`}>
            <h2 className={s.titleBlock}><span>About a remote form of a job</span></h2>
            <a href="#">to offer a job</a>
        </div>
    )
}