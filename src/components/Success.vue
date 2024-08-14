<style scoped>
.payment-status {
  text-align: center;
  margin-top: 50px; /* move the payment status down by 20px */
}

.payment-status p {
  font-size: 18px; /* adjust the font size to your liking */
  font-weight: bold; /* make the text bold */
  color: #333; /* adjust the text color to your liking */
}

/* Small screens (mobile) */
@media only screen and (max-width: 600px) {
  .payment-status {
    margin-top: 20px; /* reduce margin top on small screens */
  }
  .payment-status h1 {
    font-size: 20px; /* reduce font size on small screens */
  }
  .payment-status p {
    font-size: 16px; /* reduce font size on small screens */
  }
}

/* Medium screens (tablet) */
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .payment-status {
    margin-top: 30px; /* adjust margin top on medium screens */
  }
  .payment-status h1 {
    font-size: 22px; /* adjust font size on medium screens */
  }
  .payment-status p {
    font-size: 18px; /* adjust font size on medium screens */
  }
}

/* Large screens (desktop) */
@media only screen and (min-width: 901px) {
  .payment-status {
    margin-top: 50px; /* restore original margin top on large screens */
  }
  .payment-status h1 {
    font-size: 24px; /* restore original font size on large screens */
  }
  .payment-status p {
    font-size: 18px; /* restore original font size on large screens */
  }
}
</style>

<template>
  <div class="payment-status">
    <h1>Payment Status</h1>
    <p v-if="loading">Processing your payment...</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">Payment was successful! Thank you for your purchase.</p>
    <router-link to="/">Go back to the homepage</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      success: false,
      error: null
    }
  },
  mounted() {
    // Capture the paymentId and PayerID from the URL
    const paymentId = this.$route.query.paymentId
    const payerId = this.$route.query.PayerID
    if (paymentId && payerId) {
      // Send the IDs to the backend to execute the payment
      this.executePayment(paymentId, payerId)
    } else {
      this.loading = false
      this.error = 'Invalid payment details.'
    }
  },
  methods: {
    async executePayment(paymentId, payerId) {
      try {
        const response = await axios.post('https://mocktastic-backend.onrender.com/success', {
          paymentId,
          payerId
        })
        if (response.status === 200) {
          this.success = true
        } else {
          this.error = 'Payment failed.'
        }
      } catch (err) {
        this.error = 'An error occurred while processing your payment.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
