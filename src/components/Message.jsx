function Message({ sender, text }) {
    return (
        <div className={sender}>
            {sender === "atd" && <h4>Atendente diz:</h4>}
            {sender === "usr" && <h4>Você diz:</h4>}
            <p>{text}</p>
        </div>
    );
}

export default Message;