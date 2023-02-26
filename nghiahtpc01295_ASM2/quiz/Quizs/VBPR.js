app.factory('quizFactory', function () {
    var questions = [
        {"Id":24836,"Text":"Thuộc tính nào để thay đổi màu nền của Form?","Marks":1,"AnswerId":103031,"Answers":[{"Id":103028,"Text":"Color"},{"Id":103029,"Text":"BgColor"},{"Id":103030,"Text":"BackgroundColor"},{"Id":103031,"Text":"BackColor"}]},{"Id":24837,"Text":"Để kích thước của form mở rộng đầy màn hình khi chạy chương trình thì cần thiết lập giá trị nào cho thuộc tính WindowState?","Marks":1,"AnswerId":103032,"Answers":[{"Id":103032,"Text":"Maximized"},{"Id":103033,"Text":"Normal"},{"Id":103034,"Text":"Minimized"},{"Id":103035,"Text":"MinMax"}]},{"Id":24838,"Text":"Để hiện cửa sổ Toolbox người dùng chọn thao tác nào?","Marks":1,"AnswerId":103039,"Answers":[{"Id":103036,"Text":"Tools \u003e Toolbox"},{"Id":103037,"Text":"Build \u003e Toolbox"},{"Id":103038,"Text":"Project \u003e Toolbox"},{"Id":103039,"Text":"View \u003e Toolbox"}]},{"Id":24839,"Text":"Ngôn ngữ lập trình nào dưới đây là ngôn ngữ lập trình bậc thấp?","Marks":1,"AnswerId":103041,"Answers":[{"Id":103040,"Text":"Pascal"},{"Id":103041,"Text":"Assembly"},{"Id":103042,"Text":"Visual Basic"},{"Id":103043,"Text":"C#"}]},{"Id":24840,"Text":"Ngôn ngữ lập trình nào tập trung vào đối tượng, mỗi đối tượng đều có thuộc tính và phương thức của chính nó?","Marks":1,"AnswerId":103047,"Answers":[{"Id":103044,"Text":"Ngôn ngữ máy"},{"Id":103045,"Text":"Ngôn ngữ lập trình cấu trúc"},{"Id":103046,"Text":"Ngôn ngữ Assembly"},{"Id":103047,"Text":"Ngôn ngữ lập trình hướng đối tượng"}]},{"Id":24841,"Text":"Thành phần nào trong máy tính chịu trách nhiệm thực hiện tính toán và đưa ra quyết định.","Marks":1,"AnswerId":103048,"Answers":[{"Id":103048,"Text":"Khối số học và lôgic"},{"Id":103049,"Text":"Khối xuất"},{"Id":103050,"Text":"Khối nhớ"},{"Id":103051,"Text":"Khối xử lý trung tâm"}]},{"Id":24842,"Text":"Để thiết kế giao diện của ứng dụng, người dùng chọn đối tượng nào?","Marks":1,"AnswerId":103054,"Answers":[{"Id":103052,"Text":"Interface"},{"Id":103053,"Text":"Module"},{"Id":103054,"Text":"Windows Form"},{"Id":103055,"Text":"Class"}]},{"Id":24843,"Text":"Để máy tính hiểu các ngôn ngữ lập trình bậc cao thì cần phải có chương trình nào?","Marks":1,"AnswerId":103056,"Answers":[{"Id":103056,"Text":"Chương trình dịch"},{"Id":103057,"Text":"Chương trình tự động hóa"},{"Id":103058,"Text":"Chương trình máy"},{"Id":103059,"Text":"Chương trình robot"}]},
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


