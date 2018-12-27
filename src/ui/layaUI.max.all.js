var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loginUI=(function(_super){
		function loginUI(){
			
		    this.btLogin=null;
		    this.btReg=null;

			loginUI.__super.call(this);
		}

		CLASS$(loginUI,'ui.loginUI',_super);
		var __proto__=loginUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("TextInputEx",TextInputEx);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginUI.uiView);

		}

		loginUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","height":400,"sizeGrid":"28,5,5,5"}},{"type":"Image","props":{"y":26,"x":3,"width":222,"skin":"comp/image.png","height":371}},{"type":"Button","props":{"y":306,"x":258,"width":120,"var":"btLogin","skin":"comp/button.png","name":"btLogin","labelStrokeColor":"#efefef","labelSize":14,"labelFont":"Microsoft YaHei","label":"登录","height":35}},{"type":"Button","props":{"y":306,"x":448,"width":120,"var":"btReg","skin":"comp/button.png","name":"btLogin","labelSize":14,"labelFont":"Microsoft YaHei","label":"注册","height":35}},{"type":"Label","props":{"y":73,"x":224,"width":344,"text":"欢迎来到Laya Air 世界","styleSkin":"comp/label.png","height":45,"fontSize":30,"font":"Microsoft YaHei","color":"#f39100","bold":true,"align":"right"}},{"type":"Label","props":{"y":157,"x":258,"width":90,"text":"用户名：","styleSkin":"comp/label.png","height":22,"fontSize":20,"font":"Microsoft YaHei","align":"center"}},{"type":"TextInput","props":{"y":153,"width":210,"text":"请输入用户名","skin":"comp/textinput.png","runtime":"TextInputEx","left":358,"height":30,"font":"Microsoft YaHei","color":"#9a9a9a"}},{"type":"Label","props":{"y":207,"x":258,"width":90,"text":"密    码：","styleSkin":"comp/label.png","height":22,"fontSize":20,"font":"Microsoft YaHei","align":"center"}},{"type":"TextInput","props":{"y":203,"x":358,"width":210,"text":"请输入密码","skin":"comp/textinput.png","runtime":"TextInputEx","left":358,"height":30,"font":"Microsoft YaHei","color":"#9a9a9a"}},{"type":"CheckBox","props":{"y":252,"skin":"comp/checkbox.png","labelFont":"Microsoft YaHei","label":"记住密码","centerX":91}},{"type":"CheckBox","props":{"y":252,"x":506,"skin":"comp/checkbox.png","labelFont":"Microsoft YaHei","label":"自动登录"}}]};
		return loginUI;
	})(View);
var NormalDialogUI=(function(_super){
		function NormalDialogUI(){
			
		    this.txContext=null;
		    this.btOK=null;
		    this.btClose=null;

			NormalDialogUI.__super.call(this);
		}

		CLASS$(NormalDialogUI,'ui.NormalDialogUI',_super);
		var __proto__=NormalDialogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(NormalDialogUI.uiView);

		}

		NormalDialogUI.uiView={"type":"Dialog","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"comp/bg.png","height":200,"sizeGrid":"28,5,5,5"}},{"type":"Label","props":{"y":90,"x":70,"wordWrap":true,"width":160,"var":"txContext","valign":"middle","text":"注册功能尚未开放","styleSkin":"comp/label.png","height":24,"fontSize":20,"font":"Microsoft YaHei","align":"center"}},{"type":"Button","props":{"y":145,"x":105,"width":90,"var":"btOK","skin":"comp/button.png","labelSize":16,"labelFont":"Microsoft YaHei","label":"关闭","height":30}},{"type":"Button","props":{"y":3,"x":266,"var":"btClose","skin":"comp/btn_close.png"}}]};
		return NormalDialogUI;
	})(Dialog);