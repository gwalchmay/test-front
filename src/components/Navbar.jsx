import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Navbar(props) {
    const refresh = props.refresh;
    const setRefresh = props.setRefresh;
    const [hideNewConversation, setHideNewConversation] = useState(false)

    function handleCreate() {
        axios.post(`${API_URL}/api/conversations`)
            .then(() => setRefresh(!refresh))
    }

    return (
        <div className="navbar">
            <div className="navbarLinks">
                <Link to='/' onClick={() => setHideNewConversation(false)}>Accueil</Link>
                <Link to='/archives' onClick={() => setHideNewConversation(true)}>Conversations</Link>
            </div>
            { hideNewConversation ? null : <button className="conversationButton" onClick={() => handleCreate()}>Créer une conversation</button>}
        </div>
    )
}

export default Navbar;