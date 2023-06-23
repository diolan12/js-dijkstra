import { Dijkstra } from "../src/dijkstra";
import { Graph } from "../src/graph";


describe("testShoertestPath", () => {
    const graph: Graph = {
        A: { B: 3, C: 5, D: 9 },
        B: { A: 3, C: 3, D: 4, E: 7 },
        C: { A: 5, B: 3, D: 2, E: 6, F: 3 },
        D: { A: 9, B: 4, C: 2, E: 2, F: 2 },
        E: { B: 7, C: 6, D: 2, F: 5 },
        F: { C: 3, D: 2, E: 5 },
      };

    const dijkstra = new Dijkstra()

    dijkstra.addVertex('A', [{ 'B': 3 }])
    dijkstra.addEdge('A', 'B', 12.0).addEdge('D', 'E', 6)

    let path = dijkstra.findShortestPath('A', 'D')


    it("should be A", () => {
        expect(path[0]).toBe('A')
    })
    it("should be C", () => {
        expect(path[1]).toBe('C')
    })
    it("should be D", () => {
        expect(path[2]).toBe('D')
    })
})