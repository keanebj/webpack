var obj = require('./tool.js');
    var demo2 = {
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        var demo2 = document.getElementsByClassName('demo2')[0];
//      var demo2 = obj.getDom('demo2');
        demo2.onclick = this.changeStyle;
    },
    changeStyle: function() {
        this.style.width = '100px';
        this.style.height = '200px';
        this.style.background = 'green';
        console.log('第二个demo');
    }
}

module.exports = demo2;