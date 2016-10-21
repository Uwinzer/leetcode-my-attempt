/**
 * Created by ZL on 2016-10-21.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var temp;
    var flag=1;

    if(~isNaN(x)&&x>=0){
       
        if(x<=Math.pow(2,31)){
            temp=x.toString();
            for(var i=0;i<=temp.length/2;i++){

                if(temp[i]!=temp[temp.length-1-i]){

                    flag=0;
                }
            }
        }

    }else{
            flag=0;
    }

  return Boolean(flag)
 
};

console.log(isPalindrome(-1123321));