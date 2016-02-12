function ExpressQuery(encodedQuery) {
    this.obj = {};
    this.keys={};
    if (encodedQuery !== 'undefined') {
	this.keys = Object.keys(encodedQuery);
        for (var k in this.keys) {
            if (k === "0") this.obj[this.keys[k]] = encodedQuery[this.keys[k]];
            else {
                var keyArr = this.keys[k].split("[");
                keyArr[1] = keyArr[1].replace("]", "");
 		if(!this.obj.hasOwnProperty(keyArr[0]))
		    this.obj[keyArr[0]]={};
                this.obj[keyArr[0]][keyArr[1]] = encodedQuery[this.keys[k]];
            }
        }
    }
    return this.obj;
};