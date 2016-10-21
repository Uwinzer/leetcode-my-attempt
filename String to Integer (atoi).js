/**
 * Created by ZL on 2016-10-21.
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var temp;
    if(str==="undefined"){
        return 0
    } else if(typeof str==="number") {
        temp=str
    } else if(typeof str==="string"){
        temp = parseInt(str,10)
        if(isNaN(temp)){
            return 0
        }
    } else {
        return 0
    }

    if(temp>=Math.pow(2,31)-1){
        return Math.pow(2,31)-1
    }else if(temp<=-Math.pow(2,31)) {
        return -Math.pow(2,31)
    }else{
        return temp
    }

};
console.log(myAtoi(""))


