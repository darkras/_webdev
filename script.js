window.addEventListener('resize', update);
update();

function update() {
    document.getElementById('demo').innerHTML = "Browser inner windows size:" +
        window.innerWidth + "," + window.innerHeight + ".";
}