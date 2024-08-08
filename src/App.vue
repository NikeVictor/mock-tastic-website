<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../public/mocktastic_logo.jpg" width="100" height="100" />
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/What we do">What we do</RouterLink>
        <a @click="scrollToContact">Contact us</a>
      </nav>
  </header>
  <RouterView />
</template>
<script>
export default {
  methods: {
    scrollToContact() {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
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
a {
  cursor: pointer;
}
</style>
