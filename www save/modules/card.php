<style>

.bigZodiacCardOn{
  top: 30px;
  bottom: 60px;
}
.bulletPoints{
    font-size: 10px;
    font-family: 'AndaleMono', Arial, sans-serif;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 60px;
    opacity: 0;
    transition: opacity 1s;
}
.bulletPoints .underline{
  border-bottom: 1px solid #888;
  padding-bottom: 4px;
}
.credits{
  font-size: 10px;
  text-align: center;
  font-family: 'AndaleMono', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 70px;
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity 1s;
}
.credits a{
  text-decoration: none;
  border-bottom: 1px solid black;
  padding-bottom: 4px;
  cursor: pointer;
  cursor: -webkit-image-set(url(img/cursorPointer2x.png) 1x,url(img/cursorPointer2x.png) 2x) 50 50,default;
  color: black;
}
.credits a:visited{
  color: black;
}
.credits a:hover{
  color: #be9638;
  border-color: #be9638;
}

.description{
  opacity: 0;
  transition: opacity 1s;
}
.appear{
  opacity: 1;
}
.card{
  width: calc(100% - 200px);
  font-size: 15px;
  font-family: 'AndaleMono', Arial, sans-serif;
  text-transform: initial;
  letter-spacing: 0.3px;
  line-height: 1.5em;
  position: absolute;
  top: 0px;
  background-color: transparent;
  padding-top: 58vh;
  padding-left: 100px;
  padding-right: 100px;
  text-align: left;
  color: black;
  /* opacity: 0; */
  transition: all 1s cubic-bezier(.5,0,.01,1);
  /* transition: background-color 1s cubic-bezier(.5,0,.01,1); */
   /* opacity 1s cubic-bezier(.5,0,.01,1), */
  pointer-events: none;
}
.cardCardOn{
  z-index: 1;
  opacity: 1;
  background-color: #f6f1ee;
  pointer-events: all;
  padding-bottom: 50px;
  margin-bottom: 100px;
}
.zodiacNameCardOn{
  bottom: -20px;
  color: black;
  cursor: default;
}
.phaseNameCardOn{
  bottom: 30px;
  color: black;
}
.infosCenterCardOn{
  top: 20px;
  /* width: 800px; */
}
.currentDateCardOn{
  color: black;
  top: 20px;
}
.nextContainerCardOn{
  left: 75vw;
}
.pervContainerCardOn{
  right: 75vw;
}
.cursorCross{
  cursor: -webkit-image-set(url(img/cursorClose1x.png) 1x,url(img/cursorClose2x.png) 2x) 50 50,default;
}

</style>

<script type="text/javascript">
var cardOn = false;


    // LOAD ZODIAC SIGN TXT FILE
    function load(updateZodiac){
    switch (updateZodiac) {
        case "leo":
  				data = "leo.txt"
  				return data
  	   break;
  			case "virgo":
  				data = "virgo.txt"
  				return data
  	   break;
  			case "libra":
  				data = "libra.txt"
  				return data
  	   break;
  			case "scorpio":
  				data = "scorpio.txt"
  				return data
  	   break;
  			case "sagittarius":
  				data = "sagittarius.txt"
  				return data
  	   break;
  			case "capricorn":
  				data = "capricorn.txt"
  				return data
  	   break;
  			case "aquarius":
  				data = "aquarius.txt"
  				return data
  	   break;
  			case "pisces":
  				data = "pisces.txt"
  				return data
  	   break;
  			case "aries":
  				data = "aries.txt"
  				return data
  	   break;
  			case "taurus":
  				data = "taurus.txt"
  				return data
  	   break;
  			case "gemini":
  				data = "gemini.txt"
  				return data
  	   break;
  			case "cancer":
  				data = "cancer.txt"
  				return data
        break;
      default:
        data = "default.txt"
        return data
      }
    }

// OPEN CARD

$(".activeZone").click(function() {


  if (cardOn == false){
    cardOn = true;
    $(".dragme").css("z-index",0);
    $(".dragme").addClass("cursorCross");
    $(".zodiacName").addClass("zodiacNameCardOn");
    $(".phaseName").addClass("phaseNameCardOn");
    $(".bigZodiacWhite").css("opacity",1);
    // $(".bigZodiac").css("opacity",0);
    $(".bigZodiacWhite").addClass("bigZodiacCardOn");
    $(".bigZodiac").addClass("bigZodiacCardOn");
    $(".card").addClass("cardCardOn");
    $(".bulletPoints").addClass("appear");
    $(".description").addClass("appear");
    $(".credits").addClass("appear");
    $(".infosCenter").addClass("infosCenterCardOn");
    $(".currentDate").addClass("currentDateCardOn");

    $(".nextContainer").addClass("nextContainerCardOn");
    $(".prevContainer").addClass("pervContainerCardOn");
    $(".next_moonContainer").addClass("nextContainerCardOn");
    $(".perv_moonContainer").addClass("pervContainerCardOn");

    // $(".card").append("<p>Endings come in big and small ways. All shapes and sizes. Carrying with them all kinds of consequences. Information for us to unpack. Confirmations about what we need next. <br/><br/> Some growth cycles are complete before we are ready to move on. Accepting the fact that something has played out its potential is key to letting ourselves grieve if there is grief, heal if there is healing to be done, and eventually move on with the lessons that we are left with.<br/><br/> How we approach each completion, how we arrive at each milestone, and how we handle each ending is a deeply personal endeavor. Unique to each situation. Unique to our constitution at that moment. Unique to the phase of life we find ourselves in. Each ending is an opportunity to meet difficulty with graciousness. Towards ourselves. Towards the situation. Towards those that we struggle with.</p>")
    // $(".card").load("texts/aries_normal.txt");

    $.ajax({
            url : "texts/en/bulletPoints/" + load(updateZodiac),
            dataType: "text",
            success : function (data) {
                $(".bulletPoints").html(data);
            }
    });
    $.ajax({
            url : "texts/en/description/" + load(updateZodiac),
            dataType: "text",
            success : function (data) {
                $(".description").html(data);
            }
    });
    $.ajax({
            url : "texts/en/" + "credits.txt",
            dataType: "text",
            success : function (data) {
                $(".credits").html(data);
            }
    });

    // $(".card").append("<div class='credits'>illustration by <a href='http://terryemi.com/en/eshop/' target='_blank'>Terryemi</a><br/>Text by <a href='http://velvet-venus.com' target='_blank'>Velvet-Venus</a></div>")
  }
})
  $(".dragme").click(function() {
    if (cardOn == true){
      cardOn = false;
      $(".dragme").css("z-index",10);
      $(".dragme").removeClass("cursorCross");
      $(".zodiacName").removeClass("zodiacNameCardOn");
      $(".phaseName").removeClass("phaseNameCardOn");
      $(".bigZodiacWhite").css("opacity",0);
      // $(".bigZodiac").css("opacity",0.3);
      $(".bigZodiacWhite").removeClass("bigZodiacCardOn");
      $(".bigZodiac").removeClass("bigZodiacCardOn");
      $(".card").removeClass("cardCardOn");
      $(".bulletPoints").removeClass("appear");
      $(".description").removeClass("appear");
      $(".credits").removeClass("appear");
      $(".infosCenter").removeClass("infosCenterCardOn");
      $(".currentDate").removeClass("currentDateCardOn");

      $(".nextContainer").removeClass("nextContainerCardOn");
      $(".prevContainer").removeClass("pervContainerCardOn");
      $(".next_moonContainer").removeClass("nextContainerCardOn");
      $(".perv_moonContainer").removeClass("pervContainerCardOn");

      //ScrollUp
      $('.infosCenterWrapper').animate({
        scrollTop: 0
      }, 800, function(){
        $(".bulletPoints").html("")
        $(".description").html("")
        $(".credits").html("")
      });

    }

})
</script>
