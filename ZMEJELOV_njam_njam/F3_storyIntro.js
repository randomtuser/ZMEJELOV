class F3_storyIntro extends Phaser.Scene {
	constructor(){
		super({ key: 'F3_storyIntro' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
	   }
 create() {
   



        
    this.zacetek = this.add.sprite(GAME_WIDTH-100,GAME_HEIGHT - 50, 'gumb').setInteractive();
    this.zacetek.setScale(0.8)
    if (usa == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NEXT',{ fontSize: '40px', fill: '#E950F4' });}
    else if (rus == true){
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'СЛЕДУЮЩИЙ',{ fontSize: '20px', fill: '#E950F4' });}
    else{
        this.add.text(GAME_WIDTH-165,GAME_HEIGHT - 65, 'NAPREJ',{ fontSize: '40px', fill: '#E950F4' });}

        





        
        countdown = false
    this.zacetek.on('pointerup', () => {
        this.scene.stop('F3_storyIntro')
        this.scene.start('F4_gamePlayStart')
        })
    
    



  
    
   


	


    


  


    
  }
}