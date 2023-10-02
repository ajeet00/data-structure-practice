class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data + " -> ");
            current = current.nextNode;
        }
    }

        // Function to delete a node with a specific value
    deleteNode(valueToDelete) {
        if (!this.head) {
            // List is empty, nothing to delete
            return;
        }

        // If the head node contains the value to delete, update the head
        if (this.head.data === valueToDelete) {
            this.head = this.head.nextNode;
            return;
        }

        let current = this.head;
        let previous = null;

        console.log("Previous Node value", current);
        console.log("Current Node Value", current.nextNode);

        while (current) {
            if (current.data === valueToDelete) {
                // Found the node to delete, update the references to skip it
                previous.nextNode = current.nextNode;

                console.log("Matched value ", current.data);
                return;
            }

            console.log("Matched value ", current.data);

            previous = current;
            current = current.nextNode;
        }
    }


    addDataOnSpecificPoint(toFindValue, ValueAsNew) {
  
        if(!this.head){
            return null;
        }

        let current = this.head;
        while(current) {

             if(current.data == toFindValue) {

                const newRecord = new LinkedNode(ValueAsNew);
                let netNode = current.nextNode;
                current.nextNode = newRecord;
                newRecord.nextNode = netNode;

             }

             current = current.nextNode;
        }

    }

    
}

// Creating a singly linked list
const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);

myLinkedList.deleteNode(2);
// Displaying the linked list
myLinkedList.display();

