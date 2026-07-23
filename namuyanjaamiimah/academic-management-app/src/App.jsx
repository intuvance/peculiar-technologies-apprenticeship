
import Dashboard from "./Dashbboard";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
  return(
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/exam" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
