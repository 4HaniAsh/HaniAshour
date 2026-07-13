
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;document.body.classList.add('mouse-active');glow.style.transform=`translate(${e.clientX-190}px,${e.clientY-190}px)`},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.target),start=performance.now(),duration=900;function step(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step);counterObserver.unobserve(el)}),{threshold:.75});
document.querySelectorAll('.counter').forEach(el=>counterObserver.observe(el));
const menuBtn=document.querySelector('.menu-btn'),mobileNav=document.querySelector('.mobile-nav');if(menuBtn&&mobileNav){menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')))}
