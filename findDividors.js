export const findDivisors=(nums)=>{
 let divisors=[];
 for(let i=0; i<=nums; i++){
  if(nums%i==0){
  divisors.push(i);
 }
}
return divisors;
}