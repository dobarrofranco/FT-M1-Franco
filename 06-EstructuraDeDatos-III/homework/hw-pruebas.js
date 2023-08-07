function binarySearchTree (value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

binarySearchTree.prototype.insert = function(value) {
    let subTree = new binarySearchTree(value)

    if (value < this.value) {
        if (this.left === null) {
            this.left = subTree;
            
        }else{
            this.left.insert(value);
            
        }
    }

    if (value >= this.value) {
        if (this.right === null) {
            this.right = subTree;
            
        }else{
            this.right.insert(value);
            
        }
    }

    
}

// let miTree = new binarySearchTree(5)
// console.log(miTree);
// console.log(miTree.insert(1));
// console.log(miTree.insert(2));
// console.log(miTree.insert(7));
// console.log(miTree);

