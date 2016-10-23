/**
 * * Created by ZL on 2016-10-23.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr=[];
    var temp=0;
    var r2n = function(r){
        switch(r){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }

    for(var i=0;i<s.split("").length;i++){
        arr.push(r2n(s.split("")[i]));
    }

    for(i=0;i<arr.length-1;i++){

        if(arr[i]<arr[i+1]){
            arr[i]=-1*arr[i]
        }
    }
    for(i=0;i<arr.length;i++){
        temp=temp+arr[i]
    }
    return temp
};
console.log(romanToInt("LXIII"));