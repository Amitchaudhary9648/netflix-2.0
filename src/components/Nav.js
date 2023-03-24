import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(true)
    const history = useHistory()

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar )
    },[])

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    onClick={() => history.push('/')}
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt=''
                />
                <img
                    onClick={() => history.push('/profile')}
                    className='nav__avator'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='' />
            </div>
        </div>
    )
}

export default Nav