<template>
    <div class="about">
      <div class="about-content">
        <h1 class="about-title">Tentang Kami</h1>
        <p class="about-description">Kami adalah tim yang berdedikasi untuk membantu Anda menyelesaikan tugas-tugas dengan cepat dan efisien. Dengan pengalaman yang luas dalam berbagai bidang, kami siap untuk membantu Anda meraih kesuksesan dalam studi Anda.</p>
        <div class="about-team">
          <h2 class="about-team-title">Tim Kami</h2>
          <div class="about-team-members">
            <div class="about-team-member">
              <img src="../assets/member1.png" alt="Member 1" class="about-team-member-image">
              <h3 class="about-team-member-name">Muhammad Iksan Maulana</h3>
              <p class="about-team-member-role">Pendiri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .about-content {
    text-align: center;
  }
  
  .about-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #0E0E2C;
  }
  
  .about-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #0E0E2C;
  }
  
  .about-team-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #0E0E2C;
  }
  
  .about-team-members {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    color: #0E0E2C;
  }
  
  .about-team-member {
    text-align: center;
  }
  
  .about-team-member-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  .about-team-member-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .about-team-member-role {
    font-size: 1rem;
    color: #000000;
  }
  </style>
  