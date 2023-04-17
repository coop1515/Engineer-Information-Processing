function solution(name, yearning, photo) {

    let answer = [];
    name = ["may", "kein", "kain", "radi"]
    yearning = [5, 10, 1, 3]
    photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
    let num = 0;

    // photo 배열의 모든 원소가 name의 원소를 지나가면서 본인과 같은 단어가 있는지 체크하고
    // 같은 단어가 있다면 그 단어의 순서에 맞는 점수를 그대로 부여하면 됨.
    for(let k = 0; k < photo.length; k++){
        num = 0;
        for(let i = 0; i < photo[k].length; i++){
            for(let j =0; j < name.length; j++){
                if(photo[k][i] === name[j]){
                    num += yearning[j]
                }
            }
        }
        answer[k] = num;
    }
    console.log(answer)
}

solution()