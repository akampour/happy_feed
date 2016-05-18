function imgslider(){
	var configure = {

		// The first image of imgslider is set
		imageslide: function(){
			feature = document.querySelector("#slide1");
			feature.classList.add("active");
			this.sign(feature);
		},

		// sign in the figcaption added
		sign: function(obj){
			var sign = obj.querySelector("img").getAttribute("alt");
			document.querySelector("figcaption").innerHTML = sign;
		},

		// Another class is added in the next imgslider
		slideshow: function(){
			feature = document.querySelector(".active");
			if(feature.nextElementSibling) {
				feature.nextElementSibling.classList.add("active");
				configure.sign(feature.nextElementSibling);
				feature.classList.remove("active");
			}
			else {
				feature.classList.remove("active");
				configure.imageslide();
			}
		}
	}
	configure.imageslide();
	configure.sign(feature);

	// set interval of the slides
	var automatically = setInterval(configure.slideshow,4000);
}
// after loading the video run
window.addEventListener("load",imgslider,false);