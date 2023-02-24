/**
Step One:
1. O(n)
2. O(n)
3. O(1)
4. O(n^3)
5. O(4n) -> O(n)
6. O(n)
7. O(n log n + n) -> O(n log(n)
8. O(2^n)
9. O(9) -> O(1)

Step Two:
1. O(n)
2. O(n)
3. O(1)
4. O(n)
5. O(n^2)
6. O(n)

Step Three:
1. T
2. T
3. F
4. O(n)
5. O(n)
6. O(n)
7. n log n
8. O(n)
9. O(1)
10. O(1)
11. O(n)
12. O(n)
*/


// O(n)
function pairSum(arr) {
    const twoLargestNums = [];

    for (let i = 0; i < 2; i++) {
        twoLargestNums.push(Math.max(...arr));
        let largestNum = twoLargestNums[0];
        let index = arr.indexOf(largestNum);     // 3
        arr.splice(index, 1);
    }

    return twoLargestNums[0] + twoLargestNums[1];
}