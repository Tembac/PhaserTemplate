import gameOptions from "../gameOptions"

export default class extends Phaser.State
{
  init ()
  {
    this.game.stage.backgroundColor = '#883087';

    this.input.maxPointers = 2;

    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop)
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(gameOptions.main.width, gameOptions.main.height, gameOptions.main.width, gameOptions.main.height);
    }
    else
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

      this.scale.forceOrientation(true);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    }

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  }

  preload ()
  {
    this.load.image('preloaderBarBack', 'assets/images/preloaderEmpty.png');
    this.load.image('preloaderBar', 'assets/images/preloaderFull.png');
  }

  create ()
  {
    this.state.start('Preloader');
  }

  enterIncorrectOrientation ()
  {
    document.getElementById('orientation').style.display = 'block';
    this.game.paused = true;
  }

  leaveIncorrectOrientation ()
  {
    document.getElementById('orientation').style.display = 'none';
    this.game.paused = false;
  }

}
