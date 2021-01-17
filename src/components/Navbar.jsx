import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(props) {
    const refresh = props.refresh;
    const setRefresh = props.setRefresh;
    const [hideNewConversation, setHideNewConversation] = useState(false)

    function handleCreate() {
        axios.post(`http://localhost:8000/api/conversations`)
            .then(() => setRefresh(!refresh))
    }

    return (
        <div className="navbar">
            <div className="navbarLinks">
                <Link to='/' onClick={() => setHideNewConversation(false)}>Accueil</Link>
                <Link to='/archives' onClick={() => setHideNewConversation(true)}>Conversations archivées</Link>
            </div>
            { hideNewConversation ? null : <button className="conversationButton" onClick={() => handleCreate()}>Créer une conversation</button>}
        </div>
    )
}

export default Navbar;