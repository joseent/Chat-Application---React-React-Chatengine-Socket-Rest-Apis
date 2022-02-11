import React from "react";

export default function MyMessage({ message }) {
  if (message.attachmets && message.attachmets.lenght > 0) {
    return (
      <img
        src={message.attachmets[0].file}
        alt="message-attach"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
     {message.text}
    </div>
  );
}
