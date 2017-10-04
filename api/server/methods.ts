import { Chats } from './collections/chats';

Meteor.methods({
    //handle functions for example: addChats(title,picture). This function will be call in client side through MeteorObservable
    addChats(title: string, picture: string) {
        return {
            chatId: Chats.collection.insert({
                title: title,
                picture: picture
            })
        };
    }
});