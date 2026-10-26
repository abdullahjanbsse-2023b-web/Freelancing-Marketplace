// ==========================================================================
// 1. Data & State (Upgraded for Week 7)
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
    isUserCreated: true,
    reviewsList: [
      { id: 1, reviewer: "Sarah Johnson", rating: 5, comment: "Excellent work! Very professional and delivered on time.", date: "2026-09-15" },
      { id: 2, reviewer: "Mike Chen", rating: 5, comment: "Outstanding developer. Highly recommended!", date: "2026-09-10" }
    ]
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
    isUserCreated: false,
    reviewsList: []
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
    isUserCreated: false,
    reviewsList: []
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
    isUserCreated: false,
    reviewsList: []
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
    isUserCreated: false,
    reviewsList: []
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
  }
];

const defaultConversations = [
  { id: 1, name: "Sarah Ali", avatar: "https://i.pravatar.cc/150?img=5", lastMessage: "Thank you for the quick response!", time: "5 min ago", unread: 2, online: true },
  { id: 2, name: "James Obi", avatar: "https://i.pravatar.cc/150?img=12", lastMessage: "When can we schedule a call?", time: "1 hour ago", unread: 0, online: false }
];

const defaultMessagesData = {
  1: [
    { id: 1, text: "Hi! I saw your web development service", sent: false, time: "10:30 AM" },
    { id: 2, text: "Hello! Yes, I'd be happy to help with your project.", sent: true, time: "10:32 AM" }
  ]
};

const defaultNotifications = [
  { id: 1, type: 'message', icon: '💬', title: 'New message from Sarah Ali', message: 'Thank you for the quick response!', time: '5 minutes ago', read: false },
  { id: 2, type: 'project', icon: '✅', title: 'Proposal Accepted', message: 'Your proposal for "E-Commerce Website" has been accepted.', time: '2 hours ago', read: false }
];

// Persistent State
let services  = JSON.parse(localStorage.getItem("fhub_services"))  || defaultServices;
let jobs      = JSON.parse(localStorage.getItem("fhub_jobs"))      || defaultJobs;
let proposals = JSON.parse(localStorage.getItem("fhub_proposals")) || [];
let orders    = JSON.parse(localStorage.getItem("fhub_orders"))    || defaultOrders;
let favorites = JSON.parse(localStorage.getItem("fhub_favorites")) || []; // Week 7 Favorites

let conversations = JSON.parse(localStorage.getItem("fhub_conversations")) || defaultConversations;
let messagesData = JSON.parse(localStorage.getItem("fhub_messages")) || defaultMessagesData;
let notifications = JSON.parse(localStorage.getItem("fhub_notifications")) || defaultNotifications;

let userProfile = JSON.parse(localStorage.getItem("fhub_profile")) || {
  name: "Abdullah Khan",
  title: "Software Engineer & Development Specialist",
  bio: "Passionate software engineer experienced in full-stack web apps and agile project management.",
  experience: "3+ years of professional software development experience.",
  rating: 4.9,
  completed: 14,
  img: "https://i.pravatar.cc/150?img=33"
};

let currentCategory    = "All";
let searchQuery        = "";
let currentSort        = "default";
let currentOrderTab    = "all";
let currentActiveOrderId = null;
let currentConversation = null;
let currentNotificationFilter = 'all';
let activeDashboardTab = 'client'; // Week 7 Dual Dashboards tab

// ==========================================================================
// 2. Utility Functions & Storage
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
  localStorage.setItem("fhub_favorites", JSON.stringify(favorites));
}

function saveMessagingData() {
  localStorage.setItem("fhub_conversations", JSON.stringify(conversations));
  localStorage.setItem("fhub_messages", JSON.stringify(messagesData));
  localStorage.setItem("fhub_notifications", JSON.stringify(notifications));
  updateBadges();
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "flex";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "none";
}

function updateBadges() {
  const unreadMessages = conversations.reduce((sum, c) => sum + (c.unread || 0), 0);
  const unreadNotifs = notifications.filter(n => !n.read).length;
  
  const msgBadge = document.getElementById("messageBadge");
  const notifBadge = document.getElementById("notificationBadge");
  
  if (msgBadge) {
    msgBadge.textContent = unreadMessages;
    msgBadge.style.display = unreadMessages > 0 ? 'inline' : 'none';
  }
  if (notifBadge) {
    notifBadge.textContent = unreadNotifs;
    notifBadge.style.display = unreadNotifs > 0 ? 'inline' : 'none';
  }
}

function createNotification(type, title, message) {
  notifications.unshift({
    id: Date.now(),
    type,
    icon: type === 'message' ? '💬' : type === 'project' ? '📋' : type === 'review' ? '⭐' : '✅',
    title,
    message,
    time: 'Just now',
    read: false
  });
  saveMessagingData();
}

// ==========================================================================
// 3. View Navigation & Routing (Added Favorites & Dual Dashboards)
// ==========================================================================

const allViews = [
  "homeView", "freelancersView", "jobsView", "myServicesView",
  "myProposalsView", "ordersView", "projectDetailsView",
  "aboutView", "profileView", "favoritesView", "dashboardView"
];

const allNavLinks = [
  "navHome", "navFreelancers", "navJobs", "navMyServices",
  "navMyProposals", "navOrders", "navMessages", "navNotifications",
  "navAbout", "navProfile", "navFavorites", "navDashboard"
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
    profile:        { view: "profileView",        nav: "navProfile" },
    favorites:      { view: "favoritesView",      nav: "navFavorites" },
    dashboard:      { view: "dashboardView",      nav: "navDashboard" }
  };

  const target = viewMap[viewName];
  if (!target) return;

  const viewEl = document.getElementById(target.view);
  const navEl  = document.getElementById(target.nav);

  if (viewEl) viewEl.classList.remove("hidden");
  if (navEl)  navEl.classList.add("active");

  // Re-render views
  if (viewName === "home")        renderMarketplace();
  if (viewName === "freelancers") renderFreelancerBrowse();
  if (viewName === "jobs")        renderJobs();
  if (viewName === "myServices")  renderMyServices();
  if (viewName === "proposals")   renderProposals();
  if (viewName === "orders")      renderOrders();
  if (viewName === "profile")     updateProfileDOM();
  if (viewName === "favorites")   renderFavorites();
  if (viewName === "dashboard")   renderDashboard();

  window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinksMenu = document.getElementById("navLinksMenu");
  if (navLinksMenu) navLinksMenu.classList.remove("open");
}

window.filterByCategory = function(cat) {
  currentCategory = cat;
  showView("freelancers");
  document.querySelectorAll("[data-fcat]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.fcat === cat);
  });
  renderFreelancerBrowse();
};

// ==========================================================================
// 4. Initialization & Event Listeners
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderMarketplace();
  renderFreelancerBrowse();
  renderJobs();
  renderProposals();
  renderMyServices();
  renderOrders();
  renderFavorites();
  renderDashboard();
  updateProfileDOM();
  setupEventListeners();
  setupMessagingListeners();
  updateBadges();
});

function setupEventListeners() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinksMenu = document.getElementById("navLinksMenu");
  if (hamburgerBtn && navLinksMenu) {
    hamburgerBtn.addEventListener("click", () => navLinksMenu.classList.toggle("open"));
  }

  const navMap = {
    navHome:        "home",
    navFreelancers: "freelancers",
    navJobs:        "jobs",
    navMyServices:  "myServices",
    navMyProposals: "proposals",
    navOrders:      "orders",
    navAbout:       "about",
    navProfile:     "profile",
    navFavorites:   "favorites",
    navDashboard:   "dashboard"
  };

  Object.entries(navMap).forEach(([id, view]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", (e) => { e.preventDefault(); showView(view); });
  });

  const backBtn = document.getElementById("backToOrdersBtn");
  if (backBtn) backBtn.addEventListener("click", () => showView("orders"));

  // Auth & Modals
  const openLoginBtn    = document.getElementById("openLoginBtn");
  const openRegisterBtn = document.getElementById("openRegisterBtn");
  if (openLoginBtn)    openLoginBtn.addEventListener("click",    () => openModal("loginModal"));
  if (openRegisterBtn) openRegisterBtn.addEventListener("click", () => openModal("registerModal"));

  // Search & Sorting & Advanced Filters (Week 7)
  const searchInput = document.getElementById("searchInput");
  const searchBtn   = document.getElementById("searchBtn");
  if (searchInput) searchInput.addEventListener("input", (e) => { searchQuery = e.target.value; renderMarketplace(); });
  if (searchBtn) searchBtn.addEventListener("click", () => { searchQuery = document.getElementById("searchInput").value; showView("freelancers"); renderFreelancerBrowse(); });

  document.querySelectorAll("#categoryFilters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "All";
      renderMarketplace();
    });
  });

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.addEventListener("change", (e) => { currentSort = e.target.value; renderMarketplace(); });

  // Advanced Filter Listeners for Freelancer Browse (Price, Rating, Delivery)
  const freelancerSearchInput = document.getElementById("freelancerSearchInput");
  if (freelancerSearchInput) freelancerSearchInput.addEventListener("input", () => renderFreelancerBrowse());

  document.querySelectorAll("[data-fcat]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-fcat]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.fcat || "All";
      renderFreelancerBrowse();
    });
  });

  const freelancerSortSelect = document.getElementById("freelancerSortSelect");
  if (freelancerSortSelect) freelancerSortSelect.addEventListener("change", (e) => { currentSort = e.target.value; renderFreelancerBrowse(); });

  // Advanced inputs
  ["fFilterMinPrice", "fFilterMaxPrice", "fFilterRating", "fFilterDelivery"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => renderFreelancerBrowse());
  });

  // Dual Dashboard Tab Switchers (Week 7)
  const btnDashClient = document.getElementById("btnDashClient");
  const btnDashFreelancer = document.getElementById("btnDashFreelancer");
  if (btnDashClient && btnDashFreelancer) {
    btnDashClient.addEventListener("click", () => {
      btnDashClient.classList.add("active");
      btnDashFreelancer.classList.remove("active");
      activeDashboardTab = 'client';
      renderDashboard();
    });
    btnDashFreelancer.addEventListener("click", () => {
      btnDashFreelancer.classList.add("active");
      btnDashClient.classList.remove("active");
      activeDashboardTab = 'freelancer';
      renderDashboard();
    });
  }

  // Post Job, Proposal, Service, Review forms setup...
  const openPostJobBtn  = document.getElementById("openPostJobBtn");
  const closePostJobBtn = document.getElementById("closePostJobModal");
  const postJobForm     = document.getElementById("postJobForm");
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

      jobs.unshift({
        id: Date.now(),
        clientName: userProfile.name,
        title, category, budget,
        skills: skillsRaw ? skillsRaw.split(",").map(s => s.trim()) : [],
        description,
        postedDate: "Just now",
        proposalsCount: 0
      });

      saveToStorage();
      postJobForm.reset();
      closeModal("postJobModal");
      renderJobs();
      showToast("Job posted successfully!", "success");
      createNotification('project', 'Job Posted', `Your job "${title}" has been posted successfully.`);
    });
  }

  // Close modals on backdrop click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });
  });
}

// ==========================================================================
// 5. Favorites Management (Week 7)
// ==========================================================================

window.toggleFavorite = function(serviceId) {
  const index = favorites.indexOf(serviceId);
  if (index !== -1) {
    favorites.splice(index, 1);
    showToast("Removed from favorites", "info");
  } else {
    favorites.push(serviceId);
    showToast("Added to favorites!", "success");
  }
  saveToStorage();
  renderMarketplace();
  renderFreelancerBrowse();
  renderFavorites();
};

function renderFavorites() {
  const grid = document.getElementById("favoritesGrid");
  if (!grid) return;

  const savedServices = services.filter(s => favorites.includes(s.id));
  grid.innerHTML = "";

  if (savedServices.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🤍</div>
        <h3>No Favorites Saved Yet</h3>
        <p>Click the heart icon on any service or freelancer card to save them here for quick access.</p>
      </div>
    `;
    return;
  }

  savedServices.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    const imgHtml = item.serviceImg ? `<img src="${item.serviceImg}" alt="Service" class="service-image">` : `<img src="${item.img}" alt="${item.name}">`;

    card.innerHTML = `
      <button class="favorite-btn saved" onclick="toggleFavorite(${item.id})" title="Remove from favorites">&#9829;</button>
      <div>
        ${imgHtml}
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.serviceTitle}</p>
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
// 6. Dual Client & Freelancer Dashboards (Week 7)
// ==========================================================================

function renderDashboard() {
  const container = document.getElementById("dashboardContentArea");
  const statsContainer = document.getElementById("dashboardStatsArea");
  if (!container || !statsContainer) return;

  if (activeDashboardTab === 'client') {
    // Client Dashboard Metrics & Activity
    const postedJobsCount = jobs.filter(j => j.clientName === userProfile.name || j.clientName === "TechCorp Solutions").length;
    const activeProjectsCount = orders.filter(o => o.status === "In Progress" || o.status === "Submitted").length;
    const completedProjectsCount = orders.filter(o => o.status === "Completed").length;

    statsContainer.innerHTML = `
      <div class="stat-card"><span>Posted Jobs</span><h3>${postedJobsCount}</h3></div>
      <div class="stat-card"><span>Active Projects</span><h3>${activeProjectsCount}</h3></div>
      <div class="stat-card"><span>Completed Orders</span><h3>${completedProjectsCount}</h3></div>
      <div class="stat-card"><span>Saved Favorites</span><h3>${favorites.length}</h3></div>
    `;

    container.innerHTML = `
      <div style="margin-top:20px;">
        <h3 style="margin-bottom:15px;color:#0f172a;">Client Activity Overview</h3>
        <p style="color:#64748b;margin-bottom:20px;">Manage your posted job openings, view active contracts, and track contractor progress.</p>
        <div style="display:flex;gap:15px;flex-wrap:wrap;">
          <button class="register-btn" onclick="showView('jobs')">Browse / Post Jobs</button>
          <button class="login-btn" onclick="showView('orders')">View Active Orders</button>
          <button class="login-btn" onclick="showView('favorites')">View Favorites (${favorites.length})</button>
        </div>
      </div>
    `;
  } else {
    // Freelancer Dashboard Metrics & Activity
    const myServicesCount = services.filter(s => s.isUserCreated).length;
    const totalEarnings = orders.filter(o => o.status === "Completed").reduce((sum, o) => sum + (o.price || 0), 0);
    const activeOrdersCount = orders.filter(o => o.status === "In Progress").length;

    statsContainer.innerHTML = `
      <div class="stat-card"><span>My Services</span><h3>${myServicesCount}</h3></div>
      <div class="stat-card"><span>Total Earnings</span><h3>$${totalEarnings}</h3></div>
      <div class="stat-card"><span>Active Orders</span><h3>${activeOrdersCount}</h3></div>
      <div class="stat-card"><span>Profile Rating</span><h3>★ ${userProfile.rating}</h3></div>
    `;

    container.innerHTML = `
      <div style="margin-top:20px;">
        <h3 style="margin-bottom:15px;color:#0f172a;">Freelancer Performance Overview</h3>
        <p style="color:#64748b;margin-bottom:20px;">Manage your active service listings, track submitted proposals, and update project milestones.</p>
        <div style="display:flex;gap:15px;flex-wrap:wrap;">
          <button class="register-btn" onclick="showView('myServices')">Manage My Services</button>
          <button class="login-btn" onclick="showView('proposals')">My Proposals</button>
          <button class="login-btn" onclick="showView('orders')">Client Orders</button>
        </div>
      </div>
    `;
  }
}

// ==========================================================================
// 7. Messaging & Notifications Setup (Week 6)
// ==========================================================================

function setupMessagingListeners() {
  const navMessages = document.getElementById('navMessages');
  const closeMessagesBtn = document.getElementById('closeMessagesModal');
  const sendMessageBtn = document.getElementById('sendMessage');
  const messageInput = document.getElementById('messageInput');
  
  if (navMessages) {
    navMessages.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('messagesModal');
      loadConversations();
      updateBadges();
    });
  }
  
  if (closeMessagesBtn) closeMessagesBtn.addEventListener('click', () => closeModal('messagesModal'));
  if (sendMessageBtn) sendMessageBtn.addEventListener('click', sendMessage);
  if (messageInput) {
    messageInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
  }

  const navNotifications = document.getElementById('navNotifications');
  const closeNotificationsBtn = document.getElementById('closeNotificationsModal');
  const markAllReadBtn = document.getElementById('markAllRead');
  
  if (navNotifications) {
    navNotifications.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('notificationsModal');
      loadNotifications();
    });
  }
  if (closeNotificationsBtn) closeNotificationsBtn.addEventListener('click', () => closeModal('notificationsModal'));
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', () => {
      notifications.forEach(n => n.read = true);
      saveMessagingData();
      loadNotifications(currentNotificationFilter);
    });
  }

  document.querySelectorAll('.notifications-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.notifications-filters .filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentNotificationFilter = this.dataset.filter;
      loadNotifications(currentNotificationFilter);
    });
  });
}

function loadConversations() {
  const conversationsList = document.getElementById('conversationsList');
  if (!conversationsList) return;
  
  conversationsList.innerHTML = '';
  if (conversations.length === 0) {
    conversationsList.innerHTML = `<div class="empty-state" style="padding:20px;">No messages yet</div>`;
    return;
  }

  conversations.forEach(conversation => {
    const div = document.createElement('div');
    div.className = `conversation-item ${conversation.unread > 0 ? 'unread' : ''}`;
    div.dataset.id = conversation.id;
    div.innerHTML = `
      <img src="${conversation.avatar}" alt="${conversation.name}" class="conversation-avatar">
      <div class="conversation-info">
        <div class="conversation-header">
          <span class="conversation-name">${conversation.name}</span>
          <span class="conversation-time">${conversation.time}</span>
        </div>
        <p class="conversation-preview">${conversation.lastMessage}</p>
      </div>
      ${conversation.unread > 0 ? `<span class="unread-badge">${conversation.unread}</span>` : ''}
    `;
    div.addEventListener('click', () => openConversation(conversation.id));
    conversationsList.appendChild(div);
  });
}

function openConversation(conversationId) {
  currentConversation = conversationId;
  const conversation = conversations.find(c => c.id === conversationId);
  if (!conversation) return;
  
  document.querySelectorAll('.conversation-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.querySelector(`[data-id="${conversationId}"]`);
  if (activeItem) activeItem.classList.add('active');
  
  const chatHeader = document.getElementById('chatHeader');
  chatHeader.innerHTML = `
    <div class="chat-user-info">
      <img src="${conversation.avatar}" alt="${conversation.name}">
      <div class="user-details">
        <h3>${conversation.name}</h3>
        <span class="user-status ${conversation.online ? 'online' : ''}">${conversation.online ? 'Online' : 'Offline'}</span>
      </div>
    </div>
  `;
  
  loadMessages(conversationId);
  document.getElementById('chatInputContainer').style.display = 'block';
  conversation.unread = 0;
  saveMessagingData();
  loadConversations();
}

function loadMessages(conversationId) {
  const chatMessages = document.getElementById('chatMessages');
  const messages = messagesData[conversationId] || [];
  chatMessages.innerHTML = '';
  
  if (messages.length === 0) {
    chatMessages.innerHTML = `<div class="no-conversation">No messages in this chat yet. Start the conversation!</div>`;
    return;
  }

  messages.forEach(message => {
    const div = document.createElement('div');
    div.className = `message ${message.sent ? 'sent' : 'received'}`;
    div.innerHTML = `
      <div class="message-bubble">
        <p class="message-text">${message.text}</p>
        <span class="message-time">${message.time}</span>
      </div>
    `;
    chatMessages.appendChild(div);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value.trim();
  if (messageText && currentConversation) {
    const newMessage = {
      id: Date.now(),
      text: messageText,
      sent: true,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    if (!messagesData[currentConversation]) messagesData[currentConversation] = [];
    messagesData[currentConversation].push(newMessage);
    
    const conversation = conversations.find(c => c.id === currentConversation);
    if (conversation) {
      conversation.lastMessage = messageText;
      conversation.time = 'Just now';
    }
    
    saveMessagingData();
    loadMessages(currentConversation);
    loadConversations();
    messageInput.value = '';
  }
}

function loadNotifications(filter = 'all') {
  const notificationsList = document.getElementById('notificationsList');
  if (!notificationsList) return;
  
  let filtered = notifications;
  if (filter === 'unread') filtered = notifications.filter(n => !n.read);
  else if (filter === 'messages') filtered = notifications.filter(n => n.type === 'message');
  else if (filter === 'projects') filtered = notifications.filter(n => n.type === 'project' || n.type === 'completed');
  else if (filter === 'reviews') filtered = notifications.filter(n => n.type === 'review');
  
  notificationsList.innerHTML = '';
  if (filtered.length === 0) {
    notificationsList.innerHTML = `
      <div class="no-notifications">
        <div class="no-notifications-icon">🔔</div>
        <p>No notifications found</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(notification => {
    const div = document.createElement('div');
    div.className = `notification-item ${!notification.read ? 'unread' : ''}`;
    div.innerHTML = `
      <div class="notification-icon ${notification.type}">${notification.icon}</div>
      <div class="notification-content">
        <div class="notification-title">${notification.title}</div>
        <div class="notification-message">${notification.message}</div>
        <div class="notification-time">${notification.time}</div>
      </div>
    `;
    div.addEventListener('click', () => {
      notification.read = true;
      saveMessagingData();
      loadNotifications(currentNotificationFilter);
    });
    notificationsList.appendChild(div);
  });
}

// ==========================================================================
// 8. Render: Marketplace & Advanced Filtering (Week 7)
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
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No Services Found</h3>
        <p>No services match your search criteria. Try adjusting your search keywords or category filters.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    const isSaved = favorites.includes(item.id);
    const imgHtml = item.serviceImg ? `<img src="${item.serviceImg}" alt="Service" class="service-image">` : `<img src="${item.img}" alt="${item.name}">`;
    const tagsHtml = (item.skills || []).slice(0, 3).map(s => `<span class="service-tag">${s}</span>`).join("");

    card.innerHTML = `
      <button class="favorite-btn ${isSaved ? 'saved' : ''}" onclick="toggleFavorite(${item.id})" title="${isSaved ? 'Remove from favorites' : 'Save to favorites'}">
        ${isSaved ? '&#9829;' : '&#9825;'}
      </button>
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

function renderFreelancerBrowse() {
  const grid = document.getElementById("freelancerBrowseGrid");
  if (!grid) return;

  const localSearch = (document.getElementById("freelancerSearchInput") || {}).value || searchQuery;
  const minPrice = parseFloat((document.getElementById("fFilterMinPrice") || {}).value) || 0;
  const maxPrice = parseFloat((document.getElementById("fFilterMaxPrice") || {}).value) || Infinity;
  const minRating = parseFloat((document.getElementById("fFilterRating") || {}).value) || 0;
  const maxDelivery = parseInt((document.getElementById("fFilterDelivery") || {}).value) || Infinity;

  let filtered = services.filter(item => {
    const matchesCat = currentCategory === "All" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(localSearch.toLowerCase()) ||
                          item.serviceTitle.toLowerCase().includes(localSearch.toLowerCase()) ||
                          (item.skills || []).some(s => s.toLowerCase().includes(localSearch.toLowerCase()));
    
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    const matchesRating = item.rating >= minRating;
    const matchesDelivery = (item.deliveryTime || 7) <= maxDelivery;

    return matchesCat && matchesSearch && matchesPrice && matchesRating && matchesDelivery;
  });

  if (currentSort === "price-low")  filtered.sort((a, b) => a.price - b.price);
  if (currentSort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (currentSort === "rating")     filtered.sort((a, b) => b.rating - a.rating);

  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No Freelancers Found</h3>
        <p>No freelancers or services match your advanced filters (price range, rating, or delivery time).</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    const isSaved = favorites.includes(item.id);
    const tagsHtml = (item.skills || []).slice(0, 3).map(s => `<span class="service-tag">${s}</span>`).join("");

    card.innerHTML = `
      <button class="favorite-btn ${isSaved ? 'saved' : ''}" onclick="toggleFavorite(${item.id})">
        ${isSaved ? '&#9829;' : '&#9825;'}
      </button>
      <div>
        <img src="${item.img}" alt="${item.name}">
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.serviceTitle}</p>
        <div class="service-tags">${tagsHtml}</div>
        <p style="font-size:0.82rem;color:#64748b;margin-top:6px;">Delivery: ${item.deliveryTime || 7} days</p>
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
// 9. Service Details Modal with Reviews
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

    let reviewsHtml = '';
    if (item.reviewsList && item.reviewsList.length > 0) {
      reviewsHtml = `
        <div class="reviews-section">
          <h3 style="margin-bottom: 12px;">Reviews (${item.reviewsList.length})</h3>
          ${item.reviewsList.map(review => `
            <div class="review-card">
              <div class="review-header">
                <span class="reviewer-name">${review.reviewer}</span>
                <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
              </div>
              <p class="review-text">${review.comment}</p>
              <span class="review-date">${review.date}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

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
      ${reviewsHtml}
    `;
  }
  openModal("detailsModal");
};

// ==========================================================================
// 10. Render: Jobs & Proposals
// ==========================================================================

function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  if (!grid) return;

  const localSearch = (document.getElementById("jobSearchInput") || {}).value || searchQuery;
  const localSort   = (document.getElementById("jobSortSelect") || {}).value || currentSort;

  let filtered = jobs.filter(item => {
    const matchesCat    = currentCategory === "All" || item.category === currentCategory;
    const matchesSearch = item.title.toLowerCase().includes(localSearch.toLowerCase()) ||
                          item.description.toLowerCase().includes(localSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (localSort === "budget-high") filtered.sort((a, b) => b.budget - a.budget);
  if (localSort === "budget-low")  filtered.sort((a, b) => a.budget - b.budget);

  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <h3>No Jobs Found</h3>
        <p>No job postings match your search criteria right now.</p>
      </div>
    `;
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

function renderProposals() {
  const grid = document.getElementById("proposalsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  if (proposals.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📤</div>
        <h3>No Proposals Submitted</h3>
        <p>You haven't submitted any proposals yet. Browse jobs and apply to start working.</p>
      </div>
    `;
    return;
  }

  proposals.forEach((prop, index) => {
    const statusClass = prop.status.toLowerCase() === "accepted" ? "status-accepted" : "status-pending";
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
        <p style="color:#64748b;font-size:0.88rem;margin-top:8px;font-style:italic;">"${prop.coverLetter}"</p>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px;">
        <span class="status-badge ${statusClass}">${prop.status}</span>
        ${prop.status === "Pending" ? `<button class="btn-success" onclick="acceptProposalToOrder(${index})">Accept &amp; Start</button>` : ""}
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
    providerName: userProfile.name,
    clientName:   prop.clientName || "Client",
    serviceId:    1,
    price:        prop.bidAmount,
    deadline:     new Date(Date.now() + (prop.deliveryTime || 7) * 86400000).toISOString().split("T")[0],
    createdDate:  new Date().toISOString().split("T")[0],
    status:       "In Progress",
    milestones: [
      { id: "m1", title: "Project Initiation & Architecture Setup", completed: true },
      { id: "m2", title: "Core Feature Implementation", completed: false }
    ],
    delivery: { link: "", notes: "", deliveredAt: null },
    review: null
  };

  orders.unshift(newOrder);
  saveToStorage();
  renderProposals();
  renderOrders();
  showToast("Contract created and is now active!", "success");
  createNotification('project', 'Contract Started', `Your contract for "${newOrder.title}" is active.`);
  showView("orders");
};

// ==========================================================================
// 11. Render: My Services
// ==========================================================================

function renderMyServices() {
  const grid = document.getElementById("myServicesGrid");
  if (!grid) return;

  const myServices = services.filter(s => s.isUserCreated);
  grid.innerHTML = "";

  if (myServices.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🛠️</div>
        <h3>No Services Created</h3>
        <p>You haven't listed any services yet. Click "+ Add New Service" to offer your skills.</p>
      </div>
    `;
    return;
  }

  myServices.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    const tagsHtml = (item.skills || []).map(s => `<span class="service-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div>
        <span class="category-tag">${item.category}</span>
        <h3>${item.serviceTitle}</h3>
        <p style="color:#64748b;font-size:13px;margin-top:5px;">${item.description}</p>
        <div class="service-tags" style="margin-top:8px;">${tagsHtml}</div>
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

  if (serviceObj) {
    document.getElementById("serviceModalTitle").innerText = "Edit Service";
    document.getElementById("serviceId").value             = serviceObj.id;
    document.getElementById("serviceTitleInput").value     = serviceObj.serviceTitle;
    document.getElementById("serviceCategoryInput").value  = serviceObj.category;
    document.getElementById("servicePriceInput").value     = serviceObj.price;
    document.getElementById("serviceDeliveryInput").value  = serviceObj.deliveryTime || "";
    document.getElementById("serviceSkillsInput").value    = (serviceObj.skills || []).join(", ");
    document.getElementById("serviceDescInput").value      = serviceObj.description;
  } else {
    document.getElementById("serviceModalTitle").innerText = "Create New Service";
    document.getElementById("serviceId").value             = "";
  }
  openModal("serviceModal");
}

window.editService = (id) => openServiceModal(services.find(s => s.id == id));
window.deleteService = (id) => {
  if (confirm("Delete this service?")) {
    services = services.filter(s => s.id != id);
    saveToStorage();
    renderMarketplace();
    renderMyServices();
    showToast("Service deleted.", "info");
  }
};

// ==========================================================================
// 12. Render: Orders & Contracts Management
// ==========================================================================

function getStatusClass(status) {
  const s = (status || "").toLowerCase();
  if (s === "in progress") return "status-inprogress";
  if (s === "submitted")   return "status-submitted";
  if (s === "completed")   return "status-completed";
  return "status-pending";
}

function calcProgress(milestones) {
  if (!milestones || milestones.length === 0) return 0;
  return Math.round((milestones.filter(m => m.completed).length / milestones.length) * 100);
}

function renderOrders(filter = currentOrderTab) {
  const grid = document.getElementById("ordersGrid");
  if (!grid) return;

  let filtered = orders;
  if (filter === "in-progress") filtered = orders.filter(o => o.status === "In Progress");
  if (filter === "submitted")   filtered = orders.filter(o => o.status === "Submitted");
  if (filter === "completed")   filtered = orders.filter(o => o.status === "Completed");

  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📦</div>
        <h3>No Orders Found</h3>
        <p>You have no active projects or contracts in this category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(order => {
    const card = document.createElement("div");
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
          <div>Client: <strong>${order.clientName}</strong></div>
          <div>Deadline: <strong>${order.deadline || "Flexible"}</strong></div>
        </div>
        <div class="progress-container">
          <div class="progress-header"><span>Milestone Progress</span><span>${progress}%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${progress}%;"></div></div>
        </div>
      </div>
      <div class="job-footer" style="margin-top:15px;">
        <span>Order #${order.id}</span>
        <button class="register-btn" onclick="openProjectManagementDetails(${order.id})">Manage Project</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.openProjectManagementDetails = (orderId) => renderProjectDetails(orderId);

function renderProjectDetails(orderId) {
  currentActiveOrderId = orderId;
  const order = orders.find(o => o.id == orderId);
  const container = document.getElementById("projectDetailsContainer");
  if (!order || !container) return;

  showView("projectDetails");
  const progress = calcProgress(order.milestones);

  const milestoneHtml = (order.milestones || []).map((m, idx) => `
    <div class="milestone-item ${m.completed ? "done" : ""}">
      <div class="milestone-left">
        <input type="checkbox" onchange="toggleMilestone(${order.id}, ${idx}, this.checked)" ${m.completed ? "checked" : ""}>
        <span class="milestone-text">${m.title}</span>
      </div>
      <span>${m.completed ? "Done" : "Pending"}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="project-details-grid">
      <div class="details-card">
        <h2>${order.title}</h2>
        <p style="color:#64748b;margin:5px 0 15px;">Contract #${order.id} &bull; Status: <strong>${order.status}</strong></p>
        <div class="progress-container" style="margin:20px 0;">
          <div class="progress-header"><span>Overall Progress</span><span>${progress}%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${progress}%;"></div></div>
        </div>
        <h3>Milestones</h3>
        <div style="margin-top:10px;">${milestoneHtml}</div>
      </div>
      <div class="details-card">
        <h3>Overview</h3>
        <p><strong>Client:</strong> ${order.clientName}</p>
        <p><strong>Budget:</strong> <span style="color:#16a34a;font-weight:bold;">$${order.price}</span></p>
        <button class="register-btn" style="width:100%;margin-top:20px;" onclick="showView('orders')">&#8592; Back to Orders</button>
      </div>
    </div>
  `;
}

window.toggleMilestone = (orderId, index, isCompleted) => {
  const order = orders.find(o => o.id == orderId);
  if (order && order.milestones[index]) {
    order.milestones[index].completed = isCompleted;
    saveToStorage();
    renderProjectDetails(orderId);
  }
};

function updateProfileDOM() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set("profileName", userProfile.name);
  set("profileTitle", userProfile.title);
  set("profileBio", userProfile.bio);
  const imgEl = document.getElementById("profileImg");
  if (imgEl && userProfile.img) imgEl.src = userProfile.img;
}