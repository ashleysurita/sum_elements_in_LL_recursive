class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function sumElements(head) {
    if(!head) return 0
    if(!head.next) return head.value
    
    
    let sum = head.value
    if(head.next){
        sum += sumElements(head.next)
    }
    
    return sum
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sumElements(null)) // 0
console.log(sumElements(LL1)) // 10
console.log(sumElements(new ListNode(1))) // 1
