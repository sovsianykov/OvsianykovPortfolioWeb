const input=document.querySelector("#search"),text=document.querySelector("#message"),form=document.querySelector("form"),textResponse=document.querySelector("#response");form.addEventListener("input",(function(){let e=text.textContent,t=input.value;console.log(t);let o=e.indexOf(input.value),n=o,r=[];for(;" "!==e.charAt(n);)r.push(e.charAt(n)),n++;n=o;let c=[r.join("")].toString();textResponse.textContent=c,console.log(e),console.log(o),console.log(r)}));
//# sourceMappingURL=script.js.map
