
var NormalDlg = function(){
    NormalDlg.super(this)
    // 设置显示文本
    NormalDlg.prototype.init =function(){
        this.btClose.on(Laya.Event.CLICK,this,this.close)
        this.btOK.on(Laya.Event.CLICK,this,this.close)
    }
    NormalDlg.prototype.setContext = function(context){
        this.txContext = context
        this.popup()
    }
}
Laya.class(NormalDlg,'NormalDlg',NormalDialogUI)