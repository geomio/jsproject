$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const question1 = parseInt($("#question1").val());
    const question2 = parseInt($("#question2").val());
    const question3 = parseInt($("#question3").val());
    const question4 = parseInt($("#question4").val());
    const question5 = parseInt($("#question5").val());
    const username = $("input#username").val();
    
    $("#pg2usertext").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $(".username").text(username);
           
    let answer = question1 + question2 + question3 + question4 + question5

    if(answer <= 33 && answer >= 0){
      $("#pg2usertext").fadeIn(1000);
      $("#pg2usertext").show();
      $("#answer1").fadeIn(1000);
      $("#answer1").show();
    }else if(answer <= 66 && answer >= 34){
      $("#pg2usertext").fadeIn(1000);
      $("#pg2usertext").show();
      $("#answer2").fadeIn(1000);
      $("#answer2").show();
    }else if(answer <= 100 && answer >= 67){
      $("#pg2usertext").fadeIn(1000);
      $("#pg2usertext").show();
      $("#answer3").fadeIn(1000);
      $("#answer3").show();
    }

    event.preventDefault();
  });
});
