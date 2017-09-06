//文档介绍
// wt 2017-8-24

// 要用 onmouseenter 和 leave

//放大镜setMirror 
// boxDom 盒子 div
// mirrorDom 镜子 div
// boxImgDom 显示的框 div
// oImgDom 放大显示的图片 创建 img
// bgImg 放大显示的图片的url
// width 镜子的宽度
// height 镜子的高度
// mult 放大的倍数

function Screate(tagName){
	return document.createElement(tagName);
	
}
var instanceSetMirror = null;
function setMirror(obj){
	var objDom = {
				boxDom:null,
				mirrorDom:null,
				boxImgDom:null,
				oImgDom:null,
				bgImg:null,
				width:50,
				height:50,
				mult:2
		}
		for(let key in obj){
			objDom[key] = obj[key];
		}
	if(instanceSetMirror==null){
		instanceSetMirror = new Mirror(objDom);	
	}else{
		objDom.mirrorDom = instanceSetMirror.mirrorDom;
		objDom.boxImgDom = instanceSetMirror.boxImgDom;
		objDom.oImgDom = instanceSetMirror.oImgDom;
		for(let key in objDom){
			instanceSetMirror[key] = objDom[key];
			
		}
	}
//	把默认的拿出来就可以了
		instanceSetMirror.updateAttr();
		instanceSetMirror.initEvent();	
}
class Mirror{
	constructor(obj){
		for(let key in obj){
			this[key] = obj[key];
		}	
		this.initUI();	
	}
	initUI(){
	//创建镜子
		this.mirrorDom = Screate("div");
		this.mirrorDom.cssStr = "position:absolute;background:black;opacity: 0.4;z-index:1000;";
		
	//创建显示的框
		this.boxImgDom = Screate("div");
		this.boxImgDom.cssStr = "position:absolute;border:	1px solid black;overflow:hidden;"
	
	//图片
		this.oImgDom = Screate("img");
	
	}
	//加载
	updateAttr(){
		
		this.mirrorDom.style.cssText = this.mirrorDom.cssStr;
		this.mirrorDom.style.width = this.width+"px";
		this.mirrorDom.style.height = this.height+"px";
		
		this.boxDom.appendChild(this.mirrorDom);
		
		this.boxImgDom.cssStr+="left:"+(this.boxDom.offsetWidth+10)+"px;width:"+this.width*this.mult+"px;height:"+this.height*this.mult+"px;";
		this.boxImgDom.style.cssText = this.boxImgDom.cssStr;
		this.boxDom.appendChild(this.boxImgDom);
		
		this.oImgDom.cssStr = "position:absolute;width:"+this.boxDom.offsetWidth*this.mult+"px;height:"+this.boxDom.offsetHeight*this.mult+"px;"
		this.oImgDom.style.cssText = this.oImgDom.cssStr;
		this.oImgDom.src = this.bgImg;
		this.boxImgDom.appendChild(this.oImgDom);
		
	}

	initEvent(){
			
			var obj = this;
			obj.boxDom.onmouseenter = function(){
				obj.mirrorDom.style.display = "block";	
				obj.boxImgDom.style.display = "block";
				}
			obj.boxDom.onmousemove = function(event){

				//alert((obj.boxDom).currentStyle["top"])
				//var s=getStyle(obj.boxDom,"top")
//alert(s)
				var evt = event || window.event;
				var left = evt.pageX - obj.boxDom.offsetLeft - obj.width/2;
				var top = evt.pageY - obj.boxDom.offsetTop - obj.height/2;
				//console.log(left+"..."+event.pageX);
				console.log(top+"..."+event.pageY);
				if(left<0){
					left = 0;
					}else if(left>obj.boxDom.offsetWidth-obj.width){
						left = obj.boxDom.offsetWidth-obj.width;
						}
				if(top<0){
					top = 0;
					}else if(top>obj.boxDom.offsetHeight-obj.height){
						top = obj.boxDom.offsetHeight-obj.height;
						}
				
				obj.mirrorDom.style.left = left+"px";
				obj.mirrorDom.style.top = top+"px";
				
				obj.oImgDom.style.left = -1*obj.mult*left+"px";
				obj.oImgDom.style.top= -1*obj.mult*top+"px";
                if(evt.pageX>obj.boxDom.offsetLeft+obj.boxDom.offsetWidth){
                    obj.mirrorDom.style.display = "none";
                    obj.boxImgDom.style.display = "none";
                }
			}
			obj.boxDom.onmouseleave = function(){
				obj.mirrorDom.style.display = "none";
				obj.boxImgDom.style.display = "none";
			}
	}
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}

}