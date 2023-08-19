// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);

//   const onSend = (newMessages = []) => {
//     const userMessage = newMessages[0].text.trim();

//     // Simulate sending user's message
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, newMessages)
//     );

//     // Check if the user's message matches a specific trigger
//     if (userMessage === "Hello") {
//       // Send an auto-reply message
//       const autoReply = {
//         // _id: Math.round(Math.random() * 1000000),
//         // text: "Hello! This is an auto-reply message.",
//         // createdAt: new Date(),
//         // user: {
//         //   _id: 2, // Auto-reply user ID
//         //   name: 'Auto-Reply Bot',
//         _id: 1,
//         text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
//         createdAt: new Date(),
//         quickReplies: {
//           type: 'radio', // or 'checkbox',
//           keepIt: true,
//           values: [
//             {
//               title: '😋 Yes',
//               value: 'yes',
//             },
//             {
//               title: '📷 Yes, let me show you with a picture!',
//               value: 'yes_picture',
//             },
//             {
//               title: '😞 Nope. What?',
//               value: 'no',
//             },
//           ],
//         },
//         user: {
//           _id: 2,
//           name: 'React Native',
//         },
//         _id: 2,
//     text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
//     createdAt: new Date(),
//     quickReplies: {
//       type: 'checkbox', // or 'radio',
//       values: [
//         {
//           title: 'Yes',
//           value: 'yes',
//         },
//         {
//           title: 'Yes, let me show you with a picture!',
//           value: 'yes_picture',
//         },
//         {
//           title: 'Nope. What?',
//           value: 'no',
//         },
//       ],
//     },
//     user: {
//       _id: 2,
//       name: 'React Native',
//     },
//       };
      

//       // Simulate receiving the auto-reply after a brief delay
//       setTimeout(() => {
//         setMessages((previousMessages) =>
//           GiftedChat.append(previousMessages, [autoReply])
//         );
//       }, 1000); // Delay for 1 second before sending the auto-reply
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={onSend}
//         user={{
//           _id: 1, // User ID
//         }}
//       />
//     </View>
//   );
// };

// export default ChatScreen;

import React, { useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    const userMessage = newMessages[0].text.trim();

    // Simulate sending user's message
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    // Check if the user's message matches specific triggers
    if (userMessage.toLowerCase() === 'hello') {
      // Send an auto-reply message for "Hello"
      const autoReplyHello = {
        _id: Math.round(Math.random() * 1000000),
        text: 'Hello! This is an auto-reply message for "Hello".',
        createdAt: new Date(),
        user: {
          _id: 2, // Auto-reply user ID
          name: 'Auto-Reply Bot',
        },
      };

      // Simulate receiving the auto-reply after a brief delay
      setTimeout(() => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [autoReplyHello])
        );
      }, 1000); // Delay for 1 second before sending the auto-reply
    } else if (userMessage.toLowerCase() === 'yes') {
      // Send an auto-reply message for "Yes"
      const autoReplyYes = {
        _id: Math.round(Math.random() * 1000000),
        text: 'You chose: Yes!',
        createdAt: new Date(),
        user: {
          _id: 2, // Auto-reply user ID
          name: 'Auto-Reply Bot',
        },
      };

      // Simulate receiving the auto-reply after a brief delay
      setTimeout(() => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [autoReplyYes])
        );
      }, 1000); // Delay for 1 second before sending the auto-reply
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1, // User ID
        }}
      />
    </View>
  );
};

export default ChatScreen;

