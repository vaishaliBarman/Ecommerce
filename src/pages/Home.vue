<template>
  <div class="container mt-4">
    <!-- Banner Section -->
     <section id="banner-carousel" class="mb-5">
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="bannerImage" class="d-block w-100" alt="Banner 1" loading="lazy">
      </div>
      <div class="carousel-item">
        <img :src="banner2" class="d-block w-100" alt="Banner 2" loading="lazy">
      </div>
      <div class="carousel-item">
        <img :src="banner3" class="d-block w-100" alt="Banner 3" loading="lazy">
      </div>
    </div>
    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>


    <!-- Category Section -->
      <section class="mb-5">
        <h3 class="mb-3 text-center">PRODUCT CATEGORIES</h3>
        <div class="row g-4">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="col-6 col-md-4 col-lg-3"
          >
            <div class="card  text-center border-0 shadow-sm">
              <div class="card-body d-flex flex-column align-items-center justify-content-center">
                <img :src="category.image" alt="Category image" style="height: 80px;object-fit: contain;" />
                <h6 class="mt-2">{{ category.name }}</h6>
              </div>

            </div>
          </div>
        </div>
      </section>
<!----  aBOUT SECTION-->

      <section id="about"class="about-section mb-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-md-6 mb-4 mb-md-0">
          <img 
            src="../assets/About.gif" 
            alt="About MyShop" 
            class="img-fluid rounded shadow w-100"
          />
        </div>

        <!-- Text Section -->
        <div class="col-md-6">
          <h2 class="section-title">ABOUT <span class="highlight">MyShop</span></h2>
          <p class="lead">
            MyShop is your trusted destination for everything you need—whether it’s the latest gadgets, trendy fashion, daily home essentials, or thoughtful gifts. We're here to make online shopping simple, fun, and secure.
          </p>
          <p>
            Founded with a mission to deliver quality products at unbeatable prices, MyShop is built on a foundation of trust, speed, and customer-first service. With thousands of products across multiple categories, fast delivery, and 24/7 support, we ensure your shopping experience is seamless from cart to doorstep.
          </p>
          <div class="row mt-4">
            <div class="col-6">
              <ul class="feature-list">
                <li><i class="fas fa-check-circle me-2 text-success"></i> Curated Products</li>
                <li><i class="fas fa-check-circle me-2 text-success"></i><b>50,000+ Customers</b>  </li>
              </ul>
            </div>
            <div class="col-6">
              <ul class="feature-list">
                <li><i class="fas fa-check-circle me-2 text-success"></i> Secure Payments</li>
                <li><i class="fas fa-check-circle me-2 text-success"></i> Fast Shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>



    <!-- Contact Us Preview -->
      <section class="contact-section mb-5 py-5 px-3 px-md-5 rounded shadow-sm">
        <div class="container">
          <div class="text-center">
            <h3 class="contact-title mb-3">CONTACT <span class="highlight">Us</span></h3>
            <p class="contact-text mx-auto mb-4">
              Have questions or need assistance? We’re here to help you 24/7. 
              Feel free to reach out to our team through our dedicated contact page.
            </p>
            <router-link to="/contact" class=" btn" style="background-color: #964a18; color: white; padding: 10px 20px; border-radius: 5px;">
              Go to Contact
            </router-link>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import { ref } from 'vue';
import bannerImage from '../assets/ banner.png';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.png';

import Beauty from '../assets/beauty.webp';
import Electronic from '../assets/electronics.jpg';
import Fashion from '../assets/Fashion.jpg';
import Health from '../assets/health.avif';
import House from '../assets/house1.jpg';
import Sports from '../assets/sports.jpeg';
import Toy from'../assets/Toy.jpg';
import Book from'../assets/book.jpeg';

 


import '../style.css';
export default {
  name: 'Home',
  setup() {
    // const trending = ref([]);
 const categories = ref([
  { name: 'Fashion & Apparel', image: Fashion },
  { name: 'Household Essentials', image: House },
  { name: 'Electronics', image: Electronic },
  { name: 'Beauty Products', image: Beauty },
  { name: 'Sports', image: Sports },
  { name: 'Books', image: Book },
  { name: 'Toys & Games', image: Toy },
  { name: 'Health & Wellness', image: Health },
]);

 

    return { categories, bannerImage, banner2, banner3 };
  }
};
</script>

<style scoped>
.carousel-caption {
  bottom: 20px;
}
.card:hover {
  transform: translateY(-4px);
  transition: 0.3s ease;
}
 
h3 {
    text-align: center;
    color: #3a2525; 
     font-family:  cursive;
    font-weight: bold
    

}
h6{
    font-weight: bold;
    color: #3a2525; 
    font-family:  cursive;
    letter-spacing: 1px;
}
.card-body {
  padding:0px;
  text-align: center;
   
}
 


.about-section {
  background-color: hsla(20, 12%, 90%, 0.425);
  font-family: cursive;
  color: #3a2525;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-title .highlight {
  color: #5f2804;
}

.about-section .lead {
  font-weight: 500;
  color: #3a2525;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.7;
}

.feature-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.feature-list li {
  margin-bottom: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

 
 .contact-section {
  background-color: #f8f7f7;
  font-family: 'Rubik', sans-serif;
  color: #3a2525;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-title {
  font-weight: 700;
  color: #3a2525;
  font-size: 2rem;
}

.contact-title .highlight {
  color: #964a18;
}

.contact-text {
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #3a2525;
}


</style>

