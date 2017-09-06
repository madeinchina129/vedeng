jQuery.fn.extend(
	{
		"bigMirror":function(obj){		
			//类（放大镜）
			function BigMirror(obj){
				
				var defaultObj = {
					boxDom:$("image-lg-view"),
					mirrorDom:null,
					showBoxDom:null,
					bigImgDom:null,
					bigImg:"",
					width:100,
					height:100,
					//倍数
					mult : 3,
					
				};
				
				for(var key in obj){
					defaultObj[key]=obj[key];
				}
				
				for(var key in defaultObj){
					this[key] = defaultObj[key];
				}
				this.initUI();
				this.initEvent();
			}
			
			//方法：
			BigMirror.prototype={
				//动态产生放大镜的DOM(界面)	
				initUI:function(){		
					function $create(tagName){
						return document.createElement(tagName);
					}
					//1、产生镜子
					this.mirrorDom = $create("div");
					var cssStr = "position:absolute;left:0px;top:0px;background-color:#ccc;opacity:0.5;";
					cssStr+="width:"+this.width+"px;height:"+this.height+"px;";
					cssStr+="display:none";
					this.mirrorDom.style.cssText=cssStr;
					this.boxDom.appendChild(this.mirrorDom);
					
					//2、产生大图的可视区域
					this.showBoxDom = $create("div");
				 	cssStr = "position:absolute;border:1px solid black;overflow:hidden;";
					cssStr+="left:"+(this.boxDom.offsetWidth+5)+"px;top: 0px;";
					cssStr+="width:"+this.width*this.mult+"px;height:"+this.height*this.mult+"px;";
					cssStr+="display:none";
					this.showBoxDom.style.cssText=cssStr;
					this.boxDom.appendChild(this.showBoxDom);
					
					//3、产生大图
					this.bigImgDom = $create("img");
					this.bigImgDom.src=this.bigImg;
			
					cssStr = "position:absolute;left:0px;top:0px;";		
					cssStr+="width:"+this.mult*this.boxDom.offsetWidth+"px;";
					cssStr+="height:"+this.mult*this.boxDom.offsetHeight+"px;";
					this.bigImgDom.style.cssText = cssStr;
					this.showBoxDom.appendChild(this.bigImgDom);
				},
				
				//初始化事件；
				initEvent:function(){
					var obj = this;
					
					this.boxDom.onmouseenter = function(){
						obj.mirrorDom.style.display="block";
						obj.showBoxDom.style.display="block";
					}
					
					this.mirrorDom.onmouseleave = function(){
						obj.mirrorDom.style.display="none";
						obj.showBoxDom.style.display="none";
					}
					
					this.mirrorDom.onmouseenter = function(){
						obj.mirrorDom.style.display="none";
						obj.showBoxDom.style.display="none";
					}
					
					this.boxDom.onmouseleave = function(){
						obj.mirrorDom.style.display="none";
						obj.showBoxDom.style.display="none";
					}
					
					this.boxDom.onmousemove= function(event){
						var evt = event||window.event;
						
						//1、让镜子跟着鼠标移动
						var left = evt.pageX-obj.boxDom.offsetLeft-obj.width/2;
						var top = evt.pageY-obj.boxDom.offsetTop-obj.height/2;
						
						if(left<0){
							left =0;
						}else if(left> obj.boxDom.offsetWidth-obj.width){
							left= (obj.boxDom.offsetWidth-obj.width)+"px";
						}
						
						if(top<0){
							top =0;
						}else if(top> obj.boxDom.offsetHeight-obj.height){
							top= (obj.boxDom.offsetHeight-obj.height)+"px";
						}
						
						obj.mirrorDom.style.left=left+"px";
						obj.mirrorDom.style.top=top+"px";
						
						//2、让放大的图片也进行对应的移动
						obj.bigImgDom.style.left = (-1*obj.mult*left)+"px";
						obj.bigImgDom.style.top = (-1*obj.mult*top)+"px";
                        if(evt.pageX>obj.boxDom.offsetLeft+obj.boxDom.offsetWidth){
                            obj.mirrorDom.style.display = "none";
                            obj.boxImgDom.style.display = "none";
                        }
					}	
				}
			}
			
			new BigMirror(obj);
		}
	}
);

