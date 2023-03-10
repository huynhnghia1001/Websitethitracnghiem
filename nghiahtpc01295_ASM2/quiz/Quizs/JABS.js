app.factory('quizFactory', function () {
    var questions = [
        {"Id":26050,"Text":"Công ty nào đã mua lại Sun microsystem?","Marks":1,"AnswerId":107895,"Answers":[{"Id":107891,"Text":"ibm"},{"Id":107892,"Text":"apple"},{"Id":107893,"Text":"yahoo"},{"Id":107894,"Text":"google"},{"Id":107895,"Text":"oracle"},{"Id":107896,"Text":"microsoft"}]},{"Id":26051,"Text":"Kiểu nào không phải là kiểu nguyên thủy của Java?","Marks":1,"AnswerId":107899,"Answers":[{"Id":107897,"Text":"byte"},{"Id":107898,"Text":"double"},{"Id":107899,"Text":"String"},{"Id":107900,"Text":"boolean"},{"Id":107901,"Text":"float"}]},{"Id":26052,"Text":"Từ khóa nào không phải Java keyword?","Marks":1,"AnswerId":107904,"Answers":[{"Id":107902,"Text":"import"},{"Id":107903,"Text":"float"},{"Id":107904,"Text":"Private"},{"Id":107905,"Text":"this"},{"Id":107906,"Text":"package"},{"Id":107907,"Text":"int"}]},{"Id":26053,"Text":"Kết quả của lệnh 34/4?","Marks":1,"AnswerId":107908,"Answers":[{"Id":107908,"Text":"6"},{"Id":107909,"Text":"8.5"},{"Id":107910,"Text":"8"},{"Id":107911,"Text":"7"},{"Id":107912,"Text":"9"}]},{"Id":26054,"Text":"Có thể có bao nhiêu lựa chọn khi sử dụng lệnh if-else?","Marks":1,"AnswerId":107914,"Answers":[{"Id":107913,"Text":"1"},{"Id":107914,"Text":"2"},{"Id":107915,"Text":"6"},{"Id":107916,"Text":"3"},{"Id":107917,"Text":"4"},{"Id":107918,"Text":"5"}]},{"Id":26055,"Text":"Đánh giá (true hoặc false) cho mỗi biểu thức sau đây: 14 \u003c= 14 14 \u003c 14 -9 \u003e -25 -25 \u003e -9","Marks":1,"AnswerId":107924,"Answers":[{"Id":107919,"Text":"true false true true"},{"Id":107920,"Text":"true true true true"},{"Id":107921,"Text":"true false false false"},{"Id":107922,"Text":"false true true true"},{"Id":107923,"Text":"false false true true"},{"Id":107924,"Text":"true false true false"}]},{"Id":26056,"Text":"Để có thể chạy được java trên máy, chúng ta phải cài đặt phần mềm nào?","Marks":1,"AnswerId":107927,"Answers":[{"Id":107925,"Text":"GCC"},{"Id":107926,"Text":"C++ compiler"},{"Id":107927,"Text":"JDK"},{"Id":107928,"Text":".NET Framework"},{"Id":107929,"Text":"Python"},{"Id":107930,"Text":"PHP"}]},{"Id":26057,"Text":"Khối lệnh sau sẽ in ra màn hình cái gì?int sum = 21;if ( sum != 20 ) System.out.print(\"You win \");else System.out.print(\"You lose \");System.out.println(\"the prize.\");","Marks":1,"AnswerId":107934,"Answers":[{"Id":107931,"Text":"You win"},{"Id":107932,"Text":"You lose"},{"Id":107933,"Text":"You lose the prize."},{"Id":107934,"Text":"You win the prize."}]},{"Id":26058,"Text":"Phương án nào là định danh Java (Java Identifier) hợp lệ?","Marks":1,"AnswerId":107938,"Answers":[{"Id":107935,"Text":"4a"},{"Id":107936,"Text":"#44"},{"Id":107937,"Text":"--a"},{"Id":107938,"Text":"applet"},{"Id":107939,"Text":"4a4b"},{"Id":107940,"Text":"a++"}]},
    ];
    return {
        getQuestion: function (id) {
            if (id < questions.length) {
                return questions[id];
            } else {
                return false;
            }
        }
    };
});


