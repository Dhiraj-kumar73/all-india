// --- 1. THE COMPLETE 101+ UNIVERSITY MAPPING ---
const univs = [
    { 
        id: 'AKU', 
        name: 'Aryabhatta Knowledge University (AKU), Patna', 
        state: 'Bihar', 
        courses: ['BCA', 'BTECH', 'NURSING', 'BPHARMA', 'BMLT', 'BPT', 'MBBS', 'CS', 'BED', 'BBA', 'BJMC', 'BMS', 'BBE', 'BCOM_PROF'] 
    },
    { 
        id: 'AKTU', 
        name: 'Dr. APJ Abdul Kalam Technical University (AKTU)', 
        state: 'UP', 
        // Ab yahan 11 courses dikhenge
        courses: ['BTECH', 'BPHARMA', 'BCA', 'MBA', 'MCA', 'BBA', 'BHMCT', 'BFAD', 'B_ARCH', 'BFA', 'MTECH'] 
    },
    { id: 'PPU', name: 'Patliputra University (PPU), Patna', state: 'Bihar', courses: ['BCA', 'BBA', 'BBM', 'BIOT', 'BSC_IT', 'BCOM_PROF', 'BA', 'BSC', 'BCOM', 'BED', 'BLIS'] },
    { id: 'MU', name: 'Magadh University, Bodh Gaya', state: 'Bihar', courses: ['BCA', 'BBA', 'BSC', 'BCOM', 'BA', 'BED'] },
    { id: 'PU_PATNA', name: 'Patna University, Patna', state: 'Bihar', courses: ['BA', 'BSC', 'BCOM', 'BBA', 'BCA', 'BFA', 'BED'] },
    { id: 'AKTU', name: 'Dr. APJ Abdul Kalam Technical University (AKTU)', state: 'UP', courses: ['BTECH', 'BPHARMA', 'BCA', 'MBA', 'MCA'] },
    { id: 'DU', name: 'University of Delhi (DU)', state: 'Delhi', courses: ['BSC', 'BCOM', 'BBA', 'BA', 'BED'] },
    { id: 'COMMON', name: 'Other All India Universities', state: 'India', courses: ['BCA', 'BTECH', 'NURSING', 'BPHARMA', 'BBA', 'BCOM', 'BSC', 'BED', 'MBBS'] }
];
/// --- 2. MASTER COURSE DATABASE (UPDATED) ---
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
    'BPT': { name: 'BPT (Physio)', sems: 8, icon: 'fa-child-reaching' },
    'BJMC': { name: 'Journalism (BJMC)', sems: 6, icon: 'fa-camera' },
   'CS': { name: 'Computer Science (CS)', sems: 8, icon: 'fa-microchip' },
    'BMS': { name: 'BMS', sems: 6, icon: 'fa-sitemap' },
    'BBE': { name: 'B.Business Economics', sems: 6, icon: 'fa-coins' },
    'BSC_IT': { name: 'B.Sc IT', sems: 6, icon: 'fa-network-wired' }, 

    // AKTU Wale naye courses yahan add kar diye:
    'MBA': { name: 'MBA (Masters)', sems: 4, icon: 'fa-user-tie' },
    'MCA': { name: 'MCA (Computer)', sems: 4, icon: 'fa-code' },
    'BHMCT': { name: 'Hotel Management', sems: 8, icon: 'fa-hotel' },
    'BFAD': { name: 'Fashion Design', sems: 8, icon: 'fa-shirt' },
    'B_ARCH': { name: 'Architecture', sems: 10, icon: 'fa-building-columns' },
    'BFA': { name: 'Fine Arts', sems: 4, icon: 'fa-palette' },
    'MTECH': { name: 'M.Tech', sems: 4, icon: 'fa-microchip' }
}; // <-- Ye bracket band hona zaroori tha


const semesterData = {
// 1. B.Sc NURSING (New Semester Pattern - 8 Semesters)
'AKU_NURSING': [
    { sem: "Semester 1", sub: "Communicative English, Applied Anatomy, Applied Physiology, Applied Sociology, Applied Psychology", link: "#" },
    { sem: "Semester 2", sub: "Applied Biochemistry, Applied Nutrition & Dietetics, Nursing Foundation-I (including First Aid), Health Informatics", link: "#" },
    {sem: "Semester 3",  sub: "Applied Microbiology, Infection Control, Pharmacology-I, Pathology-I, Adult Health Nursing-I (Medical Surgical Nursing)", link: "#" },
    { sem: "Semester 4", sub: "Pharmacology-II, Pathology-II, Genetics, Adult Health Nursing-II (including Geriatrics), Professionalism & Ethics", link: "#" },
    { sem: "Semester 5", sub: "Child Health Nursing-I, Mental Health Nursing-I, Community Health Nursing-I (including Epidemiology), Educational Technology", link: "#" },
    { sem: "Semester 6", sub: "Child Health Nursing-II, Mental Health Nursing-II, Midwifery & Obstetrical Nursing-I, Nursing Management", link: "#" },
    { sem: "Semester 7", sub: "Community Health Nursing-II, Midwifery & Obstetrical Nursing-II, Nursing Research & Statistics, Forensic Nursing", link: "#" },
    { sem: "Semester 8", sub: "Competency Based Residency Program (Intensive Practical/Internship), Clinical Specialties, Research Project", link: "#" }
],

// 3. B.PHARMA (Full 8 Semesters - Professional Pharmacy Pattern)
'AKU_BPHARMA': [
    { sem: "Semester 1", sub: "Human Anatomy and Physiology-I, Pharmaceutical Analysis-I, Pharmaceutics-I, Pharmaceutical Inorganic Chemistry, Communication Skills", link: "#" },
    { sem: "Semester 2", sub: "Human Anatomy and Physiology-II, Pharmaceutical Organic Chemistry-I, Biochemistry, Pathophysiology, Computer Applications in Pharmacy", link: "#" },
    { sem: "Semester 3", sub: "Pharmaceutical Organic Chemistry-II, Physical Pharmaceutics-I, Pharmaceutical Microbiology, Pharmaceutical Engineering", link: "#" },
    { sem: "Semester 4", sub: "Pharmaceutical Organic Chemistry-III, Medicinal Chemistry-I, Physical Pharmaceutics-II, Pharmacology-I, Pharmacognosy-I", link: "#" },
    { sem: "Semester 5", sub: "Medicinal Chemistry-II, Industrial Pharmacy-I, Pharmacology-II, Pharmacognosy-II, Pharmaceutical Jurisprudence (Forensic Pharmacy)", link: "#" },
    { sem: "Semester 6", sub: "Medicinal Chemistry-III, Pharmacology-III, Herbal Drug Technology, Biopharmaceutics & Pharmacokinetics, Pharmaceutical Quality Assurance", link: "#" },
    { sem: "Semester 7", sub: "Instrumental Methods of Analysis, Industrial Pharmacy-II, Pharmacy Practice, Novel Drug Delivery System", link: "#" },
    { sem: "Semester 8", sub: "Biostatistics & Research Methodology, Social & Preventive Pharmacy, Elective-I (Pharma Marketing/Pharmacovigilance), Project Work", link: "#" }
],

// 2. B.TECH (All Branches Common - 8 Semesters)
'AKU_BTECH': [
    { sem: "Sem 1", sub: "Physics, Maths-I, Basic Electrical Engg, Graphics & Design, English", link: "#" },
    { sem: "Sem 2", sub: "Chemistry, Maths-II, Programming for Problem Solving, Workshop, Biology", link: "#" },
    { sem: "Sem 3", sub: "Data Structures, Discrete Maths, Object Oriented Programming, Digital Electronics, Humanities", link: "#" },
    { sem: "Sem 4", sub: "Operating Systems, Computer Organization, Design & Analysis of Algorithms, Database Management", link: "#" },
    { sem: "Sem 5", sub: "Computer Networks, Formal Language & Automata, Microprocessors, Elective-I", link: "#" },
    { sem: "Sem 6", sub: "Compiler Design, Software Engineering, Distributed Systems, Elective-II, Open Elective", link: "#" },
    { sem: "Sem 7", sub: "Cloud Computing, Machine Learning, Professional Elective, Project Phase-I", link: "#" },
    { sem: "Sem 8", sub: "Cyber Security, Big Data, Internship/Industrial Training, Final Project & Viva", link: "#" }
],

// 3. BPT (Physiotherapy - 4.5 Years)
'AKU_BPT': [
    { sem: "Year 1", sub: "Anatomy, Physiology, Biochemistry, Biomechanics, Psychology", link: "#" },
    { sem: "Year 2", sub: "Pathology, Microbiology, Pharmacology, Exercise Therapy, Electrotherapy-I", link: "#" },
    { sem: "Year 3", sub: "Orthopaedics, Neurology, General Medicine, Electrotherapy-II, Research Methodology", link: "#" },
    { sem: "Year 4", sub: "PT in Ortho, PT in Neuro, PT in Cardio, Community PT, Rehabilitation", link: "#" }
],

// 4. BMLT (Lab Tech - 3 Years)
'AKU_BMLT': [
    { sem: "Sem 1", sub: "Human Anatomy-I, Physiology-I, Biochemistry-I, Lab Management", link: "#" },
    { sem: "Sem 2", sub: "Hematology-I, Clinical Pathology, Microbiology-I, Histopathology-I", link: "#" },
    { sem: "Sem 3", sub: "Biochemistry-II, Hematology-II, Bacteriology, Applied Histopathology", link: "#" },
    { sem: "Sem 4", sub: "Immunology, Serology, Parasitology, Virology, Cytology", link: "#" },
    { sem: "Sem 5", sub: "Advanced Hematology, Clinical Biochemistry, Blood Banking, Quality Control", link: "#" },
    { sem: "Sem 6", sub: "Laboratory Automation, Mycology, Dissertation, Internship Report", link: "#" }
],

// 5. BCA (Computer App - 6 Semesters)
'AKU_BCA': [
    { sem: "Sem 1", sub: "C Programming, Math-I, PC Packages, Communicative English, Lab", link: "#" },
    { sem: "Sem 2", sub: "Data Structures, Math-II, Digital Electronics, Organizational Behavior", link: "#" },
    { sem: "Sem 3", sub: "Java Programming, Operating Systems, DBMS, Numerical Methods", link: "#" },
    { sem: "Sem 4", sub: "Computer Networks, Software Engineering, Python, Graphics", link: "#" },
    { sem: "Sem 5", sub: "Web Tech (PHP/ASP), C#, VB.Net, Project-I, Elective", link: "#" },
    { sem: "Sem 6", sub: "E-Commerce, Multimedia, Linux, Major Project & Viva", link: "#" }
],

// 6. BBA (Management - 6 Semesters)
'AKU_BBA': [
    { sem: "Sem 1", sub: "Principles of Management, Business Math, Financial Accounting, Micro Economics", link: "#" },
    { sem: "Sem 2", sub: "Marketing Management, Business Stat, Macro Economics, Business Communication", link: "#" },
    { sem: "Sem 3", sub: "HRM, Cost Accounting, Business Laws, Environmental Science", link: "#" },
    { sem: "Sem 4", sub: "Financial Management, Research Methodology, Consumer Behavior, IT in Business", link: "#" },
    { sem: "Sem 5", sub: "Strategic Management, Operations Research, Elective-I (Finance/HR/Mktg)", link: "#" },
    { sem: "Sem 6", sub: "Business Ethics, Entrepreneurship, Project Report & Viva", link: "#" }
],

// 7. MCA (Master of Computer App - 4 Semesters)
'AKU_MCA': [
    { sem: "Sem 1", sub: "Advanced Java, Computer Network, Software Engineering, Database Systems", link: "#" },
    { sem: "Sem 2", sub: "Python Programming, AI & Machine Learning, Data Warehousing, Cloud Computing", link: "#" },
    { sem: "Sem 3", sub: "Network Security, Internet of Things (IoT), Big Data Analytics, Elective-I", link: "#" },
    { sem: "Sem 4", sub: "Major Project Implementation, Industrial Training, Comprehensive Viva", link: "#" }
],

// 8. MBA (Master of Business Admin - 4 Semesters)
'AKU_MBA': [
    { sem: "Sem 1", sub: "Management Process, Managerial Economics, Accounting for Managers, Business Environment", link: "#" },
    { sem: "Sem 2", sub: "Financial Management, Marketing Management, HRM, Operations Management", link: "#" },
    { sem: "Sem 3", sub: "Strategic Management, Specialization Elective-I, Elective-II, Summer Internship", link: "#" },
    { sem: "Sem 4", sub: "Project Management, Corporate Governance, Final Project, Viva-Voce", link: "#" }
],

// 9. MBBS (Medical) - Full 9 Semesters (4.5 Years + Internship)
'AKU_MBBS': [
    { sem: "Semester 1", sub: "Human Anatomy-I, Human Physiology-I, Biochemistry-I, Early Clinical Exposure (ECE)", link: "#"},
    { sem: "Semester 2", sub: "Human Anatomy-II, Human Physiology-II, Biochemistry-II, Professional Development, First Professional Exam", link: "#" },
    { sem: "Semester 3", sub: "Pathology-I, Microbiology-I, Pharmacology-I, Community Medicine-I, Clinical Postings", link: "#" },
    {  sem: "Semester 4", sub: "Pathology-II, Microbiology-II, Pharmacology-II, Forensic Medicine & Toxicology, Second Professional Exam", link: "#" },
    { sem: "Semester 5", sub: "Community Medicine-II, ENT (Otorhinolaryngology), Ophthalmology, Forensic Medicine (Advanced)", link: "#" },
    { sem: "Semester 6", sub: "Community Medicine-III, ENT-II, Ophthalmology-II, Third Professional Exam (Part-I)", link: "#" },
    { sem: "Semester 7", sub: "General Medicine-I, General Surgery-I, Obstetrics & Gynecology (OBG)-I, Pediatrics-I",link: "#" },
    { sem: "Semester 8", sub: "General Medicine-II, General Surgery-II, OBG-II, Pediatrics-II, Orthopaedics", link: "#" },
    { sem: "Semester 9", sub: "Psychiatry, Dermatology, Radiology, Anesthesiology, Final Professional Exam (Part-II)", link: "#" }
],


// 12. COMPUTER SCIENCE (CS)
'AKU_CS': [
    { sem: "Semester 1", sub: "Engineering Physics, Mathematics-I (Calculus), Basic Electrical Engineering, Engineering Graphics & Design", link: "#" },
    { sem: "Semester 2", sub: "Engineering Chemistry, Mathematics-II (Linear Algebra), Programming for Problem Solving (C Language), Workshop Practice", link: "#" },
    { sem: "Semester 3", sub: "Data Structures & Algorithms, Object Oriented Programming (C++), Discrete Mathematics, Digital Electronics, Humanities", link: "#" },
    { sem: "Semester 4", sub: "Operating Systems, Computer Organization & Architecture, Database Management Systems (DBMS), Discrete Math-II", link: "#" },
    { sem: "Semester 5", sub: "Design and Analysis of Algorithms (DAA), Formal Languages & Automata Theory, Java Programming, Computer Networks", link: "#" },
    { sem: "Semester 6", sub: "Compiler Design, Software Engineering, Artificial Intelligence, Data Warehousing & Data Mining", link: "#" },
    { sem: "Semester 7", sub: "Machine Learning, Cryptography & Network Security, Cloud Computing, Elective-I, Major Project Phase-I", link: "#" },
    { sem: "Semester 8", sub: "Big Data Analytics, Internet of Things (IoT), Professional Ethics, Open Elective, Final Project & Viva-Voce", link: "#" }
],

// 13. BMS (Bachelor of Management Studies) - Full 6 Semesters Breakdown
'AKU_BMS': [
    { sem: "Semester 1", sub: "Foundation of Human Skills, Business Communication, Financial Accounting, Business Statistics, Business Economics-I", link: "#" },
    { sem: "Semester 2", sub: "Business Law, Business Environment, Principles of Marketing, Principles of Management, Business Economics-II",  link: "#" },
    { sem: "Semester 3", sub: "Environmental Management, Management Accounting, Managerial Economics, Organization Behavior, IT in Business Management-I", link: "#" },
    { sem: "Semester 4", sub: "Business Economics-III, Business Research Methods, Ethics & Governance, Production & Total Quality Management, IT in Business-II",  link: "#" },
    { sem: "Semester 5", sub: "Logistics & Supply Chain Management, Specialization Elective-I (Finance/HR/Marketing), Summer Internship Project Report", link: "#" },
    { sem: "Semester 6", sub: "Strategic Management, Operations Research, International Marketing, Retail Management, Final Dissertation & Viva",  link: "#" }
],


// 14. B.COM PROFESSIONAL - Full 6 Semesters Breakdown
'AKU_BCOM_PROF': [
    { sem: "Semester 1", sub: "Financial Accounting-I, Business Organization, Business Laws, Micro Economics, Communicative English", link: "#" },
    { sem: "Semester 2", sub: "Financial Accounting-II, Corporate Laws, Macro Economics, Business Statistics, Environmental Science", link: "#" },
    { sem: "Semester 3", sub: "Corporate Accounting, Income Tax Law & Practice, Management Principles & Applications, E-Commerce, Cost Accounting", link: "#"  },
    { sem: "Semester 4", sub: "Auditing, Indirect Tax (GST), Business Mathematics, Computer Applications in Business, Financial Management", link: "#" },
    { sem: "Semester 5", sub: "Principles of Marketing, Entrepreneurship Development, Elective-I (Financial Markets/HR), Internship Training Report",  link: "#" },
    { sem: "Semester 6", sub: "Management Accounting, International Business, Corporate Governance, Project Work & Comprehensive Viva-Voce", link: "#" }
],

    // --- Fallbacks ---
    'COMMON_BCA': [ { sem: "Semester 1", sub: "Computer Fundamentals, C Language, Math", link: "#" } ],

    // ----------- BCA (6 Sem) -----------
    'PPU_BCA': [
        { sem: "Semester 1", sub: "Computer Fundamentals, Programming in C, Mathematics-I, Communication Skills", link: "#" },
        { sem: "Semester 2", sub: "Data Structures, C++, Digital Electronics, Mathematics-II", link: "#" },
        { sem: "Semester 3", sub: "DBMS, Java, Software Engineering, Numerical Methods", link: "#" },
        { sem: "Semester 4", sub: "Operating System, Python, Computer Network, Discrete Math", link: "#" },
        { sem: "Semester 5", sub: "Web Technology, AI Basics, Graphics, MIS", link: "#" },
        { sem: "Semester 6", sub: "Project Work, Cyber Security, Mobile App Dev, Viva", link: "#" }
    ],

    // ----------- BBA (6 Sem) -----------
    'PPU_BBA': [
        { sem: "Sem 1", sub: "Principles of Management, Business Economics, Business Math", link: "#" },
        { sem: "Sem 2", sub: "Financial Accounting, Marketing, Business Law", link: "#" },
        { sem: "Sem 3", sub: "HR Management, Cost Accounting, Business Statistics", link: "#" },
        { sem: "Sem 4", sub: "Financial Management, MIS, Production Management", link: "#" },
        { sem: "Sem 5", sub: "Entrepreneurship, Business Environment, Banking", link: "#" },
        { sem: "Sem 6", sub: "Strategic Management, Project Work, Viva", link: "#" }
    ],

    
   // --- AKTU COMPLETE 10+ COURSES (ALL SEMESTERS & SUBJECTS) ---

// 1. B.TECH (Computer Science/IT focus) - 8 Semesters
'AKTU_BTECH': [
    { sem: "Semester 1", sub: "Engineering Physics, Engineering Mathematics-I, Basic Electrical Engineering, AI for Engineering", link: "#" },
    { sem: "Semester 2", sub: "Engineering Chemistry, Engineering Mathematics-II, Programming for Problem Solving (C), Workshop Practice", link: "#" },
    { sem: "Semester 3", sub: "Data Structures, Computer Organization & Architecture, Discrete Structures & Theory of Logic, Technical Communication", link: "#" },
    { sem: "Semester 4", sub: "Operating Systems, Theory of Automata and Formal Languages, Microprocessor, Python Programming", link: "#" },
    { sem: "Semester 5", sub: "Database Management System, Design and Analysis of Algorithm, Compiler Design, Constitution of India", link: "#" },
    { sem: "Semester 6", sub: "Software Engineering, Computer Networks, Web Technology, Data Analytics", link: "#" },
    { sem: "Semester 7", sub: "Artificial Intelligence, Cloud Computing, Machine Learning, Rural Development", link: "#" },
    { sem: "Semester 8", sub: "Distributed Systems, Deep Learning, Major Project & Industrial Internship", link: "#" }
],

// 2. B.PHARMA - 8 Semesters
'AKTU_BPHARMA': [
    { sem: "Sem 1", sub: "HAP-I, Pharmaceutical Analysis-I, Pharmaceutics-I, Inorganic Chemistry", link: "#" },
    { sem: "Sem 2", sub: "HAP-II, Organic Chemistry-I, Biochemistry, Computer Applications", link: "#" },
    { sem: "Sem 3", sub: "Organic Chemistry-II, Physical Pharmaceutics-I, Microbiology, Engg", link: "#" },
    { sem: "Sem 4", sub: "Organic Chemistry-III, Medicinal Chemistry-I, Physical Pharmaceutics-II, Pharmacology-I", link: "#" },
    { sem: "Sem 5", sub: "Medicinal Chemistry-II, Industrial Pharmacy-I, Pharmacology-II, Pharmacognosy-II", link: "#" },
    { sem: "Sem 6", sub: "Medicinal Chemistry-III, Pharmacology-III, Herbal Drug Tech, Biopharmaceutics", link: "#" },
    { sem: "Sem 7", sub: "Instrumental Methods of Analysis, Industrial Pharmacy-II, Pharmacy Practice", link: "#" },
    { sem: "Sem 8", sub: "Biostatistics, Social & Preventive Pharmacy, Pharma Marketing, Project", link: "#" }
],

// 3. MCA (New 2-Year Pattern) - 4 Semesters
'AKTU_MCA': [
    { sem: "Sem 1", sub: "Fundamental of IT, Computer Organization, Programming in C, Discrete Math", link: "#" },
    { sem: "Sem 2", sub: "Object Oriented Programming (Java), DBMS, Data Structures, Software Engineering", link: "#" },
    { sem: "Sem 3", sub: "Web Technology, Artificial Intelligence, Computer Network, Cloud Computing", link: "#" },
    { sem: "Sem 4", sub: "Mobile Computing, Cyber Security, Blockchain, Major Project", link: "#" }
],

// 4. MBA - 4 Semesters
'AKTU_MBA': [
    { sem: "Sem 1", sub: "Management Concepts, Managerial Economics, Financial Accounting, Business Statistics", link: "#" },
    { sem: "Sem 2", sub: "Business Environment, HRM, Marketing Management, Financial Management", link: "#" },
    { sem: "Sem 3", sub: "Strategic Management, Specialization Group-1, Specialization Group-2, Internship", link: "#" },
    { sem: "Sem 4", sub: "Corporate Governance, Entrepreneurship Development, Research Project", link: "#" }
],

// 5. BBA - 6 Semesters
'AKTU_BBA': [
    { sem: "Sem 1", sub: "Fundamentals of Management, Business Economics, Business Mathematics", link: "#" },
    { sem: "Sem 2", sub: "Business Environment, Business Communication, Financial Accounting", link: "#" },
    { sem: "Sem 3", sub: "Production Management, Business Law, Marketing Management", link: "#" },
    { sem: "Sem 4", sub: "Consumer Behavior, Financial Management, HRM, Research Methodology", link: "#" },
    { sem: "Sem 5", sub: "Industrial Relations, Cost & Management Accounting, Export Management", link: "#" },
    { sem: "Sem 6", sub: "Strategic Management, International Business, Project & Viva", link: "#" }
],

// 6. BCA - 6 Semesters
'AKTU_BCA': [
    { sem: "Sem 1", sub: "Computer Fundamentals, C Programming, Math-I, Business Communication", link: "#" },
    { sem: "Sem 2", sub: "Data Structures, Digital Electronics, Math-II, Organizational Behavior", link: "#" },
    { sem: "Sem 3", sub: "Object Oriented Programming, DBMS, Software Engineering, Statistics", link: "#" },
    { sem: "Sem 4", sub: "Operating System, Computer Graphics, Java Programming, Discrete Math", link: "#" },
    { sem: "Sem 5", sub: "Web Technology, Computer Network, Python Programming, Multimedia", link: "#" },
    { sem: "Sem 6", sub: "Cyber Security, Mobile App Development, E-Commerce, Final Project", link: "#" }
],

// 7. BHMCT (Hotel Management) - 8 Semesters
'AKTU_BHMCT': [
    { sem: "Sem 1", sub: "Food Production-I, Front Office-I, Food & Beverage Service-I", link: "#" },
    { sem: "Sem 2", sub: "Food Production-II, Front Office-II, Housekeeping-I", link: "#" },
    { sem: "Sem 3", sub: "Hotel Accountancy, Food Production-III, F&B Service-III", link: "#" },
    { sem: "Sem 4", sub: "Food Production-IV, Front Office-III, Housekeeping-III", link: "#" },
    { sem: "Sem 5", sub: "Bakery & Confectionery, Hotel Law, HRM", link: "#" },
    { sem: "Sem 6", sub: "Industrial Training (6 Months Internship)", link: "#" },
    { sem: "Sem 7", sub: "Advanced Food Production, Hospitality Marketing, Research", link: "#" },
    { sem: "Sem 8", sub: "Facility Planning, Entrepreneurship, Project", link: "#" }
],


// 8. BPT (Bachelor of Physiotherapy) - Full 8 Semesters Breakdown
'AKU_BPT': [
    { sem: "Semester 1", sub: "Human Anatomy-I, Human Physiology-I, Biochemistry, English & Communication Skills, Basic Nursing", link: "#" },
    { sem: "Semester 2", sub: "Human Anatomy-II, Human Physiology-II, Psychology, Sociology, Orientation to Physiotherapy",  link: "#" },
    { sem: "Semester 3", sub: "Biomechanics & Kinesiology-I, Exercise Therapy-I, Electrotherapy-I, Medical Microbiology, Pathology", link: "#" },
    { sem: "Semester 4", sub: "Biomechanics & Kinesiology-II, Exercise Therapy-II, Electrotherapy-II, Pharmacology, Ethics in Physiotherapy", link: "#" },
    { sem: "Semester 5", sub: "General Medicine, General Surgery, Community Medicine, Research Methodology & Statistics, Clinical Observation",  link: "#" },
    { sem: "Semester 6", sub: "Orthopaedics & Traumatology, Neurology & Neurosurgery, Pediatrics & Geriatrics, First Aid & CPR", link: "#" },
    { sem: "Semester 7", sub: "PT in Orthopaedics & Sports, PT in Neurology & Psychosomatic Disorders, PT in Cardio-Respiratory Conditions", link: "#" },
    { sem: "Semester 8", sub: "PT in General Medicine & Surgery, Community Based Rehabilitation, Evidence Based Practice, Final Project/Dissertation", link: "#" }
],

// 9. B.ARCH (Architecture) - 10 Semesters
'AKTU_B_ARCH': [
    { sem: "Sem 1", sub: "Architectural Design-I, Graphics-I, Construction-I", link: "#" },
    { sem: "Sem 2", sub: "Architectural Design-II, Graphics-II, Construction-II", link: "#" },
    { sem: "Sem 3", sub: "History of Architecture-I, Climatology, Structural Design", link: "#" },
    { sem: "Sem 4", sub: "History of Architecture-II, Building Services-I, Theory of Design", link: "#" },
    { sem: "Sem 5", sub: "Landscape Design, Interior Design, Sociology & Architecture", link: "#" },
    { sem: "Sem 6", sub: "Building Services-II, Specification & Estimation, Urban Design", link: "#" },
    { sem: "Sem 7", sub: "Practical Training (Full Semester Internship)", link: "#" },
    { sem: "Sem 8", sub: "Architectural Design-VIII, Working Drawing, Elective-I", link: "#" },
    { sem: "Sem 9", sub: "Professional Practice, Housing, Disaster Management", link: "#" },
    { sem: "Sem 10", sub: "Final Thesis Project, Viva-Voce", link: "#" }
],
// 10. BFA (Fine Arts) - Full 8 Semesters Breakdown
// 11. M.TECH (Computer Science & Engineering) - Full 4 Semesters Breakdown
'AKTU_MTECH': [
    { sem: "Semester 1", sub: "Mathematical Foundations of Computer Science, Advanced Data Structures, Research Methodology & IPR, Elective-I, Elective-II", link: "#" },
    { sem: "Semester 2", sub: "Advanced Algorithms, Soft Computing, Elective-III, Elective-IV, Mini Project with Seminar", link: "#" },
    { sem: "Semester 3", sub: "Mobile Computing / Cloud Computing (Elective-V), Open Elective, Dissertation Phase-I (Literature Review & Proposal)", link: "#" },
    { sem: "Semester 4", sub: "Dissertation Phase-II (Final Research Work, Implementation & Thesis Submission), Comprehensive Viva-Voce", link: "#" }
]
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

/* ===========================================
   UPLOAD MODAL LOGIC (TechEraX Hub)
   =========================================== */

// 1. मोडल को खोलने का फंक्शन (Upload बटन के लिए)
function openUpload() {
    const modal = document.getElementById('uploadModal');
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // पीछे का पेज स्क्रॉल न हो
}

// 2. मोडल को बंद करने का फंक्शन (X बटन के लिए)
function closeUpload() {
    const modal = document.getElementById('uploadModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // स्क्रॉल वापस चालू करें
}

// 3. अगर यूजर मोडल के बाहर (Black Area) क्लिक करे तो बंद कर दो
window.addEventListener('click', function(event) {
    const modal = document.getElementById('uploadModal');
    if (event.target == modal) {
        closeUpload();
    }
});

// 4. फॉर्म सबमिट होने पर व्हाट्सएप पर मैसेज भेजना
const uploadForm = document.getElementById('uploadForm');

if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // पेज को रिफ्रेश होने से रोकें

        // इनपुट से डेटा निकालें
        const inputs = this.querySelectorAll('input');
        const name = inputs[0].value;    // छात्र का नाम
        const college = inputs[1].value; // कॉलेज का नाम
        const semester = inputs[2].value; // सेमिस्टर
        // मैसेज तैयार करें
        const message = `नमस्ते TechEraX! मेरा नाम ${name} है और मैं ${college} का छात्र हूँ। मैं पोर्टल के लिए कुछ नोट्स शेयर करना चाहता हूँ।`;
        
        // नए टैब में व्हाट्सएप खोलें
        window.open(whatsappUrl, '_blank');
        
        // फॉर्म बंद करें और छात्र को बताएं
        alert("शानदार! अब आप व्हाट्सएप पर अपनी फाइल शेयर कर सकते हैं।");
        closeUpload();
        this.reset(); // फॉर्म को खाली करें
    });
}

// ---  SUBJECT DATA ---
const subjectData = {
    // --- BCA (Bachelor of Computer Applications) ---
    "BCA": {
        "Sem-1": ["COMMUNICATIVE ENGLISH", "INFORMATION TECHNOLOGY AND APPLICATION", "PRINCIPLES OF MANAGEMENT & ORGANIZATION", "BASIC MATHEMATICS Foundation", "Python Programming"],
        "Sem-2": ["Business English", "MATHEMATICS [NUMERICAL TECHNIQUES]", "SYSTEM ANALYSIS & DESIGN", "PROBLEM SOLVING TECHNIQUE & PROGRAMMING IN C", "OPERATING SYSTEM & UNIX"],
        "Sem-3": ["OBJECT ORIENTED PROGRAMMING USING C++", "INTERNET & WEB DESIGNING", "JAVA PROGRAMMING", "SOFTWARE ENGINEERING", "INTERNET & WEB DESIGNING Practical"],
        "Sem-4": ["RELATIONAL DATA BASE MANAGEMENT SYSTEM", "DIGITAL ELECTRONICS, COMPUTER SYSTEM ARCHITECTURE, AND ORGANISATION", "File & Data Structure", "INTRODUCTION TO STATISTICS"],
        "Sem-5": ["Windows Programming using VB .Net", "GRAPHICS & MULTIMEDIA", "COMPUTER NETWORK, DATA COMMUNICATION, AND CLIENT SERVER TECHNOLOGY", "Business Accounting & ERP"],
        "Sem-6": ["Web Technology", "E-COMMERCE", "Project and Viva"]
    },

    // --- B.TECH (Bachelor of Technology) ---
    "BTECH": {
        "Sem-1": ["Engineering Physics", "Engineering Chemistry", "Calculus & Linear Algebra"],
        "Sem-2": ["Engineering Mechanics", "Basic Electrical", "Maths-II"],
        "Sem-3": ["Digital Logic", "Data Structures", "Discrete Maths"],
        "Sem-4": ["Microprocessor", "Operating System", "Computer Arch"],
        "Sem-5": ["Compiler Design", "Computer Networks", "Database Management Systems"],
        "Sem-6": ["Software Engineering", "Artificial Intelligence", "Machine Learning"],
        "Sem-7": ["Cyber Security", "Cloud Computing", "Project Phase-1"],
        "Sem-8": ["Professional Ethics", "Data Science", "Final Year Project"]
    },

    // --- B.SC NURSING ---
    "NURSING": {
        "Sem-1": ["Anatomy", "Physiology", "Sociology"],
        "Sem-2": ["Nursing Foundation", "Nutrition", "Biochemistry"],
        "Sem-3": ["Microbiology", "Psychology", "Pathology-I"],
        "Sem-4": ["Medical Surgical Nursing-I", "Pharmacology", "Community Health Nursing-I"],
        "Sem-5": ["Child Health Nursing", "Mental Health Nursing"],
        "Sem-6": ["Midwifery", "Obstetrical Nursing"],
        "Sem-7": ["Nursing Research", "Statistics", "Community Health Nursing-II"],
        "Sem-8": ["Internship & Management of Nursing Services"]
    },

    // --- B.PHARMA (Bachelor of Pharmacy) ---
    "BPHARMA": {
        "Sem-1": ["HAP-I", "Pharmaceutics-I", "Inorganic Chem"],
        "Sem-2": ["HAP-II", "Organic Chem-I", "Biochem"],
        "Sem-3": ["Physical Pharmaceutics-I", "Microbiology", "Engineering"],
        "Sem-4": ["Organic Chem-III", "Medicinal Chem-I", "Pharmacology-I"],
        "Sem-5": ["Medicinal Chem-II", "Industrial Pharmacy-I", "Jurisprudence"],
        "Sem-6": ["Pharmacology-III", "Herbal Drug Tech", "Quality Assurance"],
        "Sem-7": ["Instrumental Methods", "Industrial Pharmacy-II"],
        "Sem-8": ["Biostatistics", "Social Pharmacy", "Project Work"]
    },

    // --- BBA (Bachelor of Business Administration) ---
    "BBA": {
        "Sem-1": ["Principles of Mgmt", "Business Comm", "Financial Accounting"],
        "Sem-2": ["Business Economics", "Marketing Management", "HR Mgmt"],
        "Sem-3": ["Organizational Behavior", "Business Law", "Cost Accounting"],
        "Sem-4": ["Business Research", "Financial Management", "Information Systems"],
        "Sem-5": ["Strategic Management", "Production Management", "Entrepreneurship"],
        "Sem-6": ["International Business", "Project & Viva"]
    },

    // --- BMS (Bachelor of Management Studies) ---
    "BMS": {
        "Sem-1": ["Business Ethics", "Micro Economics", "Statistics"],
        "Sem-6": ["Business Policy", "Internship Project"]
        // Note: Semester 2-5 subjects are not in your initial list
    },

    // --- BBE (Bachelor of Business Economics) ---
    "BBE": {
        "Sem-1": ["Macro Economics", "Indian Economy", "Public Finance"],
        "Sem-6": ["International Trade", "Money & Banking"]
        // Note: Semester 2-5 subjects are not in your initial list
    }
};

