
		function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
			console.log("LOAD : " + this);
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

window.onload = preload([
'img/zodiac/bigs/aquarius.png',
'img/zodiac/bigs/aries.png',
'img/zodiac/bigs/cancer.png',
'img/zodiac/bigs/capricorn.png',
'img/zodiac/bigs/default.png',
'img/zodiac/bigs/gemini.png',
'img/zodiac/bigs/leo.png',
'img/zodiac/bigs/libra.png',
'img/zodiac/bigs/pisces.png',
'img/zodiac/bigs/sagittarius.png',
'img/zodiac/bigs/taurus.png',
'img/zodiac/bigs/virgo.png',

'img/zodiac/whites/aquarius.png',
'img/zodiac/whites/aries.png',
'img/zodiac/whites/cancer.png',
'img/zodiac/whites/capricorn.png',
'img/zodiac/whites/default.png',
'img/zodiac/whites/gemini.png',
'img/zodiac/whites/leo.png',
'img/zodiac/whites/libra.png',
'img/zodiac/whites/pisces.png',
'img/zodiac/whites/sagittarius.png',
'img/zodiac/whites/taurus.png',
'img/zodiac/whites/virgo.png',
]);;
