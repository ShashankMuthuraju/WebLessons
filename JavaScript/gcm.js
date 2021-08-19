let a =60
let b=30



let gcm=1;
smallestOfBoth=smallest(a,b)
for(let i=0; i<=smallestOfBoth; i=i+1){
   let  isDivisible = isIDivisibleByBothNumbers(i,a,b);
   if(isDivisible===true){
       gcm=i;
   }
}

console.log("GCM is:" , gcm)

function isIDivisibleByBothNumbers(i,a,b){
let isADivisible = isRemainderZero(a,i);
let isBDivisible = isRemainderZero(b,i);
if( isADivisible && isBDivisible){
    return true;
}else{
    return false;
   }
}

function isRemainderZero(divisor, divider){
    if(divisor % divider == 0 ) {
        return true;
    }else{
        return false;
    }
}

 function   smallest (a,b){
        if(a<b){
            return a;
        }else{
            return b;
        }
    }