/**
 * Created by ze on 2016-10-17.
 */
/**
 * Reverse digits of an integer.
 Example1: x = 123, return 321
 Example2: x = -123, return -321
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    if(x>0&&x<Math.pow(2,31) - 1) {

        x=x.toString().split("").reverse().join("");
        x=parseInt(x);
        if(x<Math.pow(2,31) - 1){

            return x

        }else{
            return 0
        }

    }else if(x==0||x>Math.pow(2,31) - 1){
        return 0
    }else{
        x=Math.abs(x)
        x=reverse(x)
        return (-1)*x
    }
};

console.log(reverse(-123));