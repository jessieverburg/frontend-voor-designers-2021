var btn = document.getElementById('btn');


function Toggle() {
    if (btn.classList.contains("far")) {
        btn.classList.remove("far");
        btn.classList.add("fas");
    }else{
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
}

document.getElementByIdl('btn').forEach((btn) => btn.addEventListener('click', Toggle, (e) => { console.log('hello'); }))
