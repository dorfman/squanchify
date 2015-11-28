$('h1').text('Squanchy');

var squanchify = function(content) {
  var words = ['love', 'like', 'fuck', 'the'];

  words.forEach(function(word) {
    content = content.replace(new RegExp(word, 'g'), 'squanch');
  });

  return content;
};

document.body.innerHTML = squanchify(document.body.innerHTML);
