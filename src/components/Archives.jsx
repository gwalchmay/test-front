import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Archives() {

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        function getConversations() {
            axios.get(`http://localhost:8000/api/conversations`)
                .then((res) => res.data)
                .then((data) => { setConversations(data) });
        }

        getConversations();
    }, []);

    return (
        <div>
            {conversations.map(conversation => <p>Conversation {conversation.id}</p>)}
        </div>
    )

}

export default Archives;