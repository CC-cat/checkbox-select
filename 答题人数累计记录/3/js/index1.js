$(function(){

	_select();
	_goToEnd();

});

var _t1;

var _goToEnd = function(){
	var a=b=c=d=0;

	$("._goToEnd").on("click", function(){
		$(this).css("color","#fff");
		$(this).css("background","#00B895");

		var _i = $("input[type=checkbox]:checked").length;

		if ( _i < 1 || _i == 1) {
			alert("请完成答题！");
		};

		$('input[type=checkbox]').each(function(i,v){

			console.log($("input[type=checkbox]:checked").length);

			if (v.checked==true){
					switch (v.value) {
						case 'A':
							a+=1;
							break;
						case 'B':
							b+=1;
							break;
						case 'C':
							c+=1;
							break;
						case 'D':
							d+=1;
							break;
						default:

					};

			};
		});

		setTimeout(function(){
			a=b=c=d=0;
		},500);

		console.log(a+' '+b+' '+c+' '+d+' ');
		console.log("恭喜您~完成答题！");

		$("._a").html(a);
		$("._b").html(b);
		$("._c").html(c);
		$("._d").html(d);


	});
};


var _reset = function(){
	a=b=c=d=0;

	$("._goToEnd").css("color","");
	$("._goToEnd").css("background","");
	$('input[type=checkbox]').prop("checked", false);
};

var _select = function(){
  _checkedOne($('._box').eq(0));
 	_checkedOne($('._box').eq(1));
};


var _checkedOne = function(_name){
	_name.find('input[type=checkbox]').bind('click', function(){
      _name.find('input[type=checkbox]').not(this).attr("checked", false);
   });
};
