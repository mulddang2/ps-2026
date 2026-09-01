function solution(myString, pat) {
  if (myString.indexOf(pat) === myString.lastIndexOf(pat)) {
    return myString.slice(0, myString.indexOf(pat) + pat.length);
  } else {
    return myString.slice(0, myString.lastIndexOf(pat) + 1);
  }
}

console.log(solution('AbCdEFG', 'dE'));
console.log(solution('AAAAaaaa', 'a'));
