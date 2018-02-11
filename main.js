
$("h6").hide()

$("#Register").click(function(event){
event.preventDefault()

if ($("#nm").val() === ""||$("select").val() === ""){


$("h6").show()
}

else {
  $("form").submit()

}


// $("#yes").change(function(event) {
// if ($("#yes").checked === false)
//
//
// })
 // }
 // else {
 //   event.Default()
 // }
})

// if ($("input[type="radio"]").checked === true) {
// $("h6").show()
//
// }
// if ($("#nm").val() === ""||$("#yes").checked === "false"||$("select").val() === ""){
// $("h6").show()
// }
//
// else {
//   $("form").submit()
//
// }
