
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import app from '../firebaseconfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
// import { useDispatch } from 'react-redux'

const Login = () => {
    const provider = new GoogleAuthProvider(app)
    const auth = getAuth(app)
    // const dispatch = useDispatch()


    const handleGoogles = async () => {
        let res = await signInWithPopup(auth, provider)
        let cUser = auth.currentUser;
        console.log(res,cUser)
    }

    
    return (
        <div>
            <button onClick={() => handleGoogles()}><FcGoogle /></button>
        </div>
    )
}

export default Login