class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
    print() {
        let current = this;
         return (JSON.stringify(current))
        // while(this.next) {
        //     console.log(this.value);
        //     if(current.next) current = current.next;
        // }
      }
}

    
function rec(current, k) {
    let next = null;
    if (current.value === k) {
        next = current.next;
        if (next.value !== k) {            
            current.next = next.next;
            current.value = next.value;
        } else {
            return rec(current.next, k)
        }
    }
    return current
}

function removeKFromList(l, k) {
    let current = l;
    while (current.next) {
       let next = null;
        while (current.value === k && current.next !== null) {
            next = current.next;
            current.value = next.value;
            current.next = next.next;
        }    
        if (current.next.value === k && current.next.next === null) {
            current.next = null;
            console.log(current);
        } else current = current.next
    } 
    return l;
  }
// function removeKFromList(l, k) {
//     let current = l;
//     while (current.next) {
//         let next = null;
//         while (current.value === k) {
//             next = current.next;
//             current.next = next.next;
//             current.value = next.value;
//         }
//         if (current.next.value === k) {
//             console.log(current)
//             current.next = null;
//         } else {
//             current = current.next
//         }
//     }  
//     return l;
//   }   
function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }
        return new ListNode(cur);
    }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
console.log(initial);
console.log(removeKFromList(initial, 3));
