import { BrowserRouter,Routes, Route } from "react-router-dom"
import Landingpage from "./Components/Landingpage";



function App() {
  return (
    <div style={{backgroundColor:"black"}}>
      <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Landingpage/>}/>
          
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
