// PROJECTS
$(document).ready(function () {
  $(".tab__content").hide();
  $(".tab__content:first").show();

  $("ul.tabs li").click(function () {
    $(".tab__content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab__content--btn").click(function () {
    $(".tab__content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $(".tab__content--btn").removeClass("active");
    $(this).addClass("active");
  });
});

// TEAM
$(document).ready(function () {
  $(".content--executive").hide();
  $(".content--executive:first").show();
  $("li.tab--executive:first").addClass("active");

  $("li.tab--executive").click(function () {
    $(".content--executive").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("li.tab--executive").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".content--supervisory").hide();
  $(".content--supervisory:first").show();
  $("li.tab--supervisory:first").addClass("active");

  $("li.tab--supervisory").click(function () {
    $(".content--supervisory").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("li.tab--supervisory").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".content--advisors").hide();
  $(".content--advisors:first").show();
  $("li.tab--advisors:first").addClass("active");

  $("li.tab--advisors").click(function () {
    $(".content--advisors").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("li.tab--advisors").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".content--partners").hide();
  $(".content--partners:first").show();
  $("li.tab--partners:first").addClass("active");

  $("li.tab--partners").click(function () {
    $(".content--partners").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("li.tab--partners").removeClass("active");
    $(this).addClass("active");
  });
});
