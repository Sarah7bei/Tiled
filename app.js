
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var sprite =new cc.Sprite(res.HelloWorld_png);
        sprite.x=size.width/2;
        sprite.y=size.height/2;
        this.addChild(sprite);

        var label =new cc.LabelTTF("HelloWorld","","32");
        label.color=cc.color(255,0,0,255);
        label.x=size.width/2;
        label.y=200;
        this.addChild(label);

        var item =new cc.MenuItemImage(res.CloseNormal_png,res.CloseNormal_png,function(sender){
            alert(sender.tag);

        });
        item.tag=101;
        var item1 =new cc.MenuItemImage(res.CloseSelected_png,res.CloseSelected_png,function(sender){
            alert(sender.tag)
        });
        item1.tag=102;
        //var  item2= new cc.MenuItemFont("play",function(semder){
        //    alert(sender.tag)
        //});
        var self=this;
        var toggle =new cc.MenuItemToggle(item,item1);
        toggle.setCallback(function(){
            alert("toggle");
            //var layer=new GameLayer();
            //self,addChild(layer);
            //场景跳转
            //var scene = new GameScene();
            //var ts = new cc.TransitionJumpZoom(2.0,scene);
            //cc.director.runScene(ts);
        });
        var menu =new cc.Menu(toggle);
        this.addChild(menu);
        //this.scheduleDemo();

        this.actionDemo();
        this.touchDemo();

        return true;
    },
    scheduleDemo:function()
    {
        //this.scheduleUpdate();
        this.schedule(self.update,1,cc.REPEAT_FOREVER,0);
    },
    update: function (t) {
        console.log(t);
        this.unscheduleUpdate();
    },
    actionDemo:function(){
        var sprite1=new cc.Sprite(res.CloseNormal_png);
        sprite1.attr({
            x:100,
            y:100
        });
        this.addChild(sprite1);
        var move=cc.MoveTo(2.0,400,500);
        var seq = cc.sequence(cc.moveBy(2.0,100,100), cc.rotateBy(2.0,720));
        sprite.runAction(seq);
    },
    touchDemo:function()
    {
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:true,
            onTouchBengan:function(touch,event){
                var p=touch.getLocation();
                alert(p.x);
                alert(p.y);
                return true;
            },
            onTouchMoved: function (touch, event) {

            },
            onTouchEnded: function (touch, event) {
                alert("onTouchE");
            }

        });
        cc.eventManager.addListener(listener,this);
    },
    custonDemo: function () {
        alert("H");
        cc.eventManager.addCustomEventListener("HelloWorld", function () {
            alert("HelloWorld");
            console.log("HH");
        });
        //注册监听事件
        var call=cc.callFunc(function () {
            cc.eventManager.dispatchCustomEvent("HelloWorld");//分发事件0
        });
        var seq=cc.sequence(cc.delayTime(3),call);
        this.runAction(seq);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

