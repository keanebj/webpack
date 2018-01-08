
require('../css/index.css');//引入css文件
var demo1 = require('../js/demo1.js');
var demo2 = require('../js/demo2.js');

    demo1.init();
    demo2.init();
var oImg = new Image();
oImg.src = require('../img/logo.png');//当成模块引入图片
//document.body.appendChild(oImg);
document.getElementsByClassName("img")[0].appendChild(oImg)
console.log("entry1文件")