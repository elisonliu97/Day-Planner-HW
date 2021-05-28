// VARIABLES
var today = moment()
var timeBlockCont = $('.container');
var currentHour = Number(today.format("HH"))

// function to display the date at the top
var displayDay = function () {
        $("#currentDay").text(today.format("MMM Do, YYYY"));
}

// function to create the timeblocks
function createTimeBlock(hour){
    var timeBlock = $('<div>');
    timeBlockCont.append(timeBlock)
    timeBlock.attr("id", hour)
    timeBlock.attr("class", "time-block row")

    var timeBlockName = $('<p>');
    timeBlockName.text(hour+":00")
    timeBlockName.attr("class", "hour")
    timeBlock.append(timeBlockName)
    
    var timeBlockSubmit = $('<textarea>')

    // need to fill in text with saved data
    if (hour < currentHour){
        timeBlockSubmit.attr("class", "past")
    } else if (hour > currentHour){
        timeBlockSubmit.attr("class", "future")
    } else {
        timeBlockSubmit.attr("class", "present")
    }
    timeBlock.append(timeBlockSubmit)
    
    var timeBlockButton = $('<button>')
    timeBlockButton.text("LOCK")
    timeBlockButton.attr("class", "saveBtn")
    timeBlock.append(timeBlockButton)
}

// function to save input
var handleButtonClick = function (event) {
    event.preventDefault();
    var eventEl = $(event.target)

    var textInput = eventEl.siblings().eq(1).val();
    var divId = eventEl.closest('div').attr("id");

    localStorage.setItem(divId, textInput);
}

// function to get input
var getStoredVal = function (key) {
    var storedVal = localStorage.getItem(key);
    var keyTimeBlock = $('#'+key);
    var keyTimeBlockSubmit = $(keyTimeBlock.children().eq(1));

    keyTimeBlockSubmit.text(storedVal);
}

// function to dynamically create the blocks
function createAllBlocks(){
    var keyList = []
    for (var i = 0; i < localStorage.length; i++){
        keyList.push(localStorage.key(i))
    }
    for (var i = 9; i < 20; i++){
        createTimeBlock(i);
    }
    for (var i = 0; i < keyList.length; i++){
        getStoredVal(keyList[i]);
    }
}



displayDay();
createAllBlocks();
timeBlockCont.on('click', '.saveBtn', handleButtonClick);