app.factory('quizFactory', function () {
    var questions = [
        {"Id":25420,"Text":"Đâu không phải là đặc điểm của Unity?","Marks":1,"AnswerId":105301,"Answers":[{"Id":105299,"Text":"Lighting"},{"Id":105300,"Text":"Rendering"},{"Id":105301,"Text":"Assets"},{"Id":105302,"Text":"Physics"}]},{"Id":25421,"Text":"Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây?","Marks":1,"AnswerId":105303,"Answers":[{"Id":105303,"Text":"Inspector"},{"Id":105304,"Text":"Project"},{"Id":105305,"Text":"Hierachy"},{"Id":105306,"Text":"Game"}]},{"Id":25422,"Text":"Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?","Marks":1,"AnswerId":105309,"Answers":[{"Id":105307,"Text":"Control Object"},{"Id":105308,"Text":"Layers"},{"Id":105309,"Text":"Layout"},{"Id":105310,"Text":"TestGame"}]},{"Id":25423,"Text":"Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?","Marks":1,"AnswerId":105312,"Answers":[{"Id":105311,"Text":"Rotate tool"},{"Id":105312,"Text":"Hand tool"},{"Id":105313,"Text":"Scale tool"},{"Id":105314,"Text":"Move tool"}]},{"Id":25424,"Text":"Networking không cung cấp tính năng nào sau đây?","Marks":1,"AnswerId":105315,"Answers":[{"Id":105315,"Text":"Physics"},{"Id":105316,"Text":"Realtime Networking"},{"Id":105317,"Text":"Remote Procedure Call"},{"Id":105318,"Text":"State Synchronization"}]},{"Id":25425,"Text":"Phím E là phím tắt của công cụ nào sau đây?","Marks":1,"AnswerId":105320,"Answers":[{"Id":105319,"Text":"Hand tool"},{"Id":105320,"Text":"Rotate tool"},{"Id":105321,"Text":"Scale tool"},{"Id":105322,"Text":"Move tool"}]},{"Id":25426,"Text":"Phím tắt nào sau đây được dùng để đổi tên đối tượng nhanh?","Marks":1,"AnswerId":105323,"Answers":[{"Id":105323,"Text":"F2"},{"Id":105324,"Text":"F"},{"Id":105325,"Text":"Cmd"},{"Id":105326,"Text":"Enter"}]},{"Id":25427,"Text":"Phím R là phím tắt của công cụ nào sau đây?","Marks":1,"AnswerId":105328,"Answers":[{"Id":105327,"Text":"Hand tool"},{"Id":105328,"Text":"Scale tool"},{"Id":105329,"Text":"Move tool"},{"Id":105330,"Text":"Rotate tool"}]},
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


