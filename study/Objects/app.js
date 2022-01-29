const playerName = "hdg";
const playerPoints = 121223;
const playerHandsome = false;
const playerFat = "little bit"; //변수설정 -> not good

const playerArray = ["hdg", 121223, false, "little bit"]; // 배열 -> not good

//object!
const player = {
    name: "hdg",
    points: 10,
    fat: true,
};

console.log(player);

player.fat = false; //const는 못바꾸잖아? -> const는 object, 즉 player이고 그 안의 name,fat 등등 업데이트는 문제 X
player.lastName = "wow";
player.points = player.points + 30;

console.log(player);