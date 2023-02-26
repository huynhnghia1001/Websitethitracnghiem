app.factory('quizFactory', function () {
    var questions = [
        {"Id":25262,"Text":"Kiểm thử nào không nằm trong kiểm thử hệ thống?","Marks":1,"AnswerId":104715,"Answers":[{"Id":104712,"Text":"Installation tests"},{"Id":104713,"Text":"Performance tests"},{"Id":104714,"Text":"GUI tests"},{"Id":104715,"Text":"Unit test"}]},{"Id":25263,"Text":"Kiểm thử nào được sử dụng để kiểm thử hoạt động của các thành phần khi chúng làm việc chung với nhau?","Marks":1,"AnswerId":104717,"Answers":[{"Id":104716,"Text":"Kiểm thử đơn vị"},{"Id":104717,"Text":"Kiểm thử tích hợp"},{"Id":104718,"Text":"Kiểm thử chấp nhận"},{"Id":104719,"Text":"Kiểm thử giao diện"}]},{"Id":25264,"Text":"Android sử dụng Framework nào để kiểm thử đơn vị?","Marks":1,"AnswerId":104720,"Answers":[{"Id":104720,"Text":"JUnit"},{"Id":104721,"Text":"FUnit"},{"Id":104722,"Text":"NUnit"},{"Id":104723,"Text":"AUnit"}]},{"Id":25265,"Text":"Trong JUnit, phương thức nào được sử dụng để kiểm tra một giá trị có phải Null hay không?","Marks":1,"AnswerId":104727,"Answers":[{"Id":104724,"Text":"confirmNull"},{"Id":104725,"Text":"assertNulls"},{"Id":104726,"Text":"confirmNulls"},{"Id":104727,"Text":"assertNull"}]},{"Id":25266,"Text":"Trong JUnit test case, phương thức nào được sử dụng để tạo đối tượng và khởi tạo giá trị cho các đối tượng?","Marks":1,"AnswerId":104729,"Answers":[{"Id":104728,"Text":"tearingDown()"},{"Id":104729,"Text":"setUp()"},{"Id":104730,"Text":"settingUp()"},{"Id":104731,"Text":"tearDown()"}]},{"Id":25267,"Text":"Kiểm tra việc lưu thông tin trạng thái của Activity trong phương thức nào?","Marks":1,"AnswerId":104733,"Answers":[{"Id":104732,"Text":"onSearchRequested"},{"Id":104733,"Text":"onPause"},{"Id":104734,"Text":"onKeyUp"},{"Id":104735,"Text":"onNavigateUp"}]},{"Id":25268,"Text":"Lớp nào không nằm trong gói android.test.mock?","Marks":1,"AnswerId":104740,"Answers":[{"Id":104736,"Text":"MockContext"},{"Id":104737,"Text":"MockContentResolver"},{"Id":104738,"Text":"MockCursor"},{"Id":104739,"Text":"MockContentProvider"},{"Id":104740,"Text":"MockResource"}]},
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


