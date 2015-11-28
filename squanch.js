var squanchify = function(content) {

  var words = ['feel', 'count', 'load', 'play', 'watch', 'turn', 'love', 'like', 'fuck', 'use', 'masturbate', 'jack', 'lift', 'hell'];
  var wordings = ['feeling', 'counting', 'loading', 'playing', 'watching', 'turning', 'loving', 'liking', 'fucking', 'using', 'jacking', 'lifting', 'masturbating'];
  var wordeds = ['felt', 'counted', 'loaded', 'played', 'watched', 'turned', 'loved', 'liked', 'fucked', 'used', 'jacked', 'lifted', 'masturbated'];

  words.forEach(function(word) {
    content = content.replace(new RegExp('\\b' + word + '\\b', 'g'), 'squanch');
  });

  wordings.forEach(function(wording) {
    content = content.replace(new RegExp('\\b' + wording + '\\b', 'g'), 'squanching');
  });

  wordeds.forEach(function(worded) {
    content = content.replace(new RegExp('\\b' + worded + '\\b', 'g'), 'squanched');
  });

  return content;
};

document.body.innerHTML = squanchify(document.body.innerHTML);
