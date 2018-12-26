var LoginView = function(){

    LoginView.super(this)  //调用父类的构造函数

    var dlg 

    // 初始化函数
    LoginView.prototype.init = function(){
        // 监听注册按钮按下事件 - 注册按钮
        this.btReg.on(Laya.Event.CLICK,this,this.onButtonReg)
        // 监听登录按钮按下事件 - 登录按钮
        this.btLogin.on(Laya.Event.CLICK,this,this.onButtonLogin)

        this.dlg = new NormalDlg()
        this.dlg.init()
    }
    // 重置函数
    LoginView.prototype.reset = function(){
        // 取消监听
        this.btReg.off(Laya.Event.CLICK,this,this.onButtonReg)
        this.btLogin.off(Laya.Event.CLICK,this,this.onButtonLogin)
    }
    // 登录按钮函数
    LoginView.prototype.onButtonLogin = function(){
        console.log('你点了登录')
        this.dlg.setContext('暂时无法登录')
    }
    // 注册按钮函数
    LoginView.prototype.onButtonReg = function(){
        console.log('你点了注册')
        this.dlg.setContext('注册功能未开放')
    }
}

Laya.class(LoginView,"LoginView",loginUI)  //设置继承关系