<template>
    <div class="contact">
      <div class="contact-content">
        <h1 class="contact-title">Hubungi Kami</h1>
        <p class="contact-description">Jika Anda memiliki pertanyaan atau ingin berhubungan dengan kami, silakan mengisi formulir di bawah ini. Kami akan dengan senang hati menjawabnya.</p>
        <form class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Nama</label>
            <input type="text" id="name" class="form-input" placeholder="Masukkan nama Anda">
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-input" placeholder="Masukkan email Anda">
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Pesan</label>
            <textarea id="message" class="form-input" placeholder="Tulis pesan Anda"></textarea>
          </div>
          <button class="form-button">Kirim Pesan</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    color: #0E0E2C;
  }
  
  .contact-content {
    text-align: center;
  }
  
  .contact-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  
  .contact-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .form-label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .form-button {
    background-color: #7a33ff;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .form-button:hover {
    background-color: #7866ff;
  }
  </style>
  