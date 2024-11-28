// Scroll suave para os links da navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showForm(formType) {
    // Botões de seleção
    const userBtn = document.getElementById('userBtn');
    const storeBtn = document.getElementById('storeBtn');

    // Formulários
    const userForm = document.getElementById('userForm');
    const storeForm = document.getElementById('storeForm');

    if (formType === 'user') {
        // Exibir formulário de usuário padrão
        userForm.classList.add('active');
        storeForm.classList.remove('active');
        userBtn.classList.add('active');
        storeBtn.classList.remove('active');
    } else if (formType === 'store') {
        // Exibir formulário de loja
        storeForm.classList.add('active');
        userForm.classList.remove('active');
        storeBtn.classList.add('active');
        userBtn.classList.remove('active');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([-22.91216, -43.33907], 13); // Centralizado na Zona Oeste do RJ

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const establishments = [
        {
            name: "Restaurante Delícia",
            lat: -22.933355, // Taquara
            lng: -43.357109,
            image: "./imagens/restaurante.png"
        },
        {
            name: "Loja de Roupas",
            lat: -22.936514, // Tanque
            lng: -43.360371,
            image: "./imagens/roupas.png"
        },
        {
            name: "Restaurante",
            lat: -22.919623, // Freguesia
            lng: -43.350984,
            image: "./imagens/bistro.png"
        },
        {
            name: "Supermercado Vianense",
            lat: -22.931472, // Taquara
            lng: -43.353938,
            image: "./imagens/mercado.png"
        },
        {
            name: "Pet Shop Amigo Fiel",
            lat: -22.930731, // Tanque
            lng: -43.356732,
            image: "./imagens/petshop.png"
        },
        {
            name: "DiversiBook",
            lat: -22.921523, // Freguesia
            lng: -43.348104,
            image: "./imagens/livraria.png"
        },
        {
            name: "Café Manhã",
            lat: -22.922842, // Freguesia
            lng: -43.344824,
            image: "./imagens/cafe.png"
        },
        {
            name: "Loja de Roupas Estilo",
            lat: -22.934621, // Taquara
            lng: -43.359872,
            image: "./imagens/loja.png"
        },
        {
            name: "Bar do Dias",
            lat: -22.929109, // Tanque
            lng: -43.361533,
            image: "./imagens/bar.png"
        },
        {
            name: "Salão de Beleza Glamour",
            lat: -22.918437, // Freguesia
            lng: -43.345609,
            image: "./imagens/salão.png"
        }
    ];

    establishments.forEach(establishment => {
        const marker = L.marker([establishment.lat, establishment.lng]).addTo(map);
        marker.bindPopup(`
            <div style="text-align: center;">
                <h5>${establishment.name}</h5>
                <img src="${establishment.image}" style="width:100%; height:auto; border-radius:8px;">
            </div>
        `);
    });
});