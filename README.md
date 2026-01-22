<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Purple Nexus 8.0</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Arial',sans-serif;}
html{scroll-behavior:smooth;}
body{
  min-height:100vh;
  background:#0c0015;
  color:white;
  position:relative;
  overflow-x:hidden;
  padding-bottom:120px;
}

/* Floating Neon Particles */
.particle{
  position:absolute;
  border-radius:50%;
  opacity:0.5;
  pointer-events:none;
  animation:float 6s linear infinite;
}
@keyframes float{
  0%{transform:translate(0,0);}
  50%{transform:translate(70px,-70px);}
  100%{transform:translate(0,0);}
}

/* Neon Orbs */
.orb{
  position:fixed;
  width:350px;height:350px;
  border-radius:50%;
  filter:blur(150px);
  opacity:0.35;
  animation:float 20s infinite alternate ease-in-out;
  z-index:-1;
}
.orb1{background:#b366ff;top:-100px;left:-100px;}
.orb2{background:#7a1fff;bottom:-120px;right:-120px;animation-delay:6s;}
.orb3{background:#ff4df8;top:40%;left:60%;animation-delay:12s;}

header{text-align:center;padding:30px 15px 15px;}
header h1{
  font-size:2.5rem;
  background: linear-gradient(90deg,#b366ff,#ff66ff,#7a5cff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 0 35px rgba(179,102,255,0.9);
}
header p{margin-top:5px;font-size:1rem;opacity:0.85;}

/* Tabs */
.tabs{
  display:flex;
  justify-content:flex-start;
  gap:6px;
  overflow-x:auto;
  padding:5px 10px;
  margin-bottom:15px;
}
.tab{
  padding:6px 12px;
  border-radius:999px;
  cursor:pointer;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  color:white;
  transition: 0.3s;
  font-size:0.85rem;
  white-space:nowrap;
}
.tab.active, .tab:hover{
  background: linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
}

/* Cards */
.card{
  display:none;
  margin:auto;
  max-width:1200px;
  padding:20px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(14px);
  border-radius:20px;
  box-shadow:0 0 35px rgba(179,102,255,0.35);
  border:1px solid rgba(255,255,255,0.12);
}
.card.active{display:block;}
.card h2{margin-bottom:12px;color:#e6c8ff;}
.card p{font-size:0.85rem;opacity:0.8;margin-bottom:12px;}

/* Buttons */
.card .button-container{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.card button{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:6px 10px;
  border-radius:999px;
  border:none;
  font-weight:bold;
  cursor:pointer;
  background: linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
  box-shadow:0 0 14px rgba(179,102,255,0.7);
  transition: transform 0.2s, box-shadow 0.2s;
  font-size:0.8rem;
}
.card button:hover{
  transform:scale(1.05);
  box-shadow:0 0 35px rgba(179,102,255,1);
}
.link-count{
  font-size:0.65rem;
  opacity:0.7;
  margin-left:6px;
}

/* Search Bar */
.search-bar{display:flex; gap:6px; margin-bottom:10px; flex-wrap:wrap;}
.search-bar input{
  flex:1; padding:8px 10px; border-radius:999px; border:none; outline:none;
  background: rgba(0,0,0,0.55); color:white; font-size:0.85rem;
}
.search-bar button{
  padding:8px 16px; border-radius:999px; border:none; font-weight:bold; cursor:pointer;
  background: linear-gradient(90deg,#b366ff,#ff66ff); color:black;
  box-shadow:0 0 12px rgba(179,102,255,0.6);
}

footer{text-align:center; padding:12px; font-size:0.75rem; opacity:0.6;}
textarea{
  width:100%; padding:8px; border-radius:10px; border:none; outline:none;
  background: rgba(0,0,0,0.6); color:white; font-size:0.85rem; margin-bottom:8px; resize:none;
}
#aiOutput{
  background: rgba(255,255,255,0.08);
  padding:10px; border-radius:10px;
  max-height:200px; overflow-y:auto; margin-bottom:8px;
}

/* LOGIN / REGISTER UI */
.auth-screen{
  position:fixed;
  inset:0;
  background:#0c0015;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
}
.auth-box{
  width:90%;
  max-width:420px;
  background:rgba(255,255,255,0.08);
  backdrop-filter:blur(20px);
  border-radius:20px;
  padding:25px;
  box-shadow:0 0 40px rgba(179,102,255,0.6);
  text-align:center;
}
.auth-box h2{margin-bottom:10px;color:#e6c8ff;}
.auth-box p{font-size:0.85rem;opacity:0.8;margin-bottom:15px;}
.auth-box input{
  width:100%;
  padding:10px;
  margin-bottom:10px;
  border-radius:999px;
  border:none;
  outline:none;
  background:rgba(0,0,0,0.6);
  color:white;
}
.auth-box button{
  width:100%;
  padding:10px;
  border-radius:999px;
  border:none;
  font-weight:bold;
  cursor:pointer;
  background:linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
  box-shadow:0 0 14px rgba(179,102,255,0.7);
  margin-top:5px;
}
.auth-switch{margin-top:10px;font-size:0.8rem;opacity:0.7;cursor:pointer;}
.auth-error{color:#ff6b6b;font-size:0.8rem;margin-bottom:8px;}

/* PROFILE PANEL */
.profile-panel{
  position:fixed;
  bottom:15px;
  left:15px;
  background:rgba(255,255,255,0.1);
  backdrop-filter:blur(15px);
  border-radius:20px;
  padding:10px 12px;
  box-shadow:0 0 25px rgba(179,102,255,0.5);
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  z-index:1000;
}
.profile-panel img{
  width:40px;
  height:40px;
  border-radius:50%;
  object-fit:cover;
  border:2px solid #b366ff;
}
.profile-info{
  display:flex;
  flex-direction:column;
  font-size:0.75rem;
}
.profile-info .username{font-weight:bold;color:#e6c8ff;}
.profile-info .bio{
  opacity:0.7;
  max-width:120px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

/* SETTINGS MODAL */
.settings-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.6);
  display:none;
  align-items:center;
  justify-content:center;
  z-index:2000;
}
.settings-box{
  width:90%;
  max-width:420px;
  background:rgba(255,255,255,0.1);
  backdrop-filter:blur(20px);
  border-radius:20px;
  padding:20px;
  box-shadow:0 0 40px rgba(179,102,255,0.6);
}
.settings-box h2{margin-bottom:10px;color:#e6c8ff;}
.settings-box label{font-size:0.75rem;opacity:0.8;}
.settings-box input,.settings-box textarea{
  width:100%;
  margin-bottom:10px;
  padding:8px;
  border-radius:10px;
  border:none;
  outline:none;
  background:rgba(0,0,0,0.6);
  color:white;
  font-size:0.85rem;
}
.settings-actions{
  display:flex;
  gap:8px;
}
.settings-actions button{
  flex:1;
  padding:10px;
  border-radius:999px;
  border:none;
  font-weight:bold;
  cursor:pointer;
  background:linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
  box-shadow:0 0 14px rgba(179,102,255,0.7);
}
.settings-actions .logout{
  background:linear-gradient(90deg,#ff6b6b,#ff3b3b);
  color:black;
}

/* CHAT SYSTEM */
.chat-panel{
  position:fixed;
  bottom:15px;
  right:15px;
  width:320px;
  max-height:450px;
  background:rgba(255,255,255,0.1);
  backdrop-filter:blur(20px);
  border-radius:20px;
  box-shadow:0 0 30px rgba(179,102,255,0.6);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  z-index:1000;
}
.chat-header{
  padding:10px;
  background:linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
  font-weight:bold;
  text-align:center;
}
.chat-users{
  max-height:120px;
  overflow-y:auto;
  padding:8px;
  border-bottom:1px solid rgba(255,255,255,0.2);
}
.chat-user{
  padding:6px 8px;
  border-radius:999px;
  cursor:pointer;
  background:rgba(255,255,255,0.08);
  margin-bottom:5px;
  font-size:0.75rem;
}
.chat-user:hover{background:rgba(255,255,255,0.2);}
.chat-messages{
  flex:1;
  padding:8px;
  overflow-y:auto;
  font-size:0.75rem;
}
.chat-message{
  margin-bottom:6px;
}
.chat-message.you{color:#ffb3ff;}
.chat-input{
  display:flex;
  padding:8px;
  gap:6px;
}
.chat-input input{
  flex:1;
  padding:6px 10px;
  border-radius:999px;
  border:none;
  outline:none;
  background:rgba(0,0,0,0.6);
  color:white;
  font-size:0.75rem;
}
.chat-input button{
  padding:6px 12px;
  border-radius:999px;
  border:none;
  font-weight:bold;
  cursor:pointer;
  background:linear-gradient(90deg,#b366ff,#ff66ff);
  color:black;
}
</style>
</head>
<body>

<!-- Orbs -->
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>

<!-- Particles -->
<script>
for(let i=0;i<140;i++){
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
</script>

<!-- AUTH -->
<div class="auth-screen" id="authScreen">
  <div class="auth-box" id="loginBox">
    <h2>💜 Purple Nexus Login</h2>
    <p>Login to access everything</p>
    <div class="auth-error" id="loginError"></div>
    <input type="email" id="loginEmail" placeholder="Email (example@gmail.com)">
    <input type="password" id="loginPassword" placeholder="Password">
    <button onclick="login()">Login</button>
    <div class="auth-switch" onclick="showRegister()">Don't have an account? Register</div>
  </div>

  <div class="auth-box" id="registerBox" style="display:none;">
    <h2>✨ Create Account</h2>
    <p>Register to get started</p>
    <div class="auth-error" id="registerError"></div>
    <input type="text" id="registerUsername" placeholder="Username">
    <input type="email" id="registerEmail" placeholder="Email (example@gmail.com)">
    <input type="password" id="registerPassword" placeholder="Password">
    <button onclick="register()">Register</button>
    <div class="auth-switch" onclick="showLogin()">Already have an account? Login</div>
  </div>
</div>

<header>
  <h1>💜 Purple Nexus 8.0</h1>
  <p>All-in-one portal — Social Edition</p>
</header>

<div class="tabs">
  <div class="tab active" onclick="showCard('search')">Search</div>
  <div class="tab" onclick="showCard('games')">Games</div>
  <div class="tab" onclick="showCard('movies')">Movies</div>
  <div class="tab" onclick="showCard('music')">Music</div>
  <div class="tab" onclick="showCard('soundboards')">Soundboards</div>
  <div class="tab" onclick="showCard('education')">Education</div>
  <div class="tab" onclick="showCard('tools')">Tools</div>
  <div class="tab" onclick="showCard('social')">Social</div>
  <div class="tab" onclick="showCard('fun')">Fun</div>
  <div class="tab" onclick="showCard('ai')">AI GPT</div>
  <div class="tab" onclick="showCard('info')">Info</div>
</div>

<main class="container">

<!-- Search -->
<div class="card active" id="search">
  <h2>🔍 Search the Web</h2>
  <p>Google search in a new tab.</p>
  <div class="search-bar">
    <input id="searchInput" type="text" placeholder="Search anything..." />
    <button onclick="search()">Search</button>
  </div>
  <div class="button-container">
    <button onclick="searchPreset('math homework')" data-id="search_math">Math <span class="link-count" id="count_search_math"></span></button>
    <button onclick="searchPreset('science topics')" data-id="search_science">Science <span class="link-count" id="count_search_science"></span></button>
    <button onclick="searchPreset('coding tutorials')" data-id="search_coding">Coding <span class="link-count" id="count_search_coding"></span></button>
    <button onclick="searchPreset('history facts')" data-id="search_history">History <span class="link-count" id="count_search_history"></span></button>
    <button onclick="searchPreset('AI tutorials')" data-id="search_ai">AI <span class="link-count" id="count_search_ai"></span></button>
    <button onclick="searchPreset('music production')" data-id="search_music">Music <span class="link-count" id="count_search_music"></span></button>
    <button onclick="searchPreset('movie streaming')" data-id="search_movies">Movies <span class="link-count" id="count_search_movies"></span></button>
    <button onclick="searchPreset('gaming websites')" data-id="search_games">Games <span class="link-count" id="count_search_games"></span></button>
    <button onclick="searchPreset('soundboards online')" data-id="search_soundboards">Soundboards <span class="link-count" id="count_search_soundboards"></span></button>
    <button onclick="searchPreset('online tools')" data-id="search_tools">Tools <span class="link-count" id="count_search_tools"></span></button>
  </div>
</div>

<!-- Games -->
<div class="card" id="games">
  <h2>🎮 Games</h2>
  <p>Open game hubs and sites.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://www.coolmathgames.com','coolmath')" data-id="coolmath">Cool Math Games <span class="link-count" id="count_coolmath"></span></button>
    <button onclick="openSiteTracked('https://www.poki.com','poki')" data-id="poki">Poki <span class="link-count" id="count_poki"></span></button>
    <button onclick="openSiteTracked('https://1v1.lol','1v1lol')" data-id="1v1lol">1v1.LOL <span class="link-count" id="count_1v1lol"></span></button>
    <button onclick="openSiteTracked('https://1v1-lolgame.github.io/','1v1lolgame')" data-id="1v1lolgame">1v1 LOL Game <span class="link-count" id="count_1v1lolgame"></span></button>
    <button onclick="openSiteTracked('https://www.crazygames.com','crazygames')" data-id="crazygames">CrazyGames <span class="link-count" id="count_crazygames"></span></button>
    <button onclick="openSiteTracked('https://www.y8.com','y8')" data-id="y8">Y8 <span class="link-count" id="count_y8"></span></button>
    <button onclick="openSiteTracked('https://www.agame.com','agame')" data-id="agame">AGame <span class="link-count" id="count_agame"></span></button>
    <button onclick="openSiteTracked('https://www.kongregate.com','kongregate')" data-id="kongregate">Kongregate <span class="link-count" id="count_kongregate"></span></button>
    <button onclick="openSiteTracked('https://itch.io','itch')" data-id="itch">Itch.io <span class="link-count" id="count_itch"></span></button>
    <button onclick="openSiteTracked('https://www.miniclip.com','miniclip')" data-id="miniclip">Miniclip <span class="link-count" id="count_miniclip"></span></button>
    <button onclick="openSiteTracked('https://www.gamesgames.com','gamesgames')" data-id="gamesgames">GamesGames <span class="link-count" id="count_gamesgames"></span></button>
    <button onclick="openSiteTracked('https://mathcordxp.github.io/','mathcordxp')" data-id="mathcordxp">Mathcord XP <span class="link-count" id="count_mathcordxp"></span></button>
  </div>
</div>

<!-- Movies -->
<div class="card" id="movies">
  <h2>🎬 Movies & Streaming</h2>
  <p>Popular streaming & free movie sites.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://streamchips.vip/','streamchips')" data-id="streamchips">StreamChips <span class="link-count" id="count_streamchips"></span></button>
    <button onclick="openSiteTracked('https://freefy.app/','freefy')" data-id="freefy">Freefy <span class="link-count" id="count_freefy"></span></button>
    <button onclick="openSiteTracked('https://soap2day.id/','soap2day')" data-id="soap2day">Soap2Day <span class="link-count" id="count_soap2day"></span></button>
    <button onclick="openSiteTracked('https://fmovies.to/','fmovies')" data-id="fmovies">FMovies <span class="link-count" id="count_fmovies"></span></button>
    <button onclick="openSiteTracked('https://123moviesfree.net/','123movies')" data-id="123movies">123Movies <span class="link-count" id="count_123movies"></span></button>
    <button onclick="openSiteTracked('https://flixhq.to/','flixhq')" data-id="flixhq">FlixHQ <span class="link-count" id="count_flixhq"></span></button>
    <button onclick="openSiteTracked('https://www.netflix.com','netflix')" data-id="netflix">Netflix <span class="link-count" id="count_netflix"></span></button>
    <button onclick="openSiteTracked('https://www.hulu.com','hulu')" data-id="hulu">Hulu <span class="link-count" id="count_hulu"></span></button>
    <button onclick="openSiteTracked('https://www.disneyplus.com','disneyplus')" data-id="disneyplus">Disney+ <span class="link-count" id="count_disneyplus"></span></button>
    <button onclick="openSiteTracked('https://www.primevideo.com','primevideo')" data-id="primevideo">Prime Video <span class="link-count" id="count_primevideo"></span></button>
  </div>
</div>

<!-- Music -->
<div class="card" id="music">
  <h2>🎵 Music</h2>
  <p>Listen, discover, and create music.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://open.spotify.com','spotify')" data-id="spotify">Spotify <span class="link-count" id="count_spotify"></span></button>
    <button onclick="openSiteTracked('https://music.youtube.com','ytmusic')" data-id="ytmusic">YouTube Music <span class="link-count" id="count_ytmusic"></span></button>
    <button onclick="openSiteTracked('https://soundcloud.com','soundcloud')" data-id="soundcloud">SoundCloud <span class="link-count" id="count_soundcloud"></span></button>
    <button onclick="openSiteTracked('https://bandcamp.com','bandcamp')" data-id="bandcamp">Bandcamp <span class="link-count" id="count_bandcamp"></span></button>
    <button onclick="openSiteTracked('https://www.apple.com/apple-music/','applemusic')" data-id="applemusic">Apple Music <span class="link-count" id="count_applemusic"></span></button>
    <button onclick="openSiteTracked('https://www.pandora.com','pandora')" data-id="pandora">Pandora <span class="link-count" id="count_pandora"></span></button>
    <button onclick="openSiteTracked('https://www.audiomack.com','audiomack')" data-id="audiomack">Audiomack <span class="link-count" id="count_audiomack"></span></button>
    <button onclick="openSiteTracked('https://www.beatstars.com','beatstars')" data-id="beatstars">BeatStars <span class="link-count" id="count_beatstars"></span></button>
  </div>
</div>

<!-- Soundboards -->
<div class="card" id="soundboards">
  <h2>🔊 Soundboards</h2>
  <p>Play and create sound effects.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://filme.imyfone.com/soundboards/','imyfone')" data-id="imyfone">iMyFone Soundboards <span class="link-count" id="count_imyfone"></span></button>
    <button onclick="openSiteTracked('https://www.myinstants.com','myinstants')" data-id="myinstants">MyInstants <span class="link-count" id="count_myinstants"></span></button>
    <button onclick="openSiteTracked('https://www.101soundboards.com','101soundboards')" data-id="101soundboards">101 Soundboards <span class="link-count" id="count_101soundboards"></span></button>
    <button onclick="openSiteTracked('https://www.soundboard.com','soundboard')" data-id="soundboard">Soundboard.com <span class="link-count" id="count_soundboard"></span></button>
    <button onclick="openSiteTracked('https://www.voicemod.net/soundboard/','voicemod')" data-id="voicemod">Voicemod <span class="link-count" id="count_voicemod"></span></button>
  </div>
</div>

<!-- Education -->
<div class="card" id="education">
  <h2>📚 Education</h2>
  <p>Learn anything online.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://www.khanacademy.org','khanacademy')" data-id="khanacademy">Khan Academy <span class="link-count" id="count_khanacademy"></span></button>
    <button onclick="openSiteTracked('https://www.coursera.org','coursera')" data-id="coursera">Coursera <span class="link-count" id="count_coursera"></span></button>
    <button onclick="openSiteTracked('https://www.edx.org','edx')" data-id="edx">edX <span class="link-count" id="count_edx"></span></button>
    <button onclick="openSiteTracked('https://www.codecademy.com','codecademy')" data-id="codecademy">Codecademy <span class="link-count" id="count_codecademy"></span></button>
    <button onclick="openSiteTracked('https://www.udemy.com','udemy')" data-id="udemy">Udemy <span class="link-count" id="count_udemy"></span></button>
    <button onclick="openSiteTracked('https://www.w3schools.com','w3schools')" data-id="w3schools">W3Schools <span class="link-count" id="count_w3schools"></span></button>
    <button onclick="openSiteTracked('https://developer.mozilla.org','mdn')" data-id="mdn">MDN Web Docs <span class="link-count" id="count_mdn"></span></button>
  </div>
</div>

<!-- Tools -->
<div class="card" id="tools">
  <h2>⚙️ Tools</h2>
  <p>Useful online tools.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://www.photopea.com','photopea')" data-id="photopea">Photopea <span class="link-count" id="count_photopea"></span></button>
    <button onclick="openSiteTracked('https://www.remove.bg','removebg')" data-id="removebg">Remove.bg <span class="link-count" id="count_removebg"></span></button>
    <button onclick="openSiteTracked('https://www.canva.com','canva')" data-id="canva">Canva <span class="link-count" id="count_canva"></span></button>
    <button onclick="openSiteTracked('https://www.speedtest.net','speedtest')" data-id="speedtest">Speedtest <span class="link-count" id="count_speedtest"></span></button>
    <button onclick="openSiteTracked('https://tinywow.com','tinywow')" data-id="tinywow">TinyWow <span class="link-count" id="count_tinywow"></span></button>
    <button onclick="openSiteTracked('https://www.ilovepdf.com','ilovepdf')" data-id="ilovepdf">iLovePDF <span class="link-count" id="count_ilovepdf"></span></button>
    <button onclick="openSiteTracked('https://www.codepen.io','codepen')" data-id="codepen">CodePen <span class="link-count" id="count_codepen"></span></button>
  </div>
</div>

<!-- Social -->
<div class="card" id="social">
  <h2>💬 Social</h2>
  <p>Connect with friends.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://www.discord.com','discord')" data-id="discord">Discord <span class="link-count" id="count_discord"></span></button>
    <button onclick="openSiteTracked('https://www.instagram.com','instagram')" data-id="instagram">Instagram <span class="link-count" id="count_instagram"></span></button>
    <button onclick="openSiteTracked('https://www.twitter.com','twitter')" data-id="twitter">Twitter / X <span class="link-count" id="count_twitter"></span></button>
    <button onclick="openSiteTracked('https://www.snapchat.com','snapchat')" data-id="snapchat">Snapchat <span class="link-count" id="count_snapchat"></span></button>
    <button onclick="openSiteTracked('https://www.reddit.com','reddit')" data-id="reddit">Reddit <span class="link-count" id="count_reddit"></span></button>
    <button onclick="openSiteTracked('https://www.tiktok.com','tiktok')" data-id="tiktok">TikTok <span class="link-count" id="count_tiktok"></span></button>
    <button onclick="openSiteTracked('https://www.facebook.com','facebook')" data-id="facebook">Facebook <span class="link-count" id="count_facebook"></span></button>
  </div>
</div>

<!-- Fun -->
<div class="card" id="fun">
  <h2>🎉 Fun</h2>
  <p>Random fun stuff.</p>
  <div class="button-container">
    <button onclick="openSiteTracked('https://www.boredbutton.com','boredbutton')" data-id="boredbutton">Bored Button <span class="link-count" id="count_boredbutton"></span></button>
    <button onclick="openSiteTracked('https://pointerpointer.com','pointerpointer')" data-id="pointerpointer">Pointer Pointer <span class="link-count" id="count_pointerpointer"></span></button>
    <button onclick="openSiteTracked('https://thispersondoesnotexist.com','thisperson')" data-id="thisperson">This Person Does Not Exist <span class="link-count" id="count_thisperson"></span></button>
    <button onclick="openSiteTracked('https://theuselessweb.com','uselessweb')" data-id="uselessweb">The Useless Web <span class="link-count" id="count_uselessweb"></span></button>
    <button onclick="openSiteTracked('https://www.omfgdogs.com','omfgdogs')" data-id="omfgdogs">OMG Dogs <span class="link-count" id="count_omfgdogs"></span></button>
    <button onclick="openSiteTracked('https://cat-bounce.com','catbounce')" data-id="catbounce">Cat Bounce <span class="link-count" id="count_catbounce"></span></button>
  </div>
</div>

<!-- AI -->
<div class="card" id="ai">
  <h2>🤖 AI GPT Chat</h2>
  <p>Ask AI anything. (Insert your API key inside the script)</p>
  <textarea id="aiInput" placeholder="Ask something..." rows="3"></textarea>
  <button onclick="sendAI()">Send</button>
  <div id="aiOutput"></div>
</div>

<!-- Info -->
<div class="card" id="info">
  <h2>ℹ️ Information</h2>
  <p>Version 8.0 — Purple Nexus</p>
  <p>Includes login system, profile customization, link tracking, and private messaging.</p>
</div>

</main>

<footer>© 2026 Purple Nexus — Social Edition</footer>

<!-- PROFILE PANEL -->
<div class="profile-panel" id="profilePanel" onclick="openSettings()">
  <img id="profilePic" src="https://i.imgur.com/0y0y0y0.png" alt="Profile">
  <div class="profile-info">
    <div class="username" id="profileUsername">User</div>
    <div class="bio" id="profileBio">Click to edit profile</div>
  </div>
</div>

<!-- SETTINGS MODAL -->
<div class="settings-modal" id="settingsModal">
  <div class="settings-box">
    <h2>⚙️ Profile Settings</h2>
    <label>Profile Picture URL</label>
    <input type="text" id="settingsPfp" placeholder="Paste image URL">
    <label>Username</label>
    <input type="text" id="settingsUsername" placeholder="Your username">
    <label>Bio</label>
    <textarea id="settingsBio" rows="3" placeholder="Your bio..."></textarea>
    <div class="settings-actions">
      <button onclick="saveSettings()">Save</button>
      <button class="logout" onclick="logout()">Logout</button>
    </div>
  </div>
</div>

<!-- CHAT PANEL -->
<div class="chat-panel" id="chatPanel">
  <div class="chat-header">💬 Messages</div>
  <div class="chat-users" id="chatUsers"></div>
  <div class="chat-messages" id="chatMessages"></div>
  <div class="chat-input">
    <input type="text" id="chatInput" placeholder="Type a message...">
    <button onclick="sendMessage()">Send</button>
  </div>
</div>

<script>
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
const authScreen = document.getElementById('authScreen');
const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');

function showRegister(){
  loginBox.style.display='none';
  registerBox.style.display='block';
}
function showLogin(){
  registerBox.style.display='none';
  loginBox.style.display='block';
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function register(){
  const username = document.getElementById('registerUsername').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const error = document.getElementById('registerError');
  error.textContent = '';

  if(!username || !email || !password){
    error.textContent = 'Please fill in all fields.';
    return;
  }
  if(!validateEmail(email)){
    error.textContent = 'Please enter a valid email address.';
    return;
  }
  if(password.length < 4){
    error.textContent = 'Password must be at least 4 characters.';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if(users[email]){
    error.textContent = 'Account already exists.';
    return;
  }

  users[email] = {
    username,
    email,
    password,
    pfp: 'https://i.imgur.com/0y0y0y0.png',
    bio: 'New user',
    messages: {}
  };
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', email);
  loadUser();
}

function login(){
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const error = document.getElementById('loginError');
  error.textContent = '';

  if(!email || !password){
    error.textContent = 'Please enter email and password.';
    return;
  }
  if(!validateEmail(email)){
    error.textContent = 'Please enter a valid email address.';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if(!users[email] || users[email].password !== password){
    error.textContent = 'Invalid email or password.';
    return;
  }

  localStorage.setItem('currentUser', email);
  loadUser();
}

function loadUser(){
  const email = localStorage.getItem('currentUser');
  if(!email){
    authScreen.style.display='flex';
    return;
  }
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[email];
  if(!user){
    authScreen.style.display='flex';
    return;
  }

  authScreen.style.display='none';
  document.getElementById('profileUsername').textContent = user.username;
  document.getElementById('profileBio').textContent = user.bio;
  document.getElementById('profilePic').src = user.pfp;
  loadChatUsers();
}

// =====================
// PROFILE SETTINGS
// =====================
const settingsModal = document.getElementById('settingsModal');

function openSettings(){
  const email = localStorage.getItem('currentUser');
  if(!email) return;
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[email];
  document.getElementById('settingsPfp').value = user.pfp;
  document.getElementById('settingsUsername').value = user.username;
  document.getElementById('settingsBio').value = user.bio;
  settingsModal.style.display='flex';
}

settingsModal.addEventListener('click', (e)=>{
  if(e.target === settingsModal){
    settingsModal.style.display='none';
  }
});

function saveSettings(){
  const email = localStorage.getItem('currentUser');
  if(!email) return;
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[email];

  const newPfp = document.getElementById('settingsPfp').value.trim();
  const newUsername = document.getElementById('settingsUsername').value.trim();
  const newBio = document.getElementById('settingsBio').value.trim();

  if(newUsername) user.username = newUsername;
  if(newBio) user.bio = newBio;
  if(newPfp) user.pfp = newPfp;

  users[email] = user;
  localStorage.setItem('users', JSON.stringify(users));
  loadUser();
  settingsModal.style.display='none';
}

function logout(){
  localStorage.removeItem('currentUser');
  location.reload();
}

// =====================
// CHAT SYSTEM
// =====================
let currentChatUser = null;

function loadChatUsers(){
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const currentEmail = localStorage.getItem('currentUser');
  const chatUsersDiv = document.getElementById('chatUsers');
  chatUsersDiv.innerHTML = '';
  Object.keys(users).forEach(email=>{
    if(email !== currentEmail){
      const div = document.createElement('div');
      div.className = 'chat-user';
      div.textContent = users[email].username;
      div.onclick = ()=>openChat(email);
      chatUsersDiv.appendChild(div);
    }
  });
}

function openChat(email){
  currentChatUser = email;
  loadMessages();
}

function loadMessages(){
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const currentEmail = localStorage.getItem('currentUser');
  const messagesDiv = document.getElementById('chatMessages');
  messagesDiv.innerHTML = '';

  if(!currentChatUser) return;

  const convo = users[currentEmail].messages[currentChatUser] || [];
  convo.forEach(msg=>{
    const div = document.createElement('div');
    div.className = 'chat-message ' + (msg.from === currentEmail ? 'you' : 'them');
    div.textContent = `${msg.from === currentEmail ? 'You' : users[currentChatUser].username}: ${msg.text}`;
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text || !currentChatUser) return;

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const currentEmail = localStorage.getItem('currentUser');

  if(!users[currentEmail].messages[currentChatUser]){
    users[currentEmail].messages[currentChatUser] = [];
  }
  if(!users[currentChatUser].messages[currentEmail]){
    users[currentChatUser].messages[currentEmail] = [];
  }

  const messageObj = {from: currentEmail, text, time: Date.now()};
  users[currentEmail].messages[currentChatUser].push(messageObj);
  users[currentChatUser].messages[currentEmail].push(messageObj);

  localStorage.setItem('users', JSON.stringify(users));
  input.value = '';
  loadMessages();
}

// =====================
// AI GPT
// =====================
// ⚠️ Replace YOUR_API_KEY_HERE with your own OpenAI API key
const OPENAI_API_KEY = "YOUR_API_KEY_HERE";

async function sendAI(){
  const prompt=document.getElementById('aiInput').value.trim();
  const output=document.getElementById('aiOutput');
  if(!prompt){
    alert('Enter a prompt');
    return;
  }
  if(OPENAI_API_KEY === "YOUR_API_KEY_HERE"){
    output.innerHTML='<p>Please insert your OpenAI API key in the script.</p>';
    return;
  }

  output.innerHTML='<p>Loading...</p>';
  try{
    const res=await fetch('https://api.openai.com/v1/chat/completions',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+OPENAI_API_KEY
      },
      body:JSON.stringify({
        model:"gpt-3.5-turbo",
        messages:[{role:"user",content:prompt}]
      })
    });
    const data=await res.json();
    if(data.error){
      output.innerHTML='<p>Error: '+data.error.message+'</p>';
      return;
    }
    output.innerHTML='<p>'+data.choices[0].message.content.replace(/\n/g,'<br>')+'</p>';
  }catch(e){
    output.innerHTML='<p>Error: '+e.message+'</p>';
  }
}

// =====================
// INIT
// =====================
updateLinkCounts();
loadUser();
</script>

</body>
</html>
