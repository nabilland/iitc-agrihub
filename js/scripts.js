// Panduan penanaman tanaman
const plantGuides = {
    "padi": {
        "title": "Panduan Menanam Padi",
        "content": `
            1. Pilih varietas padi yang cocok dengan iklim setempat.<br>
            2. Siapkan lahan dengan cara membajak dan meratakan tanah.<br>
            3. Rendam benih padi selama 24 jam sebelum penanaman.<br>
            4. Tanam benih di persemaian dan pindahkan setelah 25-30 hari.<br>
            5. Berikan air secara teratur hingga tanaman tumbuh subur.<br>
            6. Lakukan pemupukan dengan pupuk nitrogen untuk hasil terbaik.<br>
            7. Panen padi setelah tanaman menguning dan bulir padi mengeras.
        `
    },
    "jagung": {
        "title": "Panduan Menanam Jagung",
        "content": `
            1. Pilih varietas jagung yang sesuai dengan kondisi tanah.<br>
            2. Olah lahan dan buat bedengan dengan jarak tanam 70 x 20 cm.<br>
            3. Rendam benih jagung dalam air selama 24 jam sebelum ditanam.<br>
            4. Tanam benih dengan kedalaman sekitar 5 cm.<br>
            5. Siram lahan secara berkala dan jaga kelembaban tanah.<br>
            6. Lakukan penyiangan dan pemupukan pada minggu ke-4 dan ke-8.<br>
            7. Panen jagung setelah tongkol terlihat kering dan biji mengeras.
        `
    },
    "kedelai": {
        "title": "Panduan Menanam Kedelai",
        "content": `
            1. Pilih varietas kedelai unggul sesuai dengan lahan dan iklim.<br>
            2. Lakukan pengolahan tanah dengan membajak atau mencangkul.<br>
            3. Tanam benih kedelai dengan kedalaman 3-5 cm pada tanah yang gembur.<br>
            4. Jaga kelembaban tanah, namun jangan terlalu basah.<br>
            5. Berikan pupuk fosfor dan kalium untuk mempercepat pertumbuhan.<br>
            6. Lakukan penyiangan secara rutin pada awal pertumbuhan tanaman.<br>
            7. Panen kedelai saat daun mulai menguning dan polong mengering.
        `
    },
    "kentang": {
        "title": "Panduan Menanam Kentang",
        "content": `
            1. Siapkan lahan dengan gemburkan tanah menggunakan cangkul atau bajak.<br>
            2. Pilih bibit kentang yang berkualitas dengan tunas yang sehat.<br>
            3. Tanam bibit pada kedalaman sekitar 10-15 cm dengan jarak tanam 30 cm.<br>
            4. Siram tanaman kentang secara teratur untuk menjaga kelembaban.<br>
            5. Lakukan penyiangan dan penimbunan tanah pada akar tanaman.<br>
            6. Berikan pupuk nitrogen dan kalium untuk mempercepat pembentukan umbi.<br>
            7. Panen kentang setelah daunnya menguning dan layu.
        `
    }
};

// Fungsi untuk menampilkan panduan dan memperluas kartu
const plantCards = document.querySelectorAll('.plant-card');
const guideContainer = document.getElementById('guide-container');
const guideTitle = document.getElementById('guide-title');
const guideContent = document.getElementById('guide-content');

plantCards.forEach(card => {
    card.addEventListener('click', function() {
        const plantKey = this.getAttribute('data-plant');
        const guide = plantGuides[plantKey];
        
        // Tampilkan judul dan konten panduan
        guideTitle.innerHTML = guide.title;
        guideContent.innerHTML = guide.content;
        
        // Tampilkan kontainer panduan
        guideContainer.style.display = 'block';
    });
});


