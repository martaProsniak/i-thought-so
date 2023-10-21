import './App.css'
import { useData } from './hooks/useData'
import { Thought } from './utils/interfaces'
import { SignIn } from './components/auth/google/SignIn';
import { Heading } from '@chakra-ui/react'

function App() {

  const { data, isLoading, error } = useData<Thought>('https://i-thoughtso-default-rtdb.europe-west1.firebasedatabase.app/quotes.json');
  console.log('Loading', isLoading);
  console.log(data);
  console.log(error);

  return (
    <>
      <Heading m={6}>I thought so</Heading>
      <SignIn />
    </>
  )
}

export default App
