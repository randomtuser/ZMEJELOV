class S2_inicial extends Phaser.Scene {
        constructor() {
          super({ key: 'S2_inicial' });
        }
      
    preload() {
        this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
        this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.image("zmentures", "assets/zmejelov/1 (4).png")
        this.load.image("zmentures2", "assets/zmejelov/1 (3).png")

        this.load.image("usa","assets/uvod/United_States.jpg")
        this.load.image("rus","assets/uvod/Russia.jpg")
        this.load.image("slo","assets/uvod/Slovenia.jpg")
        this.load.image("gumb2","assets/uvod/gumbVeliki.png")
        this.load.image("mute","assets/uvod/mute.png")
        this.load.image("unmute","assets/uvod/umute.png")
        this.load.json('textSlo', '/translations/translationsSLO_js.json');
		this.load.json('textEn', '/translations/translationsEN_js.json');
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

        var verzija = Math.floor(Math.random() * 2)

    
        if (verzija == 0) {
            var zmentures = this.add.image(GAME_WIDTH / 2, 150, "zmentures");
            zmentures.setScale(1.7)
        }
        else if (verzija == 1) {
            var rage = this.add.image(GAME_WIDTH / 2, 150, "zmentures2");
            rage.setScale(1.7)
        }
       


        //zvok
        if(!isMute){
            this.unmute = this.add.sprite(GAME_WIDTH-40,GAME_HEIGHT-30,"unmute").setInteractive();;
            this.unmute.setScale(.5)
            if (muska == 1){
                this.titleMusic = this.sound.add('glavna', { volume: 0.1, loop: true });   
                this.titleMusic.play();    
                muska = 2}
        
            

            this.unmute.on('pointerup', () => {
                isMute = true
                this.scene.restart()
            })
            
        }
        else if(isMute){
            muska = 1  
            this.mute = this.add.sprite(GAME_WIDTH-40,GAME_HEIGHT-30,"mute").setInteractive();;
            this.mute.setScale(.5)
            this.titleMusic.stop()
            this.mute.on('pointerup', () => {
                isMute = false
                this.scene.restart()
            }) 
        }
        
        enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
        
        


    

        var odmik = 2

        var pozicija1 = 400
        var razmikMedBloki = 150
        
        this.igra = this.add.sprite(GAME_WIDTH/odmik, pozicija1, 'gumb2').setInteractive();
            
        
        
    

        this.igra = this.add.sprite(GAME_WIDTH / odmik, pozicija1, 'gumb2').setInteractive();
        this.add.text(GAME_WIDTH / 2 - 50, pozicija1 - 20, this.loadText("play"), { fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
        



        this.igra.setScale(1)
    
           
        this.igra.on('pointerup', () => {
            var achievementsSplit = achievements;
            const prevCompletedSpeedy = achievementsSplit.substring(17, 18); 
            const prevCompletedGame = achievementsSplit.substring(18, 19); 
            const prevDieDiverse = achievementsSplit.substring(19, 20);
            const prevStars = achievementsSplit.substring(20, 21);
            const prevDieALot = achievementsSplit.substring(21,22);
            const prevQuickDeath = achievementsSplit.substring(22, 23);


            if(prevCompletedSpeedy == "1")
                 completedSpeedy = true;
                
            if(prevCompletedGame == "1")
                completedGame     = true;
           
            if(prevDieDiverse == "1")
                dieDiverse = true;
                
            if(prevStars == "1")
                stars  = true;
           
            if(prevDieALot == "1")
                 dieALot  = true;

            if(prevQuickDeath == "1")
                 quickDeath  = true;

            console.log(stars)

            stopWatchStart()
            this.scene.stop('S2_inicial ')
            this.scene.start('S3_storyIntro')
        })
        

        
    
        
        
    
    



       

        
        
    

        
    }
    }