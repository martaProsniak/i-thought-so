import { auth, provider } from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'
import googleIcon from '../../../assets/google-icon.png'

export const SignIn = () => {

    const handleSignIn = async () => {
        const data = await signInWithPopup(auth, provider);
        console.log(data)
    }


    return <div><button onClick={handleSignIn}><img src={googleIcon} alt='Google logo' style={{ width: '20px', height: '20px' }} />Sign in with Google</button></div>
}