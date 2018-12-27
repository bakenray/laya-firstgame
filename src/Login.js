(function(){
    // 初始化舞台
    (()=>{
        Laya.init(600, 400, Laya.WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE  //设置缩放模式
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER      //设置水平排列方式
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE      //设置垂直排列方式
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE   //设置屏幕方向

        Laya.Stat.show(0,0) //设置显示帧率在 （0,0）位置

        LoadRes() 
    })()

    function LoadRes(){
        var imgArray =
        [
            {url:"res/atlas/comp.atlas",type:Laya.Loader.ATLAS}
        ] 

        Laya.loader.load(imgArray,Laya.Handler.create(null,LoadResComplete))

    }
    function LoadResComplete(){
        var loginView =new LoginView() 
        loginView.init()
        Laya.stage.addChild(loginView)
    }

})()

