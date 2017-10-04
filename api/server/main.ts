import { Meteor } from 'meteor/meteor';
import { Chats } from './collections/chats';

Meteor.startup(() => {
  // code to run on server at startup
  if (Chats.find({}).cursor.count() === 0) {
    let chatId;

    chatId = Chats.collection.insert({
      title: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    });

    chatId = Chats.collection.insert({
      title: 'Bryan Wallace',
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    });
  }
});
