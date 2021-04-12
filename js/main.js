const d = 'To serve and protect.';

let len = 0;
let text = document.getElementById('devis');
let sleep_count = 0;

setInterval(() => {
    if (len >= d.length){
        return
    } else if (sleep_count == 0){
        text.innerHTML += d[len];
        len++;
    }
}, 140)

setTimeout(() => {
    window.scrollTo(0,4000)
}, 3500)

