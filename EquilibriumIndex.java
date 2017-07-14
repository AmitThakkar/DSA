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
