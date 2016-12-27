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

//详情页
$("#bt").click(function(){
	$('#reduce').text("疯狂冰桶挑战");
	$(".gameIcon").attr("src","images/fkbttz.png");
	$("#imgOne").attr("src","images/bttz01.png");
	$("#imgTwo").attr("src","images/bttz02.png");
	$("#imgThree").attr("src","images/bttz03.png");
});

$("#znm").click(function(){
	$('#reduce').text("转你妹");
	$(".gameIcon").attr("src","images/znm.png");
	$("#imgOne").attr("src","images/znm00.png");
	$("#imgTwo").attr("src","images/znm01.png");
	$("#imgThree").attr("src","images/znm02.png");
});

$("#qqppp").click(function(){
	$('#reduce').text("转你妹");
	$(".gameIcon").attr("src","images/qqppp.png");
	$("#imgOne").attr("src","images/qqppp00.png");
	$("#imgTwo").attr("src","images/qqppp01.png");
	$("#imgThree").attr("src","images/qqppp02.png");
});

$("#xxyw").click(function(){
	$('#reduce').text("转你妹");
	$(".gameIcon").attr("src","images/xxyw.png");
	$("#imgOne").attr("src","images/xxyw00.png");
	$("#imgTwo").attr("src","images/xxyw01.png");
	$("#imgThree").attr("src","images/xxyw02.png");
});

$("#ybdzz").click(function(){
	$('#reduce').text("转你妹");
	$(".gameIcon").attr("src","images/ybdzz.png");
	$("#imgOne").attr("src","images/ybdzz00.png");
	$("#imgTwo").attr("src","images/ybdzz01.png");
	$("#imgThree").attr("src","images/ybdzz02.png");
});

$("#ygdbns").click(function(){
	$('#reduce').text("转你妹");
	$(".gameIcon").attr("src","images/ygdbns.png");
	$("#imgOne").attr("src","images/ygdbns00.png");
	$("#imgTwo").attr("src","images/ygdbns01.png");
	$("#imgThree").attr("src","images/ygdbns02.png");
});