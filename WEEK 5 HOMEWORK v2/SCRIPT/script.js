var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(currentDay);

// var currentTime = moment().format("LT");
// $("#currentTime").append(currentTime);

// var now = new Date().getHours();

function boop() {
    for (i = 9; i <= 17; i++ ) {
    $bsdiv = $(`<div class="input-group mb-3">`)
    $row = $(`<div class= "input-group-prepend row">`)
    $hour = $(`<span class = "input-group-text hour"></span>`)
    $hour.text(moment(i, 'HH').format('HH:mm'))
    $input = $(`<textarea class = "form-control description textarea" id='inputText${i}' type='text' name='userInput'></textarea>`)
    $input.text(localStorage.getItem(i))
    $button = $(`<button class = "saveBtn fas fa-save" data-id='${i}'></button>`)
    
    //Appends UI in order
    $('.container').append($bsdiv)
    $($bsdiv).append($row)
    $($row).append($hour)


    $($bsdiv).append($input)

    $($bsdiv).append($button)

    $timeNow = moment().format("HH")
    $timeBlock = i
    
        if ($timeBlock == $timeNow) {
            $input.addClass("present")
        } else if($timeBlock > $timeNow) {
            $input.addClass("future")
        } else {
            $input.addClass("past")
        } 
    }    
            $(".saveBtn").click(function() {
            var id = $(this).data("id")
            var userInput = $(this).siblings().eq(1).val()
            localStorage.setItem(id,userInput)
    })
}


boop();

// CREATE UI

// APPEND UI

// SET TIME AM OR PM

// COMPARISON

// EVENT LISTENER LOCAL STORAGE























// $row = $("<div class='input-group-prepend row'>");
// $hour = $("<span class='input-group-text hour col-1'></span>");
// $hour.text(moment(i, "hh").format("LT"));
// $input = $("<textarea class='form-control description textarea col' type='text' name='userInput' id='entry[i]'></textarea>");
// $button = $("<button class='saveBtn col-1 col-m-2 fas fa-check-circle' type='button' data-id=[i]'></button>");

// $(".container").append($row);
// $($row).append($hour);
// $($row).append($input);
// $($row).append($button);
// }