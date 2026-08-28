const news = [
  ["Brilliant Bouaddi won't fix all of Man City's many issues","OPINION","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80"],
  ["How Juventus is making impactful strides in well-being, mental health & more","JUVENTUS","https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80"],
  ["How Arsenal's shock win sparked their Champions League run","FEATURES","https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80"],
  ["Why Chelsea can't win the title despite EPL's best forward line","OPINION","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80"],
  ["Why English players are flocking to Italy once more","ANALYSIS","https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=700&q=80"],
  ["Are Barcelona's financial problems finally over?!","ANALYSIS","https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80"]
];

const breaking = [
 "Galatasaray, new offer to AC Milan for Leao: €45 million plus bonuses",
 "Alonso issues Fernandez update amid Man City interest",
 "Tony Vilhena definitely returns to the Eredivisie",
 "Laporta confirms Barca interest in Alvarez",
 "When does the dormant volcano erupt? A warning to Real Madrid",
 "Putting him under pressure: Flick announces a new decision regarding Balde",
 "Jack Grealish could swap"
];

const matches = [

    // PREMIER LEAGUE
    {
        league: "premier",
        competition: "Premier League",
        time: "15:00",
        home: "Arsenal",
        away: "Chelsea"
    },

    {
        league: "premier",
        competition: "Premier League",
        time: "17:30",
        home: "Liverpool",
        away: "Manchester United"
    },

    {
        league: "premier",
        competition: "Premier League",
        time: "20:00",
        home: "Manchester City",
        away: "Tottenham"
    },


    // LALIGA
    {
        league: "laliga",
        competition: "LaLiga",
        time: "18:30",
        home: "Barcelona",
        away: "Atletico Madrid"
    },

    {
        league: "laliga",
        competition: "LaLiga",
        time: "20:00",
        home: "Real Madrid",
        away: "Real Sociedad"
    },

    {
        league: "laliga",
        competition: "LaLiga",
        time: "21:00",
        home: "Sevilla",
        away: "Valencia"
    },


    // BUNDESLIGA
    {
        league: "bundesliga",
        competition: "Bundesliga",
        time: "15:30",
        home: "Bayern Munich",
        away: "Borussia Dortmund"
    },

    {
        league: "bundesliga",
        competition: "Bundesliga",
        time: "17:30",
        home: "RB Leipzig",
        away: "Bayer Leverkusen"
    },


    // SERIE A
    {
        league: "seriea",
        competition: "Serie A",
        time: "18:00",
        home: "Inter Milan",
        away: "AC Milan"
    },

    {
        league: "seriea",
        competition: "Serie A",
        time: "20:45",
        home: "Juventus",
        away: "Napoli"
    },


    // LIGUE 1
    {
        league: "ligue1",
        competition: "Ligue 1",
        time: "20:00",
        home: "PSG",
        away: "Marseille"
    },


    // CHAMPIONS LEAGUE
    {
        league: "ucl",
        competition: "Champions League",
        time: "20:00",
        home: "Real Madrid",
        away: "Manchester City"
    },

    {
        league: "ucl",
        competition: "Champions League",
        time: "20:00",
        home: "Barcelona",
        away: "Bayern Munich"
    },


    // EUROPA LEAGUE
    {
        league: "uel",
        competition: "Europa League",
        time: "20:00",
        home: "Roma",
        away: "Manchester United"
    }

];

async function showVideos() {
    const videos = await loadVideos();

    console.log(videos);

    videos.forEach(video => {
        console.log(video.title);
    });
}

  /* move slider */
 
const slider =
    document.getElementById("slider");


function moveSlider(direction) {

    slider.scrollBy({

        left: direction * 340,

        behavior: "smooth"

    });

}


/* Keyboard navigation */

document.addEventListener("keydown", function(e) {

    if (e.key === "ArrowRight") {

        moveSlider(1);

    }

    if (e.key === "ArrowLeft") {

        moveSlider(-1);

    }

});  
      
    /* display matches */
function displayMatches(data) {

    let container =
        document.getElementById("scoreCards");

    container.innerHTML = "";

    data.forEach(match => {

        container.innerHTML += `

        <div class="bg-[#333] hover:bg-[#3b3b3b]
                    transition rounded-lg p-4
                    min-h-36.25 cursor-pointer">

            <div class="flex justify-between
                        text-sm text-gray-200">

                <span>${match.competition}</span>

                <span class="font-bold">
                    ${match.time}
                </span>

            </div>

            <p class="text-xs text-gray-400 mt-1">
                Football
            </p>


            <div class="flex justify-between
                        items-center mt-5">

                <span class="font-bold">
                    ⚽ ${match.home}
                </span>

                <span class="font-bold">
                    -
                </span>

            </div>


            <div class="flex justify-between
                        items-center mt-3">

                <span class="font-bold">
                    ⚽ ${match.away}
                </span>

                <span class="font-bold">
                    -
                </span>

            </div>

        </div>

        `;

    });

}


// Show all matches when page loads
filterScores();

const teams = [
 ["Arsenal","🔴","Arsenal's latest squad news, transfers and match updates."],
 ["Manchester City","🔵","City continue preparing for another competitive season."],
 ["Manchester United","🔴","United's latest signings and transfer developments."],
 ["Liverpool","🔴","Liverpool look ready for another exciting campaign."],
 ["Chelsea","🔵","Chelsea's young squad continues to develop."],
 ["Barcelona","🔵🔴","Barcelona prepare for another major La Liga challenge."],
 ["Real Madrid","⚪","Madrid remain focused on domestic and European success."],
 ["Tottenham Hotspur","⚪","Spurs continue building a competitive squad."]
];

let teamOffset = 0;

function renderNews(list = news) {
  document.getElementById("newsGrid").innerHTML = list.map((n,i)=>`
    <article onclick="showArticle('${n[0].replace(/'/g,"\\'")}')" class="bg-[#303030] rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition">
      <img src="${n[2]}" class="w-full h-32 object-cover">
      <div class="p-4">
        <p class="text-[10px] text-gray-400">${n[1]}</p>
        <h3 class="font-bold mt-3 line-clamp-2">${n[0]}</h3>
        <p class="text-xs text-gray-500 mt-5">◷ ${10+i}h &nbsp; 💬 ${i+1}</p>
      </div>
    </article>`).join("");
}
function renderBreaking() {
  document.getElementById("breakingList").innerHTML = breaking.map((x,i)=>`
    <button onclick="showArticle('${x.replace(/'/g,"\\'")}')" class="text-left w-full py-3 border-b border-white/10 text-sm hover:text-red-400">
      <span class="block text-[10px] text-gray-500">8 hours ago</span>${x}
    </button>`).join("");
}
function renderTeams() {
  const visible = [...teams.slice(teamOffset), ...teams.slice(0,teamOffset)].slice(0,5);
  document.getElementById("teamSlider").innerHTML = visible.map((t,i)=>`
    <article class="min-w-55 sm:min-w-60 h-64 rounded-xl p-4 flex flex-col justify-end bg-linear-to-t from-black/90 to-[#244] border border-white/10">
      <div class="text-4xl">${t[1]}</div><h3 class="font-bold mt-2">${t[0]}</h3>
      <p class="text-xs text-gray-300 mt-2 line-clamp-3">${t[2]}</p>
      <button onclick="follow('${t[0]}',this)" class="mt-3 bg-black/50 border border-white/20 rounded-full py-2 text-xs">Follow ☆</button>
    </article>`).join("");
}
function renderFavorites() {
  const saved = JSON.parse(localStorage.getItem("favoriteTeams") || "[]");
  document.getElementById("favoriteTeams").innerHTML = teams.map(t=>`
    <div class="border border-white/10 rounded-lg p-3 text-center">
      <div class="text-xl">${t[1]}</div><p class="text-xs mt-1">${t[0]}</p>
      <button onclick="follow('${t[0]}',this)" class="text-xs mt-3 text-gray-400">${saved.includes(t[0]) ? "Following ★" : "Follow ☆"}</button>
    </div>`).join("");
}
function follow(name, btn) {
  let saved = JSON.parse(localStorage.getItem("favoriteTeams") || "[]");
  if(saved.includes(name)) saved = saved.filter(x=>x!==name); else saved.push(name);
  localStorage.setItem("favoriteTeams",JSON.stringify(saved));
  renderFavorites(); renderTeams();
}
function addTeam() {
  document.getElementById("feed").scrollIntoView({behavior:"smooth"});
  alert("Choose a team below and press Follow.");
}
function moveTeams(dir) {
  teamOffset = (teamOffset + dir + teams.length) % teams.length;
  renderTeams();
}
function showArticle(title) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("articleModal").classList.remove("hidden");
}
function closeModal(){document.getElementById("articleModal").classList.add("hidden");}
function openLogin(){document.getElementById("loginModal").classList.remove("hidden");}
function closeLogin(){document.getElementById("loginModal").classList.add("hidden");}
function login(e){e.preventDefault(); localStorage.setItem("loggedIn","true"); closeLogin(); alert("Login successful!");}
function toggleSearch(){document.getElementById("mobileSearch").classList.toggle("hidden");}

function filterNews(value){
  const q=value.toLowerCase().trim();
  renderNews(news.filter(n=>n[0].toLowerCase().includes(q) || n[1].toLowerCase().includes(q)));
}
document.getElementById("searchInput").addEventListener("input",e=>filterNews(e.target.value));
document.getElementById("mobileSearch").addEventListener("input",e=>filterNews(e.target.value));

function showAllNews(){renderNews(news); document.getElementById("news").scrollIntoView({behavior:"smooth"});}

renderNews(); renderBreaking(); renderTeams(); renderFavorites();
