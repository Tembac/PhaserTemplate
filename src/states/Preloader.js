import gameOptions from "../gameOptions"

export default class extends Phaser.State
{
  preload ()
  {
		this.background = this.add.image( this.game.world.centerX , this.game.world.centerY, 'preloaderBarBack');
		this.background.anchor.set(0.5);
		this.preloadBar = this.add.sprite( this.game.world.centerX -220, this.game.world.centerY + 195.5, 'preloaderBar');
		this.preloadBar.anchor.set(0, 1);

		this.load.setPreloadSprite(this.preloadBar);

    //empieza la carga de assets
    this.load.bitmapFont('gameFont', 'assets/font/Font.png', 'assets/font/Font.xml');

    this.load.image('birdImg', 'assets/images/bird.png');

  }

  create ()
  {

    //load data
    this.game.sound.mute = JSON.parse( localStorage.getItem("ScooHidden_muteState"));


    if(indexInfo.buildState == "Debug")
    {
      this.state.start('PlayState');
    }
    else
    {
      this.state.start('PlayState');
    }
  }
}
