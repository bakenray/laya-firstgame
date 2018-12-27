
var NormalDlg = (function(_super){
    function NormalDlg(){
        NormalDlg.super(this)    //调用父类的构造函数
    }
    Laya.class(NormalDlg,'NormalDlg',NormalDialogUI)

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

    return NormalDlg    //返回这个标识符，实际上是构造函数

})(NormalDialogUI)
