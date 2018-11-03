  $.ajax({
    url: "/api/add",
    method: "GET"
  }).then(function( data){
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      var $listItem = $("<li class='list-group-item mt-4'>");
      $listItem.append(
        $("<h6>").text("Note #" + (i + 1)+" "+ data[i].name).addClass("note"+i),
      );
      $(".vertical").append($listItem);
    }
  })
