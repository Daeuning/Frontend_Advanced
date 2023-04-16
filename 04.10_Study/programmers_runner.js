function solution(players, callings) {
    var answer = [];
    
    for (var i = 0; i < callings.length; i++){
        for (var j = 0; j < players.length; j++) {
                if (callings[i] == players[j]) {
                    var temp = players[j - 1];
                    players[j - 1] = callings[i];
                    players[j] = temp;
                }
            }
    }
    
    for (var i = 0; i < players.length; i++){
        answer[i] = players[i];
    }
    
    return answer;
}