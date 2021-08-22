


(function () {

var names = ["Pyush", "Jon", "Puppy", "Dash", "Nimish", "Raju", "Shyam", "Baburao", "jera", "Jimmy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
