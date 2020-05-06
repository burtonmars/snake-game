function Apple() {
    var cols = floor(width / grid);
    var rows = floor(height / grid);
    this.x = floor(random(cols)) * grid;
    this.y = floor(random(rows)) * grid;

    this.show = function () {
        fill(255, 0, 50);
        rect(this.x, this.y, grid, grid);
    }

    this.update = function () {

    }

}