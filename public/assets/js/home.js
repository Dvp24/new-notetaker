// var temp
var getAndRenderNotes = function () {

  $.ajax({
    url: "/api/view",
    method: "GET"
  }).then(function (data) {
    var returnData = data
    console.log(returnData)
    for (var i = 0; i < data.length; i++) {
      var $listItem = $("<li class='list-group-item'>");
      $listItem.append(
        $("<span class='viewNote'>").text(data[i].name).addClass("note" + i),
      )
        .append("<span class ='delete' data-id='" + data[i].id + "' ><i class='fas fa-trash-alt'></i></span>")
      $(".vertical").append($listItem);
      
    }
  })
  // location.reload()
}
getAndRenderNotes()
$('body').on('click', 'span.viewNote', function () {
  console.log("hello there")
  var temp = $(this).text()
$.ajax({
  url: "/api/view/this",
  method: "GET",
  data:temp 
}).then(function (data) {
   var tempo = data
  console.log("here")
  console.log(tempo)
  // why is it re
})
})

$(".save").on("click", function () {
  console.log("hello")
  var temp1 = {
    name: $("input").val(),
    containt: $("textarea").val()
  }
  if (!temp1.name || !temp1.containt) {
    alert("Please fill out all the required fields!");
    return;
  }
  console.log(temp1)
  $.ajax({
    url: "/api/save",
    method: "POST",
    data: temp1
  }).then(function (data) {
    console.log(data)
    windows.location = "/view"
    location.reload()
    $("input").empty();
    $("textarea").empty();
  })
})

$("body").on("click", "span.delete", function () {
  console.log("hi")
  var temporary = $(this).attr('data-id')
  console.log(temporary)
  $.ajax({
    url: "/api/del",
    method: "DELETE",
    data:{"noteid":temporary}
  }).then(function (data) {
     var tempo = data
    //  windows.location = "/view"
     location.reload()
    console.log("here")
    console.log(tempo)
    // why is it re
  })

})

