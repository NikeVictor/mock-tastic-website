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
