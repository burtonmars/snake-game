var speed = 1;
var grid = 12;

function Snake() {
    "use strict";
    this.x = 0;
    this.y = 0;
    this.xspeed = speed;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function () {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * grid;
        this.y = this.y + this.yspeed * grid;

        this.x = constrain(this.x, 0, width - grid);
        this.y = constrain(this.y, 0, height - grid);
    }

    this.show = function () {
        fill(255);
        for (let i = 0; i < this.tail.length-1; i++) {
            rect(this.tail[i].x, this.tail[i].y, grid, grid);
        }
        fill(255);
        rect(this.x, this.y, grid, grid);
    }

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 2) {
            this.total++;
            return true;
        } else return false;
    }

}