import { auth, provider } from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'
import googleLogo from '../../../assets/google.svg'
import { Button, Image, Box, Flex, Text } from '@chakra-ui/react'

export const SignIn = () => {

    const handleSignIn = async () => {
        const data = await signInWithPopup(auth, provider);
        console.log(data)
    }


    return <Box><Button padding={4} onClick={handleSignIn}>
        <Flex align={'center'}><Image src={googleLogo} mr={2} alt='Google logo' boxSize={'22px'} /><Text lineHeight={'14px'}>Sign in with Google</Text></Flex>
    </Button></Box>
}