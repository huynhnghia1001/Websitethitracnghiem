app.factory('quizFactory', function () {
    var questions = [
        {"Id":25970,"Text":"Lập trình viên thường gán giá trị mặc định cho các điều khiển trong phương thức xử lý sự kiện ........... của trang","Marks":1,"AnswerId":107573,"Answers":[{"Id":107571,"Text":"Prerender"},{"Id":107572,"Text":"Init"},{"Id":107573,"Text":"Load"},{"Id":107574,"Text":"Unload"}]},{"Id":25971,"Text":"Bạn hãy cho biết định nghĩa nào sau đây là nói về ứng dụng web?","Marks":1,"AnswerId":107575,"Answers":[{"Id":107575,"Text":"Là một ứng dụng client/server được truy cập thông qua trình duyệt Web trên mạng Internet hoặc intranet"},{"Id":107576,"Text":"Các phương án đều đúng"},{"Id":107577,"Text":"Là ứng dụng chỉ chạy trên một máy tính đơn"},{"Id":107578,"Text":"Là ứng dụng chỉ chạy trên môi trường mobile"}]},{"Id":25972,"Text":"Để hiển thị dòng \"Hello World\" trên trang web, trong ASP.Net cần dùng lệnh nào?","Marks":1,"AnswerId":107582,"Answers":[{"Id":107579,"Text":"Document.Write(\"Hello World\");"},{"Id":107580,"Text":"\"Hello World\""},{"Id":107581,"Text":"Request.Write((\"Hello World\");"},{"Id":107582,"Text":"Response.Write(\"Hello World\");"}]},{"Id":25973,"Text":"Phát biểu nào sau đây đúng về ASP.NET?","Marks":1,"AnswerId":107584,"Answers":[{"Id":107583,"Text":"ASP.NET là mô hình lập trình hướng cấu trúc"},{"Id":107584,"Text":"ASP.NET là mô hình lập trình hướng sự kiện"},{"Id":107585,"Text":"ASP.NET là mô hình lập trình hướng thành phần"},{"Id":107586,"Text":"ASP.NET là mô hình lập trình hướng đối tượng"}]},{"Id":25974,"Text":"Khi chạy một ứng dụng ASP.NET, nếu ngoại lệ xảy ra nhưng không được bắt và xử lý, ứng dụng sẽ chuyển sang chế độ ngắt và hộp thoại ............ sẽ hiển thị.","Marks":1,"AnswerId":107587,"Answers":[{"Id":107587,"Text":"Exception Assistant"},{"Id":107588,"Text":"Exception Help"},{"Id":107589,"Text":"Các phương án đều sai"},{"Id":107590,"Text":"Exception"}]},{"Id":25975,"Text":"Theo bạn, câu nào sau đây là sai khi nói về web động?","Marks":1,"AnswerId":107591,"Answers":[{"Id":107591,"Text":"Viết hoàn toàn bằng ngôn ngữ HTML"},{"Id":107592,"Text":"Có tương tác với người dùng, nội dung của trang hiển thị khác nhau đáp ứng các sự kiện."},{"Id":107593,"Text":"Có thể dùng để hiển thị và cung cấp thông tin"},{"Id":107594,"Text":"Lưu dữ liệu trong cơ sở dữ liệu"}]},{"Id":25976,"Text":"Vòng đời của một trang Web bao gồm các các sự kiện:1. PreRender2. Load3. UnLoad4. InitTheo bạn, các sự kiện xảy ra theo thứ tự nào sau đây là đúng?","Marks":1,"AnswerId":107595,"Answers":[{"Id":107595,"Text":"4 - 2 – 3 – 1"},{"Id":107596,"Text":"4 - 3 – 2 – 1"},{"Id":107597,"Text":"2 - 3 – 4 – 1"},{"Id":107598,"Text":"1 - 2 - 3 – 4"}]},{"Id":25977,"Text":"Phím tắt nào sau đây dùng để bắt đầu chạy ứng dụng dưới chế độ gỡ lỗi?","Marks":1,"AnswerId":107599,"Answers":[{"Id":107599,"Text":"F9"},{"Id":107600,"Text":"F10"},{"Id":107601,"Text":"F5"},{"Id":107602,"Text":"F11"}]},
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


