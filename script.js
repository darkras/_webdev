window.addEventListener('resize', update);
var x = window.document.getElementById("demo");
update();

function update() {
    x.innerHTML = "Browser inner windows size:" + window.innerWidth + "," + window.innerHeight + ".";
}