// function repeatedStrings(s, n) {
//   //   let count = (s.repeat(n).slice(0, n).match(/a/g) || []).length;
//   //   return count;
//   let arr = s.split("");
//   //   let eArr = arr.values();
//   //   console.log(arr);
//   const newArr = [];

//   for (let i = 0; i < n; i++) {
//     if (i === arr.length) {
//       i = 0;
//       newArr.push(arr[i]);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(repeatedStrings("abc", 10));

// function repeatedStrings(s, n) {
//   if (s.length < n) {
//     let aInStr = s.match(/a/g || []).length;
//     console.log("A in str", aInStr);
//     let strLength = n - s.length;
//     console.log("strLength", strLength);
//     let stringsQuantity = Math.floor(strLength / s.length + 1);
//     console.log("stringsQuantity", stringsQuantity);
//     let rest = strLength % s.length;
//     console.log("rest", rest);
//     let otherA = null;
//     rest
//       ? (otherA = s.slice(0, rest).match(/a/g || []).length)
//       : console.log("otherA", otherA);
//     let res = aInStr * stringsQuantity + otherA;
//     return res;
//   } else {
//     return s.match(/a/g || []).length;
//   }
// }
// function repeatedStrings(s, n) {
//   if (s.length === 1) return n;
//   let aInStr = s.match(/a/g || []).length;
//   console.log(aInStr);
//   let some = Math.floor(n / s.length);
//   console.log(some);
//   let anotheSome = s.slice(0, n % s.length).match(/a/g || []).length;
//   console.log("anotheSome", anotheSome);
//   return aInStr * some + anotheSome;
// }
// console.log(repeatedStrings("a", 100));

function main(str, n) {
  var s = str.split("");
  //   var n = parseInt(readLine());

  var stringSize = s.length;
  var a = s.filter((a) => a === "a").length;
  console.log("a", a);

  var repeat = Math.floor(n / stringSize);
  console.log("repeat", repeat);
  var left = n - repeat * stringSize;
  console.log("left", left);
  console.log(repeat * a + s.filter((a, i) => a === "a" && i < left).length);
}

console.log(main("aba", 10));
