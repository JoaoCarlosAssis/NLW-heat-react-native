import React from 'react';
import { Message } from '../Message'
import { ScrollView } from 'react-native';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'teste',
    user: {
      name: 'João Carlos Assis',
      avatar_url: 'https://github.com/JoaoCarlosAssis.png',
    }
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>

    </ScrollView>
  );
}