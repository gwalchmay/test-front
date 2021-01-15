import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(props) {
    const refresh = props.refresh;
    const setRefresh = props.setRefresh;

    function handleCreate() {
        axios.post(`http://localhost:8000/api/conversations`)
            .then(() => setRefresh(!refresh))
    }

    return (
        <div>
            <Link to='/'>Accueil</Link>
            <Link to='/archives'>Conversations archivées</Link>
            <button onClick={() => handleCreate()}>Créer une conversation</button>
        </div>
    )
}

export default Navbar;