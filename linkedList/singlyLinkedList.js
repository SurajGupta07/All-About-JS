let arr = [];

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let head = null;

// Create a new node with the given data
const createNode = (data) => new Node(data, null);

// Insert the new node at beginning of the Linked List
const insertNodeAtBeginning = (data) => {
  let newNode = createNode(data); // Creating new node
  newNode.next = head;
  head = newNode;
};

insertNodeAtBeginning(10);
insertNodeAtBeginning(20);
insertNodeAtBeginning(30);

const printList = () => {
  let temp = head;
  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
};

printList();

// Insert a node at the end of the linked list
const insertNodeAtEnd = (data) => {
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

insertNodeAtEnd(1);
insertNodeAtEnd(2);

// Insert a node after a specific node
const insertAfterNode = (prevNode, newData) => {
  if (prevNode === null) {
    console.log("Given node must be available in your linked list");
    return;
  }

  let newNode = createNode(newData);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
};

let nodeToInsertAfter = head;
insertAfterNode(nodeToInsertAfter, 3);
