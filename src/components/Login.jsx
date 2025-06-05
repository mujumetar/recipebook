
import React, { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import app from '../firebaseconfig'
import { browserLocalPersistence, getAuth, GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithPopup } from 'firebase/auth'
// import { useDispatch } from 'react-redux'
// import { useDispatch } from 'react-redux'

const Login = () => {
    const provider = new GoogleAuthProvider(app)
    const auth = getAuth(app)


    const handleGoogles = async () => {
        let res = await signInWithPopup(auth, provider)
        let cUser = auth.currentUser;
        console.log(res,cUser)
    }

      useEffect(() => {
        setPersistence(auth, browserLocalPersistence)
        onAuthStateChanged(auth, (cUser) => {
            if (cUser) {
              console.log("done")
            }
            else {
              console.log("!!!!!!!!")
                
            }
        })


    }, [auth])

    
    return (
        <div>
            <div className=''>
            <button onClick={() => handleGoogles()} className='  '><FcGoogle /></button>
            </div>
        </div>
    )
}

export default Login