
num=29


const ones=['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const tens=['', 'X', 'XX', 'XXX'];

let result=''+tens[Math.floor(num/10)]+ones[num%10]
console.log(tens[Math.floor(num/10)])

console.log(result)