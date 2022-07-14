//People are standing in a queue to deposit an amount in a bank.If the amount they deposit is greater than 2 lakh add them to Queue_ privilege else if the amount they deposit is less than sixty thousand add them to Queue_normal. Find the total amount deposited by privileged customers and normal customers separately

import java.util.*;

public class dsaLab {

    public static void main(String[] args) {
        System.out.println("Queues");

        qimp q_privilege = new qimp();
        qimp q_normal = new qimp();
        qimp q_unaccepted = new qimp();

        Scanner sc = new Scanner(System.in);

        System.out.println("No. of inputs: ");
        int n = sc.nextInt();

        System.out.println("Enter amount (in 10K's): ");
        int amt;

        for (int i = 0; i < n; i++) {

            amt = sc.nextInt();
            if (amt > 20) {
                q_privilege.enqueue(amt);

            } else if (amt < 4) {
                q_normal.enqueue(amt);
            } else {
                q_unaccepted.enqueue(amt);
            }
        }

        System.out.println("normal: ");
        q_normal.show();

        System.out.println(" ");

        System.out.println("privilege: ");
        q_privilege.show();

        System.out.println(" ");

        System.out.println("unnaccepted: ");
        q_unaccepted.show();

        System.out.println(" ");

        System.out.println("Sum privilege: ");
        System.out.println(q_privilege.sum() + "0000");

        System.out.println("Sum normal: ");
        System.out.println(q_normal.sum() + "0000");

    }
}

class Node {

    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class qimp {
    Node front = null;
    Node rear = null;

    boolean isEmpty() {
        if (front == null && rear == null) {
            return true;
        }
        return false;
    }

    void enqueue(int data) {
        Node tempNode = new Node(data);

        if (isEmpty()) {
            front = rear = tempNode;
        } else {
            rear.next = tempNode;
        }

        rear = tempNode;
    }

    void dequeue() {
        System.out.println(" ");
        if (isEmpty()) {
            System.out.println("Not possible");
        } else {
            front = front.next;
        }
    }

    int sum() {
        int sum = 0;
        Node current = front;

        while (current != null) {
            sum += current.data;
            current = current.next;
        }

        return sum;
    }

    void show() {
        Node current = front;

        while (current != null) {
            System.out.print(current.data + "0000 ");
            current = current.next;
        }
    }
}