# Big-O Problems

Analyze the time complexity of the following functions. Which Big-O classes do they belong to? Justify your answer.

## 1. foo

```javascript
const foo = (array) => {
  return array[0] * array[array.length - 1];
};

foo([3, 5, 1, 4, 7]); // 21
```

> Answer: Constant time complexity - Big O(1)
> The operation will take the same amount of time regardless of the size of the array

## 2. bar

```javascript
const bar = (n) => {
  while (n > 1) {
    console.log(n);
    n = n / 2;
  }
  console.log('done');
};

bar(32); // 32 16 8 4 2 done
```

> Answer: Linear time complexity - Big O(n)
> The while loop poeration will process 2 operations in each iteration. The longer the the n value, the opertations will double. The console log of done is obmitted because it is irrelevant as it is one time operation

## 3. boom

```javascript
const boom = (n) => {
  for (let q = 0; q < n; q++) {
    for (let r = 0; r < n; r++) {
      for (let s = 0; s < n; s++) {
        console.log(q, r, s);
      }
    }
  }
};

boom(2);
```

> Answer: Quadratic time complexity: Big O(n^2)

Quadratic time complexity: Big O(n^2)

## 4. Leap Year

```javascript
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```

## 5. Array Sum

```javascript
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

## 6. Chessboard

```javascript
function chessboardSpace(numberOfGrains) {
  let chessboardSpaces = 1;
  let placedGrains = 1;
  while (placedGrains < numberOfGrains) {
    placedGrains *= 2;
    chessBoardSpaces += 1;
  }
  return chessboardSpaces;
}
```

## 7. A-Strings

```javascript
function selectAStrings(arr) [
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('a')) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
]
```

## 8. Table

Replace the question marks with the correct numbers:

| Number N of Elements | O(N) | O(log N) | O(N^2) |
| -------------------- | ---- | -------- | ------ |
| 100                  | 100  | ?        | ?      |
| 2000                 | ?    | ?        | ?      |

## 9. Array Size

If an O(N^2) algorithm processes an array in 256 steps, how long is the array?

## 10. Greatest Product

```javascript
function greatestProduct(arr) {
  greatestProductSoFar = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] * arr[j] > greatestProductSoFar) {
        greatestProductSoFar = arr[i] * arr[j];
      }
    }
  }
  return greatestProductSoFar;
}
```

## 11. More Efficient

The following function finds the largest number in an array, but it is O(N^2). Rewrite the function so that it is O(N).

```javascript
function largestNumber(arr) {
  let largest;
  for (let i = 0; i < arr.length; i++) {
    largest = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > largest) {
        largest = arr[j];
      }
    }
  }
  return largest;
}
```

## 12. Bonus

Find two sorting algorithms and implement them in JavaScript. Compare them in terms of Big-O.
