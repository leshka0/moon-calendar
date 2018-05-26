<style>
.infosCardOn{
  top: 2vh;
  left: 50%;
  width: 600px;
  height: auto;
  /* min-height: 1600px; */
  margin-left: -300px;
  transition: all 2s ease;
  background-color: white;
}
.bigZodiacCardOn{
  top: 30px;
  bottom: 60px;
}
.card{
  z-index:
  position: absolute;
  top: 25px;
  min-height: 1024px;
  /* width: 100%; */
  background-color: white;
  padding-top: 58vh;
  padding-left: 50px;
  padding-right: 50px;
  text-align: left;
  color: black;
  opacity: 0;
  transition: opacity 2s ease;
  pointer-events: none;
}
.cardCardOn{
  opacity: 1;
  pointer-events: all;
}
.zodiacNameCardOn{
  bottom: -20px;
  color: black;
  cursor: default;
}
.phaseNameCardOn{
  bottom: 30px;
  color: black;
  transition: color 2s ease;
}
.infosCenterCardOn{
  top: 20px;
  /* width: 800px; */
}
.currentDateCardOn{
  color: black;
  top: 40px;
  transition: color 2s ease, top 2s ease;
}
.nextContainerCardOn{
  left: 75vw;
}
.pervContainerCardOn{
  right: 75vw;
}
</style>

<script type="text/javascript">
var cardOn = false;

$(".zodiacName").click(function() {
  if (cardOn == false){
    cardOn = true;
    $(".zodiacName").addClass("zodiacNameCardOn");
    $(".phaseName").addClass("phaseNameCardOn");
    $(".bigZodiacWhite").css("opacity",1);
    $(".bigZodiac").css("opacity",0);
    $(".bigZodiacWhite").addClass("bigZodiacCardOn");
    $(".bigZodiac").addClass("bigZodiacCardOn");
    $(".card").addClass("cardCardOn");
    $(".infosCenter").addClass("infosCenterCardOn");
    $(".currentDate").addClass("currentDateCardOn");

    $(".nextContainer").addClass("nextContainerCardOn");
    $(".prevContainer").addClass("pervContainerCardOn");
    $(".next_moonContainer").addClass("nextContainerCardOn");
    $(".perv_moonContainer").addClass("pervContainerCardOn");
    // temp = $(".infosCenter").css("left") + $(".infosCenter").css("width")/2;
    // $(".next_moonContainer").css("left",temp);
    // console.log(temp);

    $(".card").append("<p>Endings come in big and small ways. All shapes and sizes. Carrying with them all kinds of consequences. Information for us to unpack. Confirmations about what we need next. <br/><br/> Some growth cycles are complete before we are ready to move on. Accepting the fact that something has played out its potential is key to letting ourselves grieve if there is grief, heal if there is healing to be done, and eventually move on with the lessons that we are left with.<br/><br/> How we approach each completion, how we arrive at each milestone, and how we handle each ending is a deeply personal endeavor. Unique to each situation. Unique to our constitution at that moment. Unique to the phase of life we find ourselves in. Each ending is an opportunity to meet difficulty with graciousness. Towards ourselves. Towards the situation. Towards those that we struggle with.</p>")
  }

})
// function toggleCard(){
// }
</script>
