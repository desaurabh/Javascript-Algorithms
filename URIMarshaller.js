function parseURI(uri) {
    var url = decodeURIComponent(uri).split("/");
    var query = [],
        paths = [];
    var queries = function(query) {
        var paths = query.split("&");
        var queries = {};
        for (var p in paths) {
            if (paths[p].match(/[=]/gi)) {
                var vals = paths[p].split("=");
                queries[vals[0]] = vals[1];
            }
        }
        return queries;
    };
    for (var i in url) {
        if (url[i] !== "") {
            if (url[i].match(/[ ? ]/gi)) {
                paths.push(url[i].split("?")[0]);
                query.push(queries(url[i].split("?")[1]));
            } else paths.push(url[i]);
        }
    }

    return {
        queries: query,
        paths: paths
    };
}
