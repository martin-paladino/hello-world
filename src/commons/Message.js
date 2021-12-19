import "../assets/styles/message.css";

const Message = (msg) => {
    return (
        <div id="contMsg">
            <div id="Msg">
                {msg}<br></br>
                <button onClick="handlerClick">Ok</button>
            </div>
        </div>
    )
}

export default Message
