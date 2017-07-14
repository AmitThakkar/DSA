import java.util.ArrayList;

public class MultiplyNumbers {

    public static void main(String[] args) {
        MultiplyNumbers equilibriumIndex = new MultiplyNumbers();

        String number1 = "55";
        String number2 = "55";
        String multiply = equilibriumIndex.multiplyNumbers(number1, number2);
        System.out.println(multiply);
    }

    private void addCarryIntoArray(Integer carry, ArrayList<Integer> arrayList) {
        if (carry > 0) {
            arrayList.add(carry % 10);
            addCarryIntoArray(carry / 10, arrayList);
        }
    }

    private ArrayList<Integer> sumNumbers(ArrayList<Integer> number1, ArrayList<Integer> number2) {
        ArrayList<Integer> sum = new ArrayList<>();
        Integer carry = 0;
        Integer maxSize = number1.size() > number2.size() ? number1.size() : number2.size();
        for (Integer addingIndex = 0; addingIndex < maxSize; addingIndex++) {
            Integer total = 0;
            if (number1.size() > addingIndex && number2.size() > addingIndex) {
                total = number1.get(addingIndex) + number2.get(addingIndex) + carry;
                sum.add(total % 10);
                carry = total / 10;
            } else if (number1.size() > addingIndex) {
                total = number1.get(addingIndex) + carry;
                sum.add(total % 10);
                carry = total / 10;
            } else {
                total = number2.get(addingIndex) + carry;
                sum.add(total % 10);
                carry = total / 10;
            }
        }
        addCarryIntoArray(carry, sum);
        return sum;
    }

    public String multiplyNumbers(String number1, String number2) {
        ArrayList<Integer> result = new ArrayList<>();
        Integer carry = 0;
        for (Integer number2Index = 0; number2Index < number2.length(); number2Index++) {
            ArrayList<Integer> temp = new ArrayList<>();
            for (Integer index = 0; index < number2Index; index++) {
                temp.add(0);
            }
            for (Integer number1Index = 0; number1Index < number1.length(); number1Index++) {
                Integer firstNumber = Integer.parseInt(number1.charAt(number1.length() - 1 - number1Index) + "");
                Integer secondNumber = Integer.parseInt(number2.charAt(number2.length() - 1 - number2Index) + "");
                Integer multiply = firstNumber * secondNumber + carry;
                temp.add(multiply % 10);
                carry = multiply / 10;
            }
            addCarryIntoArray(carry, temp);
            result = sumNumbers(temp, result);
            carry = 0;
        }
        StringBuilder multiplication = new StringBuilder();
        for (Integer resultIndex = result.size() - 1; resultIndex >= 0; resultIndex--) {
            multiplication.append(result.get(resultIndex));
        }
        return multiplication.toString();
    }
}
