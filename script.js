// Data proyek
const projects = [
    {
        title: "Proyek 1",
        description: "Aplikasi Java untuk manajemen tugas.",
        image: "https://via.placeholder.com/400x200?text=Proyek+1", // Ganti dengan URL gambar yang sesuai
        link: "#"
    },
    {
        title: "Proyek 2",
        description: "Platform e-commerce dibangun dengan Java dan Spring Boot.",
        image: "https://via.placeholder.com/400x200?text=Proyek+2", // Ganti dengan URL gambar yang sesuai
        link: "#"
    }
];

// Fungsi untuk menampilkan proyek
function renderProjects() {
    const projectList = document.getElementById('projectList');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = "bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-80";
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-32 object-cover rounded-t-lg mb-2">
            <h3 class="font-bold text-xl text-blue-600">${project.title}</h3>
            <p class="text-gray-700">${project.description}</p>
            <a href="${project.link}" class="text-blue-500 hover:underline">Lihat Proyek</a>
        `;
        projectList.appendChild(projectDiv);
    });
}

// Penanganan pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih atas pesan Anda!');
    this.reset();
});

// Render proyek saat halaman dimuat
window.onload = renderProjects;
