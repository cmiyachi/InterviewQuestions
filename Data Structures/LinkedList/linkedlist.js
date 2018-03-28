function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    //Helper Classes For Linked List
    //1. Append
    this.append = function (element) {
        let node = new Node(element), current;

        if (head === null) {
            head = node;
        }
        else {
            current = head;
            //Find the Last Node
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    //2. Insert
    this.insert = function (position, element) {
        //Check For Out of bounds
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    //3. RemoveAt
    this.removeAt = function (position) {
        //Check for Out of Bound Value
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            //Remove First Item
            if (position === 0) {
                head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //Link previous with current's next
                previous.next = current.next;
            }
            length--;
            return current.element;

        } else {
            return null;
        }
    };


    //4. Remove
    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    //5. IndexOf
    this.indexOf = function (element) {
        let current = head,
            index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    //6. IsEmpty
    this.isEmpty = function () {
        return length === 0;
    };
    //7. Size
    this.size = function () {
        return length;
    };
    //8. getHead
    this.getHead = function () {
        return head;
    };
    //9. ToString
    this.toString = function () {
        let current = head,
            string = '';
        while (current) {
            string += current.element + (current.next ? ' -> ' : '');
            current = current.next;
        }
        return string;
    };
    //10.Print
    this.print = function () {
        console.log(this.toString());
    };

    this.reverseLinkedList = function (head) {
        var prev;
        while (head.next) {
            var next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        head.next = prev;
        return head;
    };

    this.breakllinHalf = function () {

    }

};

function removeKFromList(l, k) {
    
}


//Implement Merge Sort For LL
/*
MergeSort(headRef)
1) If head is NULL or there is only one element in the Linked List
    then return.
2) Else divide the linked list into two halves.
      FrontBackSplit(head, &a, &b); /* a and b are two halves 
3) Sort the two halves a and b.
    MergeSort(a);
MergeSort(b);

4) Merge the sorted a and b(using SortedMerge() discussed here)
and update the head pointer using headRef.
     * headRef = SortedMerge(a, b);
*/

var ll = new LinkedList();
ll.append(1);
ll.insert(0, 14);
ll.print();
console.log(ll.getHead());
