app.factory('quizFactory', function () {
    var questions = [
        {
            "Id": 25106,
            "Text": "Có mấy loại Service?",
            "Marks": 1,
            "AnswerId": 104121,
            "Answers": [
                {"Id": 104118, "Text": "3"},
                {"Id": 104119, "Text": "4"},
                {"Id": 104120, "Text": "1"},
                {"Id": 104121, "Text": "2"}
            ]
        },
      
        {"Id": 25113, "Text": "Phương thức onStartCommand được gọi khi nào?", "Marks": 1, "AnswerId": 104149, "Answers": [{"Id": 104146, "Text": "Khi phương thức bindService được gọi"}, {"Id": 104147, "Text": "Khi phương thức stopSelf được gọi"}, {"Id": 104148, "Text": "Khi phương thức onBind được gọi"}, {"Id": 104149, "Text": "Khi phương thức startService được gọi"}]}, {"Id": 25114, "Text": "Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?", "Marks": 1, "AnswerId": 104152, "Answers": [{"Id": 104150, "Text": "onPause"}, {"Id": 104151, "Text": "pauseService"}, {"Id": 104152, "Text": "onDestroy"}, {"Id": 104153, "Text": "startService"}]}, {"Id": 25115, "Text": "Để hủy Service dùng phương thức nào?", "Marks": 1, "AnswerId": 104155, "Answers": [{"Id": 104154, "Text": "PauseService"}, {"Id": 104155, "Text": "StopService"}, {"Id": 104156, "Text": "PauseServices"}, {"Id": 104157, "Text": "StopServices"}]}, {"Id": 25116, "Text": "Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?", "Marks": 1, "AnswerId": 104161, "Answers": [{"Id": 104158, "Text": "Sử dụng lớp PackageReceiverManager"}, {"Id": 104159, "Text": "Sử dụng lớp BroadcastReceiver"}, {"Id": 104160, "Text": "Sử dụng lớp BroadcastReceiverManger"}, {"Id": 104161, "Text": "Sử dụng lớp PackageManager"}]}, 
        {"Id": 25117, "Text": "Có mấy cách phát, nhận broadcast receiver?", "Marks": 1, "AnswerId": 104163, "Answers": [{"Id": 104162, "Text": "1"}, {"Id": 104163, "Text": "2"}, {"Id": 104164, "Text": "4"}, {"Id": 104165, "Text": "3"}]}, {"Id": 25118, "Text": "Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?", "Marks": 1, "AnswerId": 104167, "Answers": [{"Id": 104166, "Text": "4"}, {"Id": 104167, "Text": "1"}, {"Id": 104168, "Text": "3"}, {"Id": 104169, "Text": "2"}]},
        {"Id": 25119, "Text": "Vòng đời của Broadcast Receiver bao gồm mấy phương thức?", "Marks": 1, "AnswerId": 104170, "Answers": [{"Id": 104170, "Text": "1"}, {"Id": 104171, "Text": "2"}, {"Id": 104172, "Text": "4"}, {"Id": 104173, "Text": "3"}]},
        {"Id": 25121, "Text": "Nếu ứng dụng của bạn ở trạng thái foreground, bạn chỉ muốn ứng dụng chỉ nhận broadcast nhất định khi nó active, bạn phải làm gì?", "Marks": 1, "AnswerId": 104181, "Answers": [{"Id": 104178, "Text": "Load Intent thông qua menu hoặc Action Bar"}, {"Id": 104179, "Text": "Đăng ký BroadcastReceiver với mức độ ưu tiên thấp"}, {"Id": 104180, "Text": "Đăng ký động BroadcastReceiver với mức độ ưu tiếp thấp.Sử dụng abortBroadcast lúc runtime để ngăn cản gửi"}, {"Id": 104181, "Text": "Đăng ký động BroadcastReceiver trong onResume và hủy đăng ký trong onPause"}]},
        {"Id": 25125, "Text": "Để nhận thông tin người dùng qua wifi, phải sử dụng gì?", "Marks": 1, "AnswerId": 104192, "Answers": [{"Id": 104192, "Text": "LocationManager.NETWORK_PROVIDER"}, {"Id": 104193, "Text": "LocationManager.WIFI_PROVIDER"}, {"Id": 104194, "Text": "LocationManager.GPS_PROVIDER"}, {"Id": 104195, "Text": "LocationManager.CELLUAR_PROVIDER"}]}, {"Id": 25126, "Text": "Phương thức callback nào gọi khi vị trí người dùng thay đổi?", "Marks": 1, "AnswerId": 104196, "Answers": [{"Id": 104196, "Text": "onLocationChanged"}, {"Id": 104197, "Text": "onCurrentLocationChanged"}, {"Id": 104198, "Text": "onLocationChange"}, {"Id": 104199, "Text": "onCurentLocationChange"}]},
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


