function Graph() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function (vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
}

Graph.prototype.size = function () {
    return this.vertices.length;
};

Graph.prototype.relations = function () {
    return this.numberOfEdges;
};

Graph.prototype.print = function () {
    console.log(this.vertices.map(function (vertex) {
        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
    }, this).join(' | '));
};


var graph = new Graph();
graph.addVertex(1);

/*
Graph.prototype.removeVertex = function (vertex) {
    var index = this.vertices.indexOf(vertex);
    if (~index) {
        this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) {
        var adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
};
*/