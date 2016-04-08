/**
 * Created by student on 16/3/9.
 */
var GameLayer = cc.Layer.extend({
    ctor:function()
    {
        this._super();
        var bg= new cc.Sprite(res.HelloWorld_png);
        bg.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2
        });
        //bg.x=cc.winSize.width/2;
        //bg.y=cc.winSize.height/2;
        this.addChild(bg);


        return true;
    }
});
var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
