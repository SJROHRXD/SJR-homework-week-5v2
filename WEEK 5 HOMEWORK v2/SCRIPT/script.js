
// VARIABLES FOR CURRENT DATE, TIME
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// CREATES ELEMENTS + CSS CLASSES TO MAKE THEM NICE LOOKING
function boop() {
    for (i = 9; i <= 17; i++ ) {
    $bsdiv = $(`<div class="input-group mb-3">`)
    $row = $(`<div class= "input-group-prepend row">`)
    $hour = $(`<span class = "input-group-text hour"></span>`)
    $hour.text(moment(i, 'HH').format('HH:mm'))
    $input = $(`<textarea class = "form-control description textarea" id='inputText${i}' type='text' name='userInput'></textarea>`)
    $input.text(localStorage.getItem(i))
    $button = $(`<button class = "saveBtn fas fa-check-circle" data-id='${i}'></button>`)
    
    // APPENDS ELEMENTS, IN ORDER
    // BSDIV IS PURELY FOR LOOKS
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

// RUN THAT FUNCTION
boop();