import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/'>Accueil</Link>
            <Link to='/archives'>Conversations archivées</Link>
            <button>Créer une conversation</button>
        </div>
    )
}

export default Navbar;