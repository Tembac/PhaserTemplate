import gameOptions from "../gameOptions"
import physicOptions from "../physicOptions"

export default class extends Phaser.State
{

  create () {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#0072bc';

    this.sprite = this.game.add.sprite(400, 300, 'birdImg');
    this.sprite.anchor.setTo(0.5, 0.5);

    //  Enable Arcade Physics for the sprite
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    //  Tell it we don't want physics to manage the rotation
    this.sprite.body.allowRotation = false;

    //framerate only on debug
    if(indexInfo.buildState == "Debug")
    {
      this.game.time.advancedTiming = true;
      this.txtFPS = this.add.bitmapText(15, 10,'gameFont', '0', 18);
      this.txtFPS.fixedToCamera = true;
      this.txtFPS.visible = true;
      this.txtFPS.anchor.set(0);
    }

  }

  update (){

    this.sprite.rotation = this.game.physics.arcade.moveToPointer(this.sprite, 60, this.game.input.activePointer, 500);

    //framerate
    if(indexInfo.buildState == "Debug")
    {
		  this.txtFPS.text = gameOptions.main.version + " FPS: " + this.game.time.fps;
    }
  }

  render(){

  }

  renderGroup(member){
    // this.Group.forEachAlive(this.renderGroup, this);
      this.game.debug.body(member);
  }

}
