/*
Plugin Name: Requisite Pay
Plugin URL: https://github.com/saivittalb/requisite-pay
Description: A tool built for making your client pay you by adding opacity to the body tag and decrease it every day until their site completely fades away.
Version: 1.0
Author: Sai Vittal B
Author URL: https://github.com/saivittalb/
*/
(function(){
	var due_date = new Date('2019-02-14'); //set this variable according to your context
	var days_deadline = 30; //set this variable according to your context
	
	var current_date = new Date();
	var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
	var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
	var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	
	if(days > 0) {
		var days_late = days_deadline-days;
		var opacity = (days_late*100/days_deadline)/100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
		if(opacity >= 0 && opacity <= 1) {
			document.getElementsByTagName("BODY")[0].style.opacity = opacity;
		}	
	}
})()
