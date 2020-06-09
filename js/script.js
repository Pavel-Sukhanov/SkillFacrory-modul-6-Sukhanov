// // function dummy(arg) {
// //     // console.log('work');
// // }

// // $("input[type=checkbox]").click(dummy);

// // // console.log("скрипт подгрузился");

// const maxAllowedChecks = 2;

// function trackChecks() {
//     let checkCount = $("input[type=checkbox]:checked").length;
//     if (checkCount >= maxAllowedChecks) {
//         $("input[type=checkbox]:not(:checked)").prop("disabled", true)
//     } else {
//       $("input[type=checkbox]:not(:checked)").prop("disabled", false);
//     }
// }

// // $("#check1").prop("disabled", true);

let btn1 = $('.btn1');
let btn2 = $('.btn2');
let btn3 = $('.btn3');
let btn4 = $('.btn4');


function init() {
}
let currentProgress = 0;
btn1.click(function() {
    currentProgress = currentProgress + 1;
    $('.progress-bar').attr("style", "width: " + currentProgress + "%");
});
$(document).ready(init);

function init() {
}
let currentProgress2 = 0;
btn2.click(function () {
    currentProgress2 = currentProgress2 + 3;
    $('.progress-bar').attr("style", "width: " + currentProgress2 + "%");
});
$(document).ready(init);

let currentProgress3 = 0;
btn3.click(function () {
    currentProgress3 = currentProgress3 + 7;
    $('.progress-bar').attr("style", "width: " + currentProgress3 + "%");
});
$(document).ready(init);

let currentProgress4 = 0;
btn4.click(function () {
    currentProgress4 = currentProgress3 - 100;
    $('.progress-bar').attr("style", "width: " - currentProgress4 - "%");
});
$(document).ready(init);




// let currentProgress = 0;
// function init() {
//    btn1.click(function() {
//        currentProgress = currentProgress + 1;
//        console.log('currentProgress = ', currentProgress); 
    
//     $('.progress-bar').width(currentProgress + "%");
//    });
// }
// $(document).ready(init);