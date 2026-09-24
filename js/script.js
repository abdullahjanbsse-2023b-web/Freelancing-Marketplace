// Sample Base Freelancer Data
const defaultServices = [
  {
    id: 1,
    name: "Ahmed Khan",
    serviceTitle: "Custom Web Application & REST APIs",
    category: "Web Development",
    price: 150,
    rating: 4.9,
    reviews: 38,
    img: "https://i.pravatar.cc/150?img=11",
    description: "Full Stack Web Developer specialized in building scalable web apps with modern JavaScript.",
    isUserCreated: false
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

// App State
let services = JSON.parse(localStorage.getItem("fhub_services")) || defaultServices;
let userProfile = JSON.parse(localStorage.getItem("fhub_profile")) || {
  name: "Abdullah Jan",
  title: "Full Stack Developer & Software Engineer",
  bio: "Passionate software developer experienced in building web applications with modern HTML5, CSS3, JavaScript, and MERN stack architectures.",
  rating: 4.9,
  completed: 14
};

let currentCategory = "All";
let searchQuery = "";
let currentSort = "default";

// DOM Elements
const marketplaceView = document.getElementById("marketplaceView");
const myServicesView = document.getElementById("myServicesView");
const profileView = document.getElementById("profileView");

const navHome = document.getElementById("navHome");
const navMyServices = document.getElementById("navMyServices");
const navProfile = document.getElementById("navProfile");

const freelancerGrid = document.getElementById("freelancerGrid");
const myServicesGrid = document.getElementById("myServicesGrid");

// Service Modal & Form Elements
const serviceModal = document.getElementById("serviceModal");
const serviceForm = document.getElementById("serviceForm");
const openCreateServiceBtn = document.getElementById("openCreateServiceBtn");
const dashboardCreateServiceBtn = document.getElementById("dashboardCreateServiceBtn");
const closeServiceModal = document.getElementById("closeServiceModal");

// Profile Elements
const editProfileBtn = document.getElementById("editProfileBtn");
const editProfileModal = document.getElementById("editProfileModal");
const closeProfileModal = document.getElementById("closeProfileModal");
const profileForm = document.getElementById("profileForm");

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  renderMarketplace();
  renderMyServices();
  updateProfileDOM();
});

// View Navigation Router
function showView(viewName) {
  marketplaceView.classList.add("hidden");
  myServicesView.classList.add("hidden");
  profileView.classList.add("hidden");

  navHome.classList.remove("active");
  navMyServices.classList.remove("active");
  navProfile.classList.remove("active");

  if (viewName === "home") {
    marketplaceView.classList.remove("hidden");
    navHome.classList.add("active");
  } else if (viewName === "myServices") {
    myServicesView.classList.remove("hidden");
    navMyServices.classList.add("active");
    renderMyServices();
  } else if (viewName === "profile") {
    profileView.classList.remove("hidden");
    navProfile.classList.add("active");
  }
}

navHome.addEventListener("click", (e) => { e.preventDefault(); showView("home"); });
navMyServices.addEventListener("click", (e) => { e.preventDefault(); showView("myServices"); });
navProfile.addEventListener("click", (e) => { e.preventDefault(); showView("profile"); });

// Render Marketplace Services
function renderMarketplace() {
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
        <button class="login-btn" style="width: 100%;" onclick="openDetailsModal(${item.id})">View Details</button>
      </div>
    `;
    freelancerGrid.appendChild(card);
  });
}

// Render My Services Section
function renderMyServices() {
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

// Create/Edit Service Form Logic
function openServiceModal(serviceObj = null) {
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

openCreateServiceBtn.addEventListener("click", () => openServiceModal());
dashboardCreateServiceBtn.addEventListener("click", () => openServiceModal());
closeServiceModal.addEventListener("click", () => serviceModal.style.display = "none");

// Form Validation and Submission
serviceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("serviceId").value;
  const title = document.getElementById("serviceTitleInput").value.trim();
  const category = document.getElementById("serviceCategoryInput").value;
  const price = parseFloat(document.getElementById("servicePriceInput").value);
  const description = document.getElementById("serviceDescInput").value.trim();

  if (id) {
    // Edit existing
    const index = services.findIndex(s => s.id == id);
    if (index !== -1) {
      services[index].serviceTitle = title;
      services[index].category = category;
      services[index].price = price;
      services[index].description = description;
    }
  } else {
    // Create new
    const newService = {
      id: Date.now(),
      name: userProfile.name,
      serviceTitle: title,
      category: category,
      price: price,
      rating: 5.0,
      reviews: 0,
      img: "https://i.pravatar.cc/150?img=33",
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

// Edit & Delete Service Interactions
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

// Profile Logic
function updateProfileDOM() {
  document.getElementById("profileName").innerText = userProfile.name;
  document.getElementById("profileTitle").innerText = userProfile.title;
  document.getElementById("profileBio").innerText = userProfile.bio;
  document.getElementById("inputName").value = userProfile.name;
  document.getElementById("inputTitle").value = userProfile.title;
  document.getElementById("inputBio").value = userProfile.bio;
}

editProfileBtn.addEventListener("click", () => editProfileModal.style.display = "flex");
closeProfileModal.addEventListener("click", () => editProfileModal.style.display = "none");

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userProfile.name = document.getElementById("inputName").value.trim();
  userProfile.title = document.getElementById("inputTitle").value.trim();
  userProfile.bio = document.getElementById("inputBio").value.trim();

  localStorage.setItem("fhub_profile", JSON.stringify(userProfile));
  updateProfileDOM();
  editProfileModal.style.display = "none";
});

// View Details Modal
window.openDetailsModal = function(id) {
  const item = services.find(s => s.id == id);
  if (!item) return;

  const modalBody = document.getElementById("detailsModalBody");
  modalBody.innerHTML = `
    <h2>${item.serviceTitle}</h2>
    <p style="color: #64748b; font-weight: bold; margin-bottom: 10px;">${item.category} • Offered by ${item.name}</p>
    <p>${item.description}</p>
    <h3 style="margin-top: 15px;">Price: $${item.price}</h3>
  `;
  document.getElementById("detailsModal").style.display = "flex";
};

document.getElementById("closeDetailsModal").addEventListener("click", () => {
  document.getElementById("detailsModal").style.display = "none";
});