<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeLink = ref(route.path)
const activeColor = ref('#007bff')

const handleLinkClick = (path) => {
  if (path === '/contact') {
    activeLink.value = path
    activeColor.value = '#007bff'
    router.push('/')
    setTimeout(() => {
      scrollToContact()
    }, 500) // wait for 500ms before scrolling to contact section
  } else {
    activeLink.value = path
    activeColor.value = '#007bff' // Reset the active color
    router.push(path)
  }
}

const scrollToContact = () => {
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="../src/assets/mocktastic_logo.jpg"
      width="100"
      height="100"
    />
    <nav>
      <a
        @click="handleLinkClick('/')"
        :style="{ color: activeLink === '/' ? activeColor : '#333' }"
        class="nav-link"
      >
        Home
      </a>
      <a
        @click="handleLinkClick('/about')"
        :style="{ color: activeLink === '/about' ? activeColor : '#333' }"
        class="nav-link"
      >
        What we do
      </a>
      <a
        @click="handleLinkClick('/contact')"
        :style="{ color: activeLink === '/contact' ? activeColor : '#333' }"
        class="nav-link"
      >
        Contact us
      </a>
    </nav>
  </header>
  <RouterView />
  <div id="contact-form">
    <!-- Your contact form content goes here -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 20vh;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #1a1818;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

RouterView {
  padding-top: 100px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 80px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  cursor: pointer;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
