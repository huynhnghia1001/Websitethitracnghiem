app.factory('quizFactory', function () {
    var questions = [
        {"Id":25740,"Text":"Thông thường, cách thức alert() được sử dụng trong các trường hợp nào?","Marks":1,"AnswerId":106533,"Answers":[{"Id":106530,"Text":"Khi dịch vụ chưa sẵn sàng để truy nhập dữ liệu"},{"Id":106531,"Text":"Đưa ra một thông điệp cảnh báo đến người dùng"},{"Id":106532,"Text":"Kết quả sau khi tính toán không hợp lệ"},{"Id":106533,"Text":"Tất cả các trường hợp đã nêu"}]},{"Id":25741,"Text":"Có bao nhiêu cách để nhúng file JavaScript vào một file HTML?","Marks":1,"AnswerId":106534,"Answers":[{"Id":106534,"Text":"4"},{"Id":106535,"Text":"3"},{"Id":106536,"Text":"1"},{"Id":106537,"Text":"2"}]},{"Id":25742,"Text":"JavaScript có giống với Java không?","Marks":1,"AnswerId":106538,"Answers":[{"Id":106538,"Text":"Không"},{"Id":106539,"Text":"Có"}]},{"Id":25743,"Text":"Cặp thẻ nào được sử dụng để đưa JavaScript vào file HTML?","Marks":1,"AnswerId":106540,"Answers":[{"Id":106540,"Text":"\u003cscript\u003e\u003c/script\u003e"},{"Id":106541,"Text":"\u003cscripting\u003e/\u003cscripting\u003e"},{"Id":106542,"Text":"\u003cjs\u003e\u003c/js\u003e"},{"Id":106543,"Text":"\u003cJavaScript\u003e\u003c/JavaScript\u003e"}]},{"Id":25744,"Text":"JavaScript có khả năng gì?","Marks":1,"AnswerId":106546,"Answers":[{"Id":106544,"Text":"Xử lý file của người dùng"},{"Id":106545,"Text":"Hỗ trợ mạng"},{"Id":106546,"Text":"Điều khiển trình duyệt"}]},{"Id":25745,"Text":"Ban đầu, JavaScript do hãng công nghệ nào phát triển?","Marks":1,"AnswerId":106547,"Answers":[{"Id":106547,"Text":"Netscape"},{"Id":106548,"Text":"NEC"},{"Id":106549,"Text":"Microsoft"},{"Id":106550,"Text":"ECMA (European Computer Manufacturers Association)"}]},{"Id":25746,"Text":"JavaScript hồi đáp lại tương tác của người dùng khi nào?","Marks":1,"AnswerId":106553,"Answers":[{"Id":106551,"Text":"Các phương án đều sai"},{"Id":106552,"Text":"Khi người dùng nhấn vào menu"},{"Id":106553,"Text":"Các phương án đều đúng"},{"Id":106554,"Text":"Khi người dùng nhấn chuột"}]},{"Id":25747,"Text":"Tên file của các hàm JavaScript bên ngoài trang HTML cần có đuôi gì?","Marks":1,"AnswerId":106558,"Answers":[{"Id":106555,"Text":".jst"},{"Id":106556,"Text":".jsc"},{"Id":106557,"Text":".jsp"},{"Id":106558,"Text":".js"}]},{"Id":25748,"Text":"Khi ngăn cách các từ trong JavaScript, người ta dùng:","Marks":1,"AnswerId":106561,"Answers":[{"Id":106559,"Text":"dấu chấm (.)"},{"Id":106560,"Text":"dấu hai chấm (:)"},{"Id":106561,"Text":"dấu cách (space)"},{"Id":106562,"Text":"dấu gạch dưới (_)"}]},
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


