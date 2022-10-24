import { useState } from 'react'
import { useNavigate  } from 'react-router'
    


const LoginScreen = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const response = await fetch('http://localhost:9090/login', {
        // const response = await fetch('https://gin-production-6435.up.railway.app/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                'Username' : username,
                'Password' : password,
            
            })
        })
        const data = await response.json()
        props.setUsernameEmit(data.Username)



        navigate('/')
    }




  return (
    <>
        <h1>Sign Up</h1>
        


        <form onSubmit={submitHandler}>
            <div className="mb-3" controlId="Username">
                <label>Username</label>

                <input type="Username" placeholder="Enter your Username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>


            <div className="mb-3" controlId="Password">
                <label>Password</label>
                <input type="password" placeholder="Password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>


            <button variant="primary" type="submit">
                Submit
            </button>
        </form>
    </>
  )
}

export default LoginScreen