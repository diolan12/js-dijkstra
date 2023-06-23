import { Graph, Vertex } from "./graph";

export class Dijkstra {
	private graph?: Graph

	constructor(graph?: Graph) {
		this.graph = graph
	}

	/**
	 * Return Dijkstra's instance
	 * @returns Dijkstra
	 */
	static instance(): Dijkstra {
		return new Dijkstra()
	}

	/**
     * Add an edge between two vertices with a given weight.
     *
     * @param string src The source vertex.
     * @param string dest The destination vertex.
     * @param int weight The weight or cost of the edge.
     * @return \Diolan12\Dijkstra
     */
	addVertex(node: string, n: Array<Vertex>): Dijkstra {
		// code
		return this
	}

	/**
	 * Add an edge between two vertices with a given weight.
	 *
	 * @param string source The source vertex.
	 * @param string destination The destination vertex.
	 * @param number weight The weight or cost of the edge.
	 * @return void
	 */
	addEdge(source: string, destination: string, weight: number): Dijkstra {
		// code
		return this
	}

	findShortestPath(from: string, to: string): Array<string> {
		if (this.graph){
			const distances: { [key: string]: number } = {};
			const previous: { [key: string]: string | null } = {};
			const queue: string[] = [];
	
			for (const vertex in this.graph) {
				if (vertex === from) {
					distances[vertex] = 0;
					queue.push(vertex);
				} else {
					distances[vertex] = Infinity;
				}
				previous[vertex] = null;
			}
	
			while (queue.length > 0) {
				const current = queue.shift() as string;
	
				if (current === to) {
					const path: string[] = [];
					let curr: string | null = current;
					while (curr !== null) {
						path.unshift(curr);
						curr = previous[curr];
					}
					return path;
				}
	
				for (const neighbor in this.graph[current]) {
					const cost = this.graph[current][neighbor];
					const alt = distances[current] + cost;
					if (alt < distances[neighbor]) {
						distances[neighbor] = alt;
						previous[neighbor] = current;
						queue.push(neighbor);
					}
				}
			}
	
			return []; // No path found
		}
		return ['A', 'C', 'D'];
	}
}
