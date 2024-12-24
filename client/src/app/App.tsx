import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


import './styles/global.css'

import Auth from "features/auth";
import { useState } from "react";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <ApolloProvider client={client}>
      <button onClick={() => setModalOpen(true)}>Open</button>
      <h1 className={"text-4xl mt-60"}>111111111111111111111111111111111111111111111111111111111111111111111111111111111</h1>
        <Auth open={isModalOpen} setOpen={setModalOpen} />
    </ApolloProvider>
  )
}

export default App
