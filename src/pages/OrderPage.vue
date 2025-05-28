<!-- OrderPage.vue -->
<template>
  <div  id="order"class="container py-5">
    <div v-if="product">
      <div class="row">
        <div class="col-md-6">
             <div class="image-container">
                <img :src="product.image" class="img-fluid rounded shadow-sm" :alt="product.name" />
             </div>
           
        </div>
        <div class="col-md-6 ">
            
          <h2>{{ product.name }}</h2>
          <p class="text-muted">{{ product.description }}</p>
          <p><strong>Base Price:</strong> ${{ product.price.toFixed(2) }}</p>
          <p><strong>GST (18%):</strong> ${{ gst.toFixed(2) }}</p>
          <p class="fs-4"><strong>Total:</strong> ${{ total.toFixed(2) }}</p>
          <button class="custom-btn">Place Order</button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Loading product...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const product = ref(null)


onMounted(() => {
  // In real apps, fetch from backend using route.params.id
  // Here we simulate getting the product from route state
  if (history.state?.name) {
    product.value = history.state
  } else {
    router.push({ name: 'Products' }) // fallback
  }
})

const gst = computed(() => product.value ? product.value.price * 0.18 : 0)
const total = computed(() => product.value ? product.value.price + gst.value : 0)
</script>
<style>
.image-container {
  width: 100%;
  aspect-ratio: 1 / 1; /* Ensures square shape */
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills container without distortion */
  
}
#order {
  font-family: cursive;
  width: 100%;
  color: #3a2525; /* Dark brown color */
}
 </style>