class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function arrayToLinkedList(array) {
    if (array.length === 0) {
      return null;
    }
  
    const head = new Node(array); 
    let currentNode = head;
  
    for (let i = 0; i < array.length; i++) {
      const newNode = new Node(array[i]);
      currentNode.next = newNode;
      currentNode = newNode;
    }
  
    return head;
  }
  const array = [1, 2, 3, 4, 5];
  const linkedList = arrayToLinkedList(array);
  
  // Output the linked list
  let currentNode = linkedList;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
    