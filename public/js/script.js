window.addEventListener('load', function() {
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var button = document.getElementById('button');
    var list = document.getElementById('list');
    var ul = document.getElementById('ul');
    var li = document.getElementsByTagName('li');
    var i = 0;
});
window.addEventListener("submit", function(submit) {
    event.preventDefault();
    var form = event.target;
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://b225-98-186-207-93.ngrok.io/register");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                window.location.href = "index.html";
            } else {
                alert(response.message);
            }
        }
    };
});
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var input = document.getElementById('input');
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li); 
    input.value = '';
}
);
ul.addEventListener('click', function(e) {
    e.target.remove();
}
);
button.addEventListener('click', function(e) {
    e.preventDefault();
    var input = document.getElementById('input');
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li); 
    input.value = '';
}
);
list.addEventListener('click', function(e) {
    e.target.remove();
}
);
li.addEventListener('click', function(e) {
    e.target.remove();
}
);
//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map
