//solution 1 for creating billions of users

const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();

const user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
  user2.score++;
};

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 10;
user3.increment = function () {
  user2.score++;
};
// console.log(user3.name)
//this is against dry

//solution 2

function createUsers(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;

  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user4 = createUsers("kamal", 14);

// solution 4 using prototype chain

function userCreater(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("logged in");
  },
};

const user5 = createUsers("rahul", 11);

// console.log(user4)

// in js functions are both objects and functions

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
console.log(multiplyBy2(3));

console.log(multiplyBy2.stored);

//5th solution

function UserCreater2(name, score) {
  this.name = name;
  this.score = score;
}

UserCreater2.prototype.increment = function () {
  this.score++;
};

UserCreater2.prototype.login = function () {
  console.log("logged in");
};

const user6 = new UserCreater2("Evan", 30);

user6.increment();
console.log(user6)

//solution 7 the class 'syntactic sugar'

class UserCreater {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("logged in");
  }
}

const user7 = new UserCreater("Mukul", 10);
user7.increment();

console.log(user7.name)
console.log(user7.score)
