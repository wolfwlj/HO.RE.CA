import { useState} from 'react'
import { useNavigate } from 'react-router'


const SignupScreen = () => {
    
    let navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const submitHandler = async (e) => {
        e.preventDefault()
        
        await fetch('http://localhost:9090/signup', {
        // await fetch('https://gin-production-6435.up.railway.app/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'Username' : username,
                'Password' : password,
            })
        })
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

            <div className="mb-3" controlId="RepeatPassword">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" 
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <button variant="primary" type="submit">
                Submit
            </button>
        </form>
    </>
    )
}

export default SignupScreen