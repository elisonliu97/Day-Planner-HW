// VARIABLES
var today = moment()
var timeBlockCont = $('.container');


// function to display the date at the top
function displayDay(){
    $("#currentDay").text(today.format("MMM Do, YYYY"));
}

// function to create the timeblocks
function createTimeBlock(){
    var timeBlock = $('<div>');
    timeBlockCont.append(timeBlock)

    var timeBlockName = $('<p>');
    timeBlockName.text("Hello")
    timeBlock.append(timeBlockName)
    
    var timeBlockSubmit = $('<input>')
    timeBlockName.after(timeBlockSubmit)
    timeBlock.append(timeBlockName)
    
    var timeBlockButton = $('<button>')
    timeBlockButton.text("LOCK")
    timeBlock.append(timeBlockButton)
}

displayDay();
