

let hidetext_btn = document.getElementById('hidetext_btn');

let hidetext = document.getElementById('hidetext');


hidetext_btn.addEventListener('click', toggleText);

function toggleText() {
    hidetext.classList.toggle('show');

    if(hidetext.classList.contains('show')) {
        hidetext_btn.innerHTML = 'Ya sabes porque?';
    }
    else{
        hidetext_btn.innerHTML = 'Porque?';
    }
} 
