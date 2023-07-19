import s from './Contacts.module.css'
import containerS from '../../../common/ContainerStyles.module.css'

export const Contacts=()=>{
    return (
        <div className={`${s.contacts} ${containerS.container}`}>            
            <h2><span>Contacts</span></h2>
            <form action="">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <a href="#">submit</a>
        </div>
    )
}