$.ajax 
({
  type: "GET",
  url:"/api/all",
  success: function(data){
    console.log("success");
    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("bucket");
  
        row.append("<p>" + data[i].category + " </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#bucketList-area").prepend(row);
  
      }
  
    }
  }
})

// $.get("/api/all", function(data) {

  

// });


$("#goal-submit").on("click", function(event) {
  event.preventDefault();


  var newGoal = {
    category: $("#sel1").val().trim(),
    body: $("#text-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newGoal);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newGoal)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("goal");

      row.append("<p>" + newGoal.category + "</p>");
      row.append("<p>" + newGoal.body + "</p>");
      row.append("<p>At " + moment(newGoal.created_at).format("h:mma on dddd") + "</p>");

      $("#bucketList-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#sub1").val("");
  $("#text-box").val("");
});