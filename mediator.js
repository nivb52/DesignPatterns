function Member(id, name) {
  this.id = id;
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (msg, to_member) {
    this.chatroom.send(msg, this /*sender*/, to_member);
  },
  receive: function (msg, from_member) {
    console.log(`${from_member.name} to ${this.name}: ${msg}`);
  },
  signOut: function () {
    this.chatroom.removeMember(this /*sender*/);
  },
  isLoggedIn: function () {
    console.log(
      this.chatroom.isLoggedIn(this /*sender*/)
        ? 'You are logged in'
        : 'You are NOT logged in'
    );
  },
};

//  Mediator
function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.id] = member;
    member.chatroom = this;
  },

  removeMember: function (member) {
    delete this.members[member.id];
  },

  send: function (msg, from_member, to_member) {
    if (this._isExists(from_member) && this._isExists(to_member))
      to_member.receive(msg, from_member);
  },

  isLoggedIn: function (member) {
    return this._isExists(member);
  },

  _isExists: function (member) {
    return this.members.hasOwnProperty(member.id);
  },
};

//  USING
const chat = new Chatroom();
const member1 = new Member(1, 'bob');
const member2 = new Member(2, 'margaret');
const member3 = new Member(3, 'john');

chat.addMember(member1);
chat.addMember(member2);
chat.addMember(member3);

member1.send('Hi ', member2);
member2.send('How Are you ', member1);

// we had those methods later
// and all logic in the Chatroom
// this make it easy to control the group object
member1.signOut();
member1.isLoggedIn();

member1.send('This should not appear ', member2);
member3.send('Hi ', member2);
