<template>
    <div class="main">
        <HostelHome/>
        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h3>Make Your Payments</h3>
            </div>
        <div>
            <md-steppers :md-active-step.sync="active" class="steppers" md-linear>
            <md-step  id="first" md-label="View Details" md-description="Optional" :md-done.sync="first">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <md-button class="md-raised md-primary neutral" @click="setDone('first', 'second')">Checkout</md-button>
            </md-step>

            <md-step  id="second" md-label="Checkout" :md-error="secondStepError" :md-done.sync="second">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <md-button class="md-raised md-primary negative" @click="setDone('second', 'first')">Back</md-button>
                <md-button class="md-raised md-primary neutral" @click="setDone('second', 'third')">Continue</md-button>
            </md-step>

            <md-step  id="third" md-label="Third Step" :md-done.sync="third">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <md-button class="md-raised md-primary positive" @click="setDone('third')">Pay</md-button>
            </md-step>
            </md-steppers>
        </div>

                        <footer class="my-5 pt-5 text-muted text-center text-small">

                        </footer>
        </div>
        <Footer/>
    </div>

</template>

<script>
    import HostelHome from "./HostelHome"
    export default {
        name: "Payments",
        
        components: {
            HostelHome
        },
        data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
    }
    }

</script>

<style scoped>

    .md-steppers {
        background-color:#e0e0e0;
        max-width: 60%;
        display: block;
        flex-direction: column;
        align-items: center;
        margin-left: 20%;
  }

  .negative{
      background-color: #ec1c24;
      color:white;
  }
  .neutral{
      background-color: #19589d;
      color:white;
  }
  .positive{
      background-color: #0ed145;
      color:white;
      font-size: 18px;
      font-weight: 700;
  }
  .steppers{
      background-color: #abe0c7;
  }

</style>
