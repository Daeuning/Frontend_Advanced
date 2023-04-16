function solution(name, yearning, photo) {
    var answer = [];
    var num = 0;

    for(var i = 0; i < photo.length; i++) {
        for(var j = 0; j < photo[i].length; j++) {
            for (var k = 0; k < name.length; k++) {
                if (photo[i][j] == name[k]) {
                    num += yearning[k];
                }
            }
        }
        answer.push(num);
        num = 0;
    }
    
    return answer;
}