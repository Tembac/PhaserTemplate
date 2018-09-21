import BootState from './states/Boot';
import PlayState from './states/PlayState';
import MainMenu from './states/MainMenu';
import Preloader from './states/Preloader';
import gameOptions from "./gameOptions"

window.onload = function() {

  gameOptions.main.version += " " + indexInfo.buildState;

  var game = new Phaser.Game(gameOptions.main.width, gameOptions.main.height, Phaser.AUTO);
  // adding game state
  game.state.add("Boot", BootState);
  game.state.add("Preloader", Preloader);
  game.state.add("MainMenu", MainMenu);
  game.state.add("PlayState", PlayState);

  // starting game state
  game.state.start("Boot");

  console.log("game build " + gameOptions.main.version);
};
