import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";

export function LoginPage() {
  const navigate = useNavigate()
  let [mailUser, setMailUser] = useState('')
  let [passwordUser, setPasswordUser] = useState('')

  async function handleLogin(event){
    event.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, mailUser, passwordUser)
      navigate('/chat')
    } catch {
      alert('error')
    }
  }

  return (
    <div className="welcome_page">
      <div className="login_page_content">
        <form className="login_form" onSubmit={(e) => {
            handleLogin(e)
        }}>
          <div className="circle_decor circle-red"></div>
          <Link to='/login'>
            <h1>ВОЙТИ В СВОЙ АККАУНТ</h1>
          </Link>
          <input value={mailUser} onChange={(e) => {
            setMailUser(e.target.value)
          }} type="text" placeholder="Почтовый адрес" />
          <input value={passwordUser} onChange={(e) => {
            setPasswordUser(e.target.value)
          }} type="text" placeholder="Пароль" />
          <button className="btn btn-red btn-login">войти</button>
          <Link to='/register'>
            <p>или создайте новый</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
