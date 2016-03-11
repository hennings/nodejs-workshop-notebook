
function createProgrammer() {
    var languages = [];
    return {
	learnNewLanguage: function(l) { languages.push(l); },
	isPragmatic: function() { return languages.length >= 3 }
    }
}

/*
var programmer = createProgrammer();

programmer.learnNewLanguage("clojure");
programmer.learnNewLanguage("java");
console.log(programmer.isPragmatic());

programmer.learnNewLanguage("cobol");
console.log(programmer.isPragmatic());

var p2 = createProgrammer();
["clojure","java","cobol"].forEach(
    p2.learnNewLanguage
);

console.log(p2.isPragmatic());
*/
