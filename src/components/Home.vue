<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <img class="hero-image" :src="heroImage" alt="Hero Image">
        <div class="hero-text">
          <h1 class="hero-title">{{ heroTitle }}</h1>
          <p class="hero-description">{{ heroDescription }}</p>
          <router-link to="/pesan">
            <button class="hero-button">{{ heroButton }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles for hero section */

.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0E0E2C;
}

.hero-content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.hero-image {
  max-width: 50%;
  height: auto;
  margin-right: 2rem;
}

.hero-text {
  max-width: 50%;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-button {
  background-color: #0044ff;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
  box-shadow: inset;
}
.hero-button:hover {
  transform: scale(1.1);
  color: #fcfcfc;
}

/* Styles for services section */

.services {
  margin-top: 4rem;
}

.services-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.services-list {
  list-style-type: none;
  padding: 0;
}

.service {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      heroImage: 'https://github.com/ikhsan1901/jokiproject/blob/master/src/assets/2.png',
      heroTitle: 'Joki Tugasku',
      heroDescription: 'Lebih mudah dan cepat bersama Joki Tugasku!',
      heroButton: 'Pesan Sekarang'
    }
  }
}
</script>
