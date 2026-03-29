// --- 1. THE COMPLETE 101+ UNIVERSITY MAPPING ---
const univs = [
    { 
        id: 'AKU', 
        name: 'Aryabhatta Knowledge University (AKU), Patna', 
        state: 'Bihar', 
        courses: ['BCA', 'BTECH', 'NURSING', 'BPHARMA', 'BMLT', 'BPT', 'MBBS', 'BDS', 'BED', 'BBA', 'BJMC', 'BMS', 'BBE', 'BCOM_PROF'] 
    },
    { id: 'PPU', name: 'Patliputra University (PPU), Patna', state: 'Bihar', courses: ['BCA', 'BBA', 'BBM', 'BIOT', 'BSC_IT', 'BCOM_PROF', 'BA', 'BSC', 'BCOM', 'BED', 'BLIS'] },
    { id: 'MU', name: 'Magadh University, Bodh Gaya', state: 'Bihar', courses: ['BCA', 'BBA', 'BSC', 'BCOM', 'BA', 'BED'] },
    { id: 'PU_PATNA', name: 'Patna University, Patna', state: 'Bihar', courses: ['BA', 'BSC', 'BCOM', 'BBA', 'BCA', 'BFA', 'BED'] },
    { id: 'AKTU', name: 'Dr. APJ Abdul Kalam Technical University (AKTU)', state: 'UP', courses: ['BTECH', 'BPHARMA', 'BCA', 'MBA', 'MCA'] },
    { id: 'DU', name: 'University of Delhi (DU)', state: 'Delhi', courses: ['BSC', 'BCOM', 'BBA', 'BA', 'BED'] },
    { id: 'COMMON', name: 'Other All India Universities', state: 'India', courses: ['BCA', 'BTECH', 'NURSING', 'BPHARMA', 'BBA', 'BCOM', 'BSC', 'BED', 'MBBS'] }
];

// --- 2. MASTER COURSE DATABASE ---
const courseMaster = {
    'BCA': { name: 'BCA (Computer App)', sems: 6, icon: 'fa-laptop-code' },
    'BTECH': { name: 'B.Tech (Engg)', sems: 8, icon: 'fa-gears' },
    'NURSING': { name: 'B.Sc Nursing', sems: 8, icon: 'fa-user-nurse' },
    'BPHARMA': { name: 'B.Pharma', sems: 8, icon: 'fa-pills' },
    'BBA': { name: 'BBA (Management)', sems: 6, icon: 'fa-chart-line' },
    'BBM': { name: 'BBM', sems: 6, icon: 'fa-briefcase' },
    'BCOM_PROF': { name: 'B.Com (Professional)', sems: 6, icon: 'fa-file-invoice-dollar' },
    'BCOM': { name: 'B.Com', sems: 6, icon: 'fa-calculator' },
    'BSC': { name: 'B.Sc (Science)', sems: 6, icon: 'fa-atom' },
    'BA': { name: 'B.A. (Arts)', sems: 6, icon: 'fa-pen-nib' },
    'MBBS': { name: 'MBBS (Medical)', sems: 9, icon: 'fa-user-doctor' },
    'BED': { name: 'B.Ed', sems: 4, icon: 'fa-chalkboard-user' },
    'BMLT': { name: 'BMLT (Lab Tech)', sems: 6, icon: 'fa-microscope' },
    'BPT': { name: 'BPT (Physio)', sems: 8, icon: 'fa-child-reaching' },
    'BJMC': { name: 'Journalism (BJMC)', sems: 6, icon: 'fa-camera' },
    'BDS': { name: 'BDS (Dental)', sems: 8, icon: 'fa-tooth' },
    'BMS': { name: 'BMS', sems: 6, icon: 'fa-sitemap' },
    'BBE': { name: 'B.Business Economics', sems: 6, icon: 'fa-coins' },
    'BSC_IT': { name: 'B.Sc IT', sems: 6, icon: 'fa-network-wired' }
};

// --- 3. MEGA SYLLABUS DATA (AKU All Courses Detailed) ---
const semesterData = {
    // AKU BCA
    'AKU_BCA': [
        { sem: "Semester 1", sub: "C Programming, IT Fundamentals, Math-I, English", link: "#" },
        { sem: "Semester 2", sub: "Data Structures, C++, Operating Systems, Physics", link: "#" },
        { sem: "Semester 3", sub: "Java, DBMS, Data Comm, Statistics", link: "#" },
        { sem: "Semester 4", sub: "Python, Software Engg, Discrete Maths", link: "#" },
        { sem: "Semester 5", sub: "Web Tech, Adv Java, Graphics", link: "#" },
        { sem: "Semester 6", sub: "Android App, Cyber Security, Project Work", link: "#" }
    ],
    // AKU Nursing
    'AKU_NURSING': [
        { sem: "Sem 1", sub: "Anatomy, Physiology, Sociology", link: "#" },
        { sem: "Sem 2", sub: "Nursing Foundation, Nutrition, Biochem", link: "#" },
        { sem: "Sem 3", sub: "Microbiology, Psychology, PC-I", link: "#" },
        { sem: "Sem 4", sub: "Medical Surgical Nursing, Pharmacology, Pathology", link: "#" },
        { sem: "Sem 5", sub: "Child Health Nursing, Mental Health", link: "#" },
        { sem: "Sem 6", sub: "Midwifery, Community Health Nursing-I", link: "#" },
        { sem: "Sem 7", sub: "Research, Statistics, CHN-II", link: "#" },
        { sem: "Sem 8", sub: "Internship & Professional Management", link: "#" }
    ],
    // AKU B.Pharma
    'AKU_BPHARMA': [
        { sem: "Sem 1", sub: "HAP-I, Pharmaceutics-I, Inorganic Chem", link: "#" },
        { sem: "Sem 2", sub: "HAP-II, Organic Chem-I, Biochem", link: "#" },
        { sem: "Sem 3", sub: "Physical Pharmaceutics-I, Microbiology, Engg", link: "#" },
        { sem: "Sem 4", sub: "Organic Chem-III, Medicinal Chem-I, Pharmacology-I", link: "#" },
        { sem: "Sem 5", sub: "Medicinal Chem-II, Industrial Pharmacy-I, Jurisprudence", link: "#" },
        { sem: "Sem 6", sub: "Pharmacology-III, Herbal Drug Tech, Quality Assurance", link: "#" },
        { sem: "Sem 7", sub: "Instrumental Methods, Industrial Pharmacy-II", link: "#" },
        { sem: "Sem 8", sub: "Biostatistics, Social Pharmacy, Project Work", link: "#" }
    ],
    // AKU MBBS (Professinal Phases)
    'AKU_MBBS': [
        { sem: "Phase 1", sub: "Anatomy, Physiology, Biochemistry", link: "#" },
        { sem: "Phase 2", sub: "Pathology, Microbiology, Pharmacology, Forensic Med", link: "#" },
        { sem: "Phase 3 (I)", sub: "ENT, Ophthalmology, Community Medicine", link: "#" },
        { sem: "Phase 3 (II)", sub: "Medicine, Surgery, OBG, Pediatrics", link: "#" }
    ],
    // AKU BDS
    'AKU_BDS': [
        { sem: "1st Year", sub: "Gen Anatomy, Physiology, Dental Anatomy", link: "#" },
        { sem: "2nd Year", sub: "Pathology, Microbiology, Dental Materials", link: "#" },
        { sem: "3rd Year", sub: "Gen Medicine, Surgery, Oral Pathology", link: "#" },
        { sem: "4th Year", sub: "Oral Surgery, Orthodontics, Periodontics", link: "#" }
    ],
    // AKU BMLT
    'AKU_BMLT': [
        { sem: "Sem 1", sub: "Anatomy, Physiology, Lab Management", link: "#" },
        { sem: "Sem 2", sub: "Hematology, Clinical Pathology", link: "#" },
        { sem: "Sem 3", sub: "Microbiology, Parasitology", link: "#" },
        { sem: "Sem 4", sub: "Biochemistry, Histopathology", link: "#" },
        { sem: "Sem 5", sub: "Immunology, Serology", link: "#" },
        { sem: "Sem 6", sub: "Advanced Lab Tech, Ethics, Project", link: "#" }
    ],
    // AKU BPT
    'AKU_BPT': [
        { sem: "Sem 1", sub: "Anatomy, Physiology, Biochem", link: "#" },
        { sem: "Sem 2", sub: "Biomechanics, Psychology", link: "#" },
        { sem: "Sem 3", sub: "Exercise Therapy-I, Electrotherapy-I", link: "#" },
        { sem: "Sem 8", sub: "Sports Medicine, Rehabilitation, Internship", link: "#" }
    ],
    // AKU BBA / BMS / BBE
    'AKU_BBA': [
        { sem: "Sem 1", sub: "Management Principles, Economics, Math", link: "#" },
        { sem: "Sem 6", sub: "Strategic Management, Entrepreneurship, Project", link: "#" }
    ],
    'AKU_BMS': [
        { sem: "Sem 1", sub: "Management Concept, Financial Accounting", link: "#" },
        { sem: "Sem 6", sub: "Business Policy, Internship Project", link: "#" }
    ],
    'AKU_BBE': [
        { sem: "Sem 1", sub: "Micro Economics, Business Math, Accounting", link: "#" },
        { sem: "Sem 6", sub: "International Trade, Money & Banking", link: "#" }
    ],
    // AKU BJMC
    'AKU_BJMC': [
        { sem: "Sem 1", sub: "Intro to Communication, History of Media", link: "#" },
        { sem: "Sem 6", sub: "Public Relations, Advertising, Media Research", link: "#" }
    ],
    // AKU B.Com Prof
    'AKU_BCOM_PROF': [
        { sem: "Sem 1", sub: "Financial Accounting, Business Org, Law", link: "#" },
        { sem: "Sem 6", sub: "Auditing, Income Tax, International Finance", link: "#" }
    ],
    // AKU B.Ed
    'AKU_BED': [
        { sem: "Sem 1", sub: "Childhood & Growing Up, Contemporary India", link: "#" },
        { sem: "Sem 4", sub: "Gender & School, Yoga, Inclusive School", link: "#" }
    ],

    // --- Fallbacks ---
    'COMMON_BCA': [ { sem: "Semester 1", sub: "Computer Fundamentals, C Language, Math", link: "#" } ]
};

// --- 4. ENGINE LOGIC ---
let selectedUniv = null;

function renderUnivs(data) {
    const list = document.getElementById('uList');
    list.innerHTML = "";
    data.forEach(u => {
        let li = document.createElement('li');
        li.innerText = `${u.name} (${u.state})`;
        li.onclick = () => {
            selectedUniv = u;
            document.getElementById('uInput').value = u.name;
            document.getElementById('status').innerText = "Portal: " + u.name;
            list.style.display = 'none';
            openPortal(u);
        };
        list.appendChild(li);
    });
}

function openPortal(u) {
    document.getElementById('heroSec').style.display = 'none';
    document.getElementById('courseView').style.display = 'none';
    document.getElementById('univPortal').style.display = 'block';
    document.getElementById('pName').innerText = u.name;
    const g = document.getElementById('portalCourseGrid');
    g.innerHTML = "";
    u.courses.forEach(id => {
        const c = courseMaster[id];
        if(c) {
            g.innerHTML += `
                <div class="card" onclick="openDetails('${id}')">
                    <i class="fa-solid ${c.icon}"></i>
                    <h3>${c.name}</h3>
                    <p>Total: ${c.sems} Semesters</p>
                    <span style="color:#4f46e5; font-weight:700; margin-top:10px; display:block;">Enter Portal →</span>
                </div>`;
        }
    });
}

function openDetails(courseId) {
    document.getElementById('univPortal').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';
    document.getElementById('viewTitle').innerText = selectedUniv.id + " | " + courseId;
    const g = document.getElementById('detailGrid');
    g.innerHTML = "";
    const data = semesterData[selectedUniv.id + "_" + courseId] || semesterData["COMMON_" + courseId] || [];
    if(data.length > 0) {
        data.forEach(i => {
            g.innerHTML += `
                <div class="card" style="text-align:left; border-left: 6px solid #fbbf24;">
                    <h3 style="color:#4f46e5;">${i.sem}</h3>
                    <p style="margin:10px 0;"><b>Main Subjects:</b> ${i.sub}</p>
                    <div class="links">
                        <a href="${i.link}"><i class="fa-solid fa-file-pdf"></i> Syllabus</a>
                        <a href="${i.link}"><i class="fa-solid fa-download"></i> PYQs</a>
                        <a href="${i.link}" style="color:green;"><i class="fa-solid fa-book"></i> Notes</a>
                    </div>
                </div>`;
        });
    } else { 
        g.innerHTML = "<h3>Syllabus database se load ho raha hai...</h3>"; 
    }
}

function showUniv() { document.getElementById('uList').style.display = 'block'; renderUnivs(univs); }
function filterUniv() {
    const val = document.getElementById('uInput').value.toUpperCase();
    const res = univs.filter(u => u.name.toUpperCase().includes(val));
    renderUnivs(res);
}
function backToPortal() { document.getElementById('detailView').style.display = 'none'; document.getElementById('univPortal').style.display = 'block'; }
function init() {
    const mainG = document.getElementById('mainCourseGrid');
    ['BCA', 'BTECH', 'NURSING'].forEach(id => {
        let c = courseMaster[id];
        if(c) {
           mainG.innerHTML += `<div class="card" onclick="showUniv()"><i class="fa-solid ${c.icon}"></i><h3>${c.name}</h3><p>Select University to view Materials</p></div>`;
        }
    });
}
window.onclick = (e) => { if (!e.target.matches('#uInput')) document.getElementById('uList').style.display = "none"; }
init();


// TechEraX Hub - Dark Mode Logic
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// 1. पेज लोड होते ही पुरानी सेटिंग चेक करें
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('techerax-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});
themeBtn.addEventListener('click', () => {
    // 'dark-mode' क्लास को जोड़ें या हटाएँ
    body.classList.toggle('dark-mode');

    // अगर डार्क मोड चालू है
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('techerax-theme', 'dark'); 
    } 
    // अगर लाइट मोड चालू है
    else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('techerax-theme', 'light');
    }
});

/* ===========================================
   BACK TO TOP BUTTON LOGIC
   =========================================== */

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "flex";
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.display = "none";
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Progress Bar (पढ़ाई का ट्रैक)
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

// social
// Social Icons Fade-in Animation
document.addEventListener('DOMContentLoaded', () => {
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        
        setTimeout(() => {
            item.style.transition = "all 0.5s ease";
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, 200 * (index + 1));
    });
});
