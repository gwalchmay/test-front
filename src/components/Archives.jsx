import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, useModal, ModalTransition, } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

function Archives() {

    const [conversations, setConversations] = useState([]);
    const [selectedArchivedConversation, setSelectedArchivedConversation] = useState();
    const { isModalOpen, openModal, closeModal } = useModal();
    const [messages, setMessages] = useState([]);

    const getConversations = () => axios.get(`http://localhost:8000/api/conversations`)
    const getMessages = () => axios.get(`http://localhost:8000/api/messages/${selectedArchivedConversation}`)

    useEffect(() => {
        function getConversationsAndMessages() {
            axios.all([getConversations(), getMessages()])
                .then((res) => { setConversations(res[0].data); setMessages(res[1].data) })
        }

        getConversationsAndMessages();
    }, [selectedArchivedConversation]);

    return (
        <>
            <div className="archivedConversations">
                {conversations.map(conversation => <button onClick={() => { setSelectedArchivedConversation(conversation.id); openModal(); }}>Conversation {conversation.id}</button>)}
            </div>
            <Modal
                id={selectedArchivedConversation}
                isOpen={isModalOpen}
                transition={ModalTransition.BOTTOM_UP}
            >
                <div className="conversation">
                    {messages.map(message => <p>{message.content}</p>)}
                </div>
                <button onClick={closeModal}>Fermer</button>
            </Modal>
        </>
    )

}

export default Archives;