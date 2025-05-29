<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container">
      <img :src="logo" alt="Logo" class="navbar-logo" />
      
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    
      >
        <span class="navbar-ICONICtoggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
          <li class="nav-item">
         <router-link class="nav-link" :to="{ path: '/', hash: '#about' }">ABOUT</router-link>

          </li>
  
        </ul>
      </div>
    </div>
  </nav>
</template>
<script >
import logo from '../assets/hot.png';
export default {
  name: 'Navbar',
  data() {
    return {
      logo: logo
    };
  },
  mounted() {
    // Add any additional logic if needed when the component is mounted
  }
};
</script>
<style scoped>
.custom-navbar {
  background-color: #773f0a; /* Dark brown */
  color: white;
}

.custom-navbar .nav-link,
.custom-navbar .navbar-brand,
.custom-navbar .navbar-toggler-icon {
  color: white !important;
}
.custom-navbar .nav-link:hover {
  color: #FFD700 !important; /* Gold */
}
.custom-navbar .navbar-toggler {
  border-color: white;

}
.custom-navbar .navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="white" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
}
 
.custom-navbar .navbar-nav .nav-item {
  margin-left: 15px;
}
.custom-navbar .navbar-nav .nav-link {
  transition: color 0.3s ease;
} 
.container {
   font-family: cursive
}
.navbar-logo {
  height: 80px;
  width: 100px;
}

</style>
