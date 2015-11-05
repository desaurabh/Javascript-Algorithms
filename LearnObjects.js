/**
 * This will iterate over objects inside objects &
 * deletes the given set of properties from them
 * @param {object} object
 * @param {array} _delObj
 *
 */
function deepLearnObject(object, _delObj){
    if(typeof(object)==='object'){
        for(var obj in object){
         if(object.hasOwnProperty(obj)){
             console.log("PARENT : "+obj+"==========================");
             if(typeof(object[obj])==='object'){
                 for(var remProp in _delObj){
                     if(object[obj]!==null && object[obj].hasOwnProperty(remProp))
			 delete object[obj][remProp];
		 }
		 deepLearnObject(object[obj]);
	     }
	 }
	}
    }
    else{
	console.log("object is not defined!");
    }
}

        
