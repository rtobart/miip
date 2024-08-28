document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById('ip').textContent = response.ip;
      }
    };
    xhr.send();
  });
  