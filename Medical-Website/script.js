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
  