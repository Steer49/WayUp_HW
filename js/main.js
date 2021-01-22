// var name = 'Петя';
// var surname = 'Васечкин';
// var age = 25;

// var c = false;
// var d = 5;

// a = 4;

// a = prompt ('Напишите значение переменной a');

// if (a == 6) {
// 	alert ('a = 6');
// } else {
// 	alert ('что-то другое');
// }

// for (var i = 0; i <= 5; i++) {
// 	alert (i);
// }

// var user = {
// 	'name' : 'Петя ',
// 	'surname' : 'Васечкин ',
// 	'age': 25
// }

// alert ( user.surname )

// var mas = ['Петя', 'Васечкин', 25]

// alert(mas[0])

// function doMagic (a,b) {
// 	alert (a + b);
// }

// doMagic(5,5);
// doMagic(6,5);


// var btn = document.getElementById('btn');

// btn.onclick = function (e) {
// 	e.preventDefault();
// 	var text = document.querySelector('.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.desktop');
// 	img.style.display = 'none';
// 	document.querySelector('.plus-value').style.marginLeft = '50px';
// }

$(function () {
	$(window).scroll(function() {
			$('.section-title').each(function(){
				var imagePos = $(this).offset().top;
			    var topOfWindow = $(window).scrollTop();
			    if (imagePos < topOfWindow+650) {
			    $(this).addClass("animate__rollIn");
	    	}
		});
	});
	$(window).scroll(function() {
			$('.plus-travel').each(function(){
				var imagePos = $(this).offset().top;
			    var topOfWindow = $(window).scrollTop();
			    if (imagePos < topOfWindow+650) {
			    $(this).addClass("animate__zoomIn");
	    	}
		});
	});
	$(window).scroll(function() {
			$('.plus').each(function(){
				var imagePos = $(this).offset().top;
			    var topOfWindow = $(window).scrollTop();
			    if (imagePos < topOfWindow+650) {
			    $(this).addClass("animate__fadeInDown");
	    	}
		});
	});
	$(window).scroll(function() {
			$('.plus-value').each(function(){
				var imagePos = $(this).offset().top;
			    var topOfWindow = $(window).scrollTop();
			    if (imagePos < topOfWindow+650) {
			    $(this).addClass("animate__fadeInUp");
	    	}
		});
	});
	$(window).scroll(function() {
			$('.btn').each(function(){
				var imagePos = $(this).offset().top;
			    var topOfWindow = $(window).scrollTop();
			    if (imagePos < topOfWindow+650) {
			    $(this).addClass("animate__pulse animate__infinite");
	    	}
		});
	});
})
