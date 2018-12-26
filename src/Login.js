(function(){
    (()=>{
        Laya.init(600, 400, Laya.WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE

        Laya.Stat.show(0,0)

        LoadRes()
    })()

    function LoadRes(){
        var imgArray =[
            {url:"res/atlas/comp.atlas",type:Laya.Loader.ATLAS}
        ] 
        Laya.loader.load(imgArray,Laya.Handler.create(null,LoadResComplete))
    }
    function LoadResComplete(){
        // Laya.stage.addChild(new loginUI())
        var loginView =new LoginView() 
        loginView.init()
        Laya.stage.addChild(loginView)
    }

})()

