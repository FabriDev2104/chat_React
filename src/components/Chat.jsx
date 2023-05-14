import { useState, useEffect } from "react";


function Chat() {
  useEffect(() => {
    const allMessages = [];
    const Messages = localStorage.getItem("message");

    if (!valorLocalStorage) {
      localStorage.setItem("miCampo", valorPredeterminado);
    }
  }, []);

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    localStorage.setItem[("message", message)];
  }

  return (
    <>
      <div>
        <h1>Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type="text"
            placeholder="Type your message"
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Chat;
