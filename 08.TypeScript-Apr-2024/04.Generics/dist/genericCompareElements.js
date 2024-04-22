class CompareElements {
    dataArr;
    constructor(params) {
        this.dataArr = params;
    }
    compare(compareElement) {
        return this.dataArr.filter((x) => x == compareElement).length;
    }
}
let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);
console.log(c.compare("b"));
let y = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(y.compare(1));
