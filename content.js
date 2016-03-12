chrome.storage.sync.get({
  blacklist: []
}, function (items) {
  $(".post ").each(function () {
    if ($.inArray($(this).find("a.post-author").text(), items.blacklist) !== -1) {
      $(this).find(".post-body")
        .html("<p style=\"color:#888; font-style:italic\">Hidden by the \"Hide tftv posts\" chrome extension</p>");
    }
  });
});
