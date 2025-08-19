
let str = "Hello World";

console.log(str.length);                //  11 = total characters
console.log(str.charAt(0));             //  "H" = character at index 0
console.log(str.charCodeAt(0));         //  72 = UTF-16 code of "H"
console.log(str.at(-1));                //  "d" = last character

//---------------Case Conversion----------------
console.log(str.toUpperCase());         //  "HELLO WORLD"
console.log(str.toLowerCase());         //  "hello world"

//--------------Extract Parts---------------
console.log(str.slice(0, 5));           //  "Hello" = from 0 to 4
console.log(str.substring(6, 11));      //  "World"
console.log(str.substr(6, 5));          //  "World" (deprecated)

//--------------Searching---------------------
console.log(str.indexOf("o"));          //  4 = first "o"
console.log(str.indexOf(" "));          //  5
console.log(str.lastIndexOf("o"));      //  7 = last "o"
console.log(str.includes("World"));     //  true
console.log(str.startsWith("Hell"));    //  true
console.log(str.endsWith("rld"));       //  true

//--------------Replace------------------
console.log(str.replace("World", "JS"));        //  "Hello JS"
console.log("ha-ha-ha".replaceAll("ha", "ho")); //  "ho-ho-ho"

//--------------Whitespace & Split----------------
let messy = "  clean me  ";

console.log(messy.trim());              //  "clean me"
console.log(messy.trimStart());         //  "clean me  "
console.log(messy.trimEnd());           //  "  clean me"
console.log("a,b,c".split(","));        //  ["a", "b", "c"]

//--------------Other Useful----------------
console.log("Hi".concat(" there"));     //  "Hi there"
console.log("ok".repeat(3));            //  "okokok"
console.log((123).toString());          //  "123"
console.log("abc".valueOf());           //  "abc"
console.log("é".normalize());           //  "é"
