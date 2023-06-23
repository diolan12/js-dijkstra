# Dijkstra JS Implementation

[![PHP Composer](https://github.com/diolan12/dijkstra/actions/workflows/php.yml/badge.svg)](https://github.com/diolan12/dijkstra/actions/workflows/php.yml)
[![Downloads](https://img.shields.io/packagist/dt/diolan12/dijkstra)](https://packagist.org/packages/diolan12/dijkstra)
[![Latest Stable Version](https://img.shields.io/packagist/v/diolan12/dijkstra)](https://packagist.org/packages/diolan12/dijkstra)
[![License](https://img.shields.io/packagist/l/diolan12/dijkstra)](https://packagist.org/packages/diolan12/dijkstra)

 A simple JS implementation for Dijkstra's algorithm

 Generated by OpenAI ChatGPT [Mar 14 Version](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

 See [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

## Installation

```cli
npm i js-dijkstra
```

## Usage

```ts
// Adding edge
dijkstra.addEdge('D', 'B', 5).addEdge('D', 'C', 6);
// Is equals to adding vertex
dijkstra.addVertex('D', [{'B': 5}, {'C': 6}]);
```

```ts
import { Dijkstra } from "../src/dijkstra";


const dijkstra = new Dijkstra();
// or
const dijkstra = Dijkstra.instance();

// Add vertices and edges
dijkstra.addVertex('A', [{'B' : 3}, {'C' : 2}]);
dijkstra.addVertex('B', [{'A' : 3}, {'C' : 1}, {'D' : 5}]);
dijkstra.addVertex('C', [{'A' : 2}, {'B' : 1}, {'D' : 6}]);
dijkstra.addEdge('D', 'B', 5).addEdge('D', 'C', 6);

let paths = dijkstra.findShortestPath('A', 'D'); // [A, C, D]
```

## Method `addVertex` vs `addEdge`

`addVertex`: This method is used to add a vertex to the graph. A vertex represents a point or node in the graph. In the context of the Dijkstra algorithm, a vertex can be thought of as a location or node in a network. The addVertex method takes two parameters: the name of the vertex and an array of neighboring vertices (edges) with their corresponding edge weights. It adds the vertex and its associated edges to the graph.

`addEdge`: This method is used to add an edge between two vertices in the graph. An edge represents a connection or link between two vertices. In the context of the Dijkstra algorithm, an edge represents a cable route or path between two locations in a network. The addEdge method takes three parameters: the source vertex, the destination vertex, and the weight or cost of the edge. It establishes the connection between the source and destination vertices with the specified weight.

To summarize, addVertex is used to add a vertex with its neighboring edges to the graph, while addEdge is used to establish a connection (edge) between two vertices with a specified weight. Together, these methods allow you to build the graph representation required for the Dijkstra algorithm to find the shortest path between vertices in the network.

## Dev Build

```cli
npm run build
```

## Dev Test

```cli
npm test
```
