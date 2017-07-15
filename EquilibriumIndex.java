/*
* Sum of zero elements is assumed to be equal to 0. This can happen if P = 0 or if P = N−1.
*
* For example, consider the following array A consisting of N = 8 elements:
*
* A[0] = -1
* A[1] =  3
* A[2] = -4
* A[3] =  5
* A[4] =  1
* A[5] = -6
* A[6] =  2
* A[7] =  1
*
* P = 1 is an equilibrium index of this array, because:
*
* A[0] = −1 = A[2] + A[3] + A[4] + A[5] + A[6] + A[7]
* P = 3 is an equilibrium index of this array, because:
*
* A[0] + A[1] + A[2] = −2 = A[4] + A[5] + A[6] + A[7]
* P = 7 is also an equilibrium index, because:
*
* A[0] + A[1] + A[2] + A[3] + A[4] + A[5] + A[6] = 0
* and there are no elements with indices greater than 7.
*
* */

import java.util.ArrayList;

public class EquilibriumIndex {

    public static void main(String[] args) {
        EquilibriumIndex equilibriumIndex = new EquilibriumIndex();

        int[] array = {-1, 3, -4, 5, 1, -6, 2, 1};
        equilibriumIndex.getEquilibriumIndexes(array);
    }

    public void getEquilibriumIndexes(int[] array) {
        ArrayList<Integer> result = new ArrayList<>();

        Integer totalSum = 0;

        ArrayList<Integer> sumArrayList = new ArrayList<>();
        for (Integer index = 0; index < array.length; index++) {
            if (index == 0) {
                sumArrayList.add(array[index]);
            } else {
                sumArrayList.add(sumArrayList.get(index - 1) + array[index]);
            }
        }
        totalSum = sumArrayList.get(sumArrayList.size() - 1);

        for (Integer index = 0; index < array.length; index++) {
            Integer rightSum = totalSum - sumArrayList.get(index);
            Integer leftSum = sumArrayList.get(index) - array[index];
            if (rightSum.equals(leftSum)) {
                System.out.print(index + " ");
            }
        }
        return;
    }
}
