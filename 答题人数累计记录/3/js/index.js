$(function(){

	_select();
	_goToEnd();

});

var _goToEnd = function(){
	$("._goToEnd").on("click", function(){
		$(this).css("color","#fff");
		$(this).css("background","#00B895");

		setTimeout(function(){
			$("._goToEnd").css("color","");
			$("._goToEnd").css("background","");
		},3000);

		console.log("恭喜您~完成答题！");
	});
};


var _count_box = function(num) {
	var _count = {
		_A: num,
		_B: num,
		_C: num,
		_D: num,
	}
};


var _select = function(){
	$("._box[lang='1'] ._select label").on("click", function(){
		$("._box[lang='1'] ._select li").attr("_active","0");
		$(this).parent("li").attr("_active","1");

		var index = $(this).parent("li").index();
		console.log("index: "+index);

		var _a = $(this).parent("li").attr("_active");


	});

	$("._box[lang='2'] ._select label").on("click", function(){
		$("._box[lang='2'] ._select li").attr("_active","0");
		$(this).parent("li").attr("_active","1");

		var index = $(this).parent("li").index();
		console.log("index: "+index);

		var _a = $(this).parent("li").attr("_active");

	});

  _checkboxOne($('._box').eq(0));
 	_checkboxOne($('._box').eq(1));
};


var _checkboxOne = function(_name){
	_name.find('input[type=checkbox]').bind('click', function(){
      _name.find('input[type=checkbox]').not(this).attr("checked", false);
   });
};

