import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="5d2ce32a-2298-4d03-8883-01267d7cfc6d"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
