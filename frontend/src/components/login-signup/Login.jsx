import { useState } from 'react'
import { useNavigate  } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'    


const LoginScreen = (props) => {
const MySwal = withReactContent(Swal)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        if (username === '' || password === '' ) {
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
            return
        }
        const response = await fetch('http://localhost:9090/login', {
        // const response = await fetch('https://gin-production-6435.up.railway.app/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                'Username' : username,
                'Password' : password,
            
            })
        }).catch((err) => {
            console.log(err)
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })        
            })
        const data = await response.json()



        if (data.Username) {
            props.setUsernameEmit(data.Username)

            navigate('/')
        } else {
            MySwal.fire({
                title: 'Wrong Username or Password',
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
    }




  return (
    <>
        <h1 className='text-center'>Login</h1>
        


        <form className="authForm" onSubmit={submitHandler}>
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


            <button variant="primary" type="submit">
                Submit
            </button>
        </form>
    </>
  )
}

export default LoginScreen