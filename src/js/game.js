// global object of the game
var game,
    config = {
        IMG_PATH: 'assets/images/'
    };

function bootstrapGame(target) {

    // create our game object
    game = new Phaser.Game(1280, 720, Phaser.AUTO, target);

    // add new state to game
    game.state.add('Menu', Menu);

    //////////////////////////////////////
    // TODO: add other states to the game
    game.state.add('Loading', Loading);
    game.state.add('Gameplay', Gameplay);

    // start first state
    game.state.start('Loading');
}

// bootstrap our game after loading of DOM content finished
document.addEventListener('DOMContentLoaded', function () {
    bootstrapGame('canvas-target');
});

///////////////////////////////////////////////
// STATES, TRANSITIONS, EVENTS
///////////////////////////////////////////////

Loading = {
    preload: function () {
        game.load.image('loadingBg', config.IMG_PATH + 'loadingBg.png');
    },
    create: function () {
        // scale the canvas to browser's viewport, and the game world to 100% of viepowrt's width
        // not important for exercise
        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        game.scale.setResizeCallback(function () {
            var ratioW = window.innerWidth/ game.width;
            var ratioH = window.innerHeight/ game.height;
            game.scale.setUserScale(ratioW, ratioH);
        }, this);

        // specify what happens on complete of resource loading
        game.load.onLoadComplete.add(function () {
            //////////////////////////////////////
            // TODO: change state to main menu
            game.state.start('Menu');
        }, this);

        var background = game.add.sprite(game.width / 2, game.height / 2, 'loadingBg');
        // move to center
        background.anchor.setTo(0.5);

        // load other resources - graphics, sounds, etc.
        game.load.image('btnPlay', config.IMG_PATH + 'playBtn.png');
        //////////////////////////////////////
        // TODO: load menu background
        game.load.image('menuBg', config.IMG_PATH + 'menuBg.png');

        // start Phaser loading routine
        game.load.start();
    }
};


Menu = {
    init: function () {
        console.info('Initialization of Menu state.');
    },
    preload: function () {
        console.info('Preloading in Menu state.');
    },
    create: function () {
        console.info('Creation of Menu state.');

        var w = game.width,
            h = game.height;

        /////////////////////////////
        // TODO: add menu background
        var background = game.add.sprite(w / 2, h/ 2, 'menuBg');
        // move to center
        background.anchor.setTo(0.5);

        // 4-th argument defines function that will be called after clicking on button
        var btnPlay = game.add.button(w/2, h/2, 'btnPlay', Menu.startGame);
        btnPlay.anchor.setTo(0.5);
    },
    startGame: function () {
        game.state.start('Gameplay');
    }
};

///////////////////////////////
// TODO: create gameplay state
Gameplay = {
    create: function () {
        this.escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.escapeKey.onDown.add(Gameplay.goToMainMenu, this);
    },
    update: function () {
        
    },
    goToMainMenu: function () {
        game.state.start('Menu');
    }
};