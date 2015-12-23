function SortJS() {
    this.sortDesc = function(li) {
        for (var i in li) {
            for (var j in li) {
                for (var k in li) {
                    if (li[j] > li[k]) {
                        var s = li[j];
                        li[j] = li[k];
                        li[k] = s;
                    }
                }

            }
        }
        return li;
    };

    this.sortAsc = function(li) {
        for (var i in li) {
            for (var j in li) {
                for (var k in li) {
                    if (li[j] < li[k]) {
                        var s = li[k];
                        li[k] = li[j];
                        li[j] = s;
                    }
                }

            }
        }
        return li;
    };
}
