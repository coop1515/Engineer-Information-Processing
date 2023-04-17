function solution(n, m, section){
    let answer = 0;

    n = 8
    m = 4
    section = [2,3,6]

    const min = section[0]
    const max = section[section.length-1]
    // console.log(min,max)
    let distance = max - min + 1
    answer = Math.ceil(distance / m)
    
    console.log(answer)
    return answer
}

solution()