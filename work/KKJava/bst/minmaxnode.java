// public class minmaxnode {

// }public void minNode() {
// Node current = head;
// int min;

// if(head == null) {
// System.out.println("List is empty");
// }
// else {
// //Initializing min with head node data
// min = head.data;

// while(current != null){
// //If current node's data is smaller than min
// //Then, replace value of min with current node's data
// if(min > current.data) {
// min = current.data;
// }
// current= current.next;
// }
// System.out.println("Minimum value node in the list: "+ min);
// }
// }

// //maxNode() will find out the maximum value node in the list
// public void maxNode() {
// Node current = head;
// int max;

// if(head == null) {
// System.out.println("List is empty");
// }
// else {
// //Initializing max with head node data
// max = head.data;

// while(current != null){
// //If current node's data is greater than max
// //Then, replace value of max with current node's data
// if(max < current.data) {
// max = current.data;
// }
// current = current.next;
// }
// System.out.println("Maximum value node in the list: "+ max);
// }
// }
