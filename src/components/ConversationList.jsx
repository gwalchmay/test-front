import React, { useState, useEffect } from 'react';


function ConversationList(props) {
    const conversations = props.conversations;
    const setSelectedConversation = props.setSelectedConversation;

    return (
        <div>
            {conversations.map(conversation => <button onClick={() => setSelectedConversation(conversation.id)}>Conversation {conversation.id}</button>)}
        </div>
    )

}

export default ConversationList;