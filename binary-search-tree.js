class Node {
    constructor(data) {
      this.data = data;
      this.leftPart = null;
      this.rightPart = null;
    }
  }
  
  class Tree {
    constructor(array) {
      this.array = [...removeDuplicates(mergeSort(array))];
      this.root = this.buildTree(this.array, 0, this.array.length - 1);
      this.preorderData = [];
      this.inorderData = [];
      this.postorderData = [];
    }