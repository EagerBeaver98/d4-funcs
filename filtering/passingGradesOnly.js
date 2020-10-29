const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passing = grades.filter(function(num) {
  if (num >= 70) {
    return true;
  }
});

console.log(passing);