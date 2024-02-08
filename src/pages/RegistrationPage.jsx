import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export function RegistrationPage() {
  let [mailUser, setmailUser] = useState('')
  let [passwordUser, setPasswordUser] = useState('')
  let [userNameInput, setUserNameInput] = useState('')

  const navigate = useNavigate()
  const db = getFirestore()

  async function handleRegistration(event){
    event.preventDefault()
    try {
      const authResult = await createUserWithEmailAndPassword(
        auth,
        mailUser,
        passwordUser
      );
      await updateProfile(authResult.user, {
        displayName: userNameInput,
      })
      await addUser()
      navigate('/chat')
    } catch {
      alert('error')
    }
  }

  async function addUser(){
    await addDoc(collection(db, 'users'), {
      email: mailUser,
      username: userNameInput,
    })
  }

  return (
    <div className="welcome_page">
      <div className="register_page_content">
        <form className="register_form" 
          onSubmit={(e) => {
            handleRegistration(e)
          }}
          >
          <div className="circle_decor circle-yellow"></div>
          <h1>СОЗДАЙТЕ НОВЫЙ АККАУНТ</h1>
          <input type="text"
            value={userNameInput} 
            onChange={(e) => {
              setUserNameInput(e.target.value)
            }}
          placeholder="writer your name"/>
          <input type="text" 
            value={mailUser} 
            onChange={(e) => {
            setmailUser(e.target.value)
          }} placeholder="Почтовый адрес" />
          <input type="text" 
            value={passwordUser} 
            onChange={(e) => {
            setPasswordUser(e.target.value)
          }} placeholder="Пароль" />
          <button className="btn btn-yellow btn-register">
            СОЗДАТЬ АККАУНТ
          </button>
          <Link  to='/login'>
            <p>или войдите в имеющийся</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
