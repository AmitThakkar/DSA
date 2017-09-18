/**
 * Created by akumar13 on 7/15/17.
 */
public class Solution2 {
    int solution(int n) {
        int[] d = new int[30];
        int l = 0;
        int p;
        while (n > 0) {
            d[l] = n % 2;
            n /= 2;
            l++;
        }
        for (p = 1; p < 1 + l; ++p) {
            if(p <= l/2) {int i;
                boolean ok = true;
                for (i = 0; i < l - p; ++i) {
                    if (d[i] != d[i + p]) {
                        ok = false;
                        break;
                    }
                }
                if (ok) {
                    return p;
                }}
        }
        return -1;
    }

    public static void main(String args[]) {
        Solution2 s = new Solution2();
        System.out.println(s.solution(102));
        System.out.println(s.solution(1651));
    }
}
