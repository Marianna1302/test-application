let notes = document.querySelector('#notes');
document.querySelector('#submit').onclick = function () {
    let subject = document.querySelector('#subject').value;
    let note = document.querySelector('#note_text').value;
    console.log(subject);
    console.log(note);
    notes.insertAdjacentHTML('afterbegin', `<section id="note"><div id="name"><p>${subject}</p></div><div id="text"><p>${note}</p></div> <div id="social"><a href="#"><img src="facebook.png"></a><a href="#"><img src="twitter.png"></a><a href="#"><img src="save.png"></a></div></section>`);
}  
notes.onclick = function(event) {
    let target = event.target.closest('section'); 
    let det = document.querySelector('.detail');
    let close = document.querySelector('.close');
    det.innerHTML =`<div id="info"><div id="all_note">${target.innerHTML}</div><div id="buttons"><button>Edit note</button><button>Copy to clipboard</button><button>Share</button></div></div>`;
    det.style.display="block";
    close.style.display ="block";
    close.onclick = function (){
        det.style.display="none";
        close.style.display ="none";
    }
   
}




