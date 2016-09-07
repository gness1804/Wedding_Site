$(document).ready(function() {
	$(".responsive-menu").hide();
	$(".menubtn").click(function() {
		$(".regpage").toggle();
		$(".responsive-menu").toggle();
	});
});
function dayCounter () {
	var now = new Date();
	var then = new Date("July 3, 1976 17:00");
	var timeSince = now.getTime() - then.getTime();
	var msPerDay = (24 * 60 * 60 * 1000);
	var daysSince = Math.floor(timeSince / msPerDay);
	document.getElementById("dateVessel").innerHTML = daysSince + "&nbsp days have elapsed since the wedding.";
}
function rsvpFunc() {
	var x = document.getElementById("fname").value;
	var y = document.getElementById("lname").value;
	var z =document.getElementById("mchoice").value;
	var a = x + " " + y + "," + " " + " you have chosen the" + " " + z + ".";
	alert(a);
}
