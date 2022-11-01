const printout = document.getElementById('printout');

let template = '';
for (let i = 3; i > 0; i--) {
    for (let j = 1; j < 4; j++) {
        i == j ? template += 'X' : template += '0';
    }
    template += `<br>`;
}

printout.innerHTML = template;