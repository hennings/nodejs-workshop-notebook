
function Programmer() {
    this.languages = [];
}

var programmer = new Programmer();

Programmer.prototype.learnNewLanguage = function(lang) {
    console.log(":" + this);
    this.languages.push(lang);
};

Programmer.prototype.isPragmatic = function() {
    return this.languages.length >= 3 ;
};

var programmer = new Programmer();


programmer.learnNewLanguage("clojure");
programmer.learnNewLanguage("java");
console.log(programmer.isPragmatic());
programmer.learnNewLanguage("cobol");
console.log(programmer.isPragmatic());




var p2 = new Programmer();
["clojure","java","cobol"].forEach(
    p2.learnNewLanguage.bind(p2)
);


