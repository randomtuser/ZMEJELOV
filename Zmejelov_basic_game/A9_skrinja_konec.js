
class A9_skrinja_konec extends Phaser.Scene {
  constructor() {
    super({
      key: 'A9_skrinja_konec',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    });
  }
  preload() {
    this.load.json('textSlo', 'translations/translationsSLO_js.json');
    this.load.json('textEn', 'translations/translationsEN_js.json');
  }

  loadText(text_to_translate) {
    if (language === "en") {
                  return this.cache.json.get('textEn')["en"][text_to_translate];

    } else {
                  return this.cache.json.get('textSlo')["slo"][text_to_translate];

    }
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    const xKordinata = (Math.random() * 490)
    const yKordinata = (Math.random() * 350)
    this.add.text(xKordinata, yKordinata, this.loadText("space"))
    this.add.text(100, GAME_HEIGHT - 200, this.loadText("level_9_konec"), {
      fontSize: '40px',
      fill: '#A996BC',
      fontFamily: 'CustomFont',
      wordWrap: { width: GAME_WIDTH - 200, useAdvancedWrap: true }
    });



    this.input.keyboard.on('keyup-SPACE', () => {
      this.scene.stop('A9_skrinja_konec')
      this.scene.start('A9_cilj')
    })






  }
}