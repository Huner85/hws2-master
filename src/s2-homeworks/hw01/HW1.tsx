import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import FriendMessage from './friend-message/FriendMessage';
import s2 from '../../s1-main/App.module.css';
import avatar from './avatar.png';


export type MessageType = {
    id: number;
    user: {
        avatar: string;
        name: string;
    };
    message: {
        text: string;
        time: string;
    };
};


export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Some Name',
    },
    message: {
        text: 'This is a sample text message for testing.',
        time: '22:00',
    },
};

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Friend Name',
    },
    message: {
        text: 'This is a mirrored sample message for CSS practice.',
        time: '22:00',
    },
};

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    {/* Сообщения */}
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                <MessageSender M={Message} />
            </div>
        </div>
    );
};

export default HW1;
