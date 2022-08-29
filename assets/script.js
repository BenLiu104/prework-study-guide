var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var topicLength = topics.length;
var randomNumber1 = Math.random();
var randomNumber2 = randomNumber1*topics.length;
var randomTopic = Math.floor(randomNumber2);
/*console.log(topicLength);
console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomTopic);*/
/*for (var i=0; i<topics.length; i++){
    console.log(topics[i])
}*/

function selectTopic(){
    if (topics[randomTopic] === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topics[randomTopic] === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topics[randomTopic] === 'Git') {
    console.log("Let's study Git!");
    } else if (topics[randomTopic] === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }
  console.log('Here are the topics we learned through Prework:');
  
  listTopics();
  console.log('Which topic should we study first?');

  selectTopic();

