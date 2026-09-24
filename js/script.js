// Sample Freelancer & Service Data
const freelancers = [
  {
    id: 1,
    name: "Ahmed Khan",
    serviceTitle: "Custom Web Application & REST APIs",
    category: "Web Development",
    price: 150,
    rating: 4.9,
    reviews: 38,
    img: "https://i.pravatar.cc/150?img=11",
    description: "Full Stack Web Developer with 5+ years of experience in React, Node.js, and modern UI engineering."
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
    description: "Creative designer specializing in minimalism, vector graphic artwork, and responsive branding design."
  },
  {
    id: 3,
    name: "Usman Ahmad",
    serviceTitle: "Cross-Platform iOS & Android App",
    category: "Mobile Apps",
    price: 250,
    rating: 4.7,
    reviews: 19,
    img: "https://i.pravatar.cc/150?img=12",
    description: "Mobile developer delivering high-performance cross-platform applications built with Flutter."
  },
  {
    id: 4,
    name: "Ayesha Malik",
    serviceTitle: "Data Analysis & Interactive Visualizations",
    category: "Data Analysis",
    price: 120,
    rating: 4.8,
    reviews: 27,
    img: "https://i.pravatar.cc/150?img=9",
    description: "Data specialist handling Python analysis, Pandas dataset cleaning, and Power BI dashboard creation."
  },
  {
    id: 5,
    name: "Bilal Hassan",
    serviceTitle: "SEO Optimization & Digital Growth Strategy",
    category: "Digital Marketing",
    price: 95,
    rating: 4.6,
    reviews: 42,
    img: "https://i.pravatar.cc/150?img=13",
    description: "Performance marketing consultant driving traffic growth via targeted SEO and ad campaign optimization."
  },
  {
    id: 6,
    name: "Zainab Fatima",
    serviceTitle: "UI/UX Mobile & Web Interface Design",
    category: "Graphic Design",
    price: 110,
    rating: 4.9,
    reviews: 51,
    img: "https://i.pravatar.cc/150?img=20",
    description: "Figma UI/UX designer focused on intuitive design systems, mobile responsiveness, and user testing."
  }
];

// State variables
let currentCategory = "All";
let searchQuery = "";
let currentSort = "default";

// DOM Elements
const grid = document.getElementById("freelancerGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryFilters = document.getElementById("categoryFilters");
const sortSelect = document.getElementById("sortSelect");

const profileModal = document.getElementById("profileModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

// Render Function
function renderCards() {
  let filtered = freelancers.filter(item => {
    const matchesCategory = (currentCategory === "All") || (item.category === currentCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">No freelancers found matching your criteria.</p>`;
    return;
  }

  filtered.forEach(freelancer => {
    const card = document.createElement("div");
    card.className = "freelancer-card";
    card.innerHTML = `
      <div>
        <img src="${freelancer.img}" alt="${freelancer.name}">
        <div class="category-tag">${freelancer.category}</div>
        <h3>${freelancer.name}</h3>
        <p class="service-title">${freelancer.serviceTitle}</p>
      </div>

      <div>
        <div class="card-meta">
          <span class="rating-box">★ ${freelancer.rating} (${freelancer.reviews})</span>
          <span class="price-box">From $${freelancer.price}</span>
        </div>
        <button onclick="openProfileModal(${freelancer.id})">View Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Search Event Listeners
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderCards();
});

searchBtn.addEventListener("click", () => {
  renderCards();
});

// Category Filter Listener
categoryFilters.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentCategory = e.target.getAttribute("data-category");
    renderCards();
  }
});

// Sort Listener
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderCards();
});

// Modal Detail View Functions
window.openProfileModal = function(id) {
  const item = freelancers.find(f => f.id === id);
  if (!item) return;

  modalBody.innerHTML = `
    <div class="modal-profile-header">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h2>${item.name}</h2>
        <p style="color: #64748b; font-weight: bold;">${item.category}</p>
        <p style="color: #f59e0b; margin-top: 4px;">★ ${item.rating} (${item.reviews} reviews)</p>
      </div>
    </div>
    <h4>Service Offered</h4>
    <p>${item.serviceTitle}</p>
    <h4>About</h4>
    <p>${item.description}</p>
    <h4>Starting Price</h4>
    <p style="font-size: 20px; font-weight: bold; color: #0f172a;">$${item.price}</p>
    <button class="hire-now-btn" onclick="alert('Booking request sent to ${item.name}!')">Hire ${item.name}</button>
  `;

  profileModal.style.display = "flex";
};

closeModal.addEventListener("click", () => {
  profileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === profileModal) {
    profileModal.style.display = "none";
  }
});