
var RegDialog = (function(_super){
    
    function RegDialog(){
        RegDialog.super(this)

        this.btSubmit.on(Laya.Event.CLICK, this, this.onButton_Submit)
    }
    Laya.class(RegDialog,"RegDialog",RegisterUI)

    RegDialog.prototype.onButton_Submit = function(){

        this.close()
        
        var dlg = new NormalDlg()
        dlg.init()
        dlg.setContext('注册成功!')
    }
    return RegDialog
})(RegisterUI)
