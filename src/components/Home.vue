<template>
  <div class="signup-page">
    <div class="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in backgroundImages"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <div
            class="background-image"
            :style="{
              backgroundImage: 'url(' + image + ')'
            }"
          >
            <div class="overlay"></div>
            <div class="welcome-message">
              <h1 style="line-height: 1.5">Prepare for Your Clinical Exams with Confidence!</h1>
              <h2 style="line-height: 1.5">
                Get ready for your clinical exams with our expertly designed mock tests. Practice
                with realistic simulations and receive detailed performance insights to boost your
                confidence.
              </h2>
              <p style="line-height: 1.5">
                Test your diagnosis ability and identify areas for improvement with our
                comprehensive mock tests.
              </p>
              <div class="pricing-table">
                <ul>
                  <li>price: <span>$10</span></li>
                </ul>
                <p>Secure payment via PayPal.</p>
                <button type="submit" class="btn" @click="startJourney">
                  Start your journey to success today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-nav">
        <button class="prev" @click="prevSlide">&lsaquo;</button>
        <button class="next" @click="nextSlide">&rsaquo;</button>
      </div>
    </div>
    <div class="contact-container">
      <div class="contact-form" id="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="name" /><br /><br />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" /><br /><br />
          <label for="exam" class="exam">Select exam/specialty:</label>
          <select class="exam" id="exam" name="exam" v-model="exam">
            <option>MRCEM OSCE</option>
            <option>USMLE CK</option>
            <option>PLAB 2</option>
            <option>MCCQE 2</option></select
          ><br /><br />
          <button type="submit" @click="sendContact">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImages: [
        '/carousel_one2.jpg',
        '/carousel_one.jpg',
        '/carousel_three.jpg',
        '/carousel_two.jpg'
      ],
      currentIndex: 0,
      price: 10.0,
      name: '',
      email: '',
      exam: ''
    }
  },
  methods: {
    startJourney() {
      axios
        .post('https://mocktastic-backend.onrender.com/create-payment', {
          // email: 'johndoe@example.com'
        })
        .then((response) => {
          window.location.href = response.data.forwardLink
          // Handle the response from the backend endpoint
        })
        .catch((error) => {
          console.error(error)
          // Handle any errors that occur
        })
    },
    sendContact() {
      axios.post('https://mocktastic-backend.onrender.com/contact', {
        name: this.name,
        email: this.email,
        exam: this.exam
      })
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.backgroundImages.length) % this.backgroundImages.length
      this.animateSlide('prev')
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.backgroundImages.length
      this.animateSlide('next')
    },
    animateSlide(direction) {
      const carouselInner = document.querySelector('.carousel-inner')
      const carouselItemWidth = document.querySelector('.carousel-item').offsetWidth
      let translateX = 0

      if (direction === 'next') {
        translateX = -carouselItemWidth
      } else if (direction === 'prev') {
        translateX = carouselItemWidth
      }

      carouselInner.style.transform = `translateX(${translateX}px)`
      setTimeout(() => {
        carouselInner.style.transform = `translateX(0px)`
      }, 500)
    },
    startSlideShow() {
      setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  },
  mounted() {
    this.startSlideShow()
  }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.carousel {
  position: relative;
}

.carousel-inner {
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  float: left;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.carousel-item.active {
  display: block;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 10%;
  filter: brightness(0.5);
}

.carousel-nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
}

.price-display {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
}

.contact-form {
  max-width: 400px;
  margin: 40px auto;
  margin-top: 150px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.contact-container {
  background-color: #f7f7f7;
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
textarea {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
textarea {
  height: 150px;
  resize: vertical;
}

button[type='submit'] {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #3e8e41;
}

.welcome-message {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  z-index: 2;
}
.welcome-message h1 {
  font-weight: 1000;
  line-height: 1.5;
}
.welcome-message h2 {
  font-weight: 100;
  line-height: 1.5;
}
.welcome-message p {
  line-height: 1.5;
}
.pricing-table {
  margin-top: 20px;
}
.pricing-table ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.pricing-table li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  line-height: 1.5;
}
.pricing-table li:last-child {
  border-bottom: none;
}
.btn {
  background-color: #f7f7f7;
  color: #3498db;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #fff;
}

@media (max-width: 1084px) {
  .carousel {
    width: 100%;
  }
  .contact-form {
    max-width: 300px;
  }
}
@media (max-width: 1084px) {
  .background-image {
    background-size: cover;
    background-position: center;
  }
}
@media (max-width: 1084px) {
  .carousel-nav {
    top: 20px;
    left: 20px;
  }
  .prev,
  .next {
    font-size: 18px;
  }
}
@media (max-width: 1084px) {
  .welcome-message {
    font-size: 18px;
    line-height: 1.2;
  }
}
@media (max-width: 1084px) {
  .pricing-table {
    font-size: 16px;
  }
  .pricing-table ul {
    padding: 0;
  }
  .pricing-table li {
    padding: 10px;
  }
}
@media (max-width: 1084px) {
  .btn {
    padding: 10px 15px;
    font-size: 16px;
  }
}
/* Media query for tablet landscape */
@media only screen and (max-width: 1024px) {
  .welcome-message {
    max-width: 600px;
  }
  .welcome-message h1 {
    font-size: 30px;
  }
  .welcome-message h2 {
    font-size: 20px;
  }
  .welcome-message p {
    font-size: 16px;
  }
}

/* Media query for tablet portrait */
@media only screen and (max-width: 768px) {
  .welcome-message {
    max-width: 400px;
  }
  .welcome-message h1 {
    font-size: 24px;
  }
  .welcome-message h2 {
    font-size: 18px;
  }
  .welcome-message p {
    font-size: 14px;
  }
}

/* Media query for mobile landscape */
@media only screen and (max-width: 480px) {
  .welcome-message {
    max-width: 300px;
  }
  .welcome-message h1 {
    font-size: 20px;
  }
  .welcome-message h2 {
    font-size: 16px;
  }
  .welcome-message p {
    font-size: 12px;
  }
  .pricing-table button {
    font-size: 14px;
  }
}

/* Media query for mobile portrait */
@media only screen and (max-width: 320px) {
  .welcome-message {
    max-width: 250px;
  }
  .welcome-message h1 {
    font-size: 18px;
  }
  .welcome-message h2 {
    font-size: 14px;
  }
  .welcome-message p {
    font-size: 10px;
  }
  .pricing-table button {
    font-size: 12px;
  }
}
</style>
