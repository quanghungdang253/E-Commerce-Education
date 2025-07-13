import React from "react"
import ChatBotLocal from "./chat/components/local-chat-bot";
import { Route, Routes } from "react-router-dom"
import routers from './routers/router';
import Footer from "./common/footer/footer";
import LoadingSkeleton from "./ui/loading-skeleton";
function App() {


  return (
    <React.Fragment>   
    <Routes>
        {
             routers.map((item) => (
                <Route path={item.path} element={<item.element/>} />
            ))
        }

    </Routes>
    <div className='mt-6 '>   
                             <Footer />
                          
              </div>
    </React.Fragment>
  )
}

export default App
