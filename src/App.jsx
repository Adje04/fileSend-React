import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./pages/Registration/Registration"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Discussion from "./pages/Discussion/Discussion"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/discussion' element={<Discussion />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
