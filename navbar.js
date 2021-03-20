// function add(){
//     // let name = document.getElementById("name").value;
//     let name = $('#name').val();


//     if(name == ''){
//         // document.getElementById("name").classList.add('error');
//         $("#name").addClass("error");

//     }else{
//         // document.getElementById("name").classList.remove('error');
//         $("#name").removeClass("error");
//         alert(name);
//     }
// }


// $("#hide").click(function(){
//     $("#div").hide();
// });

// $("#show").click(function(){
//     $("#div").show();
//   });



// $("#show-hide").click(function(){
//     $("#div").fadeToggle();
// });



// $("#show-hide").click(function(){
//     $("#div").slideToggle();
// });


// $("#show-hide").click(function(){
//     $("#div").animate({left: '250px',
//     height: '+=150px',
//     width: '+=150px'});
// });



// $("#show-hide").click(function(){

//     $("#div").show(function(){
//        $(this).slideUp();
//     });

//     // $("#div").show().slideUp();
//   });



// $("#name").keyup(function(){
//   let name = $("#name").val();
//   $("#peop").html("<b>"+name+"</b>");
// });


// $("#name").keypress(function(){
//   let name = $("#name").val();
//   $("#peop").html("<b>"+name+"</b>");
// });


// $("#name").keydown(function(){
//   let name = $("#name").val();
//   $("#peop").html("<b>"+name+"</b>");
// });

// $("#name").mouseleave(function(){
//   let name = $("#name").val();
//   $("#peop").html("<b>"+name+"</b>");
// });


// $("#name").mouseup(function(){
//   let name = $("#name").val();
//   $("#peop").html("<b>"+name+"</b>");
// });





// $(".conr").scroll(function(){
//     alert("mohamed");
// })



// let mm = $(".mm").offset();


// $(window).scroll(function(){

//   let current = $(window).scrollTop();

//    if(mm.top == current){
//     alert("mohamed");
//   }
// });  


function add(){
  let username =  $("#name").text();
  let username2 =  $("#username").val();
  alert("username :"+username2+" full :"+username+"");
  
}




function plus(){

  for(var i=1;i<=9;i++);

  let html = `
  <input class="form-control" type="text" id="username${i}">
  <button onclick="remove()" class="btn btn-danger mt-2">remove</button>
  `;


  $("#res").append(html);

}

$("#plus").click(function() {


  $(".boto").addClass("d-none");


});



function remove(){

  $("#res").remove();


}



////// add class //////

// function change(){
//   $("#bgo").addClass("bg");
// }


///// remove class //////

// function change(){
//   $("#bgo").removeClass("bg");
// }


///// add/remove class //////

// function change(){
//   $("#bgo").toggleClass("bg");
// }




/////// hide and show navbar ////////

  // $("#change").click(function(){
  //   $(this).toggleClass("itemc");
  // })


// $("#change").css({"background-color": "yellow", "font-size": "200%"});

// $("#son").parent().css("border", "2px solid red");


$(".navcustom ul li").click(function(){
  $(this).children().addClass("active");
  $(this).siblings().children().removeClass("active");
})

$(document).ready(function(){
  $(".loader").delay(2000).fadeOut('slow');
});