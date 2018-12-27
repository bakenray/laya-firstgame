var TextInputEx = (function(_super){

    function TextInputEx(){
        TextInputEx.super(this)

        this.textReset    //提示文本
        this.colorReset   //文本颜色
        this.italicReset  //是否斜体 
        
        //监听获取焦点事件
        this.on(Laya.Event.FOCUS,this,this.onFocus)
        //失去焦点事件
        this.on(Laya.Event.BLUR,this,this.onBlur)
    }
    Laya.class(TextInputEx,"TextInputEx", _super)

    // 获取焦点
    TextInputEx.prototype.onFocus = function(){
        if(!this.textReset){
            this.textReset = this.text
            this.colorReset = this.color
            this.italicReset = this.italic
        }
        //判定输入框中是否为提示文本
        if(this.textReset == this.text){
           this.text = ''
           this.color = '#000000'
           this.italic = false
        }
    }

    // 失去焦点
    TextInputEx.prototype.onBlur = function(){
        if(this.text == ''){
            this.text = this.textReset
            this.color = this.colorReset
            this.italic = this.italicReset
        }
    }
    return TextInputEx

})(Laya.TextInput)