import './App.css'
import { useData } from './hooks/useData'
import { Thought } from './utils/interfaces'
import { SignIn } from './components/auth/google/SignIn';

function App() {

  const { data, isLoading, error } = useData<Thought>('https://i-thoughtso-default-rtdb.europe-west1.firebasedatabase.app/quotes.json');
  console.log('Loading', isLoading);
  console.log(data);
  console.log(error);

  return (
    <>
      <h1>I thought so</h1>
      <SignIn />
    </>
  )
}

export default App
