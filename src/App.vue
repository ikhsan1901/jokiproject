<template>
  <div id="container">
    <header>
      <nav>
        <div class="logo">
          <img src="../src/assets/logos.png" alt="Logo" class="nav-logo">
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link> |
          <router-link to="/about" class="nav-link">About</router-link> |
          <router-link to="/contact" class="nav-link">Contact Us</router-link> 
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <p>&copy; 2023 Joki Tugasku(SanProject). All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
#container {
  background-color: #ffffff;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 50px;
}

nav {
  display: flex;
  justify-content: space-between; /* Menempatkan logo di pojok kiri dan link di pojok kanan */
  align-items: center;
  margin-bottom: 50px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover {
  transform: scale(1.1);
  color: #3B71FE;
}

.nav-logo {
  width: 200px;
  height: 40px;
  margin-right: 10px;
}

footer {
  margin-top: 50px;
  color: #000000;
}
</style>

<script>
export default {
  name: 'App',
  mounted() {
    const Tawk_API = Tawk_API || {};
    const Tawk_LoadStart = new Date();
    (function () {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/YOUR_TAWKTO_WIDGET_CODE';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }
}
</script>