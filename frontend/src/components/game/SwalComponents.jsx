import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import img from './source-1.gif'
import img2 from './sadrain.gif'
const MySwal = withReactContent(Swal)

export const SwalWinComponentLeft = () => {
    MySwal.fire({
        title: 'Correct choice ! +1 score.',
        icon: 'success',
        timerProgressBar: true,
        timer: 2000,
        position: 'center',
        background: 'rgb(35, 34, 34)',
        backdrop: `
        
        url("${img}")
        
        repeat
        `
                    ,
        showConfirmButton: false,
        width: 400,
        color : 'white',
        target: document.getElementById('swalBoxleft'),
        allowOutsideClick: false,
    })
  }
export const SwalLoseComponentLeft = () => {

    MySwal.fire({
        title: 'Wrong choice. Try again!',
        icon: 'error',
        timerProgressBar: true,
        timer: 2000,
        position: 'center',
        background: 'rgb(35, 34, 34)',
        border: '50px solid black',
        backdrop: `
        
        url("${img2}")
        
        repeat
        `
                    ,
        showConfirmButton: false,
        width: 400,
        height: 300,
        color : 'white',
        target: document.getElementById('swalBoxleft'),
        allowOutsideClick: false,

    })
}



export const SwalWinComponentRight = () => {
    MySwal.fire({
        title: 'Correct choice ! +1 score.',
        icon: 'success',
        timerProgressBar: true,
        timer: 2000,
        position: 'center',
        background: 'rgb(35, 34, 34)',
        backdrop: `
        
        url("${img}")
        
        repeat
        `
                    ,
        showConfirmButton: false,
        width: 400,
        color : 'white',
        target: document.getElementById('swalBoxright'),
        allowOutsideClick: false,
    })
}
export const SwalLoseComponentRight = () => {

    MySwal.fire({
        title: 'Wrong choice. Try again!',
        icon: 'error',
        timerProgressBar: true,
        timer: 2000,
        position: 'center',
        background: 'rgb(35, 34, 34)',
        border: '50px solid black',
        backdrop:`
        
        url("${img2}")
        
        repeat
        `
                    ,
        showConfirmButton: false,
        width: 400,
        height: 300,
        color : 'white',
        target: document.getElementById('swalBoxright'),
        allowOutsideClick: false,

    })
}