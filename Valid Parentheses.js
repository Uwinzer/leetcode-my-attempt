/**
 * Created by ZL on 2016-10-29.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    var flag=true;
    var temp=[];
    var check=[];
    var m=0;
    var n=0;
    var p=0;


    for(var i=0;i<s.split("").length;i++){

        switch (s.charCodeAt(i)){
            case 40:
                temp.push(40);
                m++;
                break;
            case 41:
                temp.push(41);
                m++;
                break;
            case 91:
                temp.push(91);
                n++;
                break;
            case 93:
                temp.push(93);
                n++;
                break;
            case 123:
                temp.push(123);
                p++;
                break;
            case 125:
                temp.push(125);
                p++;
                break;

        }

    }
    if(temp.length%2==0&&m%2==0&&n%2==0&&p%2==0){
        for (i=1;i<=m/2;i++){
            check.push(40);
            check.push(41);
        }
        for(j=1;j<=n/2;j++){
            check.push(91);
            check.push(93);
        }
        for(k=1;k<=p/2;k++){
            check.push(123);
            check.push(125);
        }
        for(i=0;i<temp.length;i++){
            if(temp[i]!=check[i]){
                return false;
            }
        }
        return flag




    }else{
        return false
    }





};

console.log(isValid("()[]{"));