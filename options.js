function save_options () {
  console.log("saving options");
  var names = [];
  var lines = $('textarea').val().split(/\n/);
  for (var i = 0; i < lines.length; i++) {
    if (/\S/.test(lines[i])) {
      names.push($.trim(lines[i]));
    }
  }
  chrome.storage.sync.set({
    blacklist: names
  }, function () {
    $('#status').html("Options saved");
  });
}

function restore_options () {
  chrome.storage.sync.get({
    //defaults
    blacklist: []
  }, function(items) {
    $('textarea').val(items.blacklist.join('\n'));
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
