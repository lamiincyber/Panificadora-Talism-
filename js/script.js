(function(){
var d=document,b=d.body,nav=d.getElementById('nav'),bg=d.getElementById('burger');
function 
sc(){nav.classList.toggle('solid',scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
function 
tog(o){b.classList.toggle('menu-open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
bg.addEventListener('click',function(){tog(!b.classList.contains('menu-open'))});
d.querySelectorAll('.sheet a').forEach(function(a){a.addEventListener('click',function(){tog(false)})});
addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});
var 
els=d.querySelectorAll('.rv,.band');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.01,rootMargin:"0px 0px -4% 0px"});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
})();
