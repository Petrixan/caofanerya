(function fuckerya() {
    if (window.MoocPlayer == undefined) {
        setTimeout(fuckerya, 200);
        return ;
    }
    window.MoocPlayer.prototype.pauseMovie = function() {
        this.player.playMovie();
        document.moocPlayer = this;
        return this;
    };
})();
