// FIFO
class linkedList {
  constructor(val) {
    this.node = { val, nextNode: undefined, prevNode: undefined };
    this.val = val;
    this.nextNode = null;
    this.prevNode = null;
  }

  addToList(val) {
    let currentNode = this.node;
    while (currentNode && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new linkedList(val);

    currentNode.nextNode.node.prevNode = currentNode;
    // console.log(this.node);
  }

  removeFromList() {
    if (!this.node) return console.log("no node found");
    console.log(this.node.val);
    this.node = this.node.nextNode;
  }

  returnList() {
    return this.val;
  }
}

const newLinkedList = new linkedList(2);
newLinkedList.addToList(3);
newLinkedList.removeFromList();
newLinkedList.addToList(4);
newLinkedList.removeFromList();
newLinkedList.removeFromList();
newLinkedList.removeFromList();

// class queue{
//     constructor(this, val) {
//         this.queue = linkedList(val)
//     }

//     addItem(this, value) {

//     }

// }
