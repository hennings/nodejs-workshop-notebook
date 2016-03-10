
function createProgrammer() {
    var languages = [];
    function learnNewLanguage(lang) {
	    languages.push(lang);
    };
    function isPragmatic() {
	return languages.length >= 3
    }
    return {
	learnNewLanguage: learnNewLanguage,
	isPragmatic: isPragmatic
    }
}

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


