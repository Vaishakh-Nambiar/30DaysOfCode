package queues;

public class priorityQueue {

    // public class raw_LL_Impl {
    public static void main(String[] args) {
        Queues q = new Queues();

        q.enqueue(20);
        q.enqueue(50);
        q.enqueue(10);
        q.enqueue(40);

        q.peek();

        q.dequeue();
        q.dequeue();
        // q.dequeue();
        // q.dequeue();
        // q.dequeue();

        q.peek();
        q.maxNode();
        q.minNode();
    }
}

class Node {

    int data;
    Node next;

    Node(int d) {
        this.data = d;
        this.next = null;
    }
    // creating a node with (data,next)
}

class Queues {
    Node f = null, r = null;

    void sortList() {

        // Node current will point to f
        Node current = f, index = null;

        int temp;

        if (f == null) {
            return;
        } else {
            while (current != null) {
                // Node index will point to node next to
                // current
                index = current.next;

                while (index != null) {
                    // If current node's data is greater
                    // than index's node data, swap the data
                    // between them
                    if (current.data > index.data) {
                        temp = current.data;
                        current.data = index.data;
                        index.data = temp;
                    }

                    index = index.next;
                }
                current = current.next;
            }
        }
    }

    int enqueue(int d) {
        Node newNode = new Node(d);

        if (f == null && r == null) {
            f = newNode;
            r = newNode;
            // pointing to the first added node
        } else {
            r.next = newNode; // adding the newNode to existing rear
            r = newNode; // updating rear to be in the end
        }

        sortList();
        return 0;
    }

    int dequeue() {
        if (f == null) {
            System.out.println("\nEmpty");
            return 0;
        } else {
            Node t = f; // storing front value to temp variable
            f = f.next; // incrementing front to next value
        }

        if (f == null) {
            r = null;
        }
        return 0;
    }

    void peek() {
        Node current = f;

        System.out.println(" ");
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }

    void minNode() {
        Node current = f;
        int min;

        if (f == null) {
            System.out.println("List is empty");
        } else {
            // Initializing min with f node data
            min = f.data;

            while (current != null) {
                if (min > current.data) {
                    min = current.data;
                }
                current = current.next;
            }
            System.out.println("Minimum value node in the list: " + min);
        }
    }

    void maxNode() {
        Node current = f;
        int max;

        if (f == null) {
            System.out.println("List is empty");
        } else {
            max = f.data;

            while (current != null) {
                if (max < current.data) {
                    max = current.data;
                }
                current = current.next;
            }
            System.out.println("Maximum value node in the list: " + max);
        }
    }

}
