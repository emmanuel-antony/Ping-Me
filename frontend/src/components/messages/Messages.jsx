import React from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import { MessageSkeleton } from '../skeletons/messageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading ? (
        // use idx+uuid or any other unique key as key
        [...Array(3)].map((_, idx) => <MessageSkeleton key={`skeleton-${idx}`} />)
      ) : messages.length > 0 ? (
        messages.map((message) => <Message key={message._id} message={message} />)
      ) : (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;