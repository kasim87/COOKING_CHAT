import { Route, Routes } from "react-router";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { ChatPage } from './pages/ChatPage'

function App() {
  return <>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
        <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
      </Routes>
    </>
}

export default App;
