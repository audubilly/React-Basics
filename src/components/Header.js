
import { useHistory, useLocation } from 'react-router'
import Button from './reusable/Button'


const styles = {
    justifyContent: 'space-between',
    display: 'flex',
}

const Header = () => {
    
    let location = useLocation()
    let history = useHistory()
    
    const goToRoute = () => {
        

        
        if(location.pathname === '/auth/login') {
            history.push('/auth/register')
        } else {
            history.push('/auth/login')
        }
    }

    return (
        <div style = {styles}>
            <div>Header</div>
            <Button color='black' text = {location.pathname === '/auth/login' ? 'register' : 'login'}                
                width = '40%' outline = {true} action = {goToRoute} />
        </div>
    )
}

export default Header
