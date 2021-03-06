// global object of the game
var game,
    config = {
        IMG_PATH: 'src/assets/images/'
    };

function bootstrapGame(target) {

    // create our game object
    game = new Phaser.Game(1280, 720, Phaser.AUTO, target);

    // add new state to game
    game.state.add('Loading', Loading);

    //////////////////////////////////////
    // TODO: add other states to the game

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

var Loading = {
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

        // TODO: change state to main menu
        // TODO: specify what happens on complete of resource loading

        var background = game.add.sprite(game.width / 2, game.height / 2, 'loadingBg');
        // move to center
        background.anchor.setTo(0.5);

        // load other resources - graphics, sounds, etc.
        game.load.image('btnPlay', config.IMG_PATH + 'playBtn.png');
        game.load.image('menuBg', config.IMG_PATH + 'menuBg.png');

        // start Phaser loading routine
        game.load.start();
    }
};


var Menu = {
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

        var background = game.add.sprite(w / 2, h/ 2, 'menuBg');
        // move to center
        background.anchor.setTo(0.5);

        // 4-th argument defines function that will be called after clicking on button
        // TODO: add button with callback on click event

    },
    // TODO: implement start game function

};

///////////////////////////////
// TODO: create gameplay state
