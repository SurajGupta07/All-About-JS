// data => []
// pointer => store address of other element => null
//head => address of 1st node

let arr = [];

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let head = null;
// Create a new node with the given data
const createNode = data => new Node(data, null);
// Insert the new node at beginning of the Linked List
let insertNodeAtBeginning = data => {
  let newNode = createNode(data);
  newNode.next = head;
  head = newNode;
};

insertNodeAtBeginning(20);
insertNodeAtBeginning(30);
insertNodeAtBeginning(40);
insertNodeAtBeginning(50);

// Insert a node at the end of the linked list
const insertNodeAtEnd = data => {
  let newNode = createNode(data);

  if (head === null) {
    // Checks if the linked list is currently empty
    head = newNode;
  } else {
    let temp = head;
    while (temp.next !== null) {
      // Used to find the last node in the list
      temp = temp.next;
    }
    temp.next = newNode;
  }
};

insertNodeAtEnd(2);
insertNodeAtEnd(3);

// Insert a node after a specific node
const insterAfterPosition = (prevNode, newData) => {
  if (prevNode === null) return;
  let newNode = createNode(newData);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
};

const insterAtPosition = (number, newData) => {
  let newNode = createNode(newData);
  let current = head;
  while (current) {
    if (current.data === number) {
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    current = current.next;
  }
};

insterAtPosition(20, 19);

const printList = () => {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

printList();
