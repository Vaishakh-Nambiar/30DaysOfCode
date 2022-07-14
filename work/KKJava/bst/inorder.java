package bst;

public class inorder {
    public static void main(String[] args) {

        Tree t = new Tree();

        t.insertData(10);
        t.insertData(20);
        t.insertData(400);
        t.insertData(50);
        t.insertData(1);

        System.out.println("Inorder");
        t.inOrder(t.root);
        System.out.println(" ");

        System.out.println("preorder");
        t.preorder(t.root);
        System.out.println(" ");

        System.out.println("Postorder");
        t.postorder(t.root);
        System.out.println(" ");

        System.out.println("Leaf nodes");
        t.printLeafNodes(t.root);
        System.out.println(" ");
    }
}

class Node {
    int data;
    Node l, r;

    Node(int data) {
        this.data = data;
        l = r = null;
    }
}

class Tree {
    Node root;

    Tree() {
        root = null;
    }

    void insertData(int data) {

        Node newNode = new Node(data);

        if (root == null) {
            root = newNode;
        } else {
            Node c = root, p = null;

            while (true) {
                p = c;

                if (data < c.data) {
                    c = c.l;

                    if (c == null) {
                        p.l = newNode;
                        return;
                    }

                } else {
                    c = c.r;
                    if (c == null) {
                        p.r = newNode;
                        return;
                    }
                }

            }
        }

    }

    void inOrder(Node n) {

        if (n == null)
            return;

        inOrder(n.l);

        System.out.print(n.data + " ");

        inOrder(n.r);

    }

    void postorder(Node node) {
        if (node == null)
            return;

        postorder(node.l);
        postorder(node.r);

        System.out.print(node.data + " ");
    }

    void preorder(Node node) {
        if (node == null)
            return;

        System.out.print(node.data + " ");
        preorder(node.l);
        preorder(node.r);
    }

    void printLeafNodes(Node root) {

        if (root == null)
            return;

        if (root.l == null &&
                root.r == null) {
            System.out.print(root.data + " ");
            return;
        }

        if (root.l != null)
            printLeafNodes(root.l);

        if (root.r != null)
            printLeafNodes(root.r);
    }
}
