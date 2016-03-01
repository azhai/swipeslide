//测试图片的宽和高
var imgLoad = function(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
            img.onload = null;
        };
    };
};
//图片自适应
var imgAdapt = function(img) {
    var src = img.attr('bg');
    if (src) {
        imgLoad(src, function(width, height) {
            img.attr('src', src);
            if (width != height) {
                img.addClass(width > height ? 'fg_clip_h' : 'fg_clip_v');
            }
            img.attr('bg', null);
        });
    }
};
//图片背景自适应
var bgAdapt = function(img) {
    var src = img.attr('bg');
    if (src) {
        imgLoad(src, function(width, height) {
            img.css('background-image', 'url(' + src + ')');
            img.addClass(width >= height ? 'bg_clip_h' : 'bg_clip_v');
        });
    }
};