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

function toggleCard(){

}
console.log("LOOOOOOOL");
