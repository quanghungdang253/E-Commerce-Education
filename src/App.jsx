import React from "react"
import ChatBotLocal from "./chat/components/local-chat-bot";
import { Route, Routes } from "react-router-dom"
import routers from './routers/router';
function App() {


  return (
    <>   
    <Routes>
        {
             routers.map((item) => (
                <Route path={item.path} element={<item.element/>} />
            ))
        }

    </Routes>
      
    </>
  )
}

export default App
