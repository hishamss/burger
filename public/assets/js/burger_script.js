$(function () {
  $("#addburger").on("submit", function (event) {
    event.preventDefault();
    var postobj = {
      newburger: $("#newburger").val().trim(),
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: postobj,
    }).then(function () {
      location.reload();
    });
  });
});
