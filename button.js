
var docBody = document.body.innerHTML; 
document.body.innerHTML = "";
document.body.style.backgroundColor = "red";

var button = document.createElement('button');
button.textContent = "Click to be redirected";
button.id = 'but'; 
button.style.borderRadius = "8px";
button.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.18)";
button.style.position = "absolute";
button.style.marginLeft = "80%";
button.style.marginTop = "20%";
button.style.background = "green";
button.style.height = "200px";
button.style.width = "200px";
button.addEventListener('click', function() {
    location.href="http://www.google.com";
    });
document.body.appendChild(button);
document.body.style.background = "linear-gradient(to right, #fffbd5, #b20a2c)";
   

    

 html = [
    '<div><b>This page has been flagged for privacy concerns</b></div>',
    '<div style="height:200px;"> Click to <a><b>continue</b></a> to the page</div>',
].join('');

var div = document.createElement('div');
    div.style.fontSize = "100px";
    div.style.marginRight = "20%";
    div.style.justifyContent = "center";
    div.setAttribute('class', 'post block bc2');
div.style.height = "100px";
    div.innerHTML = html;
    div.addEventListener('click', function() {
    document.body.innerHTML = docBody;
    });
    document.body.appendChild(div);
