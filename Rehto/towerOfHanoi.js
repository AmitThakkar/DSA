/**
 * Created by shreyancejain on 07/11/16.
 */

 /**
 Problem:- Give solution of tower of hanoi https://en.wikipedia.org/wiki/Tower_of_Hanoi.
 */

(() => {
  let solveTowerOfHanoi = (noOfDisks, from, to, via) => {
    if (noOfDisks < 1) {
      return "There should be some disks";
    }
    if (noOfDisks === 1) {
      return [from + " => " + to];
    }
    let L1 = solveTowerOfHanoi(noOfDisks - 1, from, via, to)
    let L2 = solveTowerOfHanoi(1, from, to, via)
    let L3 = solveTowerOfHanoi(noOfDisks - 1, via, to, from);
    return L1.concat(L2, L3);
  };
  console.log(solveTowerOfHanoi(3, "A", "B", "C"));
})();

