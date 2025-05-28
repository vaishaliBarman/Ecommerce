<template>
  <section class="contact-section py-5">
    <div class="container">
      <h2 class="text-center mb-4">GET IN TOUCH</h2>
      <form @submit.prevent="submitForm" class="mx-auto" style="max-width: 600px;">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" v-model="form.name" class="form-control" id="name" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="form.email" class="form-control" id="email" required />
        </div>

        <div class="mb-3">
          <label for="subject" class="form-label">Subject</label>
          <input type="text" v-model="form.subject" class="form-control" id="subject" required />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea v-model="form.message" class="form-control" id="message" rows="4" required></textarea>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-brown">Send Message</button>
        </div>

        <p v-if="successMessage" class="text-success text-center mt-3">{{ successMessage }}</p>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const successMessage = ref('');
    const messages = ref([]);

    const loadMessages = () => {
      const stored = localStorage.getItem('contactMessages');
      if (stored) {
        messages.value = JSON.parse(stored);
      }
    };

    const saveMessages = () => {
      localStorage.setItem('contactMessages', JSON.stringify(messages.value));
    };

    const submitForm = () => {
      const newMessage = { ...form.value };
      messages.value.push(newMessage);
      saveMessages();

      successMessage.value = 'Message sent and saved successfully!';
      form.value = { name: '', email: '', subject: '', message: '' };
    };

    onMounted(() => {
      loadMessages();
    });

    return {
      form,
      successMessage,
      submitForm
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap');

.contact-section {
  font-family:  cursive;
  background: #f3f0f0;
  color: #3a2525;
}

.form-label {
  font-weight: 500;
}

.form-control {
  border: 1px solid #d8cfc9;
  border-radius: 0.5rem;
}

.form-control:focus {
  border-color: #a97460;
  box-shadow: 0 0 0 0.2rem rgba(167, 116, 96, 0.25);
}

.btn-brown {
  background-color: #8b5e3c;
  color: #fff;
  border: none;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

.btn-brown:hover {
  background-color: #6e4229;
}
</style>
