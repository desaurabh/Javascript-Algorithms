
var calculateSetSize=function(dataLength, expectedSetSize){
    var	set=dataLength/expectedSetSize;
    	if((dataLength%expectedSetSize)!=0){
		var strSet=set.toString().split(".")[0]; 
		var numSet=parseInt(strSet); 
		set=numSet+1;} 
    return set;};

