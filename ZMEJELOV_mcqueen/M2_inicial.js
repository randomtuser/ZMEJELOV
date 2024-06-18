
class M2_inicial extends M0_shared {
    constructor() {
        super("M2_inicial")
    }
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3', "assets/uvod/glavna.ogg"]);
        this.load.image("gumb", "assets/uvod/gumb.png")
        this.load.image("zmeja", "assets/uvod/zmeja.png")
        this.load.image("zmentures", "assets/zmejelov/1 (4).png")
        this.load.image("zmentures2", "assets/zmejelov/1 (2).png")


        this.load.image("usa", "assets/uvod/United_States.jpg")
        this.load.image("rus", "assets/uvod/Russia.jpg")
        this.load.image("slo", "assets/uvod/Slovenia.jpg")
        this.load.image("gumb2", "assets/uvod/gumbVeliki.png")
        this.load.image("mute", "assets/uvod/mute.png")
        this.load.image("unmute", "assets/uvod/umute.png")
        this.load.json('textEn', '/translations/translationsEN_js.json');
        this.load.json('textSlo', '/translations/translationsSLO_js.json');
    }

    loadText(text_to_translate) {
        let textEn = this.cache.json.get('textEn');
        let textSlo = this.cache.json.get('textSlo');
        if (language === "en") {
            return textEn["en"][text_to_translate];
        } else {
            return textSlo["slo"][text_to_translate];
        }
    }


    create() {
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

        var verzija = Math.floor(Math.random() * 2)



    
        userCoins =   this.getMoney();

    



        if (verzija == 0) {
            var zmentures = this.add.image(GAME_WIDTH / 2, 150, "zmentures");
            zmentures.setScale(1.7)
        }
        else if (verzija == 1) {
            var rage = this.add.image(GAME_WIDTH / 2, 150, "zmentures2");
            rage.setScale(1.7)
        }
       



        //zvok
        if (!isMute) {
            this.unmute = this.add.sprite(GAME_WIDTH - 40, GAME_HEIGHT - 30, "unmute").setInteractive();;
            this.unmute.setScale(.5)
            if (muska == 1) {
                this.titleMusic = this.sound.add('glavna', { volume: 0.1, loop: true });
                this.titleMusic.play();
                muska = 2
            }



            this.unmute.on('pointerup', () => {
                isMute = true
                this.scene.restart()
            })

        }
        else if (isMute) {
            muska = 1
            this.mute = this.add.sprite(GAME_WIDTH - 40, GAME_HEIGHT - 30, "mute").setInteractive();;
            this.mute.setScale(.5)
            this.titleMusic.stop()
            this.mute.on('pointerup', () => {
                isMute = false
                this.scene.restart()
            })
        }




        //NAREDIMO, DA IGRALEC NE DOBI PONOVNO OBVESTIL O DOSEZENIH ACHIVEMENTIH
        const ach1 = achievements.substring(6, 7);
        const ach2 = achievements.substring(7, 8);
        const ach3 = achievements.substring(8, 9);

        if (ach1 == 1)
            money = true;
        if (ach3 == 1)
            noPops = true;
        if (ach2 == 1)
            rainbow = true;





        score = 0
        var odmik = 2
        var pozicija1 = 400
        var razmikMedBloki = 150

        this.igra = this.add.sprite(GAME_WIDTH / odmik, pozicija1, 'gumb2').setInteractive();
        this.add.text(GAME_WIDTH / 2 -75, pozicija1 - 20, this.loadText("play"), { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });


        this.shop = this.add.sprite(GAME_WIDTH / odmik, pozicija1 + razmikMedBloki, 'gumb2').setInteractive();
        this.add.text(GAME_WIDTH / 2-75 , pozicija1 - 20 + razmikMedBloki, this.loadText("explanation"), { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });




        this.igra.on('pointerup', () => {

            this.scene.stop('M2_inicial')
            this.scene.start('M3_shop')
        })


        this.shop.on('pointerup', () => {

            this.scene.stop('M2_inicial')
            this.scene.start('M3_explanation')
        })















    }
}