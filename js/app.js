function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Enemy = function(x, y, sprite) {
    this.sprite = 'images/enemy-bug.png';
    this.reset();
    this.setSpeed();
    this.setRow();
};

Enemy.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Enemy.prototype.setSpeed = function() {
    this.speed = this.getRandomInt(65, 250);
};

Enemy.prototype.setRow = function() {
    this.row = this.getRandomInt(1, 3);
};

Enemy.prototype.update = function(dt) {
    this.x = (this.x + this.speed);
    this.y = 83 * this.row;

    if(this.x > 4 * 83){
        this.reset();
    }
};

Enemy.prototype.reset = function() {
    this.col = -1;
    this.x = 101 * this.col;
    this.y = 83 * this.row;
    this.speed = getRandomInt(2,6);
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = "images/char-boy.png";
    this.reset();
};

Player.prototype.update = function(dt) {
    this.collision();
    if(this.moveable) {
        this.x = 101 * this.col;
        this.y = 83 * this.row;
    }

    if(this.y < 83 && this.moveable) {
        this.moveable = false;
        return true;
    }

    return false;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.col = 2;
    this.row = 5;
    this.moveable = true;
};

Player.prototype.handleInput = function(key) {
    switch (key){
        case 'left':
            this.col--;
            break;
        case 'up':
            this.row--;
            break;
        case 'right':
            this.col++;
            break;
        case 'down':
            this.row++;
            break;
    }
    if(this.col < 0) this.col = 0;
    if(this.col > 4) this.col = 4;
    if(this.row > 5) this.row = 5;
    if(this.row < 1) {
    	var self = this;
        setTimeout(function () {
            self.reset();
        }, 500);
    }
};

Player.prototype.collision = function() {
    var self = this;
    allEnemies.forEach(function(enemy) {
        if(enemy.row === self.row){
            if(enemy.x + 83 > self.x && enemy.x < self.x + 83){
                self.reset();
            }
        }
    });
};

var allEnemies = [new Enemy(), new Enemy(), new Enemy(),],
    player = new Player();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});