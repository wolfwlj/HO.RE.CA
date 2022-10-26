import { useState} from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'  

const SignupScreen = (props) => {
    const MySwal = withReactContent(Swal)
    
    let navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const submitHandler = async (e) => {
        e.preventDefault()
        
        if (username === '' || password === '' || confirmPassword === '') {
            MySwal.fire({
                title: 'One or more fields are empty',
                icon: 'error',
                timerProgressBar: true,
                timer: 2000,
                position: 'center',
                background: 'rgb(35, 34, 34)',
                showConfirmButton: false,
                width: 400,
                color : 'white',
                allowOutsideClick: true,
            })
        } else if(password !== confirmPassword) {
            MySwal.fire({
                title: 'Passwords do not match',
                icon: 'error',
                timerProgressBar: true,
                timer: 2000,
                position: 'center',
                background: 'rgb(35, 34, 34)',
                showConfirmButton: false,
                width: 400,
                color : 'white',
                allowOutsideClick: true,
            })
        }
        
        else {



            const response = await fetch('http://localhost:9090/signup', {
            // await fetch('https://gin-production-6435.up.railway.app/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'Username' : username,
                    'Password' : password,
                })
            })
            const data = await response.json()
            console.log(data.Username)
            if (data.user) {
                MySwal.fire({
                    title: 'success!',
                    text: 'Account created successfully! Please login.',
                    icon: 'success',

                    timerProgressBar: true,
                    timer: 2000,
                    position: 'center',
                    background: 'rgb(35, 34, 34)',
                    showConfirmButton: false,
                    width: 400,
                    color : 'white',
                    allowOutsideClick: true,
                })     
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                navigate('/login')
            }   else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })        
            }
            


        
        
        }

    }



  return (
    <>
        <h1 className='text-center'>Sign Up</h1>
        


        <form className="authForm"  onSubmit={submitHandler}>
            <div className="inputDiv" controlId="Username">
                <label>Username</label>

                <input type="Username" placeholder="Enter your Username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>


            <div className="inputDiv" controlId="Password">
                <label>Password</label>
                <input type="password" placeholder="Password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="inputDiv" controlId="RepeatPassword">
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