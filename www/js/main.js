

Vue.component('form-buy', {
  template: `
     <form id="form_buy" method="post" @submit.prevent="onSubmit">>
        <div class="form-group">
            <input autocomplete="off" autofocus class="form-control" name="symbol" placeholder="Symbol" type="text">
        </div>
        <div class="form-group">
            <input autocomplete="off" autofocus class="form-control" name="shares" placeholder="Shares" type="text">
        </div>
        <button class="btn btn-primary" type="submit">Buy</button>
    </form>
    <div id="error" style="display: none; margin: 50px; width: 300px; margin-left: 380px" class="alert alert-danger" role="alert" >

    </div>
     `,
     data() {
      return {
        symbol: null,
        shares: null,
        errors: []
        }
     },
     methods: {
      onSubmit() {
        this.errors = []
        if (this.symbol && this.shares) {
          let purchase = {
          symbol: this.symbol,
          shares: this.shares
          }

        this.symbol = null,
        this.shares = null
        } else {
          if(!this.symbol) this.errors.push("Symbol required.")
          if(!this.shares) this.errors.push("Shares required.")
        }
      }
     }
   })


   var app = new Vue({
    el: '#app',
   })