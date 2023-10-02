class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Append a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Display the list forward
    displayForward() {

        let current = this.head;
        while (current) {
            console.log(current.data + " -> ");
            current = current.next;
        }
    }

    // Display the list backward
    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data + " -> ");
            current = current.prev;
        }
    }



    deleteValue(value) {
        if (!this.head) {
            return;
        }
    
        let current = this.head;
    
        // Special case: If the head node contains the value to delete
        if (current.data === value) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // If the list becomes empty, update the tail reference as well
                this.tail = null;
            }
            return;
        }
    
        while (current) {
            if (current.data === value) {
                // Update next node's prev reference
                current.next.prev = current.prev;
                // Update previous node's next reference
                current.prev.next = current.next;
                return;
            }
            current = current.next;
        }
    }
    

    
}

// Creating a doubly linked list
const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.append(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);

myDoublyLinkedList.deleteValue(2);
// Displaying the linked list forward and backward
console.log("Forward:");
myDoublyLinkedList.displayForward();
console.log("\nBackward:");
myDoublyLinkedList.displayBackward();
