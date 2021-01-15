import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


function CurrentConversation(props) {
    const selectedConversation = props.selectedConversation;
    const [messages, setMessages] = useState([])

    useEffect(() => {
        function getMessages() {
            axios.get(`http://localhost:8000/api/messages/${selectedConversation}`)
                .then((res) => res.data)
                .then((data) => { setMessages(data) });
        }

        getMessages();
    }, [selectedConversation]);


    return (
        <div>
            {messages.map(message => <p>{message.content}</p>)}
        </div>
    )

}

export default CurrentConversation;