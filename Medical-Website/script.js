// Simulated user data
const userData = {
    name: "Siddhant Borkar",
    title: "MD/PhD",
    institution: "University of North Carolina Hospital",
    submissions: 166,
    activity: {
      "2024-01": 5,
      "2024-02": 12,
      "2024-03": 9,
      "2024-04": 15,
      "2024-05": 22,
      "2024-06": 30,
      "2024-07": 40,
      "2024-08": 25,
      "2024-09": 10,
      "2024-10": 8,
      "2024-11": 15,
      "2024-12": 30,
    },
    certifications: [
      { name: "Cardiology Basics", link: "#", image: "assets/badge1.png" },
      { name: "Advanced Pulmonology", link: "#", image: "assets/badge2.png" },
      { name: "Neurosurgery Training", link: "#", image: "assets/badge3.png" },
    ],
  };
  
  // Toggle navbar
  document.getElementById("toggle-btn").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("collapsed");
  });
  
  // Populate profile information
  document.getElementById("profile-picture").textContent = "Profile";
  document.getElementById("profile-info").innerHTML = `
    <h2>${userData.name}</h2>
    <p>${userData.title}</p>
    <p>${userData.institution}</p>
    <p><strong>${userData.submissions}</strong> submissions in the past year</p>
  `;
  
  // Generate heatmap
  const heatmap = document.getElementById("heatmap");
  Object.keys(userData.activity).forEach((month) => {
    const cell = document.createElement("div");
    cell.classList.add("heatmap-cell");
    if (userData.activity[month] > 0) {
      cell.classList.add("active");
    }
    heatmap.appendChild(cell);
  });
  
  // Populate certifications
  const certifications = document.getElementById("certifications");
  userData.certifications.forEach((cert) => {
    const img = document.createElement("img");
    img.src = cert.image;
    img.alt = cert.name;
    img.title = cert.name;
    img.addEventListener("click", () => {
      window.open(cert.link, "_blank");
    });
    certifications.appendChild(img);
  });
  
// Toggle navbar
document.getElementById("toggle-btn").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("collapsed");
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get the navbar and toggle button
    const navbar = document.getElementById("navbar");
    const toggleBtn = document.getElementById("toggle-btn");

    // Check if the toggle button exists (to avoid errors on pages without it)
    if (toggleBtn) {
        // Add click event listener to the toggle button
        toggleBtn.addEventListener("click", () => {
        navbar.classList.toggle("collapsed"); // Toggle the "collapsed" class
        });
    }
});

  document.addEventListener("DOMContentLoaded", () => {
    const activityData = {
      "2024-01-01": 3, "2024-01-02": 1, "2024-01-05": 0, // Example data
      "2024-02-01": 5, "2024-03-12": 2, "2024-06-15": 10,
      // Add more data as required
    };
  
    const heatmap = document.getElementById("heatmap");
    const activeDaysEl = document.getElementById("active-days");
    const maxStreakEl = document.getElementById("max-streak");
  
    let totalSubmissions = 0;
    let activeDays = 0;
    let maxStreak = 0;
    let currentStreak = 0;
  
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
  
    months.forEach((month, monthIndex) => {
      const monthDiv = document.createElement("div");
      monthDiv.classList.add("month");
      const title = document.createElement("div");
      title.textContent = month;
      title.classList.add("month-title");
      monthDiv.appendChild(title);
  
      for (let day = 1; day <= 31; day++) {
        if (monthIndex === 1 && day > 28) break; // February
        if ([3, 5, 8, 10].includes(monthIndex) && day > 30) break; // 30-day months
  
        const date = `2024-${String(monthIndex + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
        const activity = activityData[date] || 0;
  
        // Track submissions and streaks
        totalSubmissions += activity;
        if (activity > 0) {
          activeDays++;
          currentStreak++;
          maxStreak = Math.max(maxStreak, currentStreak);
        } else {
          currentStreak = 0;
        }
  
        // Create a day box
        const dayBox = document.createElement("div");
        dayBox.classList.add("day-box");
        if (activity > 0) {
          if (activity <= 2) {
            dayBox.classList.add("active-low");
          } else if (activity <= 5) {
            dayBox.classList.add("active-medium");
          } else if (activity <= 10) {
            dayBox.classList.add("active-high");
          } else {
            dayBox.classList.add("active-max");
          }
        }
        dayBox.title = `${month} ${day}: ${activity} activities`;
        monthDiv.appendChild(dayBox);
      }
  
      heatmap.appendChild(monthDiv);
    });
  
    // Update stats
    activeDaysEl.textContent = activeDays;
    maxStreakEl.textContent = maxStreak;
  });
  
  window.onload = function () {
    console.log("Courses page script loaded.");
  
    // Handle Focus Area Clicks
    const focusAreas = document.querySelectorAll(".focus-area");
    focusAreas.forEach((area) => {
      area.addEventListener("click", () => {
        alert(`Resource linked to this focus area.`);
        // Add logic for loading resource or updating state here
      });
    });
  
    // Handle Certification Clicks
    const certifications = document.querySelectorAll(".certification-icon");
    certifications.forEach((cert) => {
      cert.addEventListener("click", () => {
        alert(`Certification details or maintenance process.`);
        // Add logic for certification handling here
      });
    });
  };
  