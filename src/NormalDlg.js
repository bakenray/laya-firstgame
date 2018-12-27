
var NormalDlg = function(){

    //调用父类的构造函数
    NormalDlg.super(this) 

    // 设置弹窗初始化
    NormalDlg.prototype.init =function(){
        this.btClose.on(Laya.Event.CLICK,this,this.close)
        this.btOK.on(Laya.Event.CLICK,this,this.close)
    }
    // 设置弹窗信息
    NormalDlg.prototype.setContext = function(context){
        this.txContext.text = context
        this.popup()
    }
}
Laya.class(NormalDlg,'NormalDlg',NormalDialogUI)