function showTab(id){
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

const text="Hi, I'm Samantha Wunderle";
let i=0;

function type(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text[i];
i++;
setTimeout(type,80);
}
}
type();
