/**
 * Created by ZL on 2016-10-17.
 */
var conversion = function(s, numRows) {
        var arr=[];
        var result=[];
    var gap=2*numRows-2;
    if(s.length<3||numRows<2){
        return s
    }
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
   
     for(var i=0;i<arr.length;i++){
     for(var j=0;j<arr[i].length;j++){
     
     result.push(arr[i][j])
         
     }
         
     }
     return result.join("")
};



var str=["a","b","c","d","e","f","g","h","i","j","k","l","m"];

console.log(conversion(str,3))