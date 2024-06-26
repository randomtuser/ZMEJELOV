const dolzina = 1000000
var freshlyRocketDone = false
var allPlatforms = [];
var finalPlatform = [];
var playOnce = false
var coins = [];
var enemies = [];
var shield = false
var ghost = false
var shroom = false
var heart = false
var spaceShip = false
var speedShip = false
var zen = false
var buffs = []
var distance = 0
var shieldIcon = ""
var startTimeShield = 0

var heartIcon = ""
var startTimeheart = 0

var spaceShipIcon = ""
var startTimespaceShip = 0

var shroomIcon = ""
var startTimeshroom = 0

var ghostIcon = ""
var startTimeGhost = 0

class M4_red extends M0_shared {
    constructor() {
        super("M4_red")
    }

    showPopupAchievements(text) {
        const rectangle = this.add.rectangle(999833, 2827, dolzina, 3000, 0XAAAAFF);
        rectangle.setOrigin(0.5, 0);

        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(rectangle.x - rectangle.width / 2, rectangle.y, rectangle.width, rectangle.height);

        const popup = this.add.text(999833, 2827, text, {
            fontSize: '32px',
            color: '#980a69',
            align: 'center',
            wordWrap: { width: rectangle.width - 20, useAdvancedWrap: true }
        });

        this.time.delayedCall(4000, () => {
            popup.destroy();
            rectangle.destroy();
            graphics.destroy();
        });
    }
    preload() {
        super.preload()
        this.load.image("platform1", "assets/a_speedRunning/platforms/Pad_3_3.png")
        this.load.image("platform2", "assets/a_speedRunning/platforms/Pad_04_1.png")
        this.load.image("platform3", "assets/a_speedRunning/platforms/Pad_01_1.png")
        this.load.image("platform4", "assets/a_speedRunning/platforms/Pad_1_3.png")
        this.load.audio('zmaga', ['assets/uvod/zmaga.mp3', "assets/uvod/zmaga.ogg"]);
        this.load.image("spaceship", "assets/scena6/spaceship.png")
        this.load.image("skeli", "assets/deco/Spikes.png")
        this.load.image("boaster", "assets/a_speedRunning/boaster.png")
        this.load.spritesheet('vultureMovement', 'assets/a_speedRunning/Vulture_walk.png', {
            frameWidth: 48,
            frameHeight: 48,
        });
        this.load.image("vulture", "assets/a_speedRunning/Vulture.png")

        this.load.image("coin", "assets/scena3/Coin_01.png")
        this.load.audio('egg', ['assets/uvod/easterEgg(1).mp3', "assets/uvod/easterEgg(1).ogg"]);


        this.load.image("reaper", "assets/a_speedRunning/0_Reaper_Man_Idle_000.png")
        this.load.spritesheet('reaperMovement', 'assets/a_speedRunning/alienWalking.png', {
            frameWidth: 616,
            frameHeight: 587.3,
        });

        for (let i = 1; i <= 16; i++) {
            this.load.image("r1 (" + i + ')', "assets/a_TheFinalRage/r1 (" + i + ").png");
        }

    }
    createRectanglePlatform(x, y) {
        var graphics = this.add.graphics();
        var rectWidth = 300
            ;  // Width of the rectangle
        var rectHeight = 20;  // Height of the rectangle
        var rectColor = 0x00FF00;  // Color of the rectangle

        graphics.fillStyle(rectColor, 1);  // Color and alpha
        graphics.fillRect(0, 0, rectWidth, rectHeight);  // Position and size of the rectangle
        graphics.generateTexture('rectPlatform', rectWidth, rectHeight);

        var platform = this.physics.add.sprite(x, y, 'rectPlatform');
        platform.setImmovable(true);
        platform.body.allowGravity = false;
        platform.body.setSize(rectWidth, rectHeight);

        return platform;
    }


    create() {
        super.create();
        allPlatforms = [];
        coins = [];
        enemies = [];

        //ozadje rainbow
        var rainbowWidth = 50000; // Width of each color segment

        var p1 = this.add.graphics();
        var p2 = this.add.graphics();
        var p3 = this.add.graphics();
        var p4 = this.add.graphics();
        var p5 = this.add.graphics();
        var p6 = this.add.graphics();
        var p7 = this.add.graphics();

        // Fill the graphics objects with gradient fills representing the colors of the rainbow
        p1.fillStyle(0xFF0000, 1); // Red
        p1.fillRect(0, 0, rainbowWidth, visina);

        p2.fillStyle(0xFF7F00, 1); // Orange
        p2.fillRect(rainbowWidth, 0, rainbowWidth, visina);

        p3.fillStyle(0xFFFF00, 1); // Yellow
        p3.fillRect(2 * rainbowWidth, 0, rainbowWidth, visina);

        p4.fillStyle(0x00FF00, 1); // Green
        p4.fillRect(3 * rainbowWidth, 0, rainbowWidth, visina);

        p5.fillStyle(0x0000FF, 1); // Blue
        p5.fillRect(4 * rainbowWidth, 0, rainbowWidth, visina);

        p6.fillStyle(0x4B0082, 1); // Indigo
        p6.fillRect(5 * rainbowWidth, 0, rainbowWidth, visina);

        p7.fillStyle(0x9400D3, 1); // Violet
        p7.fillRect(6 * rainbowWidth, 0, rainbowWidth, visina);


        // Fill the graphics object with the desired color
        this.cameras.main.setBounds(0, 0, dolzina, visina)
        this.physics.world.setBounds(0, 0, dolzina, visina)






        gameState.spaceship = this.physics.add.sprite(dolzina - 200, visina - 400, "spaceship")
        gameState.spaceship.body.allowGravity = false;
        gameState.junak = this.physics.add.sprite(200, visina - 400, "Zmeja")
        //  gameState.junak = this.physics.add.sprite(dolzina-800, visina - 400, "Zmeja")
        gameState.junak.setCollideWorldBounds(true)
        gameState.junak.setScale(.40)// pomanjsa
        this.cameras.main.startFollow(gameState.junak)





        for (var i = 0; i < 5; i++) {
            var startPlatform = this.createRectanglePlatform(200 + distance, visina - 200);
            allPlatforms.push(startPlatform);
            distance += 200
        }

        var distanceEnd = 200
        for (var i = 0; i < 7; i++) {
            var startPlatform = this.createRectanglePlatform(dolzina - distanceEnd, visina - 100);
            finalPlatform.push(startPlatform);
            distanceEnd -= 200

        }

        gameState.spawnEvent = this.time.addEvent({
            delay: 100,
            callback: spawn,
            callbackScope: this,
            loop: true
        });



        gameState.text = this.add.text(dolzina - 200, visina - 600, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.text.setDepth(0)

        gameState.coins = this.add.text(dolzina - 200, visina - 800, 'Coins: ', { fontSize: '30px', fill: '#000000', fontFamily: 'CustomFont' });
        gameState.coins.setDepth(0)


        this.physics.add.overlap(gameState.junak, finalPlatform, () => {
            if (!rainbow) {
                rainbowUnlocked = true
            }


            this.scene.stop('M4_red');
            this.scene.start('M5_konec');

        })
        /* var shield = false
         var ghost = false
         var shroom = false
         var potion = false
         var rocket = false
         var spaceship = false*/






    }

    update() {
        if (gameState.active) {
            if ((gameState.cursors.up.isDown /*&& gameState.junak.body.touching.down*/)) {
                gameState.junak.anims.play('skok', true);
                gameState.junak.setVelocityY(this.getJumpingSpeed())
            }


            if (rocketStart) {
                gameState.junak.setVelocityX(100000)
                gameState.junak.x = gameState.junak.x++;
                gameState.junak.y = visina - 400
                for (let index = 55900; index <= 60000; index += 200) {
                    var startPlatfrom = this.createRectanglePlatform(index, visina - 400);
                    allPlatforms.push(startPlatfrom);
                }
                if (gameState.junak.x > 56000) {
                    rocketStart = false
                    freshlyRocketDone = true
                }


            }
            else {
                if (freshlyRocketDone) {
                    gameState.junak.y = visina - 700
                    freshlyRocketDone = false
                }
                else {
                    gameState.junak.setVelocityX(1000)
                }
                //    gameState.junak.setVelocityX(1000)

            }

            gameState.junak.anims.play('walk', true)

        }


        if (!rocketStart) {
            this.physics.add.collider(gameState.junak, allPlatforms)

        }




        if (didntCheat && !noCheat && score > 10000) {
            this.showPopupAchievements("25000")
            this.titleMusic = this.sound.add('egg', { volume: 0.1, loop: false });
            this.titleMusic.play();
            tfK = true
            this.updateAchievements();
            const dataAchievements = {
                achievements: achievements,
            };
            this.updateDataBaseAchivements(dataAchievements)
        }



        this.physics.add.overlap(gameState.junak, buffs, (user, buff) => {
            if (buff.value == 2) {
                if (!shield) {
                    shieldIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (2)")
                    shieldIcon.setScale(.3)
                    startTimeShield = this.getTimePassed()
                    shield = true
                    distance += 50
                    didntCheat = false
                }
            }
            else if (buff.value == 1) {
                inventory.push("chest")
            } else if (buff.value == 3) {
                wisdom = true
            } else if (buff.value == 5) {
                if (!ghost) {
                    ghostIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (5)")
                    startTimeGhost = this.getTimePassed()
                    ghost = true
                    distance += 50
                    didntCheat = false

                }
            } else if (buff.value == 6) {
                if (!shroom) {
                    shroomIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (6)")
                    startTimeshroom = this.getTimePassed()
                    shroom = true
                    distance += 50
                    didntCheat = false

                }
            } else if (buff.value == 9 || buff.value == 10) {
                if (!heart) {
                    startTimeheart = this.getTimePassed()
                    heart = true
                    distance += 50
                    if (buff.value == 9) {
                        heartIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (10)")
                    }
                    else {
                        heartIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (9)")
                        heartIcon.setScale(.5)
                    }
                    didntCheat = false


                }
            } else if (buff.value = 14) {
                speedShip = true
                didntCheat = false


            } else if (buff.value = 15) {
                if (!spaceShip) {
                    spaceShipIcon = this.add.image(gameState.junak.x - 100, gameState.junak.y - 50, "r1 (15)")
                    startTimespaceShip = this.getTimePassed()
                    spaceShip = true
                    didntCheat = false

                }
            }
            /*    if (buff.value == 3 || buff.value == 12 || buff.value == 13)
                    return*/


            buff.destroy()




        })


        var currentTime = this.getTimePassed()

        borderLeft = gameState.junak.x - 1500
        gameState.text.setText('Score: ' + score++);
        gameState.coins.setText('Coins: ' + coinsNewGame);

        gameState.coins.x = this.cameras.main.scrollX + 1000;
        gameState.coins.y = this.cameras.main.scrollY + 100;

        gameState.text.x = this.cameras.main.scrollX + 1000;
        gameState.text.y = this.cameras.main.scrollY + 50;



        if (gameState.junak.y >= 2940) {
            // this.scene.stop('M4_red')
            // this.scene.start('M5_konec')
        }



        allPlatforms.forEach(platform => {
            if (platform.x < borderLeft) {
                platform.destroy();
            }
        });

        coins.forEach(coin => {
            if (coin.x < borderLeft) {
                coin.destroy();
            }
        })


        gameState.junak.x = gameState.junak.x
        super.update("basic")


        this.physics.add.overlap(gameState.junak, coins, (user, coin) => {
            coinsNewGame += coin.value;
            coin.destroy()

        })




        enemies.forEach(enemy => {
            if (enemy.x >= enemy.targetMax) {
                enemy.reachedTarget = true
            }
            else if (enemy.x <= enemy.targetMin) {
                enemy.reachedTarget = false
            }

            if (enemy.x < enemy.targetMax && !enemy.reachedTarget) {
                enemy.anims.playReverse('reaperMovement', true);
                enemy.setVelocityX(500);
                enemy.flipX = false;
            } else if (enemy.x >= enemy.targetMin) {
                enemy.anims.playReverse('reaperMovement', true);
                enemy.setVelocityX(-500);
                enemy.flipX = true;
            }



        });


        if (shield) {
            shieldIcon.x = gameState.junak.x - 100
            shieldIcon.y = gameState.junak.y - 50;
            if (startTimeShield + 5 <= currentTime) {
                shieldIcon.destroy()
                shield = false
                distance -= 50
            }
        }


        if (ghost) {
            ghostIcon.x = gameState.junak.x - 200
            ghostIcon.y = gameState.junak.y - 50;
            if (startTimeGhost + 5 <= currentTime) {
                ghostIcon.destroy()
                ghost = false
            }

        }

        if (shroom) {

            shroomIcon.x = gameState.junak.x - 250
            shroomIcon.y = gameState.junak.y - 50;
            if (startTimeshroom + 5 <= currentTime) {
                shroomIcon.destroy()
                ghost = false
            }


        }

        if (heart) {
            heartIcon.x = gameState.junak.x - 150
            heartIcon.y = gameState.junak.y - 50;
            if (startTimeheart + 5 <= currentTime) {
                heartIcon.destroy()
                heart = false
                distance -= 50
            }




        }
        if (spaceShip) {


            gameState.junak.setTexture('r1 (15)')

            if (startTimespaceShip + 5 <= currentTime) {
                spaceShip = false
                gameState.junak.setTexture('zmeja')
            }

        }





    }


    generateCoins(min, max, height) {
        var pos = Math.floor(Math.random() * 1000) + 1000
        var distanceBetween = Math.floor(Math.random() * 250) + 120
        for (var i = min; i <= max; i += distanceBetween) {
            var coin = this.physics.add.sprite(i, height - 100, 'coin');
            coin.body.allowGravity = false;
            coin.value = 1;
            coin.setScale(.67)
            coins.push(coin)
        }
    }

    generateEnemy(min, max, height) {
        var enemy = this.physics.add.sprite(min, height - 100, 'reaper');
        enemy.body.allowGravity = false;
        enemy.setScale(0.2)
        enemy.targetMax = max;
        enemy.targetMin = min; // Store the target X coordinate as a property of the enemy
        enemy.reachedTarget = false
        enemies.push(enemy)
    }

    generateLineOFCoins(min, max, height) {
        var index = 1
        var distanceBetween = 200
        for (var i = min; i <= max; i += distanceBetween) {
            var coin = this.physics.add.sprite(i, height - index++ * 75, 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)
            if (index > 7)
                break
        }
    }

    generateWallOFCoins(min, max, height) {
        var distanceBetween = 200
        var actualHeight = height - 100
        for (var index = 0; index <= 6; index++) {
            for (var i = min; i <= max; i += distanceBetween) {
                var coin = this.physics.add.sprite(i, actualHeight, 'coin');
                coin.body.allowGravity = false;
                coin.setScale(.67)
                coins.push(coin)
            }
            actualHeight -= 100
        }
    }

    generateRandomCoins(min, max, height) {
        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

        var numberOfgenerated = Math.floor(Math.random() * 4) + 1;
        for (var x = 0; x <= numberOfgenerated; x++) {
            var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
            var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (400)) + 100), 'coin');
            coin.body.allowGravity = false;
            coin.setScale(.67)
            coins.push(coin)


        }






    }

    generateSpecialEffect(min, max, height) {
        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;

        var numberOfgenerated = Math.floor(Math.random() * 4) + 1;

        var possibleEle = ["fake", 'r1 (1)', 'r1 (2)', 'r1 (3)', 'r1 (4)', 'r1 (5)', 'r1 (6)', 'r1 (7)', 'r1 (8)', 'r1 (10)', 'r1 (9)', 'r1 (11)', 'r1 (12)', 'r1 (13)', 'r1 (14)', 'r1 (15)', 'r1 (16)']
        var choosenEle = Math.floor(Math.random() * 15) + 1;


        var coordinatesX = Math.floor(Math.random() * (max - min + 1)) + min;
        //4 7 8 11
        if (choosenEle === 4 || choosenEle === 7 || choosenEle === 8 || choosenEle === 11) {
            var coin = this.physics.add.sprite(coordinatesX, height - (Math.floor(Math.random() * (400)) + 100), possibleEle[choosenEle]);
            coin.setScale(3)

            if (choosenEle === 7)
                coin.value = 10;
            else if (choosenEle === 4) {
                coin.value = 1000;
                coin.setScale(1)

            }
            else if (choosenEle === 8) {
                coin.value = 50;
            }
            else if (choosenEle === 11) {
                coin.value = 100;
            }
            coin.body.allowGravity = false;
            coins.push(coin)

        }
        else {
            var buff = this.physics.add.sprite(coordinatesX, height - 200, possibleEle[choosenEle]);
            if (choosenEle === 14)
                buff.setScale(3)
            else if (choosenEle === 15)
                buff.setScale(2)
            else if (choosenEle === 16)
                buff.setScale(.67)
            else if (choosenEle === 10)
                buff.setScale(2.2)
            else if (choosenEle === 6)
                buff.setScale(2.2)
            /* else if (choosenEle === 11)
                 buff.setScale(.67)*/



            buff.body.allowGravity = false;
            buff.value = choosenEle;
            buffs.push(buff)

        }










    }

}





function spawn() {

    const platforms = this.physics.add.staticGroup();
    if (lastPoint - gameState.junak.x < 900) {
        var selection = 1// Math.floor(Math.random()*3)
        var length = Math.floor(Math.random() * 1000) + 1000
        switch (selection) {
            case 0:
                //zmeja has to be jumping
                var start = lastPoint
                var limit = start + length
                for (let index = lastPoint; index < limit; index += 600) {
                    var height = generateHeight()
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    allPlatforms.push(startPlatfrom);
                    lastPoint += 600
                    this.generateCoins(index, index + 100, height)
                }
                break
            case 1: 
                //standing platform

                var start = lastPoint
                var height = generateHeight()
                var limit = start + length
                var index = lastPoint;
                for (index; index < limit; index += 300) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    allPlatforms.push(startPlatfrom);
                    lastPoint += Math.floor(Math.random() * 100) + 350
                }
                var thing = Math.floor(Math.random() * 5)

                //change probability

                if (thing == 0)
                    this.generateEnemy(start, limit, height)
                else if (thing == 1)
                    this.generateCoins(start, limit, height)
                else if (thing == 2)
                    this.generateWallOFCoins(start, limit, height)
                else if (thing == 3)
                    this.generateRandomCoins(start, limit, height)
                else if (thing == 4)
                    this.generateSpecialEffect(start, limit, height)



                break
            case 2:
                //zmeja has to be jumping but in the same line
                var start = lastPoint
                var height = generateHeight()
                var limit = start + length

                for (let index = lastPoint; index < limit + length; index += 600) {
                    var startPlatfrom = this.createRectanglePlatform(index, height);
                    allPlatforms.push(startPlatfrom);
                    lastPoint += 600
                }
                this.generateCoins(start, limit, height)
                break
        }
    }





}

function generateHeight() {
    var newHeight = heightPlatform
    // - gre gor, + gre dol
    if (newHeight + 200 >= visina)
        newHeight += Math.floor(Math.random() * -200)
    else if (newHeight - 200 <= 350)
        newHeight += Math.floor(Math.random() * +200)
    else {
        var upDown = Math.floor(Math.random() * 2)
        if (upDown == 1)
            newHeight += Math.floor(Math.random() * -200)
        else if (upDown == 0)
            newHeight += Math.floor(Math.random() * +200)
    }

    heightPlatform = newHeight
    return heightPlatform


}




