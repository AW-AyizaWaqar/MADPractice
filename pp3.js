let myPromise = new Promise(function(myResolve, myReject) {
let a= Math.random();
if(a<0.5)
{
myReject("No random no for you today");
}
else{
myResolve("random no is " + a);
}

const animateAll = (animate) => {
setTimeout(() => {
animate(words[0]);
setTimeout(() => {
  animate(words[1]);
setTimeout(() => {
animate(words[2]);
},1000)
},1000)
},1000)
}