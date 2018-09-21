import gameOptions from "../gameOptions"
import physicOptions from "../physicOptions"

export default class extends Phaser.State
{

  create () {

    this.game.stage.backgroundColor = '#0072bc';

    var playBtn = this.add.button(480, 250, "btnSheet", this.btnPlayOnClick, this, 1,0,2,0);
    playBtn.anchor.set(.5,0);
    var playTxt = this.add.bitmapText(playBtn.x, playBtn.y,'gameFont', 'play', 50);
    playTxt.anchor.set(.5,0);

    var fullScreenBtn = this.add.button(480, 400, "btnSheet", this.btnClickFullscreen, this, 0,1,2,0);
    fullScreenBtn.anchor.set(.5,0);
    var fullScreenTxt = this.add.bitmapText(fullScreenBtn.x, fullScreenBtn.y,'gameFont', 'fullscreen', 50);
    fullScreenTxt.anchor.set(.5,0);
  }

  btnPlayOnClick (){

  this.state.start('PlayState');

  }

  btnClickFullscreen (){
    //fullscreen
    if (this.game.scale.isFullScreen)
    {
      this.game.scale.stopFullScreen();
      if (this.game.device.desktop)
      {
        this.game.scale.setMinMax(gameOptions.main.width, gameOptions.main.height, gameOptions.main.width, gameOptions.main.height);
      }
    }
    else
    {
      this.game.scale.startFullScreen();
      if (this.game.device.desktop)
      {
        this.game.scale.setMinMax(gameOptions.main.width, gameOptions.main.height, 0, 0);
      }
    }
  }

}
