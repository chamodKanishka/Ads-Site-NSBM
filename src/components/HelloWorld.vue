<template>
    <div class="main col-md-12">
        <div class="hero-full-screen fixed-top">

            <div class="top-content-section">
                <div class="top-bar">
                    <div class="top-bar-left">
                        <ul class="menu">
                            <li class="menu-text"><img src="http://placehold.it/75x30" alt="logo"></li>
                            <li><a href="#">One</a></li>
                            <li><a href="#">Two</a></li>
                            <li><a href="#">Three</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="middle-content-section">
                <h1>Super Compelling Headline</h1>
                <button class="button large">Button</button>
                <button class="button large">Button</button>
            </div>

            <div class="bottom-content-section" data-magellan data-threshold="0">
                <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></a>
            </div>

        </div>

        <div id="main-content-section" data-magellan-target="main-content-section">
            <!-- your content goes here -->
        </div>

    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .hero-full-screen {
        height: 100vh;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background: url("https://images.pexels.com/photos/378273/pexels-photo-378273.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb") center center no-repeat;
        background-size: cover;
    }

    .hero-full-screen .middle-content-section {
        text-align: center;
        color: #fefefe;
    }

    .hero-full-screen .top-content-section {
        width: 100%;
    }

    .hero-full-screen .bottom-content-section {
        padding: 1rem;
    }

    .hero-full-screen .bottom-content-section svg {
        height: 3.75rem;
        width: 3.75rem;
        fill: #fefefe;
    }

    .hero-full-screen .top-bar {
        background: transparent;
    }

    .hero-full-screen .top-bar .menu {
        background: transparent;
    }

    .hero-full-screen .top-bar .menu-text {
        color: #fefefe;
    }

    .hero-full-screen .top-bar .menu li {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .hero-full-screen .top-bar .menu a {
        color: #fefefe;
        font-weight: bold;
    }


    h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
