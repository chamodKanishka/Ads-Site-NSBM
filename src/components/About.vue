<template>
    <div class="main">
    <div class="full-width-testimonial">
        <div class="full-width-testimonial-section">
            <div class="full-width-testimonial-icon text-center">
                <NavHeader/>
            </div>
            <div class="full-width-testimonial-content">
                <h5 class="full-width-testimonial-text">Lake Tahoe is the most beautiful place I have ever been to. I have traveled several places in the world, and there might be more beautiful places out there, but none that I have seen. I loved it!
                </h5>
                <p class="full-width-testimonial-source">Chathuranga Nanayakkara</p>
                <span class="full-width-testimonial-source-context">Creator of the Website</span>
            </div>
            <div class="bottom-content-section">
                <div class="bottom-bar">
                    <div class="bottom-bar-left">
                        <ul class="menu">
                            <li><router-link to="/Login">Login</router-link></li>
                            <li><router-link to="/Register">Register</router-link></li>
                            <li><router-link to="/">Panel</router-link></li>
                            <li><router-link to="/Contact">Contacts</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <blockquote>
                        Login to your Account & Post your add to public. Just Click
                    </blockquote>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <blockquote>
                        If you don't have an account. Don't worry, create a new account with our simple portal
                    </blockquote>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <blockquote>
                        Edit you're Advertisement or Profile with you're panel
                    </blockquote>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <blockquote>
                        If you have any problem. Don't worry, we will help you. just let us your problem
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    import NavHeader from "./NavHeader";
    export default {
        name: "About",
        components: {NavHeader}
    }
</script>

<style scoped>

    
    .menu{
        opacity: 1;
    }
    .top-bar{
        margin-top: -20px;
    }

    .full-width-testimonial {
        margin-top: -90px;
        background: url("../images/nsbm.jpg") center center no-repeat;

        

        background-size: cover;
        height: 800px;
    }

    .full-width-testimonial-icon .quote-path {
        fill: none;
        stroke: #ffae00;
        stroke-width: 2.5192;
        stroke-miterlimit: 10;
    }

    .full-width-testimonial-content,
    .full-width-testimonial-icon {
        text-align: center;
    }

    .full-width-testimonial-section {
        padding-top: 2rem;
        background-color: rgba(0,0,0,0.35);
    }

    .full-width-testimonial-section .full-width-testimonial-text {
        font-weight: 300;
        color: #ffffff;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: -5px;
        padding-left: 50px;
        padding-right: 50px;
        font-size: 1.5em;
    }

    @media print, screen and (min-width: 40em) {
        .full-width-testimonial-section .full-width-testimonial-text {
            padding-left: 100px;
            padding-right: 100px;
        }
    }

    @media print, screen and (min-width: 64em) {
        .full-width-testimonial-section .full-width-testimonial-text {
            padding-left: 180px;
            padding-right: 180px;
            font-size: 1.8em;
        }
    }

    @media screen and (min-width: 75em) {
        .full-width-testimonial-section .full-width-testimonial-text {
            padding-left: 300px;
            padding-right: 300px;
        }
    }

    .full-width-testimonial-section .full-width-testimonial-source {
        font-size: 1.2em;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        padding-bottom: 0;
        margin-bottom: 0.2em;
        font-size: 1.0em;
    }

    .full-width-testimonial-section .full-width-testimonial-source-context {
        display: block;
        font-size: 0.9em;
        font-weight: 500;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 0.8em;
    }

    .full-width-testimonial-section .slick-slider {
        margin-bottom: 0px;
    }

    .full-width-testimonial-text,
    .full-width-testimonial-content,
    .full-width-testimonial-source,
    .full-width-testimonial-icon {
        padding-bottom: 2rem;
    }

    .full-width-testimonial-content {
        width: 100%;
        margin-top: 40px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    .top-bar{
        color: #fefefe;
    }
    .top-bar .menu {
        background: transparent;
    }
    .top-bar {
        background: transparent;
    }
    .top-bar .menu a {
        color: #fefefe;
        font-weight: bold;
    }
    .bottom-bar{
        color: #fefefe;
    }
    .bottom-bar .menu {
        background: transparent;
        margin-top: 150px;
    }
    .bottom-bar {
        background: transparent;
    }
    .bottom-bar .menu a {
        color: #fefefe;
        font-weight: bold;
        margin-left: 215px;
    }
    blockquote{
        color: aqua;
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