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

createCharacters();