function initGui() {
  var obj = {
    day: 0
  };

  var gui = new dat.gui.GUI();

  // gui.add(obj, 'day').min(0).max(30).step(1).listen();
  var controller = gui
    .add(obj, "day")
    .min(-30)
    .max(30)
    .step(1)
    .listen();

  controller.onChange(function(value) {
    // day = obj.day;
    day = new Date().getDate() + obj.day;

    console.log(
      "DAY : " +
        day +
        ", LIGHNING : " +
        moon.phase[day].lighting +
        ", ROTATION : " +
        lightRot
    );
    light3dchange();
    text();
  });
}
window.onload = initGui();
