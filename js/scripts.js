// $(document).ready(function() {
//   $("form#quiz").submit(function(event) {
//     const question1 = parseInt($("#question1").val());
//     const question2 = parseInt($("#question2").val());
//     const question3 = parseInt($("#question3").val());
//     const question4 = parseInt($("#question4").val());
//     const question5 = parseInt($("#question5").val());
//     $("#answer1").hide();
//     $("#answer2").hide();
//     $("#answer3").hide();
//            
    
//     event.preventDefault();
//   });
// });

$("#answer1").hide();
$("#answer2").hide();
$("#answer3").hide();


const jscript = 25
const html = 40
const csharp = 66

let answer = jscript + html + csharp;

if(answer <= 33 && answer >= 0){
  $("#answer1").show();
}else if(answer <= 66 && answer >= 34){
  $("#answer2").show();
}else if(answer <= 100 && answer >= 67){
  $("#answer3").show();
}else if(answer < 100);{
  $("#answer3").show();
}