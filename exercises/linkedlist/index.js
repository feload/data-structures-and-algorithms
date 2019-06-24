// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    insertFirst (data) {
        this.head = new Node(data, this.head)
    }

    size () {
        let counter = 0
        let node = this.head

        while (node) {
            node = node.next
            counter++
        }

        return counter
    }

    getFirst () {
        return this.head
    }

    getLast () {
        let node = this.head

        if (node == null) return null

        while (node.next) {
            node = node.next
        }
        return node
    }

    clear () {
        this.head = null
    }

    removeFirst () {
        this.head = (this.head) ? this.head.next : null
    }

    removeLast () {
        let node = this.head

        if(node == null) return
        if (node.next == null){
            this.head = null
            return
        }

        let last
        while (node.next) {
            last = node
            node = node.next
        }

        last.next = null
    }

    insertLast (data) {
        const last = this.getLast()
        const node = new Node(data)
        if (last) {
            last.next = node
        }else{
            this.head = node
        }
    }

    getAt (index) {
        if (index > this.size() - 1) return null
        let counter = 0
        let node = this.head
        while (node) {
            if (counter == index) return node
            node = node.next
            counter++
        }
    }

    removeAt (index) {

        // When out of range.
        if (index > this.size() - 1) return null;

        // When no items.
        if (this.size() == 0) return null

        // When first item.
        if (index == 0){
            if (this.head.next) {
                this.head = this.head.next
            }else{
                this.head = null
            }
        }

        let node = this.head
        let prev = node
        // When last item.
        if (index == this.size() - 1) {
            while (node.next) {
                prev = node
                node = node.next
            }
            prev.next = null

        // When middle item.
        }else{
            node = this.head
            prev = node
            let counter = 0
            while (counter < index) {
                prev = node
                node = node.next
                counter++
            }

            prev.next = prev.next.next
        }
    }

    insertAt (data, index) {
        let newNode = new Node(data)

        // If list is empty.s
        if (this.size() == 0) {
            this.head = newNode
        }else

        // If index is out of bound.
        if (index >= this.size() - 1) {
            const last = this.getLast()
            last.next = newNode
        }else

        // Insert at the very beginning.
        if (index == 0) {

            if (this.head == null) {
                this.head = newNode
            }else{
                newNode.next = this.head
                this.head = newNode
            }

        // Insert in the middle.
        }else{
            let counter = 0
            let node = this.head
            let prev = node
            while (node.next) {
                if (counter == index) {
                    newNode.next = node
                    prev.next = newNode
                    return
                }
                prev = node
                node = node.next
                counter++
            }
        }
    }

    forEach (fn) {
        let node = this.head
        while (node) {
            fn(node)
            node = node.next
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while(node)        {
            yield node
            node = node.next
        }
    }

}

module.exports = { Node, LinkedList };
