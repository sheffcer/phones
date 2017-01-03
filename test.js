jQuery.ajax({
  'url': '/ru_UA/ink/ajax',
  'success': function (data) {
    $("td.right-panel").html(data).removeClass("loading");
    window.history.pushState(null, null, "/ink");
    config.controller = "ink";
    config.action = "index";
  },
  'beforeSend': function () {
    $("td.right-panel").empty().addClass("loading")
  },
  'cache': false
});
