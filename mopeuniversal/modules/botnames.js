function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var names = [
    "KING SAM375",
    "SUBSCRIBE TO SAM375",
    "SAM375 BEST",
    "KING OF AGARIO - REAL",
    "ahmet",
    "king ahmetcan",
    "KOA",
    "Dev",
    "mope sandbox 2022",
    "lag",
    "Noob",
    "clickstan",
    "MOPE.IO HACKER",
    "king of mope.io",
    "king of agar.io",
    "developer",
    "free xp",
    "eat me",
    ":)",
    "PROPLAYER",
    "HACKER",
    "(DEVELOPER",
    "JOEMAMA",
    "CHICKEN MASALA",
    "MAX EXP",
    "SAM375 BEST",
    "LOCAL TEST ",
    "PRIVATE SERVER LOCAL ",
    "SAM375'S PRIVATE SANDBOX MOPE.IO SERVER",
    "SAM375 GOAT",
    "SAM375 PRO",
]
function name() {

}
name.prototype = {

    newnames: function () {
        var d = getRandomInt(0, names.length)
        var newname = names[d]
        return newname;


    },
}
module.exports = name
