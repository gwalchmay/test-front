import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


function CurrentConversation(props) {
    const selectedConversation = props.selectedConversation;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        function getMessages() {
            axios.get(`http://localhost:8000/api/messages/${selectedConversation}`)
                .then((res) => res.data)
                .then((data) => { setMessages(data) });
        }

        getMessages();
    }, [selectedConversation, refresh]);

    function handleChange(e) {
        setNewMessage(e.target.value);
    }

    function handleSubmit() {
        axios.post(`http://localhost:8000/api/messages`, { selectedConversation, newMessage })
            .then(() => setNewMessage())
            .then(() => setRefresh(!refresh))
    }


    return (
        <div>
            {messages.map(message => <p>{message.content}</p>)}
            <input type="text" placeholder="Votre message (500 caractères max)" onChange={handleChange} />
            <button onClick={newMessage ? () => handleSubmit() : null}>Envoyer</button>
        </div>
    )

}

export default CurrentConversation;