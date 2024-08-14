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
    <p>Your payment was canceled.</p>
    <router-link to="/">Go back to the homepage</router-link>
  </div>
</template>

<script>
export default {
  created() {
    // Optionally, you could log the cancellation event or take other actions
    console.log('Payment was canceled by the user.')
    // You might also want to inform the backend if needed
    this.notifyCancellation()
  },
  methods: {
    async notifyCancellation() {
      try {
        await this.$axios.post('https://mocktastic-backend.onrender.com/cancel', {
          message: 'User canceled the payment'
        })
        // Handle any additional UI updates or state changes
      } catch (err) {
        console.error('Error notifying backend about the cancellation:', err)
      }
    }
  }
}
</script>
