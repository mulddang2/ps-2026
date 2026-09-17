function solution(my_string, overwrite_string, s) {
    // NOTE: slice 메서드의 첫번째 인자는 start 번호이다.


    const before = my_string.slice(0, s);
    const after = my_string.slice(s + overwrite_string.length);
    return before + overwrite_string + after;
    
}

console.log(solution('He11oWor1d', 'lloWorl', 2));