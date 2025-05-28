<!-- Products.vue -->
<template>
  <div id="product"class="container py-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="product in products" :key="product.id" class="col d-flex">
        <div class="card product-card shadow-sm hover-shadow w-100">
          <div class="image-wrapper">
            <img :src="product.image" class="card-img-top" :alt="product.name">
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center"><b>{{ product.name }}</b> </h5>
            <p class="card-text text-truncate">{{ product.description }}</p>
            <p class="card-text"><strong>${{ product.price.toFixed(2) }}</strong></p>
            <button class="custom-btn mt-auto" @click="viewProduct(product)">View Details</button>
          </div>
          <div class="card-footer text-muted text-center">
            In Stock: {{ product.stock }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import bag from '../images/bag.jpg'
import book from '../images/boook.jpg'
import fshoes from '../images/Fshoes.webp'
import game from '../images/game.jpg'
import kitchen from '../images/kitchen.jpg'
import laptop from '../images/laptop.jpeg'
import mqtr3 from '../images/MQTR3.jpeg'
import saree from '../images/saree.webp'
import smartphone from '../images/smartPhone.webp'
import sneakers from '../images/sneakers.avif'
import toy from '../images/Toy.jpg'
import traval from '../images/traval.jpg'
import tv from '../images/tv.jpeg'
import watch from '../images/watch.webp'
import wshoes from '../images/Wshoes-5.jpg'
import Beauty from '../assets/beauty.webp';
import Sports from '../assets/sports.jpeg';
import Health from '../assets/health.avif';
import Earing from '../images/ring.webp';
import suit from '../images/suit.jpg';
const router = useRouter()

const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest 5G enabled smartphone with excellent battery life.',
    price: 499.99,
    stock: 20,
    image: smartphone
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise-canceling over-ear headphones with great sound quality.',
    price: 149.99,
    stock: 35,
    image: mqtr3
  },
   {
    id: 3,
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
    price: 899.99,
    stock: 15,
    image: laptop
   },
  {
    id: 4,
    name: 'Smartwatch',
    description: 'Stylish smartwatch with fitness tracking and notifications.',
    price: 199.99,
    stock: 50,
    image: watch
   },
   {
    id:5,
    name:'tv',
    description: '55-inch 4K Ultra HD Smart TV with HDR support.',
    price: 699.99,
    stock: 10,
    image: tv
  },{
    id:6,
    name: 'Women\'s Handbag',
    description: 'Elegant leather handbag with multiple compartments.',
    price: 89.99,
    stock: 25,
    image: bag
  },
  {
    id: 7,
    name: 'Men\'s Sneakers',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    price: 79.99,
    stock: 30,
    image: sneakers
  },
  {
    id: 8,
    name: 'Gaming Console',
    description: 'Next-gen gaming console with 4K gaming capabilities.',
    price: 499.99,
    stock: 5,
    image: game
  },
  {
    id:9,
    name: 'women\'s footwear',
    description: 'Trendy women\'s footwear with comfortable fit.',
    price: 59.99,
    stock: 40,
    image: wshoes
  },
  {
    id:10,
    name: 'Men\'s Formal Shoes',
    description: 'Classic formal shoes for office and events.',
    price: 89.99,
    stock: 20,
    image: fshoes
  },
  {
    if:11,
    name: 'saree',
    description: 'Traditional saree with intricate designs.',
    price: 49.99,
    stock: 15,
    image: saree
  },
  {
    id:12,
    name: 'Toys for Kids',
    description: 'Fun and educational toys for children of all ages.',
    price: 29.99,
    stock: 60,
    image: toy
  },
  {
    id:13,
    name: 'Kitchen Appliances',
    description: 'Essential kitchen appliances for modern cooking.',
    price: 199.99,
    stock: 10,
    image: kitchen
  },
  {
    id:14,
    name: 'Books',
    description: 'Bestselling books across various genres.',
    price: 19.99,
    stock: 100,
    image: book
  },
  {
    id:15,
    name: 'Health Supplements',
    description: 'Vitamins and supplements for a healthy lifestyle.',
    price: 39.99,
    stock: 50,
    image: Health
  },
  {
    id:16,
    name: 'Sports Equipment',
    description: 'High-quality sports gear for fitness enthusiasts.',
    price: 89.99,
    stock: 25,
    image: Sports
  },
    
  {
    id:19,
    name: 'Beauty Products',
    description: 'Skincare and makeup products for all skin types.',
    price: 29.99,
    stock: 40,
    image: Beauty
  },
  {
    id:20,
    name: 'Travel Accessories',
    description: 'Convenient accessories for your travel needs.',
    price: 24.99,
    stock: 15,
    image: traval
  },
  {
    id:21,
    name: 'Earrings',
    description: 'Elegant earrings for special occasions.',
    price: 39.99,
    stock: 30,
    image: Earing
  },
  {
    id:22,
    name: 'Suits',
    description: 'Stylish suits for formal events.',
    price: 199.99,
    stock: 10,
    image: suit
  }
   
]

function viewProduct(product) {
  router.push({ name: 'OrderPage', params: { id: product.id }, state: product })
}
</script>

<style >
.product-card {
  aspect-ratio: 1 / 1; /* Equal width and height */
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the container without distortion */
}

.card:hover {
  transform: scale(1.02);
  transition: 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.02);
  transition: 0.3s ease-in-out;
}
#product{
  font-family: cursive;
  width: 100%;
}
 .custom-btn {
  background-color: #a34e0e; /* Brown color */
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}
.custom-btn:hover {
  background-color: #6e4229; /* Darker brown on hover */
}
.custom-btn:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(139, 94, 60, 0.25); /* Subtle focus ring */
}
.product-card .card-footer {
  background-color: #f8f9fa; /* Light background for footer */
  font-weight: bold;
}
 
</style>
