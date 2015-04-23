var set;
var calculateSetSize=function(dataLength, expectedSetSize){
	set=dataLength/expectedSetSize;
	if((dataLength%expectedSetSize)!=0){
		var strSet=set.toString().split(".")[0]; 
		var numSet=parseInt(strSet[0]); 
		set=numSet+1;} 
	return set;}