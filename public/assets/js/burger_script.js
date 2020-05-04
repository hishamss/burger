$("#addburger").on("click", function (event) {
  event.preventDefault();

  var newburger = $("#newburger").val().trim();
  console.log("newburger: ", newburger);
  //   $.ajax("/api/burger", {
  //     type: "POST",
  //     data: newburger,
  //   }).then(function () {
  //     location.reload();
  //   });
});
