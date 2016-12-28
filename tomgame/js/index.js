var change = 0;
$("#getRight").click(function() {
    change -= 212;
    if (change < -212) {
        change = -212;
        return false;
    }
    $("#imgContent").animate({ "left": change + 'px' }, 300, function() {})
})

$("#getLeft").click(function() {
    change += 212;
    if (change > 0) {
        change = 0;
        return false;
    }
    $("#imgContent").animate({ "left": change + 'px' }, 300, function() {})
})

