package bst;

public class binarySearchtree {
    public static class Node {
        int data;
        Node l;
        Node r;

        public Node(int data) {
            this.data = data;
            this.l = null;
            this.r = null;
        }
    }

    public Node root;

    public binarySearchtree() {
        root = null;
    }

    public void insert(int data) {
        Node newNode = new Node(data);

        if (root == null) {
            root = newNode;
            return;
        } else {
            Node current = root, parent = null;

            while (true) {
                parent = current;

                if (data < current.data) {
                    current = current.l;
                    // System.out.println(current);
                    if (current == null) {
                        parent.l = newNode;
                        return;
                    }
                } else {
                    current = current.r;
                    if (current == null) {
                        parent.r = newNode;
                        return;
                    }
                }
            }
        }
    }

    public Node minNode(Node root) {
        if (root.l != null)
            return minNode(root.l);
        else
            return root;
    }

    public Node deleteNode(Node node, int value) {
        if (node == null) {
            return null;
        } else {
            // value is less than node's data then, search the value in l subtree
            if (value < node.data)
                node.l = deleteNode(node.l, value);

            // value is greater than node's data then, search the value in r subtree
            else if (value > node.data)
                node.r = deleteNode(node.r, value);

            // If value is equal to node's data that is, we have found the node to be
            // deleted
            else {
                // If node to be deleted has no child then, set the node to null
                if (node.l == null && node.r == null)
                    node = null;

                // If node to be deleted has only one r child
                else if (node.l == null) {
                    node = node.r;
                }

                // If node to be deleted has only one l child
                else if (node.r == null) {
                    node = node.l;
                }

                // If node to be deleted has two children node
                else {
                    // then find the minimum node from r subtree
                    Node temp = minNode(node.r);
                    // Exchange the data between node and temp
                    node.data = temp.data;
                    // Delete the node duplicate node from r subtree
                    node.r = deleteNode(node.r, temp.data);
                }
            }
            return node;
        }
    }

    public void inorderTraversal(Node node) {

        // Check whether tree is empty
        if (root == null) {
            System.out.println("Tree is empty");
            return;
        } else {

            if (node.l != null)
                inorderTraversal(node.l);
            System.out.print(node.data + " ");
            if (node.r != null)
                inorderTraversal(node.r);

        }
    }

    public boolean search(int data) {
        return search(this.root, data);
    }

    private boolean search(Node root, int data) {
        if (root == null) {
            return false;
        } else if (root.data == data) {
            return true;
        } else if (root.data > data) {
            return search(root.l, data);
        }
        return search(root.r, data);
    }

    public static void main(String[] args) {

        binarySearchtree bt = new binarySearchtree();
        // Add nodes to the binary tree
        bt.insert(50);
        bt.insert(30);
        bt.insert(70);
        bt.insert(60);
        bt.insert(10);
        bt.insert(90);

        System.out.println("Binary search tree after insertion:");

        bt.inorderTraversal(bt.root);

        Node deletedNode = null;
        deletedNode = bt.deleteNode(bt.root, 90);

        System.out.println("\nBinary search tree after deleting node 90:");
        bt.inorderTraversal(bt.root);

        deletedNode = bt.deleteNode(bt.root, 30);
        System.out.println("\nBinary search tree after deleting node 30:");
        bt.inorderTraversal(bt.root);

        deletedNode = bt.deleteNode(bt.root, 50);
        System.out.println("\nBinary search tree after deleting node 50:");
        bt.inorderTraversal(bt.root);

        System.out.println(" ");
        System.out.println(bt.search(10));

    }
}
// }
//