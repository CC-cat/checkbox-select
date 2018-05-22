$(function(){
	_checked();
});

var _count_A = 0;
var _count_B = 0;
var _count_C = 0;
var _count_D = 0;

var _checked = function(){
	$(".select li").on("click",function(){
		var index = $(this).parent(".select").index();

		$(this).children("input").attr("checked","checked");

		var _lang = $(this).children("input").attr("checked");

		if (_lang == "checked") {


		};

	  console.log("index: "+index);


	});
};
