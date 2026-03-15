/* Ở vòng cuối này, Mario sẽ phải vận dụng khả năng suy luận của mình để giải được
câu đố từ tên Bowser gian ác: “Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới
100 có tổng chia hết cho 17. Xem format ở hình dưới”.
Ví dụ:
(1, 16), (2, 15), (3, 14)... là cặp số hợp lệ vì có tổng chia hết cho 17
Lưu đáp án ở file tests/lesson-04/final-stage.js và code tại nhánh main */

function findPairsDivisibleBy17() {
    let pairArr = ['Pair: '];

    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                let validPair = i.toString() + "-" + j.toString();
                pairArr.push(validPair)
            }
        }
    }

    console.log('\nTotal valid pairs:', pairArr.length);
    console.log(JSON.stringify(pairArr,null,1));
}

findPairsDivisibleBy17();