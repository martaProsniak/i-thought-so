import { auth, provider } from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'

export const SignIn = () => {

    const handleSignIn = async () => {
        const data = await signInWithPopup(auth, provider);
        console.log(data)
    }


    return <div><button onClick={handleSignIn}>Sign in with Google</button></div>
}