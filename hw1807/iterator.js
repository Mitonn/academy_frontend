'use strict';

//2) Написать итератор, который вернет последовательно от from до to с шагом step. 
//Например:

/*let my_iterator = {
  from: 0,
  to: 10,
  step: 5
}

for (let val of my_iterator) {
  console.log(num); // 0, 5, 10
}*/

function* myIterator(from, to, step) {
    let i = from;
    while (i < to) {
        i += step;
        yield i;
    }
}

let my_iterator = myIterator(0, 10, 5);

console.log(my_iterator.next());
console.log(my_iterator.next());
console.log(my_iterator.next());