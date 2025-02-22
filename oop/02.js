// 2. Инкапсуляция
const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

const getMutualFriends = (user1, user2) => {
  const user1Ids = user1.getFriends().map((friend) => friend.id);
  return user2.getFriends().filter((friend) => user1Ids.includes(friend.id));
};

const user1 = makeUser({
  friends: [
    makeUser({
      id: 1
    }),
    makeUser({
      id: 2
    }), // общий друг
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({
      id: 2
    }), // общий друг
    makeUser({
      id: 3
    }),
  ],
});

console.log(getMutualFriends(user1, user2)); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]
