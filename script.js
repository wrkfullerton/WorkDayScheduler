$(document).ready(function(){
    // Create an event listener on the save button
    $(".saveBtn").on("click", function(){
        // Store the values in the textarea
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save the values in localStorage
        localStorage.setItem(time, value);
    });

    function hourUpdate() {
        // get the current number of hours
        var currentHour = moment().hours();

        // Create a loop for all of the time blocks
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            // Create a check for whether we have moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdate();
    
    // create an interval to check whether or not current time needs to be updated. 
    var interval = setInterval(hourUpdate, 15000);

    // Load any of the saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    // this displays the current time of day on the page
    $("#currentDay").text(moment().format("dddd, MMMM, Do"));
});

