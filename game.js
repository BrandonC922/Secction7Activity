
class Title extends Phaser.Scene {
    constructor(){
        super('Title');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('titleScene', 'Title.png');
        this.load.image('end', "Victory.jpg");
        this.load.spritesheet('roly', 'RolySpriteSheet.png', {frameWidth: 100, frameHeight: 100, endFrame:2});

    }
    create() {
        this.add.image(1920*.5,1080*.5,"titleScene").setScale(1.9);
        this.add.text(1920*.39,1080*.47,"Click to continue").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('Final'));
    }
}

class Final extends Phaser.Scene {
    constructor(){
       super('Final');
    }
    create(){
         this.add.image(1920*.5,1080*.5,"end");
         this.anims.create({
            key:'roll',
            frames:'roly',
            frameRate: 6,
            repeat: -1
         });

         const sprite1 = this.add.sprite(1920*.5, 1080*.5, 'roly').play('roll');
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Title, Final],
    title: "s7",
});

//Does thsi work at all
