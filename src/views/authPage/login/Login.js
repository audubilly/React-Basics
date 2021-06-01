import Button from "../../../components/reusables/Button"
import Input from "../../../components/reusables/Input"
import {useEffect} from 'react'
import './Login.css'
    
import Logo from "../../../"



const Login =() => {

    let data = {
        username: '',
        password: ''

    }
    const getData = (key, value) =>{
        data[key] = value
    }

    const logData = () => {
        console.log(data)

    }  

    useEffect(() => {
        console.log("Register: i mounted")
        return () => console.log("Register: i unMounted")
    }, [])


    return (
        
        <div>
            <h5>Welcome</h5>
            <div className="loginContainer">
                <Input label = "username" getData={getData} datakey="username" icon="person"/>
                <Input label = "password" getData= {getData} datakey="password" icon="password"/>
            </div>    

            <div className = 'loginBtn'>
                <Button color='black' text="login" width="100%" outline={false} action={logData} key= ""/> 

            </div> 

        </div> 
     
    )
}

export default Login