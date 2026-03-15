/* ○ Biến playerName có giá trị là “Mario”.
○ Biến currentLives có giá trị là 3.
○ Các hằng số lưu coins theo level:
■ Level 1: 25;
■ Level 2: 30;
■ Level 3: 45;
○ Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
○ In ra số coin dư khi chia tổng số coin cho 3
● Commit kết quả với message: “feat: add solution for challenge 03” */

let playerName = "Mario";
let currentLives = 3;
const coins = [25, 30, 45];

let totalCoin = 0;
coins.forEach(element => {
    totalCoin += element;
});

console.log("Total coins: ", totalCoin);

console.log("Average coin: ", totalCoin / 3);

console.log("Remainder coin: ", totalCoin % 3);