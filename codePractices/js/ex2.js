function solution(players, callings) {
    let answer = [];
    players = ["mumu", "soe", "poe", "kai", "mine"]
    callings = ["kai", "kai", "mine", "mine"]

    //callings의 배열의 원소가 players의 원소들을 읽으면서 index(위치)를 찾고
    // 해당 위치의 앞과 바꾸면 됨.

    // 해당 소스 는 시간초과 나옴.
    // for(let i = 0; i < callings.length; i++){
    //     for(let j = 0; j < players.length; j++){
    //         if(callings[i] === players[j]){
    //             const tmp = players[j-1];
    //             players[j-1] = players[j]
    //             players[j] = tmp
    //             console.log(players)
    //         }
    //     }

    // }

    // 이 소스도 시간초과
    // callings.map((call,callIndex)=>{
    //     players.map((player,playerIndex)=>{
    //         if(call === player){
    //             const tmp = players[playerIndex-1]
    //             players[playerIndex-1] = players[playerIndex]
    //             players[playerIndex] = tmp
    //             return
    //         }
    //     })
    // })
    // answer = players
    // console.log(answer);

    // map 객체를 이용한 소스.
    const map = new Map();
    const map2 = new Map();
    players.map((name, i) => {
        map.set(name, i)
        map2.set(i,name)
    })
    console.log(map, map2)
    for(let i =0; i < callings.length; i++){
        const name = map.get(callings[i])
        console.log(name)
        const tmpName = map2.get(name-1)
        console.log(tmpName)
        
        map.set(tmpName, name)
        map.set(callings[i],name-1)
        map2.set(name,tmpName)
        map2.set(name-1,callings[i])
    }
    // console.log(map,map2)

    for(let i = 0; i < players.length; i++){
        answer[i] = map2.get(i)
    }
    console.log(answer)

    // return answer;
}

solution()