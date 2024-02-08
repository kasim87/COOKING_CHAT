export function ChatPartner({partner, message, handleChatSelection}) {
  return (
    <div className="chatPartner_cont" onClick={() => {
      handleChatSelection(partner)
    }}>
      <h1>{partner}</h1>
      <p>{message}</p>
    </div>
  );
}

