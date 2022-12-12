$(document).ready(function () {
  $("body").addClass("mdui-bottom-nav-fixed");
  var pathName = window.document.location.pathname;
  var height = $(document).width();
  var lang = navigator.language.substr(0, 2);
  console.log(pathName);
  if (pathName == "" || pathName == "/") {
    if (height < "550") {
      window.location = "/mobile/";
    } else {
      if (lang === "zh") {
        window.location = "/zh-CN/";
      } else {
        window.location = "/en-US/";
      }
    }
  }
  if(pathName == "/mobile" || pathName == "/mobile/"){
    if (lang === "zh") {
      window.location = "/mobile/zh-CN/";
    } else {
      window.location = "/mobile/en-US/";
    }
  }
  // if (pathName == "" || pathName == "/") {
  //   if (height < "550") {
  //     if (lang === "zh") {
  //       window.location = "/zh-CN/mobile/";
  //     } else {
  //       window.location = "/en-US/mobile/";
  //     }
  //   } else if (height >= "550") {
  //     $("body").addClass("mdui-appbar-with-tab-larger");
  //     if (lang === "zh") {
  //       window.location = "/zh-CN/";
  //     } else {
  //       window.location = "/en-US/";
  //     }
  //   }
  // }
});
