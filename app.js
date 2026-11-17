(() => {
const buttons=[...document.querySelectorAll("[data-gild]")];
const toastNode=document.querySelector("#toast");
let toastTimer;
function toast(message){toastNode.textContent=message;toastNode.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastNode.classList.remove("show"),1500)}
function animate(button){
 if(button.classList.contains("animating"))return;
 const next=button.dataset.state!=="on";
 button.classList.add("animating");
 const flyer=button.querySelector(".gild_flyer");
 flyer.style.animation="none";
 // Force a clean start for repeated clicks.
 void flyer.offsetWidth;
 flyer.style.animation="cast .46s cubic-bezier(.22,.75,.28,1) both";
 button.setAttribute("aria-pressed",String(next));
 window.setTimeout(()=>{
   button.dataset.state=next?"on":"off";
   button.classList.toggle("is-on",next);
   button.classList.toggle("is-off",!next);
   button.classList.remove("animating");
   flyer.style.animation="";
   toast(`${button.querySelector(".gild_label").textContent} ${next?"added to":"removed from"} favourites`);
 },470);
}
buttons.forEach(button=>{
 const isOn=button.dataset.state==="on";
 button.classList.toggle("is-on",isOn);
 button.classList.toggle("is-off",!isOn);
 button.setAttribute("aria-pressed",String(isOn));
 button.addEventListener("click",()=>animate(button));
 button.addEventListener("keydown",event=>{
  if(event.key==="Enter"||event.key===" "){event.preventDefault();animate(button)}
 });
});
// Run a small introductory stagger to mirror the two-button demonstration.
window.setTimeout(()=>{const save=document.querySelector("#saveBtn");if(save)animate(save)},850);
window.setTimeout(()=>{const watch=document.querySelector("#watchBtn");if(watch)animate(watch)},1550);
})();