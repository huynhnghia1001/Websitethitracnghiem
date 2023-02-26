app.factory('quizFactory', function () {
    var questions = [
        {"Id":25342,"Text":"Phát triển web di động bắt buộc phải sử dụng IDE Dreamweaver, đúng hay sai?","Marks":1,"AnswerId":105034,"Answers":[{"Id":105033,"Text":"Đúng"},{"Id":105034,"Text":"Sai"}]},{"Id":25343,"Text":"\"Máy chủ web sử dụng chỉ thị AddType trong cấu hình mod_mine để thêm kiểu MIME mới vào file cấu hình mime.types, httpd.conf hay .htaccess\" là kiểu máy chủ nào sau đây?","Marks":1,"AnswerId":105037,"Answers":[{"Id":105035,"Text":"Máy chủ Nginx"},{"Id":105036,"Text":"Máy chủ Window"},{"Id":105037,"Text":"Máy chủ Apache"},{"Id":105038,"Text":"Máy chủ Microsoft IIS"}]},{"Id":25344,"Text":"Những giải pháp dành cho web trên máy tính như: độ phân giải, kích thước hoàn toàn sử dụng được trên thiết bị di động. Đúng hay sai?","Marks":1,"AnswerId":105039,"Answers":[{"Id":105039,"Text":"Sai"},{"Id":105040,"Text":"Đúng"}]},{"Id":25345,"Text":"Danh sách kiểu MIME được hỗ trợ thông qua các giá trị nằm trong trường nào của HTTP Request?","Marks":1,"AnswerId":105043,"Answers":[{"Id":105041,"Text":"Trường Degree"},{"Id":105042,"Text":"Trường Save"},{"Id":105043,"Text":"Trường Accept"},{"Id":105044,"Text":"Trường Agree"}]},{"Id":25346,"Text":"Thành phần nào mô tả kiểu file tài liệu truyền cho máy khách trong hồi đáp HTTP (HTTP Respone)?","Marks":1,"AnswerId":105046,"Answers":[{"Id":105045,"Text":"MIMI"},{"Id":105046,"Text":"MIME"},{"Id":105047,"Text":"MIMO"},{"Id":105048,"Text":"MIMA"}]},{"Id":25347,"Text":"Tiêu chuẩn W3C được áp dụng chặt chẽ và rộng rãi trên trình duyệt của thiết bị nào?","Marks":1,"AnswerId":105049,"Answers":[{"Id":105049,"Text":"Thiết bị máy tính"},{"Id":105050,"Text":"Thiết bị di động"}]},{"Id":25348,"Text":"Các kiểu MIME phân biệt ngôn ngữ đánh dấu di động với HTML trên máy tính. ĐÚng hay sai?","Marks":1,"AnswerId":105051,"Answers":[{"Id":105051,"Text":"Đúng"},{"Id":105052,"Text":"Sai"}]},{"Id":25349,"Text":"Kiểu MIME liên kết với mỗi tài liệu web lưu trữ trong trường nào trong hồi đáp HTTP?","Marks":1,"AnswerId":105053,"Answers":[{"Id":105053,"Text":"Content-Type"},{"Id":105054,"Text":"Degree"},{"Id":105055,"Text":"Save"},{"Id":105056,"Text":"Accept"}]},
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


