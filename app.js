"use strict";

class User {
  constructor(name) {
    this.name = name;
  }

  sendMessage(conversation, content) {
    if (!conversation.users.includes(this)) {
      throw new Error(`${this.name} is not in the conversation!`)
    }
    const message = new Message(this, content);
    conversation.messages.push(message);
    message.display();
  }
}

class Conversation {
  constructor(user, message) {
    this.users = [];
    this.messages = [];
  }

  addUsers(users) {
    users.forEach(user => {
      if (this.users.includes(user)) {
        throw new Error(`User is already in the conversation!`);
      } this.users.push(user);
      console.log(`Added ${user.name} in the conversation.`);
    })
  }
};

class Message {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }

  display() {
    const className = this.user === currentUser ? "from-me" : "from-them";
    const html = ` <div>
        <span class="${className}">${this.user.name}</span>
        <p class="${className}">${this.content}</p>
      </div>`;
    document.querySelector(".conversation").insertAdjacentHTML("beforeend", html);
    return this;
  };
}



const anna = new User("Anna");
const bijan = new User("Bijan");
const conv = new Conversation();
const currentUser = anna;
conv.addUsers([anna, bijan]);
anna.sendMessage(conv, "Hello");
bijan.sendMessage(conv, "Fout moi la paix!");
anna.sendMessage(conv, "Pas cool");
anna.sendMessage(conv, "...");
bijan.sendMessage(conv, "Déso pas déso");