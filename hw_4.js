// Fungsi untuk membuat nilai acak dalam rentang 1-50
function getRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk mengisi array dengan nilai acak
function fillArray(array, length) {
  for (let i = 0; i < length; i++) {
    array.push(getRandomValue());
  }
}

// Fungsi untuk membagi array menjadi dua berdasarkan indeks (genap dan ganjil)
function splitArray(array) {
  const evenArray = [];
  const oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }

  return { evenArray, oddArray };
}

// Fungsi untuk menghitung nilai Minimum dalam array
function calculateMin(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

// Fungsi untuk menghitung nilai Maksimum dalam array
function calculateMax(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

// Fungsi untuk menghitung nilai Total dalam array
function calculateTotal(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

// Fungsi untuk menghitung Rata-rata dalam array
function calculateAverage(array) {
  const total = calculateTotal(array);
  return total / array.length;
}

// Fungsi untuk membandingkan array
function compareArrays(array1, array2) {
  const minComparison = calculateMin(array1) > calculateMin(array2) ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
  const maxComparison = calculateMax(array1) > calculateMax(array2) ? "Max lebih besar array genap" : "Max lebih besar array ganjil";
  const totalComparison = calculateTotal(array1) === calculateTotal(array2) ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil";
  const avgComparison = calculateAverage(array1) > calculateAverage(array2) ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil";

  return { minComparison, maxComparison, totalComparison, avgComparison };
}

// Buat array dengan 100 nilai acak
const randomArray = [];
fillArray(randomArray, 100);

// Pecah array menjadi dua berdasarkan indeks (genap dan ganjil)
const { evenArray, oddArray } = splitArray(randomArray);

// Hitung Min, Max, Total, dan Rata-rata untuk masing-masing array
const minEven = calculateMin(evenArray);
const maxEven = calculateMax(evenArray);
const totalEven = calculateTotal(evenArray);
const avgEven = calculateAverage(evenArray);

const minOdd = calculateMin(oddArray);
const maxOdd = calculateMax(oddArray);
const totalOdd = calculateTotal(oddArray);
const avgOdd = calculateAverage(oddArray);

// Bandingkan kedua array
const comparison = compareArrays(evenArray, oddArray);

// Tampilkan hasil
console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);
console.log("Min, Max, Total, Rata-rata pada array genap:", minEven, maxEven, totalEven, avgEven);
console.log("Min, Max, Total, Rata-rata pada array ganjil:", minOdd, maxOdd, totalOdd, avgOdd);
console.log("Perbandingan nilai:");
console.log(comparison);