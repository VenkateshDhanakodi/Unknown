let arr = ["guru","venkat"];
let d = [];

((arrParam) => {
    d = arrParam.map(elem => {
        return elem.toUpperCase();
     });
        
})(arr);
  console.log(d);
