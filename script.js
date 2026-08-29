/* =================================================================
   ALPHA EVENTS — js/script.js
   Single shared script for every page. Frontend-only demo:
   registrations, profile data and theme are persisted with
   localStorage. Nothing here talks to a real server or database.
   ================================================================= */

/* -----------------------------------------------------------------
   SAMPLE EVENT DATA  (demo data — replace with real event info)
   ----------------------------------------------------------------- */
const ALPHA_EVENTS = [
  {
    id: "evt-01",
    name: "Alpha Cultural Fest",
    category: "Cultural",
    date: "2026-09-12",
    time: "10:00 AM",
    venue: "Main Auditorium",
    seats: 40,
    seatsTotal: 300,
    description: "A full day of music, dance, drama and fine-arts showcases from every department.",
    eligibility: "Open to all UG & PG students.",
    deadline: "2026-09-08",
    coordinator: "Cultural Committee (placeholder)",
    rules: ["Team size: up to 8 members", "Report 30 minutes before the show", "College ID card is mandatory"],
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=70&auto=format"
  },
  {
    id: "evt-02",
    name: "CodeVerse Hackathon",
    category: "Technical",
    date: "2026-09-19",
    time: "9:00 AM",
    venue: "Computer Science Block",
    seats: 12,
    seatsTotal: 120,
    description: "24-hour build sprint for student teams to design and ship a working prototype.",
    eligibility: "Teams of 2–4, any department.",
    deadline: "2026-09-15",
    coordinator: "Dept. of Computer Science (placeholder)",
    rules: ["Bring your own laptop", "Original code only", "Judging on innovation, execution & pitch"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=70&auto=format"
  },
  {
    id: "evt-03",
    name: "Tech Innovators Workshop",
    category: "Workshop",
    date: "2026-09-22",
    time: "11:00 AM",
    venue: "Seminar Hall 2",
    seats: 55,
    seatsTotal: 80,
    description: "Hands-on session on emerging tools for product building, led by industry guests.",
    eligibility: "Open to all students; laptops recommended.",
    deadline: "2026-09-20",
    coordinator: "Innovation Cell (placeholder)",
    rules: ["Registration confirms one seat only", "Certificates for full attendance"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=70&auto=format"
  },
  {
    id: "evt-04",
    name: "Inter Department Sports Meet",
    category: "Sports",
    date: "2026-09-26",
    time: "8:00 AM",
    venue: "College Sports Ground",
    seats: 0,
    seatsTotal: 200,
    description: "Track, field and team-sport events contested between all departments.",
    eligibility: "Department-nominated participants only.",
    deadline: "2026-09-18",
    coordinator: "Physical Education Dept. (placeholder)",
    rules: ["Sports kit mandatory", "Report to your department captain"],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=70&auto=format"
  },
  {
    id: "evt-05",
    name: "Photography Challenge",
    category: "Club Events",
    date: "2026-09-14",
    time: "2:00 PM",
    venue: "Campus Grounds",
    seats: 30,
    seatsTotal: 60,
    description: "An open-theme photo walk and same-day submission contest around campus.",
    eligibility: "Open to all students with a camera or smartphone.",
    deadline: "2026-09-12",
    coordinator: "Photography Club (placeholder)",
    rules: ["Photos must be shot on the event day", "No heavy post-processing", "One entry per participant"],
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=70&auto=format"
  },
  {
    id: "evt-06",
    name: "Business Idea Pitch",
    category: "Competition",
    date: "2026-10-02",
    time: "1:00 PM",
    venue: "Seminar Hall 1",
    seats: 18,
    seatsTotal: 40,
    description: "Pitch an original business idea to a panel in five minutes flat.",
    eligibility: "Individuals or teams of up to 3.",
    deadline: "2026-09-28",
    coordinator: "Dept. of Commerce (placeholder)",
    rules: ["5-minute pitch + 3-minute Q&A", "Slides optional, printed handouts allowed"],
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=70&auto=format"
  },
  {
    id: "evt-07",
    name: "Quiz Championship",
    category: "Competition",
    date: "2026-09-16",
    time: "3:00 PM",
    venue: "Seminar Hall 3",
    seats: 24,
    seatsTotal: 64,
    description: "General knowledge and current-affairs quiz, prelims followed by a live final.",
    eligibility: "Teams of 2.",
    deadline: "2026-09-14",
    coordinator: "Quiz Club (placeholder)",
    rules: ["Written prelim round", "Top 6 teams advance to the final"],
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=70&auto=format"
  },
  {
    id: "evt-08",
    name: "Coding Competition",
    category: "Technical",
    date: "2026-09-20",
    time: "10:30 AM",
    venue: "Computer Lab 1",
    seats: 8,
    seatsTotal: 90,
    description: "Timed algorithmic problem-solving round across three difficulty tiers.",
    eligibility: "Individual participation, any department.",
    deadline: "2026-09-17",
    coordinator: "Coding Club (placeholder)",
    rules: ["Language: C/C++/Java/Python", "No internet access during the round"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=70&auto=format"
  },
  {
    id: "evt-09",
    name: "Music & Dance Night",
    category: "Cultural",
    date: "2026-10-05",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    seats: 70,
    seatsTotal: 250,
    description: "An evening of solo and group performances closing out the fest week.",
    eligibility: "Auditions required — open call posted separately.",
    deadline: "2026-09-30",
    coordinator: "Cultural Committee (placeholder)",
    rules: ["Audition clip required at registration", "Performance slot confirmed after shortlisting"],
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=70&auto=format"
  },
  {
    id: "evt-10",
    name: "Career Development Workshop",
    category: "Seminar",
    date: "2026-09-24",
    time: "10:00 AM",
    venue: "Seminar Hall 2",
    seats: 65,
    seatsTotal: 100,
    description: "Resume clinics, mock interviews and a panel discussion with alumni guests.",
    eligibility: "Final and pre-final year students.",
    deadline: "2026-09-21",
    coordinator: "Placement Cell (placeholder)",
    rules: ["Bring an updated resume printout", "Business-casual attire suggested"],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=70&auto=format"
  }
];

const CATEGORY_CLASS = {
  Cultural: "badge-cultural", Technical: "badge-technical", Sports: "badge-sports",
  Workshop: "badge-workshop", Seminar: "badge-seminar", Competition: "badge-competition",
  "Club Events": "badge-club"
};

const GALLERY_DATA = [
  { cat: "Cultural", cap: "Alpha Cultural Fest — dance showcase (sample photo)", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=70&auto=format" },
  { cat: "Technical", cap: "CodeVerse Hackathon — build night (sample photo)", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=70&auto=format" },
  { cat: "Sports", cap: "Inter Department Sports Meet (sample photo)", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=70&auto=format" },
  { cat: "Workshops", cap: "Tech Innovators Workshop (sample photo)", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=70&auto=format" },
  { cat: "Campus Life", cap: "A quiet afternoon on campus (sample photo)", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=70&auto=format" },
  { cat: "Cultural", cap: "Music & Dance Night rehearsal (sample photo)", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=70&auto=format" },
  { cat: "Technical", cap: "Coding Competition in progress (sample photo)", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=70&auto=format" },
  { cat: "Campus Life", cap: "Between classes (sample photo)", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=70&auto=format" },
  { cat: "Workshops", cap: "Career Development Workshop (sample photo)", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&q=70&auto=format" },
  { cat: "Sports", cap: "Track events on the college ground (sample photo)", img: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=900&q=70&auto=format" },
  { cat: "Cultural", cap: "Open-mic evening (sample photo)", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=70&auto=format" },
  { cat: "Campus Life", cap: "Alpha Arts and Science College, Porur — campus grounds (sample photo)", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=70&auto=format" }
];

/* -----------------------------------------------------------------
   STORAGE HELPERS  (all demo persistence lives in localStorage)
   ----------------------------------------------------------------- */
const Store = {
  THEME: "alpha_theme",
  REGS: "alpha_registrations",
  PROFILE: "alpha_profile",
  get(key, fallback){
    try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  },
  set(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){ /* storage unavailable */ }
  }
};

function getRegistrations(){ return Store.get(Store.REGS, []); }
function saveRegistration(reg){
  const all = getRegistrations();
  all.unshift(reg);
  Store.set(Store.REGS, all);
  Store.set(Store.PROFILE, {
    name: reg.name, regNo: reg.regNo, department: reg.department, year: reg.year
  });
}
function generateRegId(){
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `ALPHA-2026-${digits}`;
}

/* -----------------------------------------------------------------
   TOASTS
   ----------------------------------------------------------------- */
function toast(message, type = "ok"){
  let stack = document.querySelector(".toast-stack");
  if(!stack){
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  const el = document.createElement("div");
  el.className = "toast" + (type === "error" ? " error" : "");
  el.innerHTML = `<span class="dot"></span><span>${message}</span>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 320);
  }, 3200);
}

/* -----------------------------------------------------------------
   THEME TOGGLE
   ----------------------------------------------------------------- */
function initTheme(){
  const saved = Store.get(Store.THEME, "dark");
  document.documentElement.setAttribute("data-theme", saved);
  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    updateThemeIcon(btn, saved);
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      Store.set(Store.THEME, next);
      document.querySelectorAll("[data-theme-toggle]").forEach(b => updateThemeIcon(b, next));
    });
  });
}
function updateThemeIcon(btn, theme){
  btn.textContent = theme === "dark" ? "☀" : "☾";
  btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

/* -----------------------------------------------------------------
   NAVBAR: sticky state, mobile menu, active link, search panel
   ----------------------------------------------------------------- */
function initNavbar(){
  const nav = document.querySelector(".navbar");
  if(!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  if(hamburger && links){
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      links.classList.remove("open");
    }));
  }

  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
    a.classList.toggle("active", a.dataset.nav === page);
  });

  const searchBtn = document.querySelector("[data-search-toggle]");
  const searchPanel = document.querySelector(".search-panel");
  if(searchBtn && searchPanel){
    searchBtn.addEventListener("click", () => {
      searchPanel.classList.toggle("open");
      if(searchPanel.classList.contains("open")) searchPanel.querySelector("input").focus();
    });
    const globalInput = searchPanel.querySelector("input");
    globalInput.addEventListener("keydown", e => {
      if(e.key === "Enter" && globalInput.value.trim()){
        window.location.href = `events.html?q=${encodeURIComponent(globalInput.value.trim())}`;
      }
      if(e.key === "Escape") searchPanel.classList.remove("open");
    });
  }
}

/* -----------------------------------------------------------------
   INTRO ANIMATION
   ----------------------------------------------------------------- */
function initIntro(){
  const intro = document.getElementById("intro");
  if(!intro) return;
  const word = document.getElementById("intro-word");
  const skip = intro.querySelector(".intro-skip");
  const finish = () => intro.classList.add("hide");
  const already = sessionStorage.getItem("alpha_intro_seen");
  if(already){ intro.classList.add("hide"); return; }

  const swapTimer = setTimeout(() => { if(word) word.textContent = "ALPHA EVENTS"; }, 900);
  const timer = setTimeout(() => { finish(); sessionStorage.setItem("alpha_intro_seen","1"); }, 2600);

  if(skip){
    skip.addEventListener("click", () => {
      clearTimeout(swapTimer);
      clearTimeout(timer);
      finish();
      sessionStorage.setItem("alpha_intro_seen","1");
    });
  }
}

/* -----------------------------------------------------------------
   SCROLL REVEAL
   ----------------------------------------------------------------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal-up, .event-card, .about-card");
  if(!("IntersectionObserver" in window)){
    items.forEach(i => { i.classList.add("in"); i.classList.add("reveal"); });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        entry.target.classList.add("reveal");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

/* -----------------------------------------------------------------
   EVENT CARD RENDERING (home preview + events page)
   ----------------------------------------------------------------- */
function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
function seatBadge(ev){
  if(ev.seats <= 0) return `<span class="badge badge-full">Full</span>`;
  if(ev.seats <= ev.seatsTotal * 0.15) return `<span class="badge badge-low">${ev.seats} left</span>`;
  return `<span class="badge badge-ok">${ev.seats} open</span>`;
}
function eventCardHTML(ev){
  const catClass = CATEGORY_CLASS[ev.category] || "";
  return `
  <article class="event-card" data-id="${ev.id}" data-category="${ev.category}" data-date="${ev.date}">
    <div class="event-media">
      <img src="${ev.img}" alt="${ev.name}" loading="lazy">
      <span class="badge ${catClass}">${ev.category}</span>
    </div>
    <div class="event-body">
      <h3>${ev.name}</h3>
      <p>${ev.description}</p>
      <ul class="event-facts">
        <li>📅 ${formatDate(ev.date)} · ${ev.time}</li>
        <li>📍 ${ev.venue}</li>
      </ul>
    </div>
    <div class="event-perf"></div>
    <div class="event-foot">
      ${seatBadge(ev)}
      <div style="display:flex; gap:8px;">
        <button class="btn btn-outline btn-sm" data-view="${ev.id}">View Details</button>
        <a class="btn btn-primary btn-sm" href="register.html?event=${ev.id}">Register</a>
      </div>
    </div>
  </article>`;
}

function renderHomePreview(){
  const grid = document.querySelector("[data-home-events]");
  if(!grid) return;
  const featured = ALPHA_EVENTS.slice(0, 3);
  grid.innerHTML = featured.map(eventCardHTML).join("");
  bindCardModals(grid);
  initReveal();
}

function renderEventsPage(){
  const grid = document.querySelector("[data-events-grid]");
  if(!grid) return;

  const searchInput = document.querySelector("[data-events-search]");
  const sortSelect = document.querySelector("[data-events-sort]");
  const dateInput = document.querySelector("[data-events-date]");
  const chips = document.querySelectorAll("[data-category-chip]");
  const noResults = document.querySelector("[data-no-results]");

  let state = { category: "All", query: "", date: "", sort: "date-asc" };

  const params = new URLSearchParams(window.location.search);
  if(params.get("q")) state.query = params.get("q");
  if(params.get("category")) state.category = params.get("category");

  function apply(){
    let list = ALPHA_EVENTS.slice();
    if(state.category !== "All") list = list.filter(e => e.category === state.category);
    if(state.query){
      const q = state.query.toLowerCase();
      list = list.filter(e => e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q));
    }
    if(state.date) list = list.filter(e => e.date === state.date);
    list.sort((a,b) => {
      if(state.sort === "date-asc") return a.date.localeCompare(b.date);
      if(state.sort === "date-desc") return b.date.localeCompare(a.date);
      if(state.sort === "name-asc") return a.name.localeCompare(b.name);
      if(state.sort === "seats-asc") return a.seats - b.seats;
      return 0;
    });

    grid.innerHTML = list.map(eventCardHTML).join("");
    noResults.classList.toggle("show", list.length === 0);
    bindCardModals(grid);
    requestAnimationFrame(initReveal);
  }

  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.dataset.categoryChip;
    apply();
  }));
  if(state.category !== "All"){
    chips.forEach(c => c.classList.toggle("active", c.dataset.categoryChip === state.category));
  }
  if(searchInput){
    searchInput.value = state.query;
    searchInput.addEventListener("input", () => { state.query = searchInput.value.trim(); apply(); });
  }
  if(sortSelect) sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; apply(); });
  if(dateInput) dateInput.addEventListener("change", () => { state.date = dateInput.value; apply(); });

  apply();
}

/* -----------------------------------------------------------------
   EVENT DETAILS MODAL
   ----------------------------------------------------------------- */
function bindCardModals(scope){
  scope.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => openEventModal(btn.dataset.view));
  });
}
function openEventModal(id){
  const ev = ALPHA_EVENTS.find(e => e.id === id);
  if(!ev) return;
  const overlay = document.getElementById("event-modal");
  if(!overlay) return;
  overlay.querySelector("[data-modal-img]").src = ev.img;
  overlay.querySelector("[data-modal-img]").alt = ev.name;
  overlay.querySelector("[data-modal-category]").textContent = ev.category;
  overlay.querySelector("[data-modal-category]").className = "badge " + (CATEGORY_CLASS[ev.category] || "");
  overlay.querySelector("[data-modal-title]").textContent = ev.name;
  overlay.querySelector("[data-modal-desc]").textContent = ev.description;
  overlay.querySelector("[data-modal-date]").textContent = formatDate(ev.date) + " · " + ev.time;
  overlay.querySelector("[data-modal-venue]").textContent = ev.venue;
  overlay.querySelector("[data-modal-eligibility]").textContent = ev.eligibility;
  overlay.querySelector("[data-modal-deadline]").textContent = formatDate(ev.deadline);
  overlay.querySelector("[data-modal-coordinator]").textContent = ev.coordinator;
  overlay.querySelector("[data-modal-seats]").textContent = ev.seats > 0 ? `${ev.seats} of ${ev.seatsTotal} seats available` : "Registrations full";
  overlay.querySelector("[data-modal-rules]").innerHTML = ev.rules.map(r => `<li>${r}</li>`).join("");
  overlay.querySelector("[data-modal-register]").href = `register.html?event=${ev.id}`;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function initModal(){
  const overlay = document.getElementById("event-modal");
  if(!overlay) return;
  const close = () => { overlay.classList.remove("open"); document.body.style.overflow = ""; };
  overlay.querySelector("[data-modal-close]").addEventListener("click", close);
  overlay.addEventListener("click", e => { if(e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
}

/* -----------------------------------------------------------------
   MULTI-STEP REGISTRATION FORM
   ----------------------------------------------------------------- */
function initRegisterForm(){
  const form = document.querySelector("[data-register-form]");
  if(!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const nodes = Array.from(document.querySelectorAll(".step-node"));
  let current = 0;

  const eventSelect = form.querySelector("[name=eventSelect]");
  if(eventSelect){
    ALPHA_EVENTS.forEach(ev => {
      const opt = document.createElement("option");
      opt.value = ev.id;
      opt.textContent = `${ev.name} — ${formatDate(ev.date)}`;
      eventSelect.appendChild(opt);
    });
    const params = new URLSearchParams(window.location.search);
    const preselect = params.get("event");
    if(preselect) eventSelect.value = preselect;
    eventSelect.addEventListener("change", syncEventCategory);
    syncEventCategory();
  }
  function syncEventCategory(){
    const ev = ALPHA_EVENTS.find(e => e.id === eventSelect.value);
    const catField = form.querySelector("[name=eventCategory]");
    if(ev && catField) catField.value = ev.category;
  }

  function showStep(i){
    steps.forEach((s, idx) => s.classList.toggle("active", idx === i));
    nodes.forEach((n, idx) => {
      n.classList.toggle("active", idx === i);
      n.classList.toggle("done", idx < i);
    });
    if(i === steps.length - 1) buildReview();
    form.closest(".form-shell").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validateStep(i){
    const fields = steps[i].querySelectorAll("[required]");
    let valid = true;
    fields.forEach(field => {
      const wrap = field.closest(".field");
      let ok = field.value.trim() !== "";
      if(field.type === "email" && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      if(field.type === "tel" && ok) ok = /^[0-9]{10}$/.test(field.value.trim().replace(/\D/g,""));
      wrap.classList.toggle("invalid", !ok);
      if(!ok) valid = false;
    });
    if(!valid) toast("Please fix the highlighted fields", "error");
    return valid;
  }

  form.querySelectorAll("[data-next]").forEach(btn => {
    btn.addEventListener("click", () => {
      if(!validateStep(current)) return;
      current = Math.min(current + 1, steps.length - 1);
      showStep(current);
    });
  });
  form.querySelectorAll("[data-back]").forEach(btn => {
    btn.addEventListener("click", () => {
      current = Math.max(current - 1, 0);
      showStep(current);
    });
  });

  function buildReview(){
    const data = collectData();
    const box = form.querySelector("[data-review]");
    const ev = ALPHA_EVENTS.find(e => e.id === data.eventSelect);
    box.innerHTML = `
      <div class="review-row"><span>Full Name</span><b>${data.fullName}</b></div>
      <div class="review-row"><span>Register Number</span><b>${data.regNumber}</b></div>
      <div class="review-row"><span>Department</span><b>${data.department}</b></div>
      <div class="review-row"><span>Year</span><b>${data.year}</b></div>
      <div class="review-row"><span>Email</span><b>${data.email}</b></div>
      <div class="review-row"><span>Phone</span><b>${data.phone}</b></div>
      <div class="review-row"><span>Event</span><b>${ev ? ev.name : "—"}</b></div>
      <div class="review-row"><span>Participation</span><b>${data.participationType}</b></div>
      <div class="review-row"><span>Skills / Interests</span><b>${data.skills || "—"}</b></div>
      <div class="review-row"><span>Emergency Contact</span><b>${data.emergency || "—"}</b></div>
    `;
  }

  function collectData(){
    const fd = new FormData(form);
    const data = {};
    fd.forEach((v,k) => data[k] = v.toString().trim());
    return data;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    if(!validateStep(current)) return;
    const data = collectData();
    const ev = ALPHA_EVENTS.find(ev => ev.id === data.eventSelect);
    const reg = {
      id: generateRegId(),
      name: data.fullName,
      regNo: data.regNumber,
      department: data.department,
      year: data.year,
      email: data.email,
      phone: data.phone,
      eventId: data.eventSelect,
      eventName: ev ? ev.name : "—",
      eventDate: ev ? ev.date : "",
      eventVenue: ev ? ev.venue : "",
      participationType: data.participationType,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };
    saveRegistration(reg);
    showSuccess(reg);
  });

  function showSuccess(reg){
    form.closest(".form-shell").style.display = "none";
    const success = document.querySelector("[data-success]");
    success.style.display = "block";
    success.querySelector("[data-success-name]").textContent = reg.name;
    success.querySelector("[data-success-event]").textContent = reg.eventName;
    success.querySelector("[data-success-date]").textContent = reg.eventDate ? formatDate(reg.eventDate) : "—";
    success.querySelector("[data-success-id]").textContent = reg.id;
    success.querySelector("[data-download]").addEventListener("click", () => downloadConfirmation(reg));
    toast("Registration successful");
  }

  showStep(0);
}

function downloadConfirmation(reg){
  const text = [
    "ALPHA EVENTS — Registration Confirmation",
    "Alpha Arts and Science College, Porur",
    "----------------------------------------",
    `Registration ID : ${reg.id}`,
    `Student Name    : ${reg.name}`,
    `Register Number : ${reg.regNo}`,
    `Department      : ${reg.department}`,
    `Year            : ${reg.year}`,
    `Event           : ${reg.eventName}`,
    `Date            : ${reg.eventDate ? formatDate(reg.eventDate) : "—"}`,
    `Venue           : ${reg.eventVenue || "—"}`,
    `Status          : ${reg.status}`,
    "----------------------------------------",
    "This is a demo confirmation generated in your browser.",
    "It is not an official college record."
  ].join("\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${reg.id}-confirmation.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

/* -----------------------------------------------------------------
   PROFILE PAGE
   ----------------------------------------------------------------- */
function initProfile(){
  const root = document.querySelector("[data-profile-root]");
  if(!root) return;
  const profile = Store.get(Store.PROFILE, null);
  const regs = getRegistrations();

  if(!profile || regs.length === 0){
    root.innerHTML = `
      <div class="empty-state">
        <div class="icon">🎫</div>
        <h3>No registrations yet</h3>
        <p class="text-muted" style="margin-top:8px;">Register for an event and your student pass will show up here.</p>
        <a href="events.html" class="btn btn-primary" style="margin-top:20px;">Browse Events</a>
      </div>`;
    return;
  }

  document.querySelector("[data-profile-name]").textContent = profile.name;
  document.querySelector("[data-profile-reg]").textContent = profile.regNo;
  document.querySelector("[data-profile-dept]").textContent = profile.department;
  document.querySelector("[data-profile-year]").textContent = profile.year;
  document.querySelector("[data-profile-initial]").textContent = (profile.name || "A").trim().charAt(0).toUpperCase();

  const today = new Date().toISOString().slice(0,10);
  const upcoming = regs.filter(r => r.eventDate >= today);
  const completed = regs.filter(r => r.eventDate < today);

  renderRegList("[data-regs-all]", regs);
  renderRegList("[data-regs-upcoming]", upcoming, "No upcoming events registered.");
  renderRegList("[data-regs-completed]", completed, "No completed events yet.");

  const tabs = document.querySelectorAll("[data-profile-tab]");
  const panels = document.querySelectorAll("[data-profile-panel]");
  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    panels.forEach(p => p.style.display = p.dataset.profilePanel === tab.dataset.profileTab ? "block" : "none");
  }));
}
function renderRegList(selector, list, emptyMsg = "Nothing here yet."){
  const el = document.querySelector(selector);
  if(!el) return;
  if(list.length === 0){
    el.innerHTML = `<div class="empty-state"><div class="icon">📭</div><p>${emptyMsg}</p></div>`;
    return;
  }
  el.innerHTML = list.map(r => `
    <div class="reg-card">
      <div>
        <h4>${r.eventName}</h4>
        <div class="meta">
          <span>📅 ${r.eventDate ? formatDate(r.eventDate) : "—"}</span>
          <span>📍 ${r.eventVenue || "—"}</span>
          <span class="badge badge-ok">${r.status}</span>
        </div>
      </div>
      <div class="pass-id">${r.id}</div>
    </div>
  `).join("");
}

/* -----------------------------------------------------------------
   GALLERY + LIGHTBOX
   ----------------------------------------------------------------- */
function initGallery(){
  const grid = document.querySelector("[data-gallery-grid]");
  if(!grid) return;
  let activeList = GALLERY_DATA;
  let activeIndex = 0;

  function render(list){
    grid.innerHTML = list.map((g, i) => `
      <div class="gallery-item reveal-up" data-index="${i}">
        <img src="${g.img}" alt="${g.cap}" loading="lazy">
        <div class="cap">${g.cap}</div>
      </div>
    `).join("");
    grid.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => openLightbox(list, parseInt(item.dataset.index)));
    });
    initReveal();
  }

  const chips = document.querySelectorAll("[data-gallery-chip]");
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const cat = chip.dataset.galleryChip;
    activeList = cat === "All" ? GALLERY_DATA : GALLERY_DATA.filter(g => g.cat === cat);
    render(activeList);
  }));

  render(activeList);

  const lightbox = document.querySelector(".lightbox");
  function openLightbox(list, index){
    activeList = list; activeIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function updateLightbox(){
    const item = activeList[activeIndex];
    lightbox.querySelector("img").src = item.img;
    lightbox.querySelector("img").alt = item.cap;
    lightbox.querySelector(".lightbox-cap").textContent = item.cap;
  }
  if(lightbox){
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => {
      lightbox.classList.remove("open"); document.body.style.overflow = "";
    });
    lightbox.querySelector(".lightbox-prev").addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + activeList.length) % activeList.length; updateLightbox();
    });
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % activeList.length; updateLightbox();
    });
    lightbox.addEventListener("click", e => { if(e.target === lightbox){ lightbox.classList.remove("open"); document.body.style.overflow=""; } });
    document.addEventListener("keydown", e => {
      if(!lightbox.classList.contains("open")) return;
      if(e.key === "Escape"){ lightbox.classList.remove("open"); document.body.style.overflow=""; }
      if(e.key === "ArrowLeft") lightbox.querySelector(".lightbox-prev").click();
      if(e.key === "ArrowRight") lightbox.querySelector(".lightbox-next").click();
    });
  }
}

/* -----------------------------------------------------------------
   CONTACT FORM (demo submit)
   ----------------------------------------------------------------- */
function initContactForm(){
  const form = document.querySelector("[data-contact-form]");
  if(!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fields = form.querySelectorAll("[required]");
    let valid = true;
    fields.forEach(f => {
      const ok = f.value.trim() !== "" && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
      f.closest(".field").classList.toggle("invalid", !ok);
      if(!ok) valid = false;
    });
    if(!valid){ toast("Please complete the form correctly", "error"); return; }
    document.querySelector("[data-contact-success]").style.display = "block";
    form.style.display = "none";
    toast("Message sent (demo only)");
  });
}

/* -----------------------------------------------------------------
   INIT
   ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initIntro();
  initTheme();
  initNavbar();
  initModal();
  renderHomePreview();
  renderEventsPage();
  initRegisterForm();
  initProfile();
  initGallery();
  initContactForm();
  initReveal();
});
