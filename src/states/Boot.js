import gameOptions from "../gameOptions"

export default class extends Phaser.State
{
  init ()
  {
    this.game.stage.backgroundColor = '#883087';

    this.input.maxPointers = 2;

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop)
    {
      this.scale.setMinMax(gameOptions.main.width, gameOptions.main.height, gameOptions.main.width, gameOptions.main.height);
    }
    else
    {
      this.scale.forceOrientation(true);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);

      this.orientationImg = null;
    }

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  }

  preload ()
  {
    this.load.image('preloaderBarBack', 'assets/images/preloaderEmpty.png');
    this.load.image('preloaderBar', 'assets/images/preloaderFull.png');
    this.load.image("orientationImg", "assets/images/orientation.jpg");
  }

  create ()
  {
    this.state.start('Preloader');
  }

  enterIncorrectOrientation ()
  {
    console.log("enter incorrect orientation.");
    document.getElementById('orientation').style.display = 'block';
    this.showOrientationImage();
    this.game.paused = true;
  }

  leaveIncorrectOrientation ()
  {
    console.log("leave incorrect orientation.");
    document.getElementById('orientation').style.display = 'none';
    this.orientationImg.destroy();
    this.game.paused = false;
  }

  showOrientationImage(){
    console.log("show image");
    this.orientationImg = this.game.add.image( 0, 0, 'orientationImg');
    this.orientationImg.fixedToCamera = true;
    this.orientationImg.width = gameOptions.main.width;
    this.orientationImg.height = gameOptions.main.height;
  }

}
