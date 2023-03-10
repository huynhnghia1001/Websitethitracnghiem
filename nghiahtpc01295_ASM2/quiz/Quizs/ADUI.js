app.factory('quizFactory', function () {
    var questions = [
        {"Id":25183,"Text":"System Bar bao gồm các thành phần nào?","Marks":1,"AnswerId":104411,"Answers":[{"Id":104408,"Text":"Navigation Bar"},{"Id":104409,"Text":"Status Bar"},{"Id":104410,"Text":"Notification Bar"},{"Id":104411,"Text":"Status Bar và Navigation Bar"}]},{"Id":25184,"Text":"Câu nào sau đây đúng khi nói về Frame layout?","Marks":1,"AnswerId":104412,"Answers":[{"Id":104412,"Text":"Frame layout là loại layout luôn lấy tọa độ gốc là top- left và nó xếp chồng view sau lên view trước"},{"Id":104413,"Text":"Frame layout sắp xếp các view ở chính xác tọa độ mong muốn thông qua các thuộc tính layout_x và layout_y"},{"Id":104414,"Text":"Frame layout sắp xếp các view theo hàng ngang hoặc hàng dọc, trong một cột hoặc một dòng"},{"Id":104415,"Text":"Frame layout sắp xếp các view thành các cột và dòng. Mỗi view trong 1 tableRow sẽ là 1 cột"}]},{"Id":25185,"Text":"Trong android, interface được tạo từ các điều khiển gì?","Marks":1,"AnswerId":104416,"Answers":[{"Id":104416,"Text":"View và View group"},{"Id":104417,"Text":"View"},{"Id":104418,"Text":"Button"},{"Id":104419,"Text":"View group"}]},{"Id":25186,"Text":"Điều khiển nào sau đây không phải là một layout?","Marks":1,"AnswerId":104420,"Answers":[{"Id":104420,"Text":"LeftAlignLayout"},{"Id":104421,"Text":"RelativeLayout"},{"Id":104422,"Text":"AbsoluteLayout"},{"Id":104423,"Text":"RelativeLayout"}]},{"Id":25187,"Text":"Các điều khiển nào sau đây hiển thị trên Navigation Bar?","Marks":1,"AnswerId":104425,"Answers":[{"Id":104424,"Text":"Recent"},{"Id":104425,"Text":"Tất cả các phương án đều đúng"},{"Id":104426,"Text":"Home"},{"Id":104427,"Text":"Back"}]},{"Id":25188,"Text":"Loại layout nào sau đây luôn dùng để gắn các control ở góc bên trái trên cùng màn hình và không cho phép thay đổi vị trí của các control?","Marks":1,"AnswerId":104428,"Answers":[{"Id":104428,"Text":"Frame layout"},{"Id":104429,"Text":"Table layout"},{"Id":104430,"Text":"Relative layout"},{"Id":104431,"Text":"Linear layout"}]},{"Id":25189,"Text":"Khi viết code, ta có thể thiết lập hướng các control trên Linear layout bằng hàm nào?","Marks":1,"AnswerId":104435,"Answers":[{"Id":104432,"Text":"setVertical()"},{"Id":104433,"Text":"setHorizontal()"},{"Id":104434,"Text":"setDirection()"},{"Id":104435,"Text":"setOrientation()"}]},{"Id":25190,"Text":"Màn hình Home Screen là màn hình như thế nào?","Marks":1,"AnswerId":104437,"Answers":[{"Id":104436,"Text":"Màn hình cung cấp cho người dùng truy cập đến các ứng dụng Mail được cài trên thiết bị"},{"Id":104437,"Text":"Chứa các folder, widgets hoặc các app shortcuts tùy theo ý người dùng"},{"Id":104438,"Text":"Màn hình cung cấp cho người dùng truy cập đến các ứng dụng đang chạy gần đây một cách nhanh nhất"},{"Id":104439,"Text":"Hiển thị toàn bộ ứng dụng được cài trên máy từ Amazon Store, và có thể đưa một ứng dụng bất kỳ ra màn hình Home"}]},
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


