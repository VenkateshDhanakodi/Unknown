const pal = [];
const input_array = ["madam","sir","student","rotator"];

((word)=>{

word.map(reverseString);
console.log(pal);

})(input_array);

function reverseString(str) {
    var splitString = str.split(""); 
 
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
    
    if(str == joinArray){

pal.push(str);
    }
}