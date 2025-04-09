const palindromes = function (str) {
    regex = /[\s\.,?!]/g
    
    return str
        .toLowerCase()
        .replace(regex, "")
        .split("")
        .reverse()
        .join("")
        === str
        .toLowerCase()
        .replace(regex, "")
        .split("")
        .join("");
};

// Do not edit below this line
module.exports = palindromes;
