var setSize=function(dataLength, expectedSetSize){
	var set=dataLength/expectedSetSize;
	var rem=dataLength%expectedSetSize; 
	var result; 
	if(rem!=0){
		var strSet=set.toString().split(".")[0]; 
		var numSet=parseInt(strSet[0]); 
		result=numSet+1;} 
	return result;}