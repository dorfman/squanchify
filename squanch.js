/* Upper cases first letter of word. */
String.prototype.upCase = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/* What is pain? */
var wubalub = function(content) {
  return content.replace(new RegExp('\\bpain\\b', 'g'), 'pain (Wubalubadubdub!)');
};

/* Squanch. */
var squanchify = function(content) {
  // Each dictionary has a different tense.
  var moreWords = ['more awesome', 'messier', 'lovelier', 'better'];
  var wordly = ['lovely', 'beautiful', 'crazy', 'awesome', 'messy'];
  var words = ['comment', 'mind', 'style', 'bride', 'mess', 'feel', 'count', 'load', 'play', 'watch', 'turn', 'love', 'like', 'fuck', 'use', 'shit', 'hate', 'sex', 'masturbate', 'fap', 'jack', 'lift', 'hell'];
  var wordings = ['looking', 'messing', 'feeling', 'counting', 'loading', 'playing', 'watching', 'turning', 'loving', 'liking', 'fucking', 'masturbating', 'fapping', 'using', 'jacking', 'lifting', 'hating'];
  var wordeds = ['commented', 'messed', 'felt', 'counted', 'loaded', 'played', 'watched', 'turned', 'loved', 'liked', 'fucked', 'used', 'jacked', 'lifted', 'masturbated'];

  // To cycle through different tenses and uses of squanch
  var dictionaries = [{words: moreWords, squanch: 'squanchier'},
                    {words: wordly, squanch: 'squanchy'},
                    {words: words, squanch: 'squanch'},
                    {words: wordings, squanch: 'squanching'},
                    {words: wordeds, squanch: 'squanched'}];

  // Cycles through different squanches and dictionaries
  dictionaries.forEach(function(dictionary) {
    var squanch = dictionary.squanch;
    var dict = dictionary.words;

    dict.forEach(function(word) {
      content = content.replace(new RegExp('\\b' + word + '\\b', 'g'), squanch);
      content = content.replace(new RegExp('\\b' + word.upCase() + '\\b', 'g'), squanch.upCase()); //checks to see if the first letter is capitalize
      content = content.replace(new RegExp('\\b' + word.toUpperCase() + '\\b', 'g'), squanch.toUpperCase()); //checks to see if the word is all caps
    });
  });

  content = wubalub(content); // Little bonus

  return content;
};

/* Only parses through content and avoids modifying HTML tags and CSS class names */
var traverseHTML = function(nodes) {
  // nodes is not an array; it's a NodeList, so no forEach loop
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeValue)
      nodes[i].nodeValue = squanchify(nodes[i].nodeValue);

    nodes[i].childNodes = traverseHTML(nodes[i].childNodes);
  }
  return nodes;
};

document.body.childNodes = traverseHTML(document.body.childNodes);
