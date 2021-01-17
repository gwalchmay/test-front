import React from 'react';


function ConversationList(props) {
    const conversations = props.conversations;
    const selectedConversation = props.selectedConversation;
    const setSelectedConversation = props.setSelectedConversation;

    return (
        <div className="conversationList">
            {conversations.map(conversation => <button className="conversationButton" onClick={() => setSelectedConversation(conversation.id)}>Conversation {conversation.id}</button>)}
        </div>
    )

}

export default ConversationList;