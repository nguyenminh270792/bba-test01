/* 1: Tạo hàm createCharacters:
● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
○ thuộc tính name: UPPERCASE của name gốc
○ level: x2 của level gốc
○ health: x3 của health gốc
● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners” */

const characters = [
    { name: "Mint", level: 5, health: 1200 },
    { name: "Mint", level: 5, health: 300 },
    { name: "Mint", level: 5, health: 499 },
    { name: "Mint", level: 5, health: 1000 }
];

function createCharacters() {
    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });
    console.log("Power up:", charactersPowerUp);

    const possibleWinners = characters.filter(character => character.health > 1000);
    console.log("Posible winners are:", possibleWinners);
}

// call the function to see the result
createCharacters();

/* Tạo hàm printLeaderboard:
● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
1000}, ...]
● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
trước (🥇, 🥈, 🥉) */

const players = [
    { name: "Mario", score: 1000 },
    { name: "Mint", score: 0 },
    { name: "Kristian", score: 1111 },
    { name: "Annie", score: 2999 },
    { name: "Dan Wooden", score: 777 },
    { name: "Hoang Nguyen", score: 123 },
];

function printLeaderboard(players) {
    const sortedPlayers = players.sort((a, b) => b.score - a.score);
    sortedPlayers[0].name = "🥇 " + sortedPlayers[0].name;
    sortedPlayers[1].name = "🥈 " + sortedPlayers[1].name;
    sortedPlayers[2].name = "🥉 " + sortedPlayers[2].name;

    //print out all players
    console.log(players);
}

printLeaderboard(players);