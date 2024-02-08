export function PartnerMEssageBubble({messageText, sender}) {
  return (
    <div className="message_bubble from-partner">
      <p>{messageText}</p>
      <p>{sender}</p>
    </div>
  );
}
