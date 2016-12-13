/**
 * Created by ZL on 2016-12-13.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var temp="";
    var result=[];

if(strs.length==0){

    return "";

}else if(strs.length==1){
    return strs;
} else {
    for (var col = 0; col < strs[0].length; col++) {
        temp = "";
        for (var pos = 0; pos < strs.length - 1; pos++) {

            if (strs[pos][col] != strs[pos + 1][col]) {

                return result;
            }

            temp = strs[pos][col];

        }

        result.push(temp)

    }
    return result;
}





};



var testString=['abckkkk','abcdefg','abchello','ablize'];
console.log(longestCommonPrefix(testString));
