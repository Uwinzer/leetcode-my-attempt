/**
 * Created by ZL on 2016-12-(13-14).
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var temp="";
    var result=[];

    if(strs.length===0){

        return "";

    }else if(strs.length==1){
        return strs[0];
    } else {
        for (var col = 0; col < strs[0].length; col++) {
            temp = "";
            for (var pos = 0; pos < strs.length - 1; pos++) {


                if (strs[pos][col] != strs[pos + 1][col]) {

                    return result.join("");
                }

                temp = strs[pos][col];

            }

            result.push(temp)

        }
        return result.join("");
    }

};



var testString=['ac','ab'];
console.log(longestCommonPrefix(testString));
