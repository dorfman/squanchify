/* Upper cases a word. */
String.prototype.upCase = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/* What is pain? */
var wubalub = function(content) {
  return content.replace(new RegExp('\\bpain\\b', 'g'), 'pain (Wubalubadubdub!)');
};

/* Squanch. */
var squanchify = function(content) {
  // Each dictionary has a different tense.
  var words = ['mess', 'feel', 'count', 'load', 'play', 'watch', 'turn', 'love', 'like', 'fuck', 'use', 'masturbate', 'jack', 'lift', 'hell'];
  var wordings = ['messing', 'feeling', 'counting', 'loading', 'playing', 'watching', 'turning', 'loving', 'liking', 'fucking', 'using', 'jacking', 'lifting', 'masturbating'];
  var wordeds = ['messed', 'felt', 'counted', 'loaded', 'played', 'watched', 'turned', 'loved', 'liked', 'fucked', 'used', 'jacked', 'lifted', 'masturbated'];
  var squanch = 'squanch';

  // Where the squanching happens.
  var replaceWord = function(word) {
    content = content.replace(new RegExp('\\b' + word + '\\b', 'g'), squanch);
    content = content.replace(new RegExp('\\b' + word.upCase() + '\\b', 'g'), squanch.upCase()); //checks to see if the first letter is capitalize
  };

  // Calls the replace word for the three tenses used.
  words.forEach(replaceWord);
  squanch = 'squanching';
  wordings.forEach(replaceWord);
  squanch = 'squanched';
  wordeds.forEach(replaceWord);

  content = wubalub(content); // Little bonus

  return content;
};

document.body.innerHTML = squanchify(document.body.innerHTML);
