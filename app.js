/* ==========================================
   POLITEKNIK MALAYSIA WEB APPLICATION ENGINE
   ========================================== */

// 1. Data Definitions

// Academic Programs Database
const programsData = [
    // Engineering
    {
        code: "DKM",
        title: "Diploma in Mechanical Engineering",
        category: "engineering",
        duration: "3 Years (6 Semesters)",
        desc: "Core mechanical principles, engineering design, CAD modeling, thermofluids, manufacturing processes, and automation systems.",
        requirements: "SPM credit in Math & Science/Physics, pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "PMM", "POLISAS", "PKB"]
    },
    {
        code: "DEP",
        title: "Diploma in Electronic Engineering (Computer)",
        category: "engineering",
        duration: "3 Years (6 Semesters)",
        desc: "Focuses on computer hardware systems, microcontrollers, embedded programming, networking, and digital electronic circuits.",
        requirements: "SPM credit in Math & Science/Physics, pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "PKS", "PIS", "PCC"]
    },
    {
        code: "DKA",
        title: "Diploma in Civil Engineering",
        category: "engineering",
        duration: "3 Years (6 Semesters)",
        desc: "Structural analysis, concrete technology, surveying, hydraulics, soil mechanics, and construction project management.",
        requirements: "SPM credit in Math & Science/Physics, pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "PKB", "PMM", "PMU"]
    },
    {
        code: "DEE",
        title: "Diploma in Electrical Engineering",
        category: "engineering",
        duration: "3 Years (6 Semesters)",
        desc: "Electrical power systems, electrical machines, control systems, electrical installation design, and power electronics.",
        requirements: "SPM credit in Math & Science/Physics, pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "POLISAS", "PIS", "PKP"]
    },

    // Information Technology
    {
        code: "DDT-SE",
        title: "Diploma in Information Technology (Software Engineering)",
        category: "it",
        duration: "3 Years (6 Semesters)",
        desc: "Modern programming paradigms (Java, Python, JS), databases, system analysis, software testing, and agile methodologies.",
        requirements: "SPM credit in Math, Science/Physics & 1 other subject; pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "PIS", "PKS", "PTSB"]
    },
    {
        code: "DDT-IS",
        title: "Diploma in Information Technology (Information Security)",
        category: "it",
        duration: "3 Years (6 Semesters)",
        desc: "Network infrastructure, cybersecurity fundamentals, ethical hacking, cryptography, digital forensics, and defense systems.",
        requirements: "SPM credit in Math, Science/Physics & 1 other subject; pass in BM, Sejarah & English.",
        campuses: ["PUO", "PSA", "PKS", "PCC"]
    },
    {
        code: "DDT-NW",
        title: "Diploma in Information Technology (Networking)",
        category: "it",
        duration: "3 Years (6 Semesters)",
        desc: "CCNA-aligned routing & switching, server administration, cloud computing, wireless networks, and network virtualization.",
        requirements: "SPM credit in Math, Science/Physics & 1 other subject; pass in BM, Sejarah & English.",
        campuses: ["PSA", "PIS", "PKS", "PTSB", "PMU"]
    },

    // Commerce & Hospitality
    {
        code: "DAT",
        title: "Diploma in Accountancy",
        category: "commerce",
        duration: "3 Years (6 Semesters)",
        desc: "Financial accounting, management accounting, auditing, taxation, corporate finance, and accounting software tools.",
        requirements: "SPM credit in BM, English, Mathematics & 2 other subjects; pass in Sejarah.",
        campuses: ["PUO", "PSA", "PIS", "POLISAS", "PKB", "PTSB"]
    },
    {
        code: "DPR",
        title: "Diploma in Marketing",
        category: "commerce",
        duration: "3 Years (6 Semesters)",
        desc: "Consumer behavior, digital marketing strategy, sales management, advertising, branding, and market analytics.",
        requirements: "SPM credit in BM, English, and 3 other subjects; credit in Math is preferred; pass in Sejarah.",
        campuses: ["PUO", "PMM", "POLISAS", "PIS"]
    },
    {
        code: "DHR",
        title: "Diploma in Hotel Management",
        category: "commerce",
        duration: "3 Years (6 Semesters)",
        desc: "Front office procedures, housekeeping management, food & beverage operations, hospitality law, and guest services.",
        requirements: "SPM credit in BM, English, and 3 other subjects; pass in Mathematics & Sejarah.",
        campuses: ["PMM", "PKB", "PKS", "PMK"]
    },
    {
        code: "DCA",
        title: "Diploma in Culinary Arts",
        category: "commerce",
        duration: "3 Years (6 Semesters)",
        desc: "Professional food preparation, baking & pastry, international cuisines, kitchen safety & sanitation, and restaurant operations.",
        requirements: "SPM credit in BM, English, and 3 other subjects; pass in Mathematics & Sejarah.",
        campuses: ["PMM", "PKB", "PMK"]
    },

    // Design & Arts
    {
        code: "DDG",
        title: "Diploma in Digital Design",
        category: "design",
        duration: "3 Years (6 Semesters)",
        desc: "2D/3D modeling, graphic design principles, animation pipelines, web UI/UX layout, and video editing production.",
        requirements: "SPM credit in BM, Sejarah, and 3 other subjects; pass in Math & Drawing/Art test.",
        campuses: ["PIS", "PKS", "PTSB"]
    },
    {
        code: "DID",
        title: "Diploma in Industrial Design",
        category: "design",
        duration: "3 Years (6 Semesters)",
        desc: "Product design prototyping, materials science, ergonomics, packaging design, CAD rendering, and product design branding.",
        requirements: "SPM credit in BM, Sejarah, and 3 other subjects; pass in Math & Drawing/Art test.",
        campuses: ["PIS", "PTSB"]
    }
];

// Campuses Database
const campusesData = [
    { code: "PUO", name: "Politeknik Ungku Omar", stateCode: "northern", location: "Ipoh, Perak", tags: ["Premier", "Engineering", "IT", "Accountancy"] },
    { code: "PSA", name: "Politeknik Sultan Salahuddin Abdul Aziz Shah", stateCode: "central", location: "Shah Alam, Selangor", tags: ["Premier", "Engineering", "IT", "Creative Design"] },
    { code: "PIS", name: "Politeknik Ibrahim Sultan", stateCode: "southern", location: "Pasir Gudang, Johor", tags: ["Premier", "Creative Design", "IT", "Engineering"] },
    { code: "POLISAS", name: "Politeknik Sultan Haji Ahmad Shah", stateCode: "eastern", location: "Kuantan, Pahang", tags: ["Engineering", "Commerce", "Food Tech"] },
    { code: "PKB", name: "Politeknik Kota Bharu", stateCode: "eastern", location: "Ketereh, Kelantan", tags: ["Engineering", "Accountancy", "Tourism"] },
    { code: "PMM", name: "Politeknik Merlimau", stateCode: "southern", location: "Merlimau, Melaka", tags: ["Hospitality", "Engineering", "Commerce"] },
    { code: "PKS", name: "Politeknik Kuching Sarawak", stateCode: "borneo", location: "Kuching, Sarawak", tags: ["Engineering", "IT", "Accountancy"] },
    { code: "PTSB", name: "Politeknik Tuanku Sultanah Bahiyah", stateCode: "northern", location: "Kulim, Kedah", tags: ["Engineering", "IT", "Commerce"] },
    { code: "PMU", name: "Politeknik Mukah", stateCode: "borneo", location: "Mukah, Sarawak", tags: ["IT", "Engineering", "Accountancy"] },
    { code: "PKP", name: "Politeknik Balik Pulau", stateCode: "northern", location: "Balik Pulau, Penang", tags: ["IT", "Engineering", "Tourism"] },
    { code: "PMK", name: "Politeknik Metro Kuantan", stateCode: "eastern", location: "Kuantan, Pahang", tags: ["Culinary Arts", "Hotel Management", "Retail"] },
    { code: "PCC", name: "Politeknik METrO Kuala Lumpur", stateCode: "central", location: "Setiawangsa, Kuala Lumpur", tags: ["IT Security", "Commerce", "Vibrant City"] }
];

// Helper mapping SPM Grade string to numeric score (lower is better, e.g., A+ = 1, G = 9)
// and checking credit eligibility (A+ to C are credits, D & E are passes, G is fail)
const gradeValues = {
    "A+": 1, "A": 2, "A-": 3,
    "B+": 4, "B": 5, "C+": 6, "C": 7,
    "D": 8, "E": 9, "G": 10
};

function isCredit(grade) {
    const val = gradeValues[grade];
    return val !== undefined && val <= 7; // A+ to C
}

function isPass(grade) {
    const val = gradeValues[grade];
    return val !== undefined && val <= 9; // A+ to E
}

// 2. Application Logic and Event Bindings
document.addEventListener("DOMContentLoaded", () => {
    
    // Scrolled Header Control
    const header = document.querySelector(".glass-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Hamburger Menu Navigation Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.classList.toggle("open");
        
        // Animated hamburger bars
        const bars = mobileMenuBtn.querySelectorAll(".bar");
        if (mobileMenuBtn.classList.contains("open")) {
            bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenuBtn.classList.remove("open");
            mobileMenuBtn.querySelectorAll(".bar").forEach(b => b.style.transform = "none");
            mobileMenuBtn.querySelectorAll(".bar")[1].style.opacity = "1";
        });
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll(".stat-num");
    let countTriggered = false;

    const runCounters = () => {
        stats.forEach(stat => {
            const val = parseInt(stat.getAttribute("data-val"));
            const suffix = stat.getAttribute("data-suffix") || "";
            const duration = 2000; // ms
            const stepTime = 30;
            const steps = duration / stepTime;
            let current = 0;
            const increment = Math.ceil(val / steps);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= val) {
                    current = val;
                    clearInterval(timer);
                }
                
                // Format large numbers
                if (val >= 10000) {
                    stat.textContent = current.toLocaleString() + suffix;
                } else {
                    stat.textContent = current + suffix;
                }
            }, stepTime);
        });
    };

    // Intersection Observer to trigger counter when stats section enters viewport
    const statsBar = document.querySelector(".stats-bar");
    if (statsBar) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countTriggered) {
                runCounters();
                countTriggered = true;
            }
        }, { threshold: 0.25 });
        observer.observe(statsBar);
    }

    // Render Academic Programs Grid
    const programsGrid = document.getElementById("programs-display-grid");
    
    const renderPrograms = (categoryFilter = "all") => {
        programsGrid.innerHTML = "";
        
        const filtered = programsData.filter(prog => {
            return categoryFilter === "all" || prog.category === categoryFilter;
        });

        filtered.forEach(prog => {
            const card = document.createElement("div");
            card.className = "program-card";
            
            // Map campus code array to campus full names
            const campusNames = prog.campuses.map(code => {
                const camp = campusesData.find(c => c.code === code);
                return camp ? camp.name : code;
            }).join(", ");

            card.innerHTML = `
                <div class="program-meta">
                    <span class="program-tag ${prog.category}">${prog.category.toUpperCase()}</span>
                    <span class="program-duration">${prog.duration}</span>
                </div>
                <h3>${prog.title} (${prog.code})</h3>
                <p>${prog.desc}</p>
                <div class="program-req">
                    <div class="program-req-title">Minimum SPM Entry Requirements</div>
                    <div class="program-req-text">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>${prog.requirements}</span>
                    </div>
                </div>
            `;
            programsGrid.appendChild(card);
        });
    };

    // Render all initially
    if (programsGrid) {
        renderPrograms();
    }

    // Program Tab Filters
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.getAttribute("data-category");
            renderPrograms(cat);
        });
    });

    // Render Campuses Grid
    const campusGrid = document.getElementById("campus-display-grid");
    
    const renderCampuses = (stateFilter = "all") => {
        campusGrid.innerHTML = "";
        
        const filtered = campusesData.filter(camp => {
            return stateFilter === "all" || camp.stateCode === stateFilter;
        });

        filtered.forEach(camp => {
            const card = document.createElement("div");
            card.className = "campus-card";
            
            let tagsHtml = camp.tags.map(t => `<span class="campus-ctag">${t}</span>`).join("");

            card.innerHTML = `
                <div class="campus-code">${camp.code}</div>
                <h4>${camp.name}</h4>
                <div class="campus-loc"><i class="fa-solid fa-location-dot"></i> ${camp.location}</div>
                <div class="campus-tag-group">
                    ${tagsHtml}
                </div>
            `;
            campusGrid.appendChild(card);
        });
    };

    if (campusGrid) {
        renderCampuses();
    }

    // Campus State Sidebar Filter
    const stateItems = document.querySelectorAll(".state-item");
    stateItems.forEach(item => {
        item.addEventListener("click", () => {
            stateItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            const state = item.getAttribute("data-state");
            renderCampuses(state);
        });
    });

    // Testimonial Carousel / Slider
    const slides = document.querySelectorAll(".testimonial-slide");
    const sliderDotsContainer = document.getElementById("slider-dots-container");
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
        sliderDotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dot");

    const goToSlide = (index) => {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        
        currentSlide = (index + slides.length) % slides.length;
        
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    };

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            goToSlide(currentSlide + 1);
        });
        
        prevBtn.addEventListener("click", () => {
            goToSlide(currentSlide - 1);
        });

        // Auto transition every 6 seconds
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 6000);
    }

    // Quick Course Search Bar (Hero Section)
    const searchInput = document.getElementById("course-quick-search");
    const searchDropdown = document.getElementById("search-results-dropdown");

    if (searchInput && searchDropdown) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchDropdown.classList.add("hidden");
                return;
            }

            const results = programsData.filter(prog => 
                prog.title.toLowerCase().includes(query) || 
                prog.code.toLowerCase().includes(query) ||
                prog.desc.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                searchDropdown.innerHTML = `<div class="search-dropdown-item"><span class="item-title">No matching courses found</span></div>`;
            } else {
                searchDropdown.innerHTML = results.map(prog => `
                    <div class="search-dropdown-item" data-code="${prog.code}">
                        <div class="item-title">${prog.title} (${prog.code})</div>
                        <div class="item-cat">${prog.category.toUpperCase()} • ${prog.duration}</div>
                    </div>
                `).join("");

                // Click event inside dropdown
                searchDropdown.querySelectorAll(".search-dropdown-item").forEach(item => {
                    item.addEventListener("click", () => {
                        const code = item.getAttribute("data-code");
                        searchInput.value = item.querySelector(".item-title").textContent;
                        searchDropdown.classList.add("hidden");
                        
                        // Scroll to programs section and filter / highlight
                        const tabBtn = Array.from(tabBtns).find(btn => 
                            btn.getAttribute("data-category") === programsData.find(p => p.code === code).category
                        );
                        if (tabBtn) tabBtn.click();
                        
                        document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
                    });
                });
            }
            searchDropdown.classList.remove("hidden");
        });

        // Close search dropdown on click outside
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.add("hidden");
            }
        });
    }

    // 3. SPM Course Eligibility Matchmaker Calculation Engine
    const matchmakerForm = document.getElementById("matchmaker-form");
    const placeholderBox = document.getElementById("results-placeholder-box");
    const resultsBox = document.getElementById("results-content-box");
    const eligibilityIndex = document.getElementById("eligibility-index");
    const categoriesList = document.getElementById("results-categories-list");

    if (matchmakerForm) {
        matchmakerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Extract grades
            const bm = document.getElementById("grade-bm").value;
            const sej = document.getElementById("grade-sej").value;
            const math = document.getElementById("grade-math").value;
            const eng = document.getElementById("grade-eng").value;
            const sci = document.getElementById("grade-sci").value;
            const addMath = document.getElementById("grade-addmath").value;
            const stream = document.querySelector('input[name="stream"]:checked').value;

            // Compute indices and credits
            const subjects = [bm, sej, math, eng, sci];
            if (addMath !== "NONE") subjects.push(addMath);
            
            const totalCredits = subjects.filter(isCredit).length;
            
            // Standard TVET rules algorithm:
            let qualifiedGroups = [];

            // Group 1: Engineering Diplomas
            // Require: Credit in Mathematics & Credit in Science/Physics/Chemistry, Pass in BM, Sejarah & English
            const qualifiesEngineering = isCredit(math) && isCredit(sci) && isPass(bm) && isPass(sej) && isPass(eng);
            if (qualifiesEngineering) {
                qualifiedGroups.push({
                    title: "Engineering Faculty Programs",
                    desc: "You qualify for Mechanical, Electrical, Civil, and Electronic Engineering. Excellent base score in Math and Sciences.",
                    status: "Full Eligibility",
                    statusClass: "text-success",
                    badge: "fa-solid fa-microchip"
                });
            } else if (isPass(math) && isPass(sci) && isPass(bm) && isPass(sej)) {
                qualifiedGroups.push({
                    title: "Engineering Faculty Programs",
                    desc: "Conditional Eligibility: Core passes met, but credit grades in Math/Science are required for major engineering branches. Bridging or basic certificate entry paths available.",
                    status: "Conditional Path",
                    statusClass: "conditional",
                    badge: "fa-solid fa-microchip"
                });
            }

            // Group 2: Information Technology & Networks
            // Require: Credit in Mathematics, Credit in 1 Science/ICT/Tech subject, Pass in BM, Sejarah & English
            const qualifiesIT = isCredit(math) && (isCredit(sci) || isCredit(addMath)) && isPass(bm) && isPass(sej) && isPass(eng);
            if (qualifiesIT) {
                qualifiedGroups.push({
                    title: "Information Technology & Coding",
                    desc: "You qualify for Software Engineering, Networking, and Information Security. Solid qualifications for digital infrastructure tracks.",
                    status: "Full Eligibility",
                    statusClass: "text-success",
                    badge: "fa-solid fa-code"
                });
            }

            // Group 3: Commerce & Business Studies
            // Require: Credit in BM, English, Math and 2 other subjects, Pass in Sejarah
            const qualifiesCommerce = isCredit(bm) && isCredit(eng) && isCredit(math) && totalCredits >= 5 && isPass(sej);
            if (qualifiesCommerce) {
                qualifiedGroups.push({
                    title: "Accountancy & Commerce",
                    desc: "You qualify for Diploma in Accountancy and Diploma in Marketing. Excellent grades in language and quantitative subjects.",
                    status: "Full Eligibility",
                    statusClass: "text-success",
                    badge: "fa-solid fa-chart-line"
                });
            } else if (isPass(bm) && isPass(math) && isPass(sej) && totalCredits >= 3) {
                // Generous business requirements for hotel / hospitality
                qualifiedGroups.push({
                    title: "Hospitality & Culinary Arts",
                    desc: "You qualify for Hospitality and Culinary programs. Pass in Math and credits in other SPM subjects allow entry.",
                    status: "Full Eligibility",
                    statusClass: "text-success",
                    badge: "fa-solid fa-utensils"
                });
            }

            // Group 4: Creative Design & Industrial Design
            // Require: Credit in BM, Sejarah, and 3 other subjects, Pass in Math, Pass Drawing/Art Test
            const qualifiesDesign = isCredit(bm) && isCredit(sej) && totalCredits >= 4 && isPass(math);
            if (qualifiesDesign) {
                qualifiedGroups.push({
                    title: "Digital Design & Industrial Arts",
                    desc: "You qualify for Digital Design and Product Design. Must pass the design drawing test during physical interview.",
                    status: "Interview Track",
                    statusClass: "conditional",
                    badge: "fa-solid fa-palette"
                });
            }

            // Calculate overall Compatibility Index percentage
            let compatibilityScore = Math.round((totalCredits / (addMath !== "NONE" ? 6 : 5)) * 100);
            if (compatibilityScore > 100) compatibilityScore = 100;
            
            // Set values
            eligibilityIndex.textContent = `${compatibilityScore}% Match`;
            
            // Clear list
            categoriesList.innerHTML = "";
            
            if (qualifiedGroups.length === 0) {
                categoriesList.innerHTML = `
                    <div class="result-cat-card">
                        <div class="result-cat-header">
                            <span class="result-cat-title"><i class="fa-solid fa-circle-xmark text-danger"></i> Alternative Entry Paths</span>
                            <span class="result-cat-status text-danger">No Standard Match</span>
                        </div>
                        <p class="result-cat-desc">Standard diploma entry thresholds were not met. We recommend checking out the Polytechnic Certificate programs or community college pathways which have flexible criteria.</p>
                    </div>
                `;
            } else {
                qualifiedGroups.forEach(group => {
                    const card = document.createElement("div");
                    card.className = "result-cat-card";
                    card.innerHTML = `
                        <div class="result-cat-header">
                            <span class="result-cat-title"><i class="${group.badge}"></i> ${group.title}</span>
                            <span class="result-cat-status ${group.statusClass}">${group.status}</span>
                        </div>
                        <p class="result-cat-desc">${group.desc}</p>
                    `;
                    categoriesList.appendChild(card);
                });
            }

            // Hide placeholder, show results with fade-in
            placeholderBox.classList.add("hidden");
            resultsBox.classList.remove("hidden");
            resultsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
});

