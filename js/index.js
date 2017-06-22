window.onload = function(){
	var containerHtml = $(".container1").html();
//	console.log($(window).width())
//	if($(window).width() >= $(window).height()){
//		$(".container1").hide(0);
//	}else{
//		$(".container1").show(0);
		createSwiper();
		voiceClick();
//		location.reload();
//	}
//	$(window).on("resize",function(){
//		if($(window).width() >= $(window).height()){
//			$(".container1").hide(0);
//		}else{
//			$(".container1").show(0);
//			createSwiper();
//			voiceClick();
//			location.reload();
//		}
//	})
}
var inTime = new Date();
var outTime;
var _voice = true;
var voc = document.getElementById("voice");
var mySwiper2_i = 0;
var mySwiper1;
function createSwiper(){ //创建两个swiper对象，并动态移动背景图及H5图标
	
	mySwiper1 = new Swiper(".swiper-container1",{
		onInit: function(swiper){
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideNextStart:function(swiper){
			move(swiper.activeIndex)
		},
		onSlidePrevStart:function(swiper){
			move(swiper.activeIndex)
		},
		onSlideChangeEnd: function(swiper){ 
			console.log(swiper.activeIndex);
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	})
	var mySwiper2 = new Swiper('.swiper-container2',{
		direction : 'vertical',
//		loop:true,
		effect : 'cube',
		cube: {
		  slideShadows: true,
		  shadow: true,
		  shadowOffset: 100,
		  shadowScale: 0.6
		},
		onSlideNextStart:function(swiper){
			mySwiper2_i = mySwiper2.activeIndex;
			toLong(mySwiper2_i)
		},
		onSlidePrevStart:function(swiper){
			mySwiper2_i = mySwiper2.activeIndex
			toLong(mySwiper2_i)
		}
	})
	function move(index){//body背景图、H5图标移动
		console.log(index + "aa")
		switch (index){
				case 0:
					$(".container1").animate({"background-position-x":0},300);$(".h5").animate({"left":"0.2rem"},300);
					clear();
					break;
				case 1:
					
					$(".container1").animate({"background-position-x":"-0.8rem"},300);$(".h5").animate({"left":"1.5rem"},300);
					if(_show){
						education(index);
						};
					break;
				case 2:
					$(".container1").animate({"background-position-x":"-1.6rem"},300);$(".h5").animate({"left":"2.8rem"},300);
					toLong(mySwiper2_i)
					clear();
					break;
				case 3:
					$(".container1").animate({"background-position-x":"-2.4rem"},300);$(".h5").animate({"left":"4.1rem"},300);
					break;
				case 4:
					$(".container1").animate({"background-position-x":"-3.2rem"},300);$(".h5").animate({"left":"5.3rem"},300);
					overPage();
					break;
				default:
					break;
			}
	}
}
var time1,time2,time3;
var _show = true;
function education(index){//第二页教育背景
//	var length = $(".slide2 p").length;
//	var i = 0;
	_show = false;
//	clearInterval(time1);
//	clearInterval(time2);
//	clearInterval(time3);
	$(".slide2 p").html("");
	$(".slide2 p").hide();
	var arr1 = ['2','0','1','1','年','9','月',",",'带','着','说','好','的','理','想','和','隐','隐','的','不','甘','心','步','入','大','学','<br/>','——','武','汉','软','件','工','程','职','业','学','院'];
	var arr2 = ['各','种','社','团','活','动','、','义','工','以','及','社','会','调','查','，','当','然','少','不','了','游','戏','，','充','斥','着','三','年','的','生','活'];
	var arr3 = ['2','0','1','4','年','7','月','，','我','成','功','脱','掉','"','学','生','"','的','帽','子','，','踏','入','既','憧','憬','又','有','点','小','害','怕','的','社','会'];
	var str1 = "",str2 = "",str3 = "";
	var length1 = arr1.length;
	var length2 = arr2.length;
	var length3 = arr3.length;
	show($(".slide2-txt1"),arr1,time1);
	setTimeout(function(){
		show($(".slide2-txt2"),arr2,time2)
	},100*(length1+10))
	setTimeout(function(){
		show($(".slide2-txt3"),arr3,time3)
	},100*(length1+length2+20))
	setTimeout(function(){
		_show = true;
		if(index!=1){
			clear();
		}
	},100*(length1+length2+length3+30))
	function show($ele,arr,timer){
		var str1 = "";
		var length = arr.length
		$ele.fadeIn(1000,function(){
			var i = 0;
			timer = setInterval(function(){
				str1 += arr[i];
				$ele.html(str1);
				i++;
				if(i>=length){
					clearInterval(timer)
				}
			},100)
		})
	}
}
function clear(){
	if(_show){
		clearInterval(time1);
		clearInterval(time2);
		clearInterval(time3);
	$(".slide2 p").html("");
	$(".slide2 p").hide();
	}else{
		
	}
	
}
//第三页
function toLong(index){
	var str = ".skill-" + (1 + index);
	$(str).find(".long").css("width","0px");
	$(str+" .long").animate({"width":"100%"},1000)
}
function getNowTime(){
	var time = new Date();
	$(".inTime").html(time.toLocaleDateString() + "," + time.toLocaleTimeString());
	setTimeout(function(){
		getNowTime()
	},1000)
}

//第五页结束页
function overPage(){
//	outTime = new Date();
//		getNowTime();
////		$(".inTime").html(inTime.toLocaleDateString() + "," + inTime.toLocaleTimeString());
//		var longTime = Math.floor((outTime - inTime)/60000) + "分" + Math.floor((outTime - inTime)%60000/1000) + "秒";
//		$(".longTime").html(longTime);
//		console.log(outTime);
}
function voiceClick(){
	voc.src = "music/停在你的时间.mp3";
	musicPlay()
//	voc.play();
	$(".voice").on("click",function(){
		if(_voice){
			voc.volume = 0;
//			voc.style.backgroundImage = "url(img/icon-1460174282676.png)";
			$(this).css("background-image","url(img/icon-1460174282676.png)")
			_voice = false;
		}else{
			voc.volume = 1;
//			voc.style.backgroundImage = "url(img/icon-1460174400528.png)";
			$(this).css("background-image","url(img/icon-1460174400528.png)")
			_voice = true;
		}
	})
}
function musicPlay(){
	document.body.addEventListener("touchstart",function(){
		if (voc.paused) { //判读是否播放
                voc.play(); //没有就播放
        }
	},false)
}
