<template>
    <div class="pemesanan">
      <div class="pemesanan-content">
        <h1 class="pemesanan-title">Pemesanan</h1>
        <p class="pemesanan-description">Untuk melakukan pemesanan atau mendapatkan informasi lebih lanjut, silakan hubungi kami melalui WhatsApp.</p>
        <button class="whatsapp-button" @click="redirectToWhatsApp">Hubungi via WhatsApp</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  @keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
  .pemesanan {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    color: #000;
  }
  
  .pemesanan-content {
    text-align: center;
  }
  
  .pemesanan-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  
  .pemesanan-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .whatsapp-button {
    background-color: #25d366;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .whatsapp-button:hover {
    background-color: #128c7e;
  }
  </style>
  
  <script>
  export default {
    methods: {
      redirectToWhatsApp() {
        const phoneNumber = '+6285162811901'; // Ganti dengan nomor WhatsApp yang ingin dituju
        const message = 'Halo, saya ingin melakukan pemesanan.'; // Ganti dengan pesan yang ingin disampaikan
  
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      }
    }
  }
  </script>  