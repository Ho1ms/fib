const d = 'To serve and protect.';

let len = 0;
let text = document.getElementById('devis');
let sleep_count = 0;
console.log(d[len])

setInterval(() => {
    if (len >= d.length){
        return
    } else if (sleep_count == 0){
        console.log(d[len])
        text.innerHTML += d[len];
        len++;
    }
}, 150)

