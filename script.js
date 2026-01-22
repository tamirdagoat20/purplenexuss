// =====================
// PARTICLES
// =====================
for(let i=0;i<160;i++){
  let p=document.createElement('div');
  p.className='particle';
  let size=Math.random()*5+2;
  p.style.width=p.style.height=size+'px';
  p.style.background='rgba('+Math.floor(Math.random()*255)+','+
                   Math.floor(Math.random()*120+80)+','+
                   Math.floor(Math.random()*255)+',0.5)';
  p.style.left=Math.random()*window.innerWidth+'px';
  p.style.top=Math.random()*window.innerHeight+'px';
  document.body.appendChild(p);
}

// =====================
// TAB SWITCH
// =====================
function showCard(id){
  document.querySelectorAll('.card').forEach(c=>c.classList.remove('active'));
  const card=document.getElementById(id);
  if(card) card.classList.add('active');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  const activeTab=document.querySelector('.tab[onclick*="'+id+'"]');
  if(activeTab) activeTab.classList.add('active');
}

// =====================
// SEARCH
// =====================
function search(){
  let q=document.getElementById("searchInput").value.trim();
  if(!q)return;
  window.open("https://www.google.com/search?q="+encodeURIComponent(q),"_blank");
}
function searchPreset(term){
  trackClick("search_"+term.replace(/\s+/g,'_').toLowerCase());
  window.open("https://www.google.com/search?q="+encodeURIComponent(term),"_blank");
}

// =====================
// LINK TRACKING
// =====================
function openSiteTracked(url,id){
  trackClick(id);
  window.open(url,"_blank");
}
function trackClick(id){
  let counts = JSON.parse(localStorage.getItem("linkCounts") || "{}");
  counts[id] = (counts[id] || 0) + 1;
  localStorage.setItem("linkCounts", JSON.stringify(counts));
  updateLinkCounts();
}
function updateLinkCounts(){
  let counts = JSON.parse(localStorage.getItem("linkCounts") || "{}");
  Object.keys(counts).forEach(id=>{
    const el = document.getElementById("count_"+id);
    if(el) el.textContent = `(${counts[id]})`;
  });
}

// =====================
// AUTH SYSTEM
// =====================
// ... All login/register, validateEmail, loadUser, saveSettings, logout code
// Copy from your existing script.js inside HTML

// =====================
// CHAT SYSTEM
// =====================
// ... All chat users, openChat, loadMessages, sendMessage code
// Copy from your existing script.js inside HTML

// =====================
// AI PLACEHOLDER
// =====================
function sendAI(){
  const prompt=document.getElementById('aiInput').value.trim();
  const output=document.getElementById('aiOutput');
  if(!prompt){
    alert('Enter a prompt');
    return;
  }
  output.innerHTML = `<p>AI is disabled on GitHub Pages. Connect a backend API to enable.</p>`;
}

// =====================
// INIT
// =====================
updateLinkCounts();
loadUser();
