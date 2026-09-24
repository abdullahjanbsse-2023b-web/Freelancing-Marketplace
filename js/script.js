// ==========================================================================
// 1. Initial Sample Data & State Management
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
    description: "Software engineer and development specialist experienced in building scalable web apps with modern JavaScript, MERN stack architectures, and custom APIs.",
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
  }
];

// Local Storage Persistent State
let services = JSON.parse(localStorage.getItem("fhub_services")) || defaultServices;
let jobs = JSON.parse(localStorage.getItem("fhub_jobs")) || defaultJobs;
let proposals = JSON.parse(localStorage.getItem("fhub_proposals")) || [];
let orders = JSON.parse(localStorage.getItem("fhub_orders")) || [
  {
    id: 201,
    title: "E-Commerce Frontend Specialist Needed",
    providerName: "Abdullah Khan",
    serviceId: 1,
    price: 500,
    status: "In Progress",
    review: null
  }
];

let userProfile = JSON.parse(localStorage.getItem("fhub_profile")) || {
  name: "Abdullah Khan",
  title: "Software Engineer & Development Specialist",
  bio: "Passionate software engineer and development professional experienced in full-stack web applications, game development in Unity, and agile project management.",
  rating: 4.9,
  completed: 14,
  img: "https://i.pravatar.cc/150?img=33"
};

// Filter & Search Controls
let currentCategory = "All";
let searchQuery = "";
let currentSort = "default";

// ==========================================================================
// 2. DOM Element Selections
// ==========================================================================

// Views
const marketplaceView = document.getElementById("marketplaceView");
const jobsView = document.getElementById("jobsView");
const myProposalsView = document.getElementById("myProposalsView");
const myServicesView = document.getElementById("myServicesView");
const ordersView = document.getElementById("ordersView");
const profileView = document.getElementById("profileView");

// Navigation Links
const navHome = document.getElementById("navHome");
const navJobs = document.getElementById("navJobs");
const navMyServices = document.getElementById("navMyServices");
const navMyProposals = document.getElementById("navMyProposals");
const navOrders = document.getElementById("navOrders");
const navProfile = document.getElementById("navProfile");

// Grids & Display Containers
const freelancerGrid = document.getElementById("freelancerGrid");
const jobsGrid = document.getElementById("jobsGrid");
const proposalsGrid = document.getElementById("proposalsGrid");
const myServicesGrid = document.getElementById("myServicesGrid");
const ordersGrid = document.getElementById("ordersGrid");

// Modals & Forms
const serviceModal = document.getElementById("serviceModal");
const serviceForm = document.getElementById("serviceForm");
const openCreateServiceBtn = document.getElementById("openCreateServiceBtn");
const dashboardCreateServiceBtn = document.getElementById("dashboardCreateServiceBtn");
const closeServiceModal = document.getElementById("closeServiceModal");

const submitProposalModal = document.getElementById("submitProposalModal");
const closeProposalModal = document.getElementById("closeProposalModal");
const proposalForm = document.getElementById("proposalForm");

const postJobModal = document.getElementById("postJobModal");
const postJobForm = document.getElementById("postJobForm");
const openPostJobBtn = document.getElementById("openPostJobBtn");
const closePostJobModal = document.getElementById("closePostJobModal");

const editProfileBtn = document.getElementById("editProfileBtn");
const editProfileModal = document.getElementById("editProfileModal");
const closeProfileModal = document.getElementById("closeProfileModal");
const profileForm = document.getElementById("profileForm");

const reviewModal = document.getElementById("reviewModal");
const reviewForm = document.getElementById("reviewForm");
const closeReviewModal = document.getElementById("closeReviewModal");

// Search Inputs & Filters
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");

// ==========================================================================
// 3. Application Lifecycle Initialization
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderMarketplace();
  renderJobs();
  renderProposals();
  renderMyServices();
  renderOrders();
  updateProfileDOM();
  setupEventListeners();
});

// Navigation Router Logic
function showView(viewName) {
  [marketplaceView, jobsView, myProposalsView, myServicesView, ordersView, profileView].forEach(v => {
    if (v) v.classList.add("hidden");
  });

  [navHome, navJobs, navMyProposals, navMyServices, navOrders, navProfile].forEach(n => {
    if (n) n.classList.remove("active");
  });

  if (viewName === "home" && marketplaceView) {
    marketplaceView.classList.remove("hidden");
    if (navHome) navHome.classList.add("active");
  } else if (viewName === "jobs" && jobsView) {
    jobsView.classList.remove("hidden");
    if (navJobs) navJobs.classList.add("active");
    renderJobs();
  } else if (viewName === "proposals" && myProposalsView) {
    myProposalsView.classList.remove("hidden");
    if (navMyProposals) navMyProposals.classList.add("active");
    renderProposals();
  } else if (viewName === "myServices" && myServicesView) {
    myServicesView.classList.remove("hidden");
    if (navMyServices) navMyServices.classList.add("active");
    renderMyServices();
  } else if (viewName === "orders" && ordersView) {
    ordersView.classList.remove("hidden");
    if (navOrders) navOrders.classList.add("active");
    renderOrders();
  } else if (viewName === "profile" && profileView) {
    profileView.classList.remove("hidden");
    if (navProfile) navProfile.classList.add("active");
  }
}

function setupEventListeners() {
  if (navHome) navHome.addEventListener("click", (e) => { e.preventDefault(); showView("home"); });
  if (navJobs) navJobs.addEventListener("click", (e) => { e.preventDefault(); showView("jobs"); });
  if (navMyProposals) navMyProposals.addEventListener("click", (e) => { e.preventDefault(); showView("proposals"); });
  if (navMyServices) navMyServices.addEventListener("click", (e) => { e.preventDefault(); showView("myServices"); });
  if (navOrders) navOrders.addEventListener("click", (e) => { e.preventDefault(); showView("orders"); });
  if (navProfile) navProfile.addEventListener("click", (e) => { e.preventDefault(); showView("profile"); });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMarketplace();
      renderJobs();
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "All";
      renderMarketplace();
      renderJobs();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderMarketplace();
      renderJobs();
    });
  }
}

// ==========================================================================
// 4. Jobs Marketplace Logic
// ==========================================================================

function renderJobs() {
  if (!jobsGrid) return;

  let filtered = jobs.filter(item => {
    const matchesCat = (currentCategory === "All") || (item.category === currentCategory);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === "price-low") filtered.sort((a, b) => a.budget - b.budget);
  if (currentSort === "price-high") filtered.sort((a, b) => b.budget - a.budget);

  jobsGrid.innerHTML = "";

  if (filtered.length === 0) {
    jobsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">No job postings available matching your criteria.</p>`;
    return;
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    
    const skillsMarkup = job.skills && job.skills.length > 0 
      ? job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")
      : "";

    card.innerHTML = `
      <div>
        <div class="job-card-header">
          <span class="category-tag">${job.category}</span>
          <span class="job-budget">$${job.budget}</span>
        </div>
        <h3 class="job-title">${job.title}</h3>
        <p class="job-description">${job.description}</p>
        <div class="job-skills">${skillsMarkup}</div>
      </div>
      <div class="job-footer">
        <span>Posted ${job.postedDate || "Recently"} • ${job.proposalsCount || 0} proposals</span>
        <button class="register-btn" onclick="openJobDetailsModal(${job.id})">Apply Now</button>
      </div>
    `;
    jobsGrid.appendChild(card);
  });
}

window.openJobDetailsModal = function(jobId) {
  const job = jobs.find(j => j.id == jobId);
  if (!job || !submitProposalModal) return;

  const jobDetailsContent = document.getElementById("jobDetailsContent");
  if (jobDetailsContent) {
    jobDetailsContent.innerHTML = `
      <h3>${job.title}</h3>
      <p style="color: #64748b; font-size: 0.95rem; margin-top: 5px;">${job.category} • <strong>Budget: $${job.budget}</strong></p>
      <p style="margin-top: 10px; font-size: 0.9rem;">${job.description}</p>
    `;
  }
  
  const jobIdInput = document.getElementById("proposalJobId");
  if (jobIdInput) jobIdInput.value = job.id;

  submitProposalModal.style.display = "flex";
};

if (closeProposalModal) {
  closeProposalModal.addEventListener("click", () => {
    submitProposalModal.style.display = "none";
  });
}

if (proposalForm) {
  proposalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const jobId = document.getElementById("proposalJobId").value;
    const bidAmount = parseFloat(document.getElementById("proposalPrice").value);
    const estTime = document.getElementById("proposalDuration").value;
    const pitch = document.getElementById("proposalCoverLetter").value.trim();

    const job = jobs.find(j => j.id == jobId);

    const newProposal = {
      id: Date.now(),
      jobId: jobId,
      jobTitle: job ? job.title : "Job Requisition",
      clientName: job ? job.clientName : "Client",
      bidAmount: bidAmount,
      deliveryTime: estTime,
      coverLetter: pitch,
      status: "Pending",
      submittedDate: new Date().toLocaleDateString()
    };

    proposals.push(newProposal);
    localStorage.setItem("fhub_proposals", JSON.stringify(proposals));

    if (job) {
      job.proposalsCount = (job.proposalsCount || 0) + 1;
      localStorage.setItem("fhub_jobs", JSON.stringify(jobs));
    }

    proposalForm.reset();
    submitProposalModal.style.display = "none";
    alert("Your proposal has been submitted successfully!");
    renderJobs();
    renderProposals();
  });
}

// ==========================================================================
// 5. Proposals Dashboard Logic
// ==========================================================================

function renderProposals() {
  if (!proposalsGrid) return;

  proposalsGrid.innerHTML = "";

  if (proposals.length === 0) {
    proposalsGrid.innerHTML = `<p style="text-align: center; color: #64748b; padding: 40px;">You haven't submitted any job proposals yet.</p>`;
    return;
  }

  proposals.forEach(prop => {
    const statusClass = prop.status.toLowerCase() === "accepted" ? "status-accepted" :
                        prop.status.toLowerCase() === "rejected" ? "status-rejected" : "status-pending";

    const card = document.createElement("div");
    card.className = "proposal-card";
    card.innerHTML = `
      <div class="proposal-info">
        <h4>${prop.jobTitle}</h4>
        <div class="proposal-details">
          <span><strong>Bid:</strong> $${prop.bidAmount}</span>
          <span><strong>Timeline:</strong> ${prop.deliveryTime} Days</span>
          <span><strong>Submitted:</strong> ${prop.submittedDate}</span>
        </div>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 8px;">"${prop.coverLetter}"</p>
      </div>
      <div>
        <span class="status-badge ${statusClass}">${prop.status}</span>
      </div>
    `;
    proposalsGrid.appendChild(card);
  });
}

if (openPostJobBtn) {
  openPostJobBtn.addEventListener("click", () => postJobModal.style.display = "flex");
}
if (closePostJobModal) {
  closePostJobModal.addEventListener("click", () => postJobModal.style.display = "none");
}

if (postJobForm) {
  postJobForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("jobTitleInput").value.trim();
    const category = document.getElementById("jobCategoryInput").value;
    const budget = parseFloat(document.getElementById("jobBudgetInput").value);
    const skillsRaw = document.getElementById("jobSkillsInput").value.trim();
    const description = document.getElementById("jobDescInput").value.trim();

    const newJob = {
      id: Date.now(),
      clientName: userProfile.name,
      title: title,
      category: category,
      budget: budget,
      skills: skillsRaw ? skillsRaw.split(",").map(s => s.trim()) : [],
      description: description,
      postedDate: "Just now",
      proposalsCount: 0
    };

    jobs.unshift(newJob);
    localStorage.setItem("fhub_jobs", JSON.stringify(jobs));

    postJobForm.reset();
    postJobModal.style.display = "none";
    renderJobs();
  });
}

// ==========================================================================
// 6. Marketplace Services Rendering
// ==========================================================================

function renderMarketplace() {
  if (!freelancerGrid) return;

  let filtered = services.filter(item => {
    const matchesCat = (currentCategory === "All") || (item.category === currentCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === "price-low") filtered.sort((a,b) => a.price - b.price);
  if (currentSort === "price-high") filtered.sort((a,b) => b.price - a.price);
  if (currentSort === "rating") filtered.sort((a,b) => b.rating - a.rating);

  freelancerGrid.innerHTML = "";
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    card.innerHTML = `
      <div>
        <img src="${item.img}" alt="${item.name}">
        <span class="category-tag">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.serviceTitle}</p>
      </div>
      <div>
        <div class="card-meta">
          <span>★ ${item.rating} (${item.reviews || 0})</span>
          <strong>From $${item.price}</strong>
        </div>
        <button class="login-btn" style="width: 100%; margin-top: 10px;" onclick="openDetailsModal(${item.id})">View Details</button>
      </div>
    `;
    freelancerGrid.appendChild(card);
  });
}

window.openDetailsModal = function(id) {
  const item = services.find(s => s.id == id);
  if (!item) return;

  const modalBody = document.getElementById("detailsModalBody");
  if (modalBody) {
    modalBody.innerHTML = `
      <h2>${item.serviceTitle}</h2>
      <p style="color: #64748b; font-weight: bold; margin-bottom: 10px;">${item.category} • Offered by ${item.name}</p>
      <p>${item.description}</p>
      <h3 style="margin-top: 15px;">Price: $${item.price}</h3>
    `;
  }
  const detailsModal = document.getElementById("detailsModal");
  if (detailsModal) detailsModal.style.display = "flex";
};

const closeDetailsModal = document.getElementById("closeDetailsModal");
if (closeDetailsModal) {
  closeDetailsModal.addEventListener("click", () => {
    document.getElementById("detailsModal").style.display = "none";
  });
}

// ==========================================================================
// 7. My Services Management
// ==========================================================================

function renderMyServices() {
  if (!myServicesGrid) return;

  const myServices = services.filter(s => s.isUserCreated);
  myServicesGrid.innerHTML = "";

  if (myServices.length === 0) {
    myServicesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">You haven't created any services yet.</p>`;
    return;
  }

  myServices.forEach(item => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    card.innerHTML = `
      <div>
        <span class="category-tag">${item.category}</span>
        <h3>${item.serviceTitle}</h3>
        <p style="color: #64748b; font-size: 14px; margin-top: 5px;">${item.description}</p>
      </div>
      <div>
        <div class="card-meta">
          <strong>Price: $${item.price}</strong>
        </div>
        <div class="card-actions">
          <button onclick="editService(${item.id})">Edit</button>
          <button class="btn-delete" onclick="deleteService(${item.id})">Delete</button>
        </div>
      </div>
    `;
    myServicesGrid.appendChild(card);
  });
}

function openServiceModal(serviceObj = null) {
  if (!serviceForm || !serviceModal) return;
  serviceForm.reset();
  if (serviceObj) {
    document.getElementById("serviceModalTitle").innerText = "Edit Service";
    document.getElementById("serviceId").value = serviceObj.id;
    document.getElementById("serviceTitleInput").value = serviceObj.serviceTitle;
    document.getElementById("serviceCategoryInput").value = serviceObj.category;
    document.getElementById("servicePriceInput").value = serviceObj.price;
    document.getElementById("serviceDescInput").value = serviceObj.description;
  } else {
    document.getElementById("serviceModalTitle").innerText = "Create New Service";
    document.getElementById("serviceId").value = "";
  }
  serviceModal.style.display = "flex";
}

if (openCreateServiceBtn) openCreateServiceBtn.addEventListener("click", () => openServiceModal());
if (dashboardCreateServiceBtn) dashboardCreateServiceBtn.addEventListener("click", () => openServiceModal());
if (closeServiceModal) closeServiceModal.addEventListener("click", () => serviceModal.style.display = "none");

if (serviceForm) {
  serviceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("serviceId").value;
    const title = document.getElementById("serviceTitleInput").value.trim();
    const category = document.getElementById("serviceCategoryInput").value;
    const price = parseFloat(document.getElementById("servicePriceInput").value);
    const description = document.getElementById("serviceDescInput").value.trim();

    if (id) {
      const index = services.findIndex(s => s.id == id);
      if (index !== -1) {
        services[index].serviceTitle = title;
        services[index].category = category;
        services[index].price = price;
        services[index].description = description;
      }
    } else {
      const newService = {
        id: Date.now(),
        name: userProfile.name,
        serviceTitle: title,
        category: category,
        price: price,
        rating: 5.0,
        reviews: 0,
        img: userProfile.img || "https://i.pravatar.cc/150?img=33",
        description: description,
        isUserCreated: true
      };
      services.push(newService);
    }

    localStorage.setItem("fhub_services", JSON.stringify(services));
    serviceModal.style.display = "none";
    renderMarketplace();
    renderMyServices();
  });
}

window.editService = function(id) {
  const item = services.find(s => s.id == id);
  if (item) openServiceModal(item);
};

window.deleteService = function(id) {
  if (confirm("Are you sure you want to delete this service?")) {
    services = services.filter(s => s.id != id);
    localStorage.setItem("fhub_services", JSON.stringify(services));
    renderMarketplace();
    renderMyServices();
  }
};

// ==========================================================================
// 8. Order Management & Feedback System (Task 4)
// ==========================================================================

function renderOrders() {
  if (!ordersGrid) return;
  ordersGrid.innerHTML = "";

  if (orders.length === 0) {
    ordersGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">No active orders found.</p>`;
    return;
  }

  orders.forEach(order => {
    const card = document.createElement("div");
    card.className = "job-card";
    
    let actionMarkup = "";
    if (order.status === "In Progress") {
      actionMarkup = `<button class="register-btn" onclick="completeOrder(${order.id})">Mark as Complete</button>`;
    } else {
      actionMarkup = order.review 
        ? `<span style="color: #10b981; font-weight: bold; font-size: 0.9rem;">★ Rated (${order.review.rating}/5)</span>`
        : `<button class="login-btn" onclick="openReviewModal(${order.id}, ${order.serviceId})">Leave Review</button>`;
    }

    card.innerHTML = `
      <div>
        <div class="job-card-header">
          <span class="category-tag">${order.status}</span>
          <span class="job-budget">$${order.price}</span>
        </div>
        <h3 class="job-title">${order.title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 5px;">Provider: ${order.providerName}</p>
        ${order.review ? `<p style="margin-top: 8px; font-size: 0.85rem; font-style: italic; color: #475569;">"${order.review.comment}"</p>` : ""}
      </div>
      <div class="job-footer" style="margin-top: 15px;">
        <span>Order ID: #${order.id}</span>
        ${actionMarkup}
      </div>
    `;
    ordersGrid.appendChild(card);
  });
}

window.completeOrder = function(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = "Completed";
    localStorage.setItem("fhub_orders", JSON.stringify(orders));
    renderOrders();
  }
};

window.openReviewModal = function(orderId, serviceId) {
  document.getElementById("reviewOrderId").value = orderId;
  document.getElementById("reviewServiceId").value = serviceId;
  if (reviewModal) reviewModal.style.display = "flex";
};

if (closeReviewModal) {
  closeReviewModal.addEventListener("click", () => {
    reviewModal.style.display = "none";
  });
}

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = parseInt(document.getElementById("reviewOrderId").value);
    const serviceId = parseInt(document.getElementById("reviewServiceId").value);
    const ratingVal = parseInt(document.getElementById("reviewRating").value);
    const commentVal = document.getElementById("reviewComment").value.trim();

    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.review = { rating: ratingVal, comment: commentVal };
      localStorage.setItem("fhub_orders", JSON.stringify(orders));
    }

    const service = services.find(s => s.id === serviceId);
    if (service) {
      const currentReviews = service.reviews || 0;
      const currentRating = service.rating || 5.0;
      const newTotalReviews = currentReviews + 1;
      const newRating = parseFloat(((currentRating * currentReviews + ratingVal) / newTotalReviews).toFixed(1));
      
      service.reviews = newTotalReviews;
      service.rating = newRating;
      localStorage.setItem("fhub_services", JSON.stringify(services));
    }

    reviewForm.reset();
    reviewModal.style.display = "none";
    alert("Thank you! Your feedback has been recorded.");
    renderOrders();
    renderMarketplace();
  });
}

// ==========================================================================
// 9. User Profile Management
// ==========================================================================

function updateProfileDOM() {
  const pName = document.getElementById("profileName");
  const pTitle = document.getElementById("profileTitle");
  const pBio = document.getElementById("profileBio");
  const pImg = document.getElementById("profileImg");

  if (pName) pName.innerText = userProfile.name;
  if (pTitle) pTitle.innerText = userProfile.title;
  if (pBio) pBio.innerText = userProfile.bio;
  if (pImg && userProfile.img) pImg.src = userProfile.img;

  if (document.getElementById("inputName")) document.getElementById("inputName").value = userProfile.name;
  if (document.getElementById("inputTitle")) document.getElementById("inputTitle").value = userProfile.title;
  if (document.getElementById("inputBio")) document.getElementById("inputBio").value = userProfile.bio;
}

if (editProfileBtn) editProfileBtn.addEventListener("click", () => editProfileModal.style.display = "flex");
if (closeProfileModal) closeProfileModal.addEventListener("click", () => editProfileModal.style.display = "none");

if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    userProfile.name = document.getElementById("inputName").value.trim();
    userProfile.title = document.getElementById("inputTitle").value.trim();
    userProfile.bio = document.getElementById("inputBio").value.trim();

    const imgInput = document.getElementById("inputProfileImg");
    if (imgInput && imgInput.files && imgInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        userProfile.img = event.target.result;
        localStorage.setItem("fhub_profile", JSON.stringify(userProfile));
        updateProfileDOM();
        editProfileModal.style.display = "none";
      };
      reader.readAsDataURL(imgInput.files[0]);
    } else {
      localStorage.setItem("fhub_profile", JSON.stringify(userProfile));
      updateProfileDOM();
      editProfileModal.style.display = "none";
    }
  });
}