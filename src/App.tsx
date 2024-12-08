import { Route, Routes } from "react-router"
import { Signup } from "./components/Signup.tsx"
import {Login} from "./components/Login.tsx"
import {Layout }from "./pages/Layout.tsx"
import { Thanks } from "./components/Thanks.tsx"
import { Welcome } from "./components/Welcome.tsx"
function App() {

  return (
    <>
   
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path='/thank-page' element={<Thanks/>}/>
          <Route path='/welcome-back' element = {<Welcome/>}/>
          </Route>

      </Routes>
   
    </>
  )
}

export default App
