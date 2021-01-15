import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConversationList from './ConversationList';
import CurrentConversation from './CurrentConversation';

const API_URL = process.env.REACT_APP_API_URL;

function Home(props) {
    const refresh = props.refresh;
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState();

    useEffect(() => {
        function getConversations() {
            axios.get(`http://localhost:8000/api/conversations/open`)
                .then((res) => res.data)
                .then((data) => { setConversations(data) });
        }

        getConversations();
    }, [refresh]);

    return (
        <div>
            <ConversationList conversations={conversations} setSelectedConversation={setSelectedConversation} />
            {selectedConversation ? <CurrentConversation selectedConversation={selectedConversation} /> : null}
        </div>
    )

}

export default Home;