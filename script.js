const COMPANIES = [
  { id:'c1',  name:'Cophild ICT Center',        industry:'Tech',               location:'Lagos',      address:'22, Oba Akran Avenue, Ikeja, Lagos',                       slots:20, slotsLeft:10,   duration:'6 Months', deadline:'2026-05-04',  image:'images/cophild.png',               skills:['Web Development','Networking','Cybersecurity']},
  { id:'c2',  name:'GTBank',                    industry:'Banking & Finance',  location:'Bauchi',     address:'Akin Adesola St, Bauchi',                                  slots:8,  slotsLeft:8,    duration:'6 Months', deadline:'2026-07-30',  image:'images/gtb.png',                   skills:['Management', 'IT']},
  { id:'c3',  name:'Shell Nigeria',             industry:'Oil & Gas',          location:'Rivers',     address:'21/22 Marina Road, Port Harcourt, Rivers',                 slots:4,  slotsLeft:3,    duration:'3 Months', deadline:'2026-07-15',  image:'images/shell.png',                 skills:['Engineering','Physical Sciences']},
  { id:'c4',  name:'Flutterwave',               industry:'Tech',               location:'Plateau',    address:'22 Kerishimma, Jos, Plateau',                              slots:6,  slotsLeft:6,    duration:'6 Months', deadline:'2026-07-20',  image:'images/Flutterwave-Symbol.png',    skills:['Sciences', 'Management']},
  { id:'c5',  name:'Lagoon Hospital',           industry:'Health',             location:'Lagos',      address:'1 Lagoon Hospital Rd, Apapa, Lagos',                       slots:10, slotsLeft:5,    duration:'4 Months', deadline:'2026-03-17',  image:'images/lagoon.png',                skills:['Medical Sciences','IT']},
  { id:'c6',  name:'AIT News',                  industry:'Media',              location:'Lagos',      address:'20 Ogba-Agege Rd, Ikeja, Lagos',                           slots:4,  slotsLeft:4,    duration:'3 Months', deadline:'2026-08-05',  image:'images/ait.png',                   skills:['Mass Communication','IT','Journalism'] },
  { id:'c7',  name:'Justrite',                  industry:'Retail',             location:'Ogun',       address:'KM 14, Idiroko Road, Ota, Ogun',                           slots:20, slotsLeft:14,   duration:'3 Months', deadline:'2026-04-05',  image:'images/Justrite new logo.jpg',     skills:['Management','HSE','IT'] },
  { id:'c8',  name:'Access Bank',               industry:'Banking & Finance',  location:'Abuja',      address:'Plot 1665, Oyin Jolayemi St, Abuja',                       slots:10, slotsLeft:7,    duration:'6 Months', deadline:'2026-08-10',  image:'images/access.png',                skills:['Management', 'IT'] },      
  { id:'c9',  name:'Okomu Oil',                 industry:'Manufacturing',      location:'Edo',        address:'Okomu-Udo, Ovia South-West LGA, Benin City, Edo',          slots:15, slotsLeft:5,    duration:'6 Months', deadline:'2026-08-05',  image:'images/Okomu.png',                 skills:['Engineering', 'Physical Sciences'] },
  { id:'c10', name:'Dangote',                   industry:'Manufacturing',      location:'Adamawa',    address:'1 Alfred Rewane Road, Yola, Adamawa',                      slots:10, slotsLeft:8,    duration:'6 Months', deadline:'2026-08-03',  image:'images/dangote.png',               skills:['Engineering', 'Management'] },
  { id:'c11', name:'Seplat',                    industry:'Oil & Gas',          location:'Oyo',        address:'2 Lawanson Road, Eleyele, Oyo',                            slots:2,  slotsLeft:9,    duration:'3 Months', deadline:'2026-08-04',  image:'images/Seplat.png',                skills:['Management', 'Engineering'] },
  { id:'c12', name:'Seven-Up',                  industry:'Manufacturing',      location:'Abuja',      address:'2 Julius Berger Drive, Wuse II, Abuja',                    slots:2,  slotsLeft:6,    duration:'6 Months', deadline:'2026-03-20',  image:'images/7up.png',                   skills:['Sciences', 'Engineering'] },
  { id:'c13', name:'KEDI Healthcare',           industry:'Health',             location:'Kwara',      address:'Prince Bisi Oyedeji Crescent, Ilorin',                     slots:7,  slotsLeft:1,    duration:'6 Months', deadline:'2026-03-20',  image:'images/kedi.png',                  skills:['Medical Sciences','Agriculture'] },
  { id:'c14', name:'Cworth Energy',             industry:'Engineering',        location:'Abuja',      address:'2 Julius Berger Drive, Wuse II, Abuja',                    slots:8,  slotsLeft:6,    duration:'6 Months', deadline:'2026-08-20',  image:'images/cworth.png',                skills:['Management', 'Sciences'] },
  { id:'c15', name:'NITDA',                     industry:'Tech',               location:'Abuja',      address:'2 Julius Berger Drive, Wuse II, Abuja',                    slots:6,  slotsLeft:20,   duration:'4 Months', deadline:'2026-08-20',  image:'images/NITDA.png',                 skills:['Mass Communication', 'Journalism','Art'] },
  { id:'c16', name:'Guinness Nigeria',          industry:'Manufacturing',      location:'Akwa-Ibom',  address:'Cocoa Industries Road, Uyo, Akwa-Ibom',                    slots:5,  slotsLeft:14,   duration:'6 Months', deadline:'2026-06-22',  image:'images/guinness.png',              skills:['Engineering', 'Sciences']},
  { id:'c17', name:'Intafact Beverages Ltd',    industry:'Manufacturing',      location:'Anambra',    address:'FCC Road, Onitsha-Ado, Anambra',                           slots:10, slotsLeft:4,    duration:'6 Months', deadline:'2026-06-28',  image:'images/intafact.png',              skills:['Management', 'Sciences'] },
  { id:'c18', name:'Bokku',                     industry:'Retail',             location:'Osun',       address:'KM 14, Idiroko Road, Ota, Osun',                           slots:6,  slotsLeft:3,    duration:'3 Months', deadline:'2026-04-05',  image:'images/bokku.png',                 skills:['Management','Art','IT'] },
  { id:'c19', name:'Julius Berger',             industry:'Engineering',        location:'Abuja',      address:'2 Julius Berger Drive, Wuse II, Abuja',                    slots:9,  slotsLeft:6,    duration:'6 Months', deadline:'2026-04-20',  image:'images/juliusberger.png',          skills:['Engineering', 'Management']},
  { id:'c20', name:'Nestle',                    industry:'Manufacturing',      location:'Ondo',       address:'Industrial Estate, Agbara, Ondo',                          slots:8,  slotsLeft:8,    duration:'6 Months', deadline:'2026-05-31',  image:'images/nestle.png',                skills:['Sciences', 'Engineering']},
  { id:'c21', name:'Abia Tech Hub',             industry:'Tech',               location:'Abia',       address:'6 Warri St, Umuahia, Abia',                                slots:15, slotsLeft:8,    duration:'3 Months', deadline:'2026-07-23',  image:'images/abiatech.png',              skills:['HTML/CSS', 'Javascript', 'Bootstrap'] },
  { id:'c22', name:'Family Care Hospital',      industry:'Health',             location:'Bayelsa',    address:'108 AIT/Elebele road, Opolo, Yenagoa, Bayelsa',            slots:10, slotsLeft:5,    duration:'4 Months', deadline:'2026-03-17',  image:'images/famcare.jpg',               skills:['Medical Sciences','IT']},
  { id:'c23', name:'Debiro Agro Chemicals',     industry:'Agriculture',        location:'Borno',      address:'Maiduguri-Sambisa Road, Borno',                            slots:10, slotsLeft:5,    duration:'3 Months', deadline:'2026-03-17',  image:'images/debiro.jpg',                skills:['Medical Sciences','IT']},
  { id:'c24', name:'Aplombtainment Media',      industry:'Media',              location:'Ebonyi',     address:'4 Calabar Street, Off Waterworks Road, Abakaliki, Ebonyi', slots:15, slotsLeft:5,    duration:'3 Months', deadline:'2026-08-05',  image:'images/aplomedia.webp',            skills:['Mass Communication', 'Arts'] },
  { id:'c25', name:'Ecomarine Group',           industry:'Engineering',        location:'Cross-River',address:'NPA Complex, Harbour Road, Calabar, Cross River State',    slots:15, slotsLeft:5,    duration:'3 Months', deadline:'2026-07-05',  image:'images/ecm.webp',                  skills:['Engineering', 'Physical Sciences'] },
  { id:'c26', name:'Olam Nigeria Limited',      industry:'Construction',       location:'Ekiti',      address:'2,New Local Government Road, Ekiti',                       slots:15, slotsLeft:5,    duration:'6 Months', deadline:'2026-08-05',  image:'images/olam.jpg',                  skills:['Engineering', 'Physical Sciences'] },
  { id:'c27', name:'Beautiful Colours',         industry:'Art',                location:'Katsina',    address:'126 Yahaya Madaki Way, Katsina',                           slots:15, slotsLeft:5,    duration:'3 Months', deadline:'2026-08-05',  image:'images/beautiful.webp',            skills:['Arts', 'IT'] },
  { id:'c28', name:'Guinness Nigeria',          industry:'Manufacturing',      location:'Kebbi',      address:'Birin-Kebbi Road, Kebbi',                                  slots:5,  slotsLeft:14,   duration:'6 Months', deadline:'2026-06-22',  image:'images/guinness.png',              skills:['Engineering', 'Sciences']},
  { id:'c29', name:'Dangote',                   industry:'Manufacturing',      location:'Nasarawa',   address:'1 Alfred Rewane Road, Yola, Nasarawa',                     slots:10, slotsLeft:8,    duration:'6 Months', deadline:'2026-08-03',  image:'images/dangote.png',               skills:['Engineering', 'Management'] },
  { id:'c30', name:'Seplat',                    industry:'Oil & Gas',          location:'Niger',      address:'2 Lawanson Road, Minna, Niger',                            slots:2,  slotsLeft:9,    duration:'3 Months', deadline:'2026-08-04',  image:'images/Seplat.png',                skills:['Management', 'Engineering'] },
  { id:'c31', name:'Shell Nigeria',             industry:'Oil & Gas',          location:'Delta',      address:'Effurun Refinery Road, Warri, Delta',                      slots:4,  slotsLeft:3,    duration:'6 Months', deadline:'2026-07-15',  image:'images/shell.png',                 skills:['Engineering','Physical Sciences']},
  { id:'c32', name:'Cworth Energy',             industry:'Engineering',        location:'Benue',      address:'2 Julius Berger Drive, Makurdi, Benue',                    slots:8,  slotsLeft:6,    duration:'6 Months', deadline:'2026-08-20',  image:'images/cworth.png',                skills:['Management', 'Sciences'] },
  { id:'c33', name:'Seven-Up',                  industry:'Manufacturing',      location:'Kogi',       address:'Afuze-Lokoja Road, Lokoja, Kogi',                          slots:2,  slotsLeft:6,    duration:'6 Months', deadline:'2026-03-20',  image:'images/7up.png',                   skills:['Sciences', 'Engineering'] },
  { id:'c34', name:'Bokku',                     industry:'Retail',             location:'Enugu',      address:'KM 10, Aba Road, Enugu',                                   slots:6,  slotsLeft:3,    duration:'3 Months', deadline:'2026-04-05',  image:'images/bokku.png',                 skills:['Management','Art','IT'] },
  { id:'c35', name:'NITDA',                     industry:'Tech',               location:'Jigawa',     address:'Dutse Industrial Estate, Dutse, Jigawa',                   slots:6,  slotsLeft:20,   duration:'4 Months', deadline:'2026-08-20',  image:'images/NITDA.png',                 skills:['Mass Communication', 'Journalism','Art'] },
  { id:'c36', name:'Intafact Beverages Ltd',    industry:'Manufacturing',      location:'Kaduna',     address:'Muhammadu Buhari Layout Kaduna',                           slots:10, slotsLeft:4,    duration:'6 Months', deadline:'2026-06-28',  image:'images/intafact.png',              skills:['Management', 'Sciences'] },
  { id:'c37', name:'Dangote',                   industry:'Manufacturing',      location:'Kano',       address:'1 Alfred Rewane Road, Kano',                               slots:10, slotsLeft:8,    duration:'6 Months', deadline:'2026-08-03',  image:'images/dangote.png',               skills:['Engineering', 'Management'] },
  { id:'c38', name:'Family Care Hospital',      industry:'Health',             location:'Benue',      address:'108 AIT/Epobele road, Opola, Benue',                       slots:10, slotsLeft:5,    duration:'4 Months', deadline:'2026-03-17',  image:'images/famcare.jpg',               skills:['Medical Sciences','IT']},
  { id:'c39', name:'Dulux Colours',             industry:'Art',                location:'Imo',        address:'126 Obi Cubana Road, Owerri, Imo',                         slots:15, slotsLeft:5,    duration:'3 Months', deadline:'2026-08-05',  image:'images/beautiful.webp',            skills:['Arts', 'IT'] },
  { id:'c40', name:'Guinness Nigeria',          industry:'Manufacturing',      location:'Sokoto',     address:'Coal Industries Road, Sokoto',                             slots:5,  slotsLeft:14,   duration:'6 Months', deadline:'2026-06-22',  image:'images/guinness.png',              skills:['Engineering', 'Sciences']},
  { id:'c41', name:'Debiro Agro Chemicals',     industry:'Agriculture',        location:'Taraba',     address:'Maiduguri-Jalingo Road, Jalingo, Taraba',                  slots:10, slotsLeft:5,    duration:'3 Months', deadline:'2026-03-17',  image:'images/debiro.jpg',                skills:['Medical Sciences','IT']},
  { id:'c42', name:'Flutterwave',               industry:'Tech',               location:'Yobe',       address:'22 Kerishimma, Damaturu, Yobe',                            slots:6,  slotsLeft:6,    duration:'6 Months', deadline:'2026-07-20',  image:'images/Flutterwave-Symbol.png',    skills:['Sciences', 'Management']},

];

/* LOCAL STORAGE */
function lsGet(k, d) {
  const v = localStorage.getItem(k);
  if (v === null) return d;
  try { return JSON.parse(v); } catch(e) { return d; }
}
function lsSet(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

/* INIT */
(function() {
  lsSet('ni_cos', COMPANIES);
  if (!lsGet('ni_stu', null)) lsSet('ni_stu', []);
  if (!lsGet('ni_app', null)) lsSet('ni_app', []);
})();

/*NAVIGATION*/
function goTo(page) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav-links button').forEach(function(b) { b.classList.remove('active'); });
  let nb = document.getElementById('nb-' + page);
  if (nb) nb.classList.add('active');
  if (page === 'home')      loadHome();
  if (page === 'browse')    renderBrowse();
  if (page === 'dashboard') openDash();
}


/*HAMBURGER*/ 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function(){
  navMenu.classList.toggle("active");
});

//Close the menu when a link is clicked
document.querySelectorAll(".nav-menu button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
  });
}); 

/*HOME*/
function loadHome() {
  document.getElementById('h-stu').textContent = lsGet('ni_stu', []).length;
  document.getElementById('h-app').textContent = lsGet('ni_app', []).length;
  renderFeatured();
}

function mkLogo(c, size) {
  size = size || 46;
  return '<div class="co-logo" style="width:'+size+'px;height:'+size+'px;">' +
    '<img src="'+c.image+'" alt="'+c.logo+'" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
    '<div class="co-fb" style="background:'+c.color+';font-size:.65rem;font-weight:800;color:white;border-radius:10px;width:100%;height:100%;display:none;align-items:center;justify-content:center;">'+c.logo+'</div>' +
  '</div>';
}

function renderFeatured() {
  let cos = lsGet('ni_cos', []).slice(0, 6);
  document.getElementById('feat-grid').innerHTML = cos.map(function(c) {
    return '<div class="co-card">' +
      '<div class="co-card-head">' + mkLogo(c, 46) +
        '<div><div class="co-name">'+c.name+'</div><div class="co-sector">'+c.industry+' · '+c.location+'</div></div>' +
      '</div>' +
      // '<div class="tags">'+tagsHtml(c.skills.slice(0,3))+'</div>' +
      '<div class="co-card-footer">' + slBadge(c.slotsLeft) +
        '<button class="btn-green" style="font-size:.74rem;padding:6px 14px;" onclick="goTo(\'login\')">Apply</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

/*BROWSE */
function renderBrowse() {
  let q   = (document.getElementById('q-s').value || '').toLowerCase();
  let lo  = document.getElementById('q-l').value;
  let ind = document.getElementById('q-i').value;
  let s   = lsGet('ni_cur', null);
  let cos = lsGet('ni_cos', []);
  let applied = lsGet('ni_app', [])
    .filter(function(a) { return s && a.sid === s.id; })
    .map(function(a) { return a.cid; });

  let tipEl = document.getElementById('b-tip');
  if (s && s.location && !lo) {
    cos = cos.slice().sort(function(a, b) {
      return (a.location === s.location ? 0 : 1) - (b.location === s.location ? 0 : 1);
    });
    tipEl.style.display = 'block';
    tipEl.textContent = '📍 Showing companies near ' + s.location + ' first.';
  } else {
    tipEl.style.display = 'none';
  }

  let res = cos.filter(function(c) {
    let mq = !q   || c.name.toLowerCase().includes(q) || c.skills.join(' ').toLowerCase().includes(q);
    let ml = !lo  || c.location === lo;
    let mi = !ind || c.industry === ind;
    return mq && ml && mi;
  });

  document.getElementById('b-label').textContent = 'Showing ' + res.length + ' result(s)';

  let g = document.getElementById('b-grid');
  if (!res.length) {
    g.innerHTML = '<div class="empty-state" style="grid-column:1/-1;"><span class="empty-icon">🔍</span><h5>No companies found</h5><p>Try different search terms or clear the filters.</p></div>';
    return;
  }

  g.innerHTML = res.map(function(c) {
    let done  = applied.includes(c.id);
    let full  = c.slotsLeft <= 0;
    let days  = daysLeft(c.deadline);
    let skillTags = (c.skills||[]).map(function(sk) { return '<span class="tag">'+sk+'</span>'; }).join('');

    return '<div class="co-card">' +
      '<div class="co-card-head">' + mkLogo(c, 46) +
        '<div><div class="co-name">'+c.name+'</div><div class="co-sector">'+c.industry+' · '+c.location+'</div></div>' +
      '</div>' +
      '<div class="tags">' + skillTags + '</div>' +
      '<div style="font-size:.75rem;color:var(--text-mid);margin-bottom:4px;">⏱ '+c.duration+' &nbsp;·&nbsp; '+slBadge(c.slotsLeft)+'</div>' +
      '<div class="dl-txt">'+dlText(days)+'</div>' +
      '<div style="display:flex;gap:8px;margin-top:12px;">' +
        '<button class="btn-outline" style="font-size:.74rem;padding:6px 14px;" onclick="openModal(\''+c.id+'\')">Details</button>' +
        (done
          ? '<span style="background:#e8f8f0;color:#136e3f;border-radius:7px;padding:6px 14px;font-size:.74rem;font-weight:600;">✓ Applied</span>'
          : full
          ? '<span style="background:var(--gray-bg);color:var(--text-light);border-radius:7px;padding:6px 14px;font-size:.74rem;font-weight:600;">Full</span>'
          : '<button class="btn-green" style="font-size:.74rem;padding:6px 14px;" onclick="openModal(\''+c.id+'\')">Apply Now</button>'
        ) +
      '</div>' +
    '</div>';
  }).join('');
}

function clearFilters() {
  document.getElementById('q-s').value = '';
  document.getElementById('q-l').value = '';
  document.getElementById('q-i').value = '';
  renderBrowse();
}

/*MODAL*/
function openModal(cid) {
  let s = lsGet('ni_cur', null);
  if (!s) { showToast('Please log in first to apply.', true); setTimeout(function() { goTo('login'); }, 1400); return; }
  let c = lsGet('ni_cos', []).find(function(x) { return x.id === cid; });
  if (!c) return;
  document.getElementById('m-title').textContent = c.name;
  document.getElementById('m-sub').textContent   = c.industry + ' · ' + c.location + ' · ' + c.address;
  document.getElementById('a-cid').value    = c.id;
  document.getElementById('a-name').value   = s.name;
  document.getElementById('a-email').value  = s.email;
  document.getElementById('a-school').value = s.school + ' — ' + s.dept;
  document.getElementById('a-cover').value  = '';
  document.getElementById('applyModal').classList.add('open');
}
function closeModal() { document.getElementById('applyModal').classList.remove('open'); }
document.getElementById('applyModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/*SUBMIT APPLICATION */
function submitApply(e) {
  e.preventDefault();
  let s     = lsGet('ni_cur', null); if (!s) return;
  let cid   = document.getElementById('a-cid').value;
  let cover = document.getElementById('a-cover').value.trim();
  if (!cover) { showToast('Please write a brief cover letter.', true); return; }

  let cos = lsGet('ni_cos', []);
  let ci  = cos.findIndex(function(x) { return x.id === cid; });
  if (ci === -1) return;
  if (cos[ci].slotsLeft <= 0) { showToast('Sorry, no slots available.', true); return; }

  let apps = lsGet('ni_app', []);
  if (apps.find(function(a) { return a.sid === s.id && a.cid === cid; })) {
    showToast('You already applied to this company.', true); return;
  }

  cos[ci].slotsLeft -= 1;
  lsSet('ni_cos', cos);

  apps.push({
    id: 'ap_' + Date.now(),
    sid: s.id, 
    sname: s.name, 
    semail: s.email,
    cid: cid, 
    cname: cos[ci].name, 
    industry: cos[ci].industry, 
    location: cos[ci].location,
    cover: cover, 
    status: 'Pending', 
    date: new Date().toISOString()
  });
  lsSet('ni_app', apps);

  closeModal();
  showToast('🎉 Application submitted successfully!');
  renderBrowse(); loadHome();
}

/*DASHBOARD */
function openDash() {
  let s = lsGet('ni_cur', null);
  document.getElementById('dash-locked').style.display = s ? 'none'  : 'flex';
  document.getElementById('dash-layout').style.display = s ? 'grid'  : 'none';
  if (s) loadDash(s);
}

function loadDash(s) {
  document.getElementById('prof-name').textContent   = s.name;
  document.getElementById('prof-dept').textContent   = s.level + ' · ' + s.dept;
  document.getElementById('prof-school').textContent = s.school;
  document.getElementById('prof-fb').textContent     = s.fname[0].toUpperCase();

  let img = document.getElementById('prof-img');
  let fb  = document.getElementById('prof-fb');
  if (s.avatar) {
    img.src = s.avatar;
    img.style.display = 'block';
    fb.style.display  = 'none';
  } else {
    img.style.display = 'none';
    fb.style.display  = 'flex';
  }

  
  document.getElementById('d-welcome').textContent = '👋 Welcome back, ' + s.fname + '!';

  let apps = lsGet('ni_app', []).filter(function(a) { return a.sid === s.id; });
  document.getElementById('d-tot').textContent      = apps.length;
  document.getElementById('d-pen').textContent      = apps.filter(function(a) { return a.status === 'Pending'; }).length;
  document.getElementById('d-acc').textContent      = apps.filter(function(a) { return a.status === 'Accepted'; }).length;
  document.getElementById('apps-count').textContent = apps.length;

  function mkRow(a) {
    let cls = a.status === 'Accepted' ? 'badge-accepted' : a.status === 'Rejected' ? 'badge-rejected' : 'badge-pending';
    return '<tr>' +
      '<td style="font-weight:600;">'+a.cname+'</td>' +
      '<td>'+a.industry+'</td>' +
      '<td>'+a.location+'</td>' +
      '<td>'+fmtDate(a.date)+'</td>' +
      '<td><span class="badge '+cls+'">'+a.status+'</span></td>' +
    '</tr>';
  }
  let tHead = '<table class="data-table"><thead><tr><th>Company</th><th>Industry</th><th>Location</th><th>Date</th><th>Status</th></tr></thead><tbody>';
  let tFoot = '</tbody></table>';
  let empty = '<div class="empty-state"><span class="empty-icon">📭</span><h5>No applications yet</h5><p>Browse companies and start applying!</p>' +
    '<button class="btn-green" style="font-size:.8rem;" onclick="goTo(\'browse\')">Browse Companies</button></div>';

  document.getElementById('rec-body').innerHTML = apps.length
    ? tHead + apps.slice(-5).reverse().map(mkRow).join('') + tFoot
    : empty;
  document.getElementById('all-body').innerHTML = apps.length
    ? tHead + apps.map(mkRow).join('') + tFoot
    : empty;

  document.getElementById('p-fn').value = s.fname;
  document.getElementById('p-ln').value = s.lname;
  document.getElementById('p-sc').value = s.school;
  document.getElementById('p-dp').value = s.dept;
  document.querySelectorAll('#p-sk input').forEach(function(cb) {
    cb.checked = (s.skills || []).includes(cb.value);
  });
  let ePrev = document.getElementById('p-pic-preview');
  if (s.avatar) {
    ePrev.innerHTML = '<img src="' + s.avatar + '" />';
  } else {
    ePrev.innerHTML = s.fname ? s.fname[0].toUpperCase() : '📷';
  }
}

function switchTab(btn, id) {
  document.querySelectorAll('.side-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}
function switchTabById(id) {
  document.querySelectorAll('.dash-tab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

function saveProfile(e) {
  e.preventDefault();
  let s = lsGet('ni_cur', null); if (!s) return;
  s.fname  = document.getElementById('p-fn').value.trim();
  s.lname  = document.getElementById('p-ln').value.trim();
  s.name   = s.fname + ' ' + s.lname;
  s.school = document.getElementById('p-sc').value.trim();
  s.dept   = document.getElementById('p-dp').value.trim();
  s.skills = [];
  document.querySelectorAll('#p-sk input:checked').forEach(function(cb) { s.skills.push(cb.value); });

  function finishSave() {
    let stu = lsGet('ni_stu', []);
    let idx = stu.findIndex(function(x) { return x.id === s.id; });
    if (idx !== -1) stu[idx] = s;
    lsSet('ni_stu', stu); lsSet('ni_cur', s);
    updateNav(s);
    showToast('✅ Profile updated!'); loadDash(s);
  }

  let picFile = document.getElementById('p-pic').files[0];
  if (picFile) {
    let reader = new FileReader();
    reader.onload = function(ev) { s.avatar = ev.target.result; finishSave(); };
    reader.readAsDataURL(picFile);
  } else {
    finishSave();
  }
}


/* AUTH */
function switchAuth(tab) {
  document.getElementById('s-reg').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('s-log').style.display = tab === 'login'    ? 'block' : 'none';
  document.getElementById('tab-reg').classList.toggle('active', tab === 'register');
  document.getElementById('tab-log').classList.toggle('active', tab === 'login');
  clearErrs();
}

document.getElementById('r-pic').addEventListener('change', function() {
  let file = this.files[0];
  let ok   = document.getElementById('pic-ok');
  let prev = document.getElementById('pic-preview');
  if (!file) { ok.style.display = 'none'; prev.innerHTML = '📷'; return; }
  if (file.size > 2 * 1024 * 1024) {
    ok.style.display = 'block'; ok.style.color = 'var(--red)';
    ok.textContent = '⚠️ File too large (max 2MB)'; prev.innerHTML = '📷'; return;
  }
  let reader = new FileReader();
  reader.onload = function(e) {
    prev.innerHTML = '<img src="' + e.target.result + '" alt="preview" />';
    ok.style.display = 'block'; ok.style.color = 'var(--green)';
    ok.textContent = '✅ ' + file.name;
  };
  reader.readAsDataURL(file);
});

document.getElementById('r-cv').addEventListener('change', function() {
  let ok    = document.getElementById('cv-ok');
  let label = document.getElementById('cv-label');
  if (this.files[0]) {
    ok.style.display = 'block'; ok.style.color = 'var(--green)';
    ok.textContent = '✅ ' + this.files[0].name;
    label.style.borderColor = 'var(--green)';
    label.style.background  = 'var(--green-light)';
    label.querySelector('.upload-text').textContent = this.files[0].name;
  } else {
    ok.style.display = 'none';
    label.style.borderColor = '';
    label.style.background  = '';
    label.querySelector('.upload-text').textContent = 'Click to upload your CV';
  }
});

function showE(id, msg) { var e = document.getElementById(id); e.textContent = msg; e.style.display = 'block'; }
function clearErrs()     { document.querySelectorAll('.err-msg').forEach(function(e) { e.style.display = 'none'; }); }

document.getElementById('p-pic').addEventListener('change', function() {
  let file = this.files[0];
  let ok   = document.getElementById('p-pic-ok');
  let prev = document.getElementById('p-pic-preview');
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    ok.style.display = 'block'; ok.style.color = 'var(--red)';
    ok.textContent = '⚠️ File too large (max 2MB)'; return;
  }
  let reader = new FileReader();
  reader.onload = function(e) {
    prev.innerHTML = '<img src="' + e.target.result + '" />';
    ok.style.display = 'block'; ok.style.color = 'var(--green)';
    ok.textContent = '✅ ' + file.name;
  };
  reader.readAsDataURL(file);
});

/* REGISTER */
function doRegister(e) {
  e.preventDefault(); clearErrs();
  let fn  = document.getElementById('r-fn').value.trim();
  let ln  = document.getElementById('r-ln').value.trim();
  let em  = document.getElementById('r-em').value.trim();
  let sc  = document.getElementById('r-sc').value;
  let dp  = document.getElementById('r-dp').value.trim();
  let lv  = document.getElementById('r-lv').value;
  let lo  = document.getElementById('r-lo').value;
  let pw  = document.getElementById('r-pw').value;
  let pw2 = document.getElementById('r-pw2').value;
  let cv  = document.getElementById('r-cv').files[0];
  let pic = document.getElementById('r-pic').files[0];
  let sk  = []; document.querySelectorAll('#r-sk input:checked').forEach(function(cb) { sk.push(cb.value); });

  let ok = true;
  if (!fn)                              { showE('e-fn',  'Enter your first name'); ok = false; }
  if (!ln)                              { showE('e-ln',  'Enter your last name'); ok = false; }
  if (!em || !/\S+@\S+\.\S+/.test(em)) { showE('e-em',  'Enter a valid email address'); ok = false; }
  if (!sc)                              { showE('e-sc',  'Select your university'); ok = false; }
  if (!dp)                              { showE('e-dp',  'Enter your department'); ok = false; }
  if (!lv)                              { showE('e-lv',  'Select your level'); ok = false; }
  if (!lo)                              { showE('e-lo',  'Select your state'); ok = false; }
  if (!cv)                              { showE('e-cv',  'Please upload your CV'); ok = false; }
  if (!sk.length)                       { showE('e-sk',  'Select at least one skill'); ok = false; }
  if (pw.length < 6)                    { showE('e-pw',  'Minimum 6 characters'); ok = false; }
  if (pw !== pw2)                       { showE('e-pw2', 'Passwords do not match'); ok = false; }
  if (!ok) return;

  let stu = lsGet('ni_stu', []);
  if (stu.find(function(x) { return x.email === em; })) {
    showE('e-em', 'Email already registered. Please sign in.'); return;
  }

  function finishRegister(avatarData) {
    let student = {
      id: 'stu_' + Date.now(),
      fname: fn, 
      lname: ln, 
      name: fn + ' ' + ln,
      email: em, 
      school: sc, 
      dept: dp, 
      level: lv, 
      location: lo,
      skills: sk,
      cvName: cv.name, 
      password: pw,
      avatar: avatarData || '',
      createdAt: new Date().toISOString()
    };
    stu.push(student);
    lsSet('ni_stu', stu);
    lsSet('ni_cur', student);
    updateNav(student);
    showToast('🎉 Welcome, ' + fn + '! Account created.');
    setTimeout(function() { goTo('dashboard'); }, 1200);
  }

  if (pic) {
    let reader = new FileReader();
    reader.onload = function(ev) { finishRegister(ev.target.result); };
    reader.readAsDataURL(pic);
  } else {
    finishRegister('');
  }
}

/* LOGIN */
function doLogin(e) {
  e.preventDefault(); clearErrs();
  let em = document.getElementById('l-em').value.trim();
  let pw = document.getElementById('l-pw').value;
  if (!em) { showE('e-lem', 'Enter your email address'); return; }
  if (!pw) { showE('e-lpw', 'Enter your password'); return; }
  let s = lsGet('ni_stu', []).find(function(x) { return x.email === em && x.password === pw; });
  if (!s) { showE('e-lpw', 'Incorrect email or password'); return; }
  lsSet('ni_cur', s); updateNav(s);
  showToast('👋 Welcome back, ' + s.fname + '!');
  setTimeout(function() { goTo('dashboard'); }, 1000);
}

/*LOGOUT*/
function doLogout() {
  localStorage.removeItem('ni_cur'); updateNav(null);
  showToast('You have been logged out.');
  goTo('home');
}

/* NAVBAR UPDATE */
function updateNav(s) {
  let area = document.getElementById('nav-auth');
  if (s) {
    let init = s.fname[0].toUpperCase();
    let avHtml = s.avatar
      ? '<img src="'+s.avatar+'" alt="av" onerror="this.style.display=\'none\';this.parentElement.textContent=\''+init+'\'" />'
      : init;
    area.innerHTML =
      '<div class="user-pill" onclick="goTo(\'dashboard\')">' +
        '<div class="av">' + avHtml + '</div>' +
        '<span class="uname">' + s.fname + '</span>' +
        '<span style="font-size:.65rem;color:var(--text-light);margin-left:2px;">▾</span>' +
      '</div>';
  } else {
    area.innerHTML = '<button class="nav-auth-btn" onclick="goTo(\'login\')">Login / Register</button>';
  }
}

/* HELPERS */
function tagsHtml(arr) {
  return (arr || []).map(function(t) { return '<span class="tag">'+t+'</span>'; }).join('');
}

function slBadge(n) {
  if (n <= 0) return '<span class="sl-nil">No slots</span>';
  if (n <= 2) return '<span class="sl-low">'+n+' slot(s) left ⚠️</span>';
  return '<span class="sl-ok">'+n+' slots available</span>';
}

function daysLeft(str) {
  let d = new Date(str), t = new Date(); t.setHours(0,0,0,0);
  return Math.ceil((d - t) / 86400000);
}

function dlText(d) {
  if (d < 0)   return '⛔ Deadline passed';
  if (d === 0) return '⚠️ Closes today!';
  if (d <= 7)  return '⏰ ' + d + ' day(s) left';
  return '📅 ' + d + ' days left';
}

function fmtDate(str) {
  return new Date(str).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

function showToast(msg, isErr) {
  let t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderLeftColor = isErr ? '#dc2626' : '#1a9e5c';
  t.style.display = 'block';
  t.style.animation = 'none';
  t.offsetHeight;
  t.style.animation = 'slideUp 0.3s ease';
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.style.display = 'none'; }, 3500);
}

/* ON LOAD */
window.addEventListener('load', function() {
  let s = lsGet('ni_cur', null);
  if (s) updateNav(s);
  loadHome();
});

/* UPDATE FOOTER YEAR AUTOMATICALLY*/ 
document.getElementById('year')
.textContent = new Date()
.getFullYear();
