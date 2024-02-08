import send from "../assets/send.png";
import logout from "../assets/logout.png";
import { ChatPartner } from "../components/ChatPartner";
import { PartnerMEssageBubble } from "../components/PartnerMEssageBubble";
import { UserMessageBubble } from "../components/UserMessageBubble";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, onSnapshot } from 'firebase/firestore'

export function ChatPage() {
  const navigate = useNavigate()
  const qr = getFirestore()

  let [newMassage, setNewMassage] = useState('')
  let [messageArray, setMessageArray] = useState([])
  let [partnersArray, setPartnersArray] = useState([])

  let[selectedPartner, setSelectedPartner] = useState('')
  function handleChatSelection(partner){
    setSelectedPartner(partner)
  }

  async function sendNewMassage(){
    const sender = auth.currentUser
    await addDoc(collection(qr, 'messages'), {
      sender: sender.displayName,
      message: newMassage,
      receiver: selectedPartner
    })
    setNewMassage('')
  }

  function handleLogOut(){
    signOut(auth).then(() => {
      navigate('/')
    }).catch((e) => {
      alert(e)
    })
  }

  async function getAllUsers(){
    const querySnapShot = await getDocs(collection(qr, 'users'))
    const allUsersData = querySnapShot.docs.map((doc) => doc.data())
    const usersData = allUsersData.filter(
      (dos) => doc.username != auth.currentUser.displayName
    )
    setPartnersArray(usersData)
  }


useEffect(() => {
  onSnapshot(collection(qr, 'messages'), (querySnapShot) => {
    const query = querySnapShot.docs.filter((doc) =>
      doc.data().receiver == selectedPartner ||
      doc.data().sender == selectedPartner
      )
    const messagesData = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      info: doc.data()
    }))
    setMessageArray(messagesData)
  })
  getAllUsers()
}, [selectedPartner])

  return (
    <div className="welcome_page">
      <div className="chat_page_content">
        <div className="sidebar_panel">
          <h1>Чаты</h1>
          <div className="chatPartners_list">
            {partnersArray.map((partner) => {
              return <ChatPartner 
              key={partner.email}
              partner={partner.username} 
              message={partner.email}
              handleChatSelection={handleChatSelection}
              ></ChatPartner>
            })}
          </div>
        </div>
        <div className="top_panel">
          <h1>{selectedPartner}</h1>
          <div className="logout">
            <img onClick={handleLogOut} src={logout} alt="" />
            <p>Выйти</p>
          </div>
        </div>
        <div className="chat_panel">
          {messageArray.map((info) => {
              if (auth.currentUser) {
                if (info.info.sender == auth.currentUser.displayName) {
                  return (
                    <UserMessageBubble key={info.id} messageText={info.info.message}></UserMessageBubble>
                  )
                } else if (info.info.receiver == auth.currentUser.displayName) {
                  return (
                    <PartnerMEssageBubble key={info.id} messageText={info.info.message}></PartnerMEssageBubble>
                  )
                }
              }
          })}
        </div>
        <div className="bottom_panel">
          <input type="text" value={newMassage} onChange={(e) => {
            setNewMassage(e.target.value)
          }} placeholder="Напишите что нибудь..." />
          <button onClick={() => {
            sendNewMassage()
          }}>
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
