// ==========================================================================
// 1. Data & State
// ==========================================================================

const defaultServices = [
  {
    id: 1,
    name: "Abdullah Khan",
    serviceTitle: "Full Stack Web Application & REST APIs",
    category: "Web Development",
    price: 150,
    rating: 4.9,
    reviews: 38,
    img: "https://i.pravatar.cc/150?img=33",
    description: "Software engineer experienced in building scalable web apps with modern JavaScript, MERN stack architectures, and custom APIs.",
    deliveryTime: 7,
    skills: ["React", "Node.js", "MongoDB", "REST API"],
    serviceImg: "",
    isUserCreated: true
  },
  {
    id: 2,
    name: "Sarah Ali",
    serviceTitle: "Brand Identity & Modern Logo Design",
    category: "Graphic Design",
    price: 80,
    rating: 5.0,
    reviews: 64,
    img: "https://i.pravatar.cc/150?img=5",
    description: "Creative designer specializing in minimalism, vector graphics, and responsive visual branding.",
    deliveryTime: 5,
    skills: ["Adobe Illustrator", "Logo Design", "Branding"],
    serviceImg: "",
    isUserCreated: false
  },
  {
    id: 3,
    name: "James Obi",
    serviceTitle: "React Native Mobile App Development",
    category: "Mobile Apps",
    price: 200,
    rating: 4.7,
    reviews: 22,
    img: "https://i.pravatar.cc/150?img=12",
    description: "Cross-platform mobile developer building polished iOS and Android apps with React Native and Expo.",
    deliveryTime: 14,
    skills: ["React Native", "Expo", "Firebase"],
    serviceImg: "",
    isUserCreated: false
  },
  {
    id: 4,
    name: "Priya Sharma",
    serviceTitle: "Data Dashboard & Business Intelligence Reports",
    category: "Data Analysis",
    price: 120,
    rating: 4.8,
    reviews: 31,
    img: "https://i.pravatar.cc/150?img=47",
    description: "Data analyst building interactive Power BI and Tableau dashboards from raw datasets.",
    deliveryTime: 6,
    skills: ["Python", "Power BI", "SQL", "Pandas"],
    serviceImg: "",
    isUserCreated: false
  },
  {
    id: 5,
    name: "Carlos Mendez",
    serviceTitle: "SEO Strategy & Digital Marketing Campaign",
    category: "Digital Marketing",
    price: 90,
    rating: 4.6,
    reviews: 45,
    img: "https://i.pravatar.cc/150?img=60",
    description: "Digital marketer specializing in organic SEO, Google Ads, and social media growth strategies.",
    deliveryTime: 10,
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    serviceImg: "",
    isUserCreated: false
  }
];

const defaultJobs = [
  {
    id: 101,
    clientName: "TechCorp Solutions",
    title: "E-Commerce Frontend Specialist Needed",
    category: "Web Development",
    budget: 500,
    skills: ["JavaScript", "HTML5", "CSS3", "REST API"],
    description: "Looking for an experienced frontend developer to build responsive product pages and integrate dynamic checkout workflows.",
    postedDate: "2 days ago",
    proposalsCount: 5
  },
  {
    id: 102,
    clientName: "Nexus Brand Agency",
    title: "Minimalist Vector Logo & Style Guide",
    category: "Graphic Design",
    budget: 250,
    skills: ["Adobe Illustrator", "Logo Design", "Branding"],
    description: "We need a clean, modern logo redesign along with brand color palettes and typography guidelines for a tech startup.",
    postedDate: "1 day ago",
    proposalsCount: 8
  },
  {
    id: 103,
    clientName: "FinTech Global Ltd",
    title: "iOS & Android Banking App UI",
    category: "Mobile Apps",
    budget: 1200,
    skills: ["Flutter", "Firebase", "UI/UX", "Dart"],
    description: "Seeking a skilled mobile developer to build a cross-platform banking app with biometric login, dashboards, and transaction history.",
    postedDate: "3 days ago",
    proposalsCount: 12
  },
  {
    id: 104,
    clientName: "RetailMax Inc.",
    title: "Sales Data Analysis & Power BI Dashboard",
    category: "Data Analysis",
    budget: 400,
    skills: ["Python", "Power BI", "SQL", "Excel"],
    description: "We need a detailed sales performance analysis and an interactive Power BI dashboard to track KPIs across regions.",
    postedDate: "5 hours ago",
    proposalsCount: 3
  }
];

const defaultOrders = [
  {
    id: 201,
    title: "E-Commerce Frontend Specialist Needed",
    providerName: "Abdullah Khan",
    clientName: "TechCorp Solutions",
    serviceId: 1,
    price: 500,
    deadline: "2026-10-05",
    createdDate: "2026-09-20",
    status: "In Progress",
    milestones: [
      { id: "m1", title: "Project Setup & Wireframe Approval", completed: true },
      { id: "m2", title: "Product Pages & Shopping Cart Frontend", completed: true },
      { id: "m3", title: "API Integration & Checkout Flow", completed: false }
    ],
    delivery: { link: "", notes: "", deliveredAt: null },
    review: null
  },
  {
    id: 202,
    title: "Minimalist Vector Logo & Style Guide",
    providerName: "Sarah Ali",
    clientName: "Nexus Brand Agency",
    serviceId: 2,
    price: 250,
    deadline: "2026-09-18",
    createdDate: "2026-09-10",
    status: "Completed",
    milestones: [
      { id: "m10", title: "Initial Concept Sketches", completed: true },
      { id: "m11", title: "Vector Design & Typography Guide", completed: true }
    ],
    delivery: {
      link: "https://drive.google.com/sample-logo-assets",
      notes: "Vector files (AI, SVG, PNG) and brand guide attached.",
      deliveredAt: "2026-09-17"
    },
    review: { rating: 5, comment: "Exceptional design and swift delivery!" }
  }
];

// State
let services  = JSON.parse(localStorage.getItem("fhub_services"))  || defaultServices;
let jobs      = JSON.parse(localStorage.getItem("fhub_jobs"))      || defaultJobs;
let proposals = JSON.parse(localStorage.getItem("fhub_proposals")) || [];
let orders    = JSON.parse(localStorage.getItem("fhub_orders"))    || defaultOrders;

let userProfile = JSON.parse(localStorage.getItem("fhub_profile")) || {
  name: "Abdullah Khan",
  title: "Software Engineer & Development Specialist",
  bio: "Passionate software engineer experienced in full-stack web applications, game development in Unity, and agile project management.",
  experience: "3+ years of professional software development experience, including freelance projects, internships, and full-time roles.",
  rating: 4.9,
  completed: 14,
  img: "https://i.pravatar.cc/150?img=33"
};

let currentCategory    = "All";
let searchQuery        = "";
let currentSort        = "default";
let currentOrderTab    = "all";
let currentActiveOrderId = null;

// ==========================================================================
// 2. Utility Functions
// ==========================================================================

function showToast(message, type = "success") {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function saveToStorage() {
  localStorage.setItem("fhub_services",  JSON.stringify(services));
  localStorage.setItem("fhub_jobs",      JSON.stringify(jobs));
  localStorage.setItem("fhub_proposals", JSON.stringify(proposals));
  localStorage.setItem("fhub_orders",    JSON.stringify(orders));
  localStorage.setItem("fhub_profile",   JSON.stringify(userProfile));
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "flex";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "none";
}

// ==========================================================================
// 3. View Navigation
// ==========================================================================

const allViews = [
  "homeView", "freelancersView", "jobsView", "myServicesView",
  "myProposalsView", "ordersView", "projectDetailsView",
  "aboutView", "profileView"
];

const allNavLinks = [
  "navHome", "navFreelancers", "navJobs", "navMyServices",
  "navMyProposals", "navOrders", "navAbout", "navProfile"
];

function showView(viewName) {
  allViews.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  allNavLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  const viewMap = {
    home:           { view: "homeView",          nav: "navHome" },
    freelancers:    { view: "freelancersView",    nav: "navFreelancers" },
    jobs:           { view: "jobsView",           nav: "navJobs" },
    myServices:     { view: "myServicesView",     nav: "navMyServices" },
    proposals:      { view: "myProposalsView",    nav: "navMyProposals" },
    orders:         { view: "ordersView",         nav: "navOrders" },
    projectDetails: { view: "projectDetailsView", nav: "navOrders" },
    about:          { view: "aboutView",          nav: "navAbout" },
    profile:        { view: "profileView",        nav: "navProfile" }
  };

  const target = viewMap[viewName];
  if (!target) return;

  const viewEl = document.getElementById(target.view);
  const navEl  = document.getElementById(target.nav);

  if (viewEl) viewEl.classList.remove("hidden");
  if (navEl)  navEl.classList.add("active");

  // Re-render on navigation
  if (viewName === "home")        renderMarketplace();
  if (viewName === "freelancers") renderFreelancerBrowse();
  if (viewName === "jobs")        renderJobs();
  if (viewName === "myServices")  renderMyServices();
  if (viewName === "proposals")   renderProposals();
  if (viewName === "orders")      renderOrders();
  if (viewName === "profile")     updateProfileDOM();

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close hamburger menu on mobile
  const navLinksMenu = document.getElementById("navLinksMenu");
  if (navLinksMenu) navLinksMenu.classList.remove("open");
}

// Category shortcut from category cards
window.filterByCategory = function(cat) {
  currentCategory = cat;
  showView("freelancers");
  // sync filter buttons in freelancers view
  document.querySelectorAll("[data-fcat]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.fcat === cat);
  });
  renderFreelancerBrowse();
};

// ==========================================================================
// 4. Setup All Event Listeners
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderMarketplace();
  renderFreelancerBrowse();
  renderJobs();
  renderProposals();
  renderMyServices();
  renderOrders();
  updateProfileDOM();
  setupEventListeners();
});

function setupEventListeners() {

  // --- Hamburger ---
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinksMenu = document.getElementById("navLinksMenu");
  if (hamburgerBtn && navLinksMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navLinksMenu.classList.toggle("open");
    });
  }

  // --- Nav Links ---
  const navMap = {
    navHome:        "home",
    navFreelancers: "freelancers",
    navJobs:        "jobs",
    navMyServices:  "myServices",
    navMyProposals: "proposals",
    navOrders:      "orders",
    navAbout:       "about",
    navProfile:     "profile"
  };

  Object.entries(navMap).forEach(([id, view]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", (e) => { e.preventDefault(); showView(view); });
  });

  // --- Back to Orders ---
  const backBtn = document.getElementById("backToOrdersBtn");
  if (backBtn) backBtn.addEventListener("click", () => showView("orders"));

  // --- Auth Buttons ---
  const openLoginBtn    = document.getElementById("openLoginBtn");
  const openRegisterBtn = document.getElementById("openRegisterBtn");
  const switchToReg     = document.getElementById("switchToRegister");
  const switchToLog     = document.getElementById("switchToLogin");

  if (openLoginBtn)    openLoginBtn.addEventListener("click",    () => openModal("loginModal"));
  if (openRegisterBtn) openRegisterBtn.addEventListener("click", () => openModal("registerModal"));

  if (switchToReg) switchToReg.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("loginModal");
    openModal("registerModal");
  });

  if (switchToLog) switchToLog.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("registerModal");
    openModal("loginModal");
  });

  const closeLoginBtn    = document.getElementById("closeLoginModal");
  const closeRegisterBtn = document.getElementById("closeRegisterModal");
  if (closeLoginBtn)    closeLoginBtn.addEventListener("click",    () => closeModal("loginModal"));
  if (closeRegisterBtn) closeRegisterBtn.addEventListener("click", () => closeModal("registerModal"));

  // --- Login Form ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("loginModal");
      loginForm.reset();
      showToast("Welcome back! You are now logged in.", "success");
    });
  }

  // --- Register Form ---
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass    = document.getElementById("regPassword").value;
      const confirm = document.getElementById("regConfirmPassword").value;
      if (pass !== confirm) {
        showToast("Passwords do not match. Please try again.", "error");
        return;
      }
      closeModal("registerModal");
      registerForm.reset();
      showToast("Account created successfully! Welcome to FHub.", "success");
    });
  }

  // --- Search ---
  const searchInput = document.getElementById("searchInput");
  const searchBtn   = document.getElementById("searchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMarketplace();
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchQuery = document.getElementById("searchInput").value;
      showView("freelancers");
      renderFreelancerBrowse();
    });
  }

  // --- Home category filters ---
  document.querySelectorAll("#categoryFilters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "All";
      renderMarketplace();
    });
  });

  // --- Sort (home) ---
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderMarketplace();
    });
  }

  // --- Freelancer Browse Filters ---
  const freelancerSearchInput = document.getElementById("freelancerSearchInput");
  if (freelancerSearchInput) {
    freelancerSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderFreelancerBrowse();
    });
  }

  document.querySelectorAll("[data-fcat]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-fcat]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.fcat || "All";
      renderFreelancerBrowse();
    });
  });

  const freelancerSortSelect = document.getElementById("freelancerSortSelect");
  if (freelancerSortSelect) {
    freelancerSortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderFreelancerBrowse();
    });
  }

  // --- Jobs Filters ---
  const jobSearchInput = document.getElementById("jobSearchInput");
  if (jobSearchInput) {
    jobSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderJobs();
    });
  }

  document.querySelectorAll("[data-jobcat]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-jobcat]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.jobcat || "All";
      renderJobs();
    });
  });

  const jobSortSelect = document.getElementById("jobSortSelect");
  if (jobSortSelect) {
    jobSortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderJobs();
    });
  }

  // --- Order Tabs ---
  document.querySelectorAll(".order-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".order-tab-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      currentOrderTab = e.currentTarget.dataset.tab;
      renderOrders(currentOrderTab);
    });
  });

  // --- Post a Job ---
  const openPostJobBtn   = document.getElementById("openPostJobBtn");
  const closePostJobBtn  = document.getElementById("closePostJobModal");
  const postJobForm      = document.getElementById("postJobForm");

  if (openPostJobBtn)  openPostJobBtn.addEventListener("click",  () => openModal("postJobModal"));
  if (closePostJobBtn) closePostJobBtn.addEventListener("click", () => closeModal("postJobModal"));

  if (postJobForm) {
    postJobForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title       = document.getElementById("jobTitleInput").value.trim();
      const category    = document.getElementById("jobCategoryInput").value;
      const budget      = parseFloat(document.getElementById("jobBudgetInput").value);
      const skillsRaw   = document.getElementById("jobSkillsInput").value.trim();
      const description = document.getElementById("jobDescInput").value.trim();

      const newJob = {
        id: Date.now(),
        clientName: userProfile.name,
        title, category, budget,
        skills: skillsRaw ? skillsRaw.split(",").map(s => s.trim()) : [],
        description,
        postedDate: "Just now",
        proposalsCount: 0
      };

      jobs.unshift(newJob);
      saveToStorage();
      postJobForm.reset();
      closeModal("postJobModal");
      renderJobs();
      showToast("Job posted successfully!", "success");
    });
  }

  // --- Proposal Form ---
  const closeProposalBtn = document.getElementById("closeProposalModal");
  const proposalForm     = document.getElementById("proposalForm");

  if (closeProposalBtn) closeProposalBtn.addEventListener("click", () => closeModal("submitProposalModal"));

  if (proposalForm) {
    proposalForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const jobId      = document.getElementById("proposalJobId").value;
      const bidAmount  = parseFloat(document.getElementById("proposalPrice").value);
      const estTime    = parseInt(document.getElementById("proposalDuration").value);
      const skills     = document.getElementById("proposalSkills").value.trim();
      const experience = document.getElementById("proposalExperience").value.trim();
      const pitch      = document.getElementById("proposalCoverLetter").value.trim();
      const job        = jobs.find(j => j.id == jobId);

      const newProposal = {
        id: Date.now(),
        jobId,
        jobTitle:      job ? job.title : "Custom Project",
        clientName:    job ? job.clientName : "Client",
        freelancerName: userProfile.name,
        bidAmount,
        deliveryTime:  estTime,
        skills,
        experience,
        coverLetter:   pitch,
        status:        "Pending",
        submittedDate: new Date().toLocaleDateString()
      };

      proposals.push(newProposal);

      if (job) {
        job.proposalsCount = (job.proposalsCount || 0) + 1;
      }

      saveToStorage();
      proposalForm.reset();
      closeModal("submitProposalModal");
      renderJobs();
      renderProposals();
      showToast("Proposal submitted successfully!", "success");
    });
  }

  // --- Service Modal ---
  const dashboardCreateBtn = document.getElementById("dashboardCreateServiceBtn");
  const closeServiceBtn    = document.getElementById("closeServiceModal");
  const serviceForm        = document.getElementById("serviceForm");
  const serviceImageInput  = document.getElementById("serviceImageInput");
  const serviceImagePrev   = document.getElementById("serviceImagePreview");

  if (dashboardCreateBtn) dashboardCreateBtn.addEventListener("click", () => openServiceModal());
  if (closeServiceBtn)    closeServiceBtn.addEventListener("click",    () => closeModal("serviceModal"));

  if (serviceImageInput && serviceImagePrev) {
    serviceImageInput.addEventListener("change", () => {
      const file = serviceImageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          serviceImagePrev.src = ev.target.result;
          serviceImagePrev.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (serviceForm) {
    serviceForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const id          = document.getElementById("serviceId").value;
      const title       = document.getElementById("serviceTitleInput").value.trim();
      const category    = document.getElementById("serviceCategoryInput").value;
      const price       = parseFloat(document.getElementById("servicePriceInput").value);
      const delivery    = parseInt(document.getElementById("serviceDeliveryInput").value);
      const skillsRaw   = document.getElementById("serviceSkillsInput").value.trim();
      const description = document.getElementById("serviceDescInput").value.trim();
      const imgFile     = document.getElementById("serviceImageInput").files[0];

      const processService = (imgDataUrl) => {
        if (id) {
          const idx = services.findIndex(s => s.id == id);
          if (idx !== -1) {
            services[idx].serviceTitle  = title;
            services[idx].category      = category;
            services[idx].price         = price;
            services[idx].deliveryTime  = delivery;
            services[idx].skills        = skillsRaw ? skillsRaw.split(",").map(s => s.trim()) : [];
            services[idx].description   = description;
            if (imgDataUrl) services[idx].serviceImg = imgDataUrl;
          }
          showToast("Service updated successfully!", "success");
        } else {
          services.push({
            id: Date.now(),
            name:         userProfile.name,
            serviceTitle: title,
            category,
            price,
            deliveryTime: delivery,
            skills:       skillsRaw ? skillsRaw.split(",").map(s => s.trim()) : [],
            rating:       5.0,
            reviews:      0,
            img:          userProfile.img || "https://i.pravatar.cc/150?img=33",
            serviceImg:   imgDataUrl || "",
            description,
            isUserCreated: true
          });
          showToast("Service created successfully!", "success");
        }

        saveToStorage();
        serviceForm.reset();
        if (serviceImagePrev) { serviceImagePrev.src = ""; serviceImagePrev.style.display = "none"; }
        closeModal("serviceModal");
        renderMarketplace();
        renderMyServices();
        renderFreelancerBrowse();
      };

      if (imgFile) {
        const reader = new FileReader();
        reader.onload = (ev) => processService(ev.target.result);
        reader.readAsDataURL(imgFile);
      } else {
        processService(null);
      }
    });
  }

  // --- Edit Profile ---
  const editProfileBtn   = document.getElementById("editProfileBtn");
  const closeProfileBtn  = document.getElementById("closeProfileModal");
  const profileForm      = document.getElementById("profileForm");
  const profileImgInput  = document.getElementById("inputProfileImg");
  const profileImgPrev   = document.getElementById("profileImgPreview");

  if (editProfileBtn)  editProfileBtn.addEventListener("click",  () => openModal("editProfileModal"));
  if (closeProfileBtn) closeProfileBtn.addEventListener("click", () => closeModal("editProfileModal"));

  if (profileImgInput && profileImgPrev) {
    profileImgInput.addEventListener("change", () => {
      const file = profileImgInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          profileImgPrev.src = ev.target.result;
          profileImgPrev.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      userProfile.name       = document.getElementById("inputName").value.trim();
      userProfile.title      = document.getElementById("inputTitle").value.trim();
      userProfile.bio        = document.getElementById("inputBio").value.trim();
      userProfile.experience = document.getElementById("inputExperience").value.trim();

      const imgFile = profileImgInput ? profileImgInput.files[0] : null;

      const finish = () => {
        saveToStorage();
        updateProfileDOM();
        closeModal("editProfileModal");
        showToast("Profile updated successfully!", "success");
      };

      if (imgFile) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          userProfile.img = ev.target.result;
          finish();
        };
        reader.readAsDataURL(imgFile);
      } else {
        finish();
      }
    });
  }

  // --- Details Modal ---
  const closeDetailsBtn = document.getElementById("closeDetailsModal");
  if (closeDetailsBtn) closeDetailsBtn.addEventListener("click", () => closeModal("detailsModal"));

  // --- Delivery Modal ---
  const closeDeliveryBtn = document.getElementById("closeDeliveryModal");
  const deliveryForm     = document.getElementById("deliveryForm");

  if (closeDeliveryBtn) closeDeliveryBtn.addEventListener("click", () => closeModal("deliveryModal"));

  if (deliveryForm) {
    deliveryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderId = document.getElementById("deliveryOrderId").value;
      const link    = document.getElementById("deliveryWorkLink").value.trim();
      const notes   = document.getElementById("deliveryNotes").value.trim();

      const order = orders.find(o => o.id == orderId);
      if (order) {
        order.delivery = { link, notes, deliveredAt: new Date().toLocaleDateString() };
        order.status   = "Submitted";
        saveToStorage();
        deliveryForm.reset();
        closeModal("deliveryModal");
        renderOrders();
        if (currentActiveOrderId) renderProjectDetails(currentActiveOrderId);
        showToast("Work submitted for client review!", "success");
      }
    });
  }

  // --- Review Modal ---
  const closeReviewBtn = document.getElementById("closeReviewModal");
  const reviewForm     = document.getElementById("reviewForm");

  if (closeReviewBtn) closeReviewBtn.addEventListener("click", () => closeModal("reviewModal"));

  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderId   = parseInt(document.getElementById("reviewOrderId").value);
      const serviceId = parseInt(document.getElementById("reviewServiceId").value);
      const rating    = parseInt(document.getElementById("reviewRating").value);
      const comment   = document.getElementById("reviewComment").value.trim();

      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.review = { rating, comment };
      }

      const service = services.find(s => s.id === serviceId);
      if (service) {
        const totalReviews = (service.reviews || 0) + 1;
        const newRating    = parseFloat((((service.rating || 5) * (service.reviews || 0) + rating) / totalReviews).toFixed(1));
        service.reviews    = totalReviews;
        service.rating     = newRating;
      }

      saveToStorage();
      reviewForm.reset();
      closeModal("reviewModal");
      renderOrders();
      renderMarketplace();
      if (currentActiveOrderId) renderProjectDetails(currentActiveOrderId);
      showToast("Thank you! Your review has been submitted.", "success");
    });
  }

  // --- Close modals on backdrop click ---
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });
  });
}

// ==========================================================================
// 5. Render: Home Marketplace
// ==========================================================================

function renderMarketplace() {
  const grid = document.getElementById("freelancerGrid");
  if (!grid) return;

  let filtered = services.filter(item => {
    const matchesCat    = currentCategory === "All" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === "price-low")  filtered.sort((a, b) => a.price - b.price);
  if (currentSort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (currentSort === "rating")     filtered.sort((a, b) => b.rating - a.rating);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No services found matching your criteria.</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";

    const imgHtml = item.serviceImg
      ? `<img src="${item.serviceImg}" alt="Service" class="service-image">`
      : `<img src="${item.img}" alt="${item.name}">`;

    const tagsHtml = (item.skills || []).slice(0, 3).map(s => `<span class="service-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div>
        ${imgHtml}
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.serviceTitle}</p>
        <div class="service-tags">${tagsHtml}</div>
      </div>
      <div>
        <div class="card-meta">
          <span>&#9733; ${item.rating} (${item.reviews || 0})</span>
          <strong>From $${item.price}</strong>
        </div>
        <button class="login-btn" style="width:100%;margin-top:10px;" onclick="openDetailsModal(${item.id})">View Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 6. Render: Find Freelancers Browse View
// ==========================================================================

function renderFreelancerBrowse() {
  const grid = document.getElementById("freelancerBrowseGrid");
  if (!grid) return;

  const localSearch = (document.getElementById("freelancerSearchInput") || {}).value || searchQuery;

  let filtered = services.filter(item => {
    const matchesCat    = currentCategory === "All" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(localSearch.toLowerCase()) ||
                          item.serviceTitle.toLowerCase().includes(localSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === "price-low")  filtered.sort((a, b) => a.price - b.price);
  if (currentSort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (currentSort === "rating")     filtered.sort((a, b) => b.rating - a.rating);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No freelancers found.</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";

    const tagsHtml = (item.skills || []).slice(0, 3).map(s => `<span class="service-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div>
        <img src="${item.img}" alt="${item.name}">
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.serviceTitle}</p>
        <div class="service-tags">${tagsHtml}</div>
        ${item.deliveryTime ? `<p style="font-size:0.82rem;color:#64748b;margin-top:6px;">Delivery: ${item.deliveryTime} days</p>` : ""}
      </div>
      <div>
        <div class="card-meta">
          <span>&#9733; ${item.rating} (${item.reviews || 0} reviews)</span>
          <strong>From $${item.price}</strong>
        </div>
        <button class="login-btn" style="width:100%;margin-top:10px;" onclick="openDetailsModal(${item.id})">View Profile</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 7. Service Details Modal
// ==========================================================================

window.openDetailsModal = function(id) {
  const item = services.find(s => s.id == id);
  if (!item) return;

  const body = document.getElementById("detailsModalBody");
  if (body) {
    const tagsHtml = (item.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join("");
    const imgHtml  = item.serviceImg
      ? `<img src="${item.serviceImg}" alt="Service" style="width:100%;border-radius:10px;margin-bottom:15px;max-height:200px;object-fit:cover;">`
      : `<img src="${item.img}" alt="${item.name}" style="width:80px;height:80px;border-radius:50%;margin-bottom:12px;display:block;">`;

    body.innerHTML = `
      ${imgHtml}
      <h2>${item.serviceTitle}</h2>
      <p style="color:#64748b;margin-top:4px;">${item.category} &bull; Offered by <strong>${item.name}</strong></p>
      <p style="margin:12px 0;color:#475569;">${item.description}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">${tagsHtml}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-top:1px solid #f1f5f9;">
        <span>&#9733; ${item.rating} &nbsp;(${item.reviews || 0} reviews)</span>
        <strong style="font-size:1.1rem;color:#16a34a;">From $${item.price}</strong>
      </div>
      ${item.deliveryTime ? `<p style="font-size:0.85rem;color:#64748b;">Delivery: ${item.deliveryTime} days</p>` : ""}
    `;
  }
  openModal("detailsModal");
};

// ==========================================================================
// 8. Render: Jobs
// ==========================================================================

function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  if (!grid) return;

  const localSearch = (document.getElementById("jobSearchInput") || {}).value || searchQuery;
  const localSort   = (document.getElementById("jobSortSelect") || {}).value || currentSort;
  const localCat    = currentCategory;

  let filtered = jobs.filter(item => {
    const matchesCat    = localCat === "All" || item.category === localCat;
    const matchesSearch = item.title.toLowerCase().includes(localSearch.toLowerCase()) ||
                          item.description.toLowerCase().includes(localSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (localSort === "budget-high") filtered.sort((a, b) => b.budget - a.budget);
  if (localSort === "budget-low")  filtered.sort((a, b) => a.budget - b.budget);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No job postings found matching your criteria.</p>`;
    return;
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    const skillsHtml = (job.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div>
        <div class="job-card-header">
          <span class="category-tag" style="margin:0;">${job.category}</span>
          <span class="job-budget">$${job.budget}</span>
        </div>
        <h3 class="job-title">${job.title}</h3>
        <p style="font-size:0.82rem;color:#94a3b8;margin-bottom:8px;">Posted by ${job.clientName}</p>
        <p class="job-description">${job.description}</p>
        <div class="job-skills">${skillsHtml}</div>
      </div>
      <div class="job-footer">
        <span>Posted ${job.postedDate || "Recently"} &bull; ${job.proposalsCount || 0} proposals</span>
        <button class="register-btn" onclick="openJobDetailsModal(${job.id})">Apply Now</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.openJobDetailsModal = function(jobId) {
  const job = jobs.find(j => j.id == jobId);
  if (!job) return;

  const jobDetailsContent = document.getElementById("jobDetailsContent");
  if (jobDetailsContent) {
    const skillsHtml = (job.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join("");
    jobDetailsContent.innerHTML = `
      <div style="background:#f8fafc;border-radius:10px;padding:16px;border:1px solid #e2e8f0;">
        <span class="category-tag" style="text-align:left;">${job.category}</span>
        <h3 style="color:#0f172a;margin:6px 0;">${job.title}</h3>
        <p style="font-size:0.85rem;color:#64748b;">Client: <strong>${job.clientName}</strong> &bull; Budget: <strong style="color:#16a34a;">$${job.budget}</strong></p>
        <p style="margin:10px 0;font-size:0.9rem;color:#475569;">${job.description}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${skillsHtml}</div>
      </div>
    `;
  }

  document.getElementById("proposalJobId").value = job.id;
  openModal("submitProposalModal");
};

// ==========================================================================
// 9. Render: My Proposals
// ==========================================================================

function renderProposals() {
  const grid = document.getElementById("proposalsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (proposals.length === 0) {
    grid.innerHTML = `<p style="text-align:center;color:#64748b;padding:40px;">You haven't submitted any proposals yet. <a href="#" onclick="showView('jobs')" style="color:#0f172a;font-weight:bold;">Browse Jobs</a></p>`;
    return;
  }

  proposals.forEach((prop, index) => {
    const statusClass = {
      "accepted": "status-accepted",
      "rejected": "status-rejected",
      "pending":  "status-pending"
    }[prop.status.toLowerCase()] || "status-pending";

    const card = document.createElement("div");
    card.className = "proposal-card";
    card.innerHTML = `
      <div class="proposal-info" style="flex:1;">
        <h4>${prop.jobTitle}</h4>
        <div class="proposal-details">
          <span><strong>Bid:</strong> $${prop.bidAmount}</span>
          <span><strong>Timeline:</strong> ${prop.deliveryTime} Days</span>
          <span><strong>Submitted:</strong> ${prop.submittedDate}</span>
        </div>
        ${prop.skills ? `<p style="margin-top:6px;font-size:0.85rem;color:#64748b;"><strong>Skills:</strong> ${prop.skills}</p>` : ""}
        <p style="color:#64748b;font-size:0.88rem;margin-top:8px;font-style:italic;">"${prop.coverLetter}"</p>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px;">
        <span class="status-badge ${statusClass}">${prop.status}</span>
        ${prop.status === "Pending" ? `<button class="btn-success" onclick="acceptProposalToOrder(${index})">Accept &amp; Start Contract</button>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

window.acceptProposalToOrder = function(propIndex) {
  const prop = proposals[propIndex];
  if (!prop) return;

  prop.status = "Accepted";

  const newOrder = {
    id: Math.floor(1000 + Math.random() * 9000),
    title:        prop.jobTitle,
    providerName: prop.freelancerName || userProfile.name,
    clientName:   prop.clientName || "Client",
    serviceId:    1,
    price:        prop.bidAmount,
    deadline:     new Date(Date.now() + (prop.deliveryTime || 7) * 86400000).toISOString().split("T")[0],
    createdDate:  new Date().toISOString().split("T")[0],
    status:       "In Progress",
    milestones: [
      { id: "m" + Date.now() + "1", title: "Project Initiation & Architecture Setup", completed: true },
      { id: "m" + Date.now() + "2", title: "Core Feature Development",                completed: false },
      { id: "m" + Date.now() + "3", title: "Testing, QA Review & Handoff",            completed: false }
    ],
    delivery: { link: "", notes: "", deliveredAt: null },
    review: null
  };

  orders.unshift(newOrder);
  saveToStorage();
  renderProposals();
  renderOrders();
  showToast(`Contract #${newOrder.id} created and is now active!`, "success");
  showView("orders");
};

// ==========================================================================
// 10. Render: My Services
// ==========================================================================

function renderMyServices() {
  const grid = document.getElementById("myServicesGrid");
  if (!grid) return;

  const myServices = services.filter(s => s.isUserCreated);
  grid.innerHTML = "";

  if (myServices.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">You haven't created any services yet.</p>`;
    return;
  }

  myServices.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";

    const tagsHtml = (item.skills || []).map(s => `<span class="service-tag">${s}</span>`).join("");
    const imgHtml  = item.serviceImg
      ? `<img src="${item.serviceImg}" alt="Service" class="service-image">`
      : "";

    card.innerHTML = `
      <div>
        ${imgHtml}
        <span class="category-tag">${item.category}</span>
        <h3>${item.serviceTitle}</h3>
        <p style="color:#64748b;font-size:13px;margin-top:5px;">${item.description}</p>
        <div class="service-tags" style="margin-top:8px;">${tagsHtml}</div>
        ${item.deliveryTime ? `<p style="font-size:0.82rem;color:#64748b;margin-top:6px;">Delivery: ${item.deliveryTime} days</p>` : ""}
      </div>
      <div>
        <div class="card-meta">
          <strong>Price: $${item.price}</strong>
          <span>&#9733; ${item.rating}</span>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px;">
          <button class="login-btn" style="flex:1;" onclick="editService(${item.id})">Edit</button>
          <button class="btn-danger" style="flex:1;" onclick="deleteService(${item.id})">Delete</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openServiceModal(serviceObj = null) {
  const serviceForm = document.getElementById("serviceForm");
  if (!serviceForm) return;

  serviceForm.reset();
  const prevImg = document.getElementById("serviceImagePreview");
  if (prevImg) { prevImg.src = ""; prevImg.style.display = "none"; }

  if (serviceObj) {
    document.getElementById("serviceModalTitle").innerText = "Edit Service";
    document.getElementById("serviceId").value             = serviceObj.id;
    document.getElementById("serviceTitleInput").value     = serviceObj.serviceTitle;
    document.getElementById("serviceCategoryInput").value  = serviceObj.category;
    document.getElementById("servicePriceInput").value     = serviceObj.price;
    document.getElementById("serviceDeliveryInput").value  = serviceObj.deliveryTime || "";
    document.getElementById("serviceSkillsInput").value    = (serviceObj.skills || []).join(", ");
    document.getElementById("serviceDescInput").value      = serviceObj.description;
    if (prevImg && serviceObj.serviceImg) {
      prevImg.src = serviceObj.serviceImg;
      prevImg.style.display = "block";
    }
  } else {
    document.getElementById("serviceModalTitle").innerText = "Create New Service";
    document.getElementById("serviceId").value             = "";
  }

  openModal("serviceModal");
}

window.editService = function(id) {
  const item = services.find(s => s.id == id);
  if (item) openServiceModal(item);
};

window.deleteService = function(id) {
  if (confirm("Are you sure you want to delete this service?")) {
    services = services.filter(s => s.id != id);
    saveToStorage();
    renderMarketplace();
    renderMyServices();
    renderFreelancerBrowse();
    showToast("Service deleted.", "info");
  }
};

// ==========================================================================
// 11. Render: Orders & Contracts
// ==========================================================================

function getStatusClass(status) {
  const s = (status || "").toLowerCase();
  if (s === "in progress") return "status-inprogress";
  if (s === "submitted")   return "status-submitted";
  if (s === "completed")   return "status-completed";
  if (s === "cancelled")   return "status-cancelled";
  return "status-pending";
}

function calcProgress(milestones) {
  if (!milestones || milestones.length === 0) return 0;
  return Math.round((milestones.filter(m => m.completed).length / milestones.length) * 100);
}

function updateOrderCountBadges() {
  const active    = orders.filter(o => ["In Progress", "Submitted", "Pending"].includes(o.status)).length;
  const completed = orders.filter(o => o.status === "Completed").length;
  const inProg    = orders.filter(o => o.status === "In Progress").length;
  const submitted = orders.filter(o => o.status === "Submitted").length;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set("activeCount",        active);
  set("completedCount",     completed);
  set("tabCountAll",        orders.length);
  set("tabCountInProgress", inProg);
  set("tabCountSubmitted",  submitted);
  set("tabCountCompleted",  completed);
}

function renderOrders(filter = currentOrderTab) {
  const grid = document.getElementById("ordersGrid");
  if (!grid) return;

  updateOrderCountBadges();

  let filtered = orders;
  if (filter === "in-progress") filtered = orders.filter(o => o.status === "In Progress" || o.status === "Pending");
  if (filter === "submitted")   filtered = orders.filter(o => o.status === "Submitted");
  if (filter === "completed")   filtered = orders.filter(o => o.status === "Completed");

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No contracts found in this view.</p>`;
    return;
  }

  filtered.forEach(order => {
    const card     = document.createElement("div");
    card.className = "job-card";
    const progress = calcProgress(order.milestones);

    card.innerHTML = `
      <div>
        <div class="job-card-header">
          <span class="status-badge ${getStatusClass(order.status)}">${order.status}</span>
          <span class="job-budget">$${order.price}</span>
        </div>
        <h3 class="job-title">${order.title}</h3>
        <div class="order-meta-list">
          <div>Client: <strong>${order.clientName || "Client"}</strong></div>
          <div>Freelancer: <strong>${order.providerName || "Freelancer"}</strong></div>
          <div>Deadline: <strong>${order.deadline || "Flexible"}</strong></div>
        </div>
        <div class="progress-container">
          <div class="progress-header">
            <span>Milestone Progress</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${progress}%;"></div>
          </div>
        </div>
        ${order.review ? `<p style="margin-top:8px;font-size:0.83rem;font-style:italic;color:#475569;">"&#9733; ${order.review.rating}/5: ${order.review.comment}"</p>` : ""}
      </div>
      <div class="job-footer" style="margin-top:15px;">
        <span>Order #${order.id}</span>
        <button class="register-btn" onclick="openProjectManagementDetails(${order.id})">Manage Project</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 12. Project Details & Milestone Management
// ==========================================================================

window.openProjectManagementDetails = function(orderId) {
  renderProjectDetails(orderId);
};

function renderProjectDetails(orderId) {
  currentActiveOrderId = orderId;
  const order     = orders.find(o => o.id == orderId);
  const container = document.getElementById("projectDetailsContainer");
  if (!order || !container) return;

  showView("projectDetails");

  const progress = calcProgress(order.milestones);

  const milestoneHtml = (order.milestones || []).map((m, idx) => `
    <div class="milestone-item ${m.completed ? "done" : ""}">
      <div class="milestone-left">
        <input type="checkbox"
               onchange="toggleMilestone(${order.id}, ${idx}, this.checked)"
               ${m.completed ? "checked" : ""}
               ${order.status === "Completed" ? "disabled" : ""}>
        <span class="milestone-text">${m.title}</span>
      </div>
      <span style="font-size:0.75rem;font-weight:bold;color:${m.completed ? "#15803d" : "#94a3b8"};">
        ${m.completed ? "Done" : "Pending"}
      </span>
    </div>
  `).join("");

  // Delivery section based on status
  let deliveryHtml = "";

  if (order.status === "In Progress" || order.status === "Pending") {
    deliveryHtml = `
      <div class="delivery-box">
        <h4>Submit Completed Work</h4>
        <p style="font-size:0.85rem;color:#64748b;margin:6px 0 14px;">
          Once all milestones are done, deliver your work link and notes for client review.
        </p>
        <button class="register-btn" onclick="openDeliveryModalFor(${order.id})">Deliver Work</button>
      </div>
    `;
  } else if (order.status === "Submitted") {
    deliveryHtml = `
      <div class="delivery-box approved">
        <h4 style="color:#15803d;">Work Delivered — Awaiting Approval</h4>
        <div class="submission-content">
          <p><strong>Link:</strong> <a href="${order.delivery?.link}" target="_blank" style="color:#1d4ed8;">${order.delivery?.link}</a></p>
          <p style="margin-top:4px;"><strong>Notes:</strong> ${order.delivery?.notes}</p>
        </div>
        <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
          <button class="btn-success" onclick="approveWork(${order.id})">Accept &amp; Complete</button>
          <button class="btn-danger"  onclick="requestRevision(${order.id})">Request Revision</button>
        </div>
      </div>
    `;
  } else if (order.status === "Completed") {
    deliveryHtml = `
      <div class="delivery-box approved">
        <h4 style="color:#15803d;">Project Completed</h4>
        <div class="submission-content">
          <p><strong>Approved Link:</strong> <a href="${order.delivery?.link}" target="_blank" style="color:#1d4ed8;">${order.delivery?.link}</a></p>
          <p style="margin-top:4px;"><strong>Note:</strong> ${order.delivery?.notes}</p>
        </div>
        ${!order.review
          ? `<button class="login-btn" style="margin-top:10px;" onclick="openReviewModalFor(${order.id}, ${order.serviceId})">Leave Feedback</button>`
          : `<p style="margin-top:10px;font-size:0.88rem;color:#15803d;font-weight:bold;">&#9733; ${order.review.rating}/5 — "${order.review.comment}"</p>`
        }
      </div>
    `;
  } else if (order.status === "Cancelled") {
    deliveryHtml = `
      <div class="delivery-box">
        <h4 style="color:#b91c1c;">Contract Cancelled</h4>
        <p style="font-size:0.85rem;color:#64748b;margin-top:6px;">This project contract has been cancelled.</p>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="project-details-grid">

      <div>
        <div class="details-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div>
              <p style="font-size:0.78rem;text-transform:uppercase;color:#64748b;font-weight:bold;">Contract #${order.id}</p>
              <h2 style="font-size:1.35rem;color:#0f172a;margin-top:4px;">${order.title}</h2>
            </div>
            <span class="status-badge ${getStatusClass(order.status)}">${order.status}</span>
          </div>

          <div class="progress-container" style="margin:20px 0;">
            <div class="progress-header">
              <span>Overall Progress</span>
              <span>${progress}%</span>
            </div>
            <div class="progress-bar-bg" style="height:10px;">
              <div class="progress-bar-fill" style="width:${progress}%;"></div>
            </div>
          </div>

          <h3 style="margin-bottom:12px;">Project Milestones</h3>
          <div id="milestoneListContainer">${milestoneHtml}</div>

          ${order.status !== "Completed" && order.status !== "Cancelled" ? `
            <div style="display:flex;gap:8px;margin-top:14px;">
              <input type="text" id="customMilestoneInput"
                     placeholder="Add a new milestone or task..."
                     style="flex:1;padding:9px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:14px;">
              <button class="login-btn" onclick="addMilestone(${order.id})">+ Add</button>
            </div>
          ` : ""}

          <div style="margin-top:20px;">${deliveryHtml}</div>
        </div>
      </div>

      <div>
        <div class="details-card">
          <h3>Contract Overview</h3>
          <div class="order-meta-list" style="gap:14px;margin-top:10px;">
            <div>
              <span style="font-size:0.72rem;text-transform:uppercase;color:#94a3b8;font-weight:bold;display:block;">Client</span>
              <strong style="font-size:1rem;color:#0f172a;">${order.clientName}</strong>
            </div>
            <div>
              <span style="font-size:0.72rem;text-transform:uppercase;color:#94a3b8;font-weight:bold;display:block;">Freelancer</span>
              <strong style="font-size:1rem;color:#0f172a;">${order.providerName}</strong>
            </div>
            <div style="border-top:1px solid #f1f5f9;padding-top:10px;">
              <span style="font-size:0.72rem;text-transform:uppercase;color:#94a3b8;font-weight:bold;display:block;">Agreed Budget</span>
              <strong style="font-size:1.3rem;color:#16a34a;">$${order.price}</strong>
            </div>
            <div>
              <span style="font-size:0.72rem;text-transform:uppercase;color:#94a3b8;font-weight:bold;display:block;">Target Deadline</span>
              <strong style="color:#0f172a;">${order.deadline || "Flexible"}</strong>
            </div>
            <div>
              <span style="font-size:0.72rem;text-transform:uppercase;color:#94a3b8;font-weight:bold;display:block;">Created</span>
              <strong style="color:#0f172a;">${order.createdDate || "N/A"}</strong>
            </div>
          </div>

          ${order.status !== "Completed" && order.status !== "Cancelled" ? `
            <button class="btn-danger" style="width:100%;margin-top:18px;" onclick="cancelContract(${order.id})">
              Cancel Contract
            </button>
          ` : ""}
        </div>
      </div>

    </div>
  `;
}

window.toggleMilestone = function(orderId, index, isCompleted) {
  const order = orders.find(o => o.id == orderId);
  if (order && order.milestones && order.milestones[index] !== undefined) {
    order.milestones[index].completed = isCompleted;
    saveToStorage();
    renderProjectDetails(orderId);
  }
};

window.addMilestone = function(orderId) {
  const input = document.getElementById("customMilestoneInput");
  if (!input || !input.value.trim()) return;

  const order = orders.find(o => o.id == orderId);
  if (order) {
    if (!order.milestones) order.milestones = [];
    order.milestones.push({ id: "m" + Date.now(), title: input.value.trim(), completed: false });
    saveToStorage();
    renderProjectDetails(orderId);
  }
};

window.openDeliveryModalFor = function(orderId) {
  const input = document.getElementById("deliveryOrderId");
  if (input) input.value = orderId;
  openModal("deliveryModal");
};

window.approveWork = function(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = "Completed";
    if (order.milestones) order.milestones.forEach(m => m.completed = true);
    saveToStorage();
    renderProjectDetails(orderId);
    renderOrders();
    showToast("Project marked as Completed!", "success");
  }
};

window.requestRevision = function(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = "In Progress";
    saveToStorage();
    renderProjectDetails(orderId);
    renderOrders();
    showToast("Revision requested. Project is back In Progress.", "info");
  }
};

window.cancelContract = function(orderId) {
  if (!confirm("Are you sure you want to cancel this contract?")) return;
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = "Cancelled";
    saveToStorage();
    renderProjectDetails(orderId);
    renderOrders();
    showToast("Contract cancelled.", "error");
  }
};

window.openReviewModalFor = function(orderId, serviceId) {
  document.getElementById("reviewOrderId").value  = orderId;
  document.getElementById("reviewServiceId").value = serviceId;
  openModal("reviewModal");
};

// ==========================================================================
// 13. User Profile DOM Update
// ==========================================================================

function updateProfileDOM() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  const setSrc = (id, val) => { const el = document.getElementById(id); if (el && val) el.src = val; };

  set("profileName",       userProfile.name);
  set("profileTitle",      userProfile.title);
  set("profileBio",        userProfile.bio);
  set("profileExperience", userProfile.experience || "");
  setSrc("profileImg",     userProfile.img);

  // Pre-fill edit form
  const fields = { inputName: "name", inputTitle: "title", inputBio: "bio", inputExperience: "experience" };
  Object.entries(fields).forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (el) el.value = userProfile[key] || "";
  });
}