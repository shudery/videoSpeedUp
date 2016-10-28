document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('box4').onclick = function() {
    var data = 'createVideo';
    sendData(data);
  }
  document.getElementById('box1').onclick = function() {
    document.getElementById('box1').style.color = '#fff'
  }
  function sendData(data) {
    chrome.tabs.query({
      active: true
    }, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, data);
    });
  };
})