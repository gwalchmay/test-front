import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


function CurrentConversation(props) {
    const selectedConversation = props.selectedConversation;
    const setSelectedConversation = props.setSelectedConversation;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        function getMessages() {
            axios.get(`${API_URL}/api/messages/${selectedConversation}`)
                .then((res) => res.data)
                .then((data) => { setMessages(data) });
        }

        getMessages();
    }, [selectedConversation, refresh]);

    function handleChange(e) {
        setNewMessage(e.target.value);
    }

    function handleSubmit() {
        axios.post(`${API_URL}/api/messages`, { selectedConversation, newMessage })
            .then(setNewMessage(""))
            .then(() => setRefresh(!refresh))
    }

    function handleClose() {
        axios.put(`${API_URL}/api/conversations/${selectedConversation}`)
            .then(() => setSelectedConversation())
    }

    function handleKeypress(e) {
        if (e.charCode === 13) { handleSubmit(); }
    };


    return (
        <div className="conversation">
            <button className="closeButton" onClick={() => handleClose()}>✖</button>
            {messages.map(message => <p>{message.content}</p>)}
            <input className="conversationInput" type="text" placeholder="Votre message (500 caractères max)" value={newMessage} onChange={handleChange} onKeyPress={newMessage ? handleKeypress : null} />
            <button onClick={newMessage ? () => handleSubmit() : null}>Envoyer</button>
        </div>
    )

}

export default CurrentConversation;