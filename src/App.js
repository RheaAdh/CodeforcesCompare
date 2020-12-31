import React from 'react'
import Search from './components/Search'
import Searchx from './components/Searchx'
import Compare from './components/Compare'
import {UserContextProvider} from './UserContext'
function App() {
  return (
    <UserContextProvider>
      <div>
      <Search/>
      <Searchx/>
      <Compare/>
      </div>
    </UserContextProvider> 
  );
}

export default App;
