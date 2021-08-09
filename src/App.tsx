import React, { useState } from 'react';
import { Consumer } from './consumer/Consumer'
import { Curator } from './curator/Curator';

function App() {
  const [viewMode, setViewMode] = useState("none")
  
  const showComponent = () => {
    switch(viewMode) {
      case "curator":
        return (<Curator />)
      case "consumer":
        return <Consumer />
      default: return (
      <>
      
      </>
      )
    }
  }

  return (
    <div className="App text-center mt-16">
      <p>this section is temporarily here until a proper nav is created</p>
      <div className="mx-auto mt-4 flex w-48">
        <div className="consumerbutton flex-1 w-16 h-16 border-2 border-gray-200 cursor-pointer flex items-center justify-center" onClick={() => setViewMode("curator")}>
          Curator
        </div>
        <div className="consumerbutton flex-1 w-16 h-16 border-2 border-gray-200 cursor-pointer flex items-center justify-center" onClick={() => setViewMode("consumer")}>
          Consumer
        </div>
      </div>
      {showComponent()}
    </div>
  );
}

export default App;
