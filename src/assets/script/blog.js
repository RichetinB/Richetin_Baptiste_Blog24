var btns_animation = document.querySelectorAll(".btn_animation");
btns_animation.forEach((btn)=>{
  

  btn.addEventListener("mouseenter", (e)=>{
    

    if(btn.getElementsByClassName("btn_content").length == 0)
      btn.innerHTML = `<span class="btn_content">${btn.innerHTML}</span>`;
    
    
    btn.insertAdjacentHTML('afterbegin', `<span class="btn_effect" style="left:${e.layerX-25}px;top:${e.layerY-25}px"></span>`);
    
  });

  btn.addEventListener("mouseleave", ()=>{
    
    btn.querySelectorAll(".btn_effect").forEach((elm)=>{
      elm.remove();
    });
    
  });
});


