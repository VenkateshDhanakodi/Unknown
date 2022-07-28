const arr = [10,20,30,40];

let total = 0;

((par)=>{

par.map(elem => {

   total = total + elem;

})

})(arr);
console.log(total);