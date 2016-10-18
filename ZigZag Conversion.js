/**
 * Created by ZL on 2016-10-17.
 */
function conversion(s,numRows) {
    var arr=[];
    var gap=2*numRows-2;
    for(var i=0;i<numRows;i++){
        arr[i]=[];
    }

    for(var i=0;i<s.length;i++){

        if(i%(2*numRows-2)==0){

                arr[0].push(s[i]);
        }
        else{
            for(var j=1;j<numRows-1;j++){
                if(i%(2*numRows-2)==j){

                    arr[j].push(s[i]);
                    arr[j].push(s[i+gap-2*j])

                }

            }
            if(i%(2*numRows-2)==(numRows-1)){
                arr[numRows-1].push(s[i]);
            }
        }
    }
    return arr.join()
}



var str=["a","b","c","d","e","f","g","h","i","j","k","l","m"];

console.log(conversion(str,3))