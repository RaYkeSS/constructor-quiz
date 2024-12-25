import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { useCallback, useState } from "react";


import { Button } from "shared/ui";
import { AuthModal } from "features/auth";

import './styles/global.css'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleButtonClick = useCallback(() => {
    setModalOpen(true)
  }, [])

  return (
    <ApolloProvider client={client}>
      <Button onClick={handleButtonClick}>Open</Button>
      <h1 className={"text-4xl mt-60"}>111111111111111111111111111111111111111111111111111111111111111111111111111111111</h1>
        <AuthModal open={isModalOpen} setOpen={setModalOpen} />
    </ApolloProvider>
  )
}

export default App
