public class CountProperty {

    public static void main(String[] args) {
        CountProperty countProperty = new CountProperty();

        int[][] array = {
            {5, 4, 4},
            {4, 3, 4},
            {3, 2, 4},
            {2, 2, 2},
            {3, 3, 4},
            {1, 4, 4},
            {4, 1, 1}
        };
        System.out.print(countProperty.countProperties(array));
    }

    private void markProperty(int[][] array, int i, int j, int color, int[][] temp) {
        if (array.length > i && i >= 0 && array[0].length > j && j >= 0) {
            if (array[i][j] == color && temp[i][j] != -1) {
                temp[i][j] = -1;

                markProperty(array, i, j + 1, color, temp);
                markProperty(array, i + 1, j, color, temp);
                markProperty(array, i - 1, j, color, temp);
                markProperty(array, i, j - 1, color, temp);
            }
        }
    }

    public int countProperties(int[][] array) {
        int result = 0;
        if (array == null || array.length == 0 || array[0].length == 0) {
            return 0;
        }
        int[][] temp = new int[array.length][array[0].length];
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                if (temp[i][j] == 0) {
                    result++;
                    markProperty(array, i, j, array[i][j], temp);
                }
            }
        }

        return result;
    }
}
