let username = 'Jane';

username ? console.log(`Hello ${username}`) : console.log('Hello!');

const userQuestion = 'where do you find yourself in the next five years?';

username
  ?
  console.log(`${username} asked, ${userQuestion}`) :
  console.log(`The user asked ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(randomNumber, eightBall);