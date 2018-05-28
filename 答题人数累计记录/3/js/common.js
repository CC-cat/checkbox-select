$(function() {
  _onClickFun();
});

var _onClickFun = function() {

  $("._btn div").on("click", function() {
    var index = $(this).index();

    $("._btn div").removeClass("_btn_active");
    $(this).addClass("_btn_active");

    // var heightTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("heightTop:" + heightTop);

    switch (index) {
      case 0:
        $(document).scrollTop(500);
        // 赋值 _allSelect(_className, _typeInput)
        _allSelect("subject1", "radio", "_q1");
        break;
      case 1:
        $(document).scrollTop(0);
        break;
      default:

    };

    setTimeout(function() {
      $("._btn div").removeClass("_btn_active");
    }, 1000);



  });
};

var a = b = c = d = 0;

var _allSelect = function(_className, _typeInput, _endQ) {
  // console.log("_allSelect:" + _className);
  $("." + _className).find("input[type=" + _typeInput + "]:checked").each(function(i, v) {
    console.log("echo:" + $("." + _className).find("input[type=" + _typeInput + "]:checked").length);
    console.log(v);
    console.log(v.value);
    if (v.checked == true) {
      switch (v.value) {
        case 'A':
          a += 1;
          break;
        case 'B':
          b += 1;
          break;
        case 'C':
          c += 1;
          break;
        case 'D':
          d += 1;
          break;
        default:

      };

    };


  });
  console.log("a:" + a + ' b:' + b + ' c:' + c + ' d:' + d + ' ');

  var _arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var _arr2 = [a, b, c, d];

  var _len = $("." + _endQ).children("p").length;
  console.log("_len: " + _len);

  for (var i = 0; i < _len; i++) {
    $("." + _endQ).find("._" + _arr[i]).html(_arr2[i]);
  };


};