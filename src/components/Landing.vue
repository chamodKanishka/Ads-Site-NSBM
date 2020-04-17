<template>
    <div class="main col-md-12">
        <link rel="manifest" href="./manifest.json">
        <div class="hero-full-screen fixed-top">
            <NavHeader/>
            <div class="middle-content-section">
                <h1>Welcome to NSBM Add Site</h1>
                <router-link to="/Login"><button class="button large">Login</button></router-link>
                <router-link to="/Register"><button class="button large">Register</button></router-link>
                <router-link to="/Hostel/Hostels"><button class="button large"><i class="fa fa-users"></i>Visitors</button></router-link>
            </div>

            <div class="bottom-content-section" data-magellan data-threshold="0">
                <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg>
                </a>
            </div>

        </div>

        <div id="main-content-section" data-magellan-target="main-content-section">
            <!-- your content goes here -->



        </div>

    </div>
</template>

<script>

    import NavHeader from "./NavHeader";
    export default {
        name: "Landing",
        components: {NavHeader},
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

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
        background: url("../images/nsbm.jpg") center center no-repeat;
        background-size: cover;
    }

    .hero-full-screen .middle-content-section {
        text-align: center;
        color: #fefefe;
        background-color: rgba(0,0,0,0.6);
        padding:50px;
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


    .dashboard-nav-card {
        background: #1779ba;
        border-radius: 0;
        color: #fefefe;
        display: block;
        min-height: 100px;
        padding: 2rem;
        position: relative;
        width: 100%;
    }

    .dashboard-nav-card:hover .dashboard-nav-card-title,
    .dashboard-nav-card:hover .dashboard-nav-card-icon {
        color: #fefefe;
    }

    .dashboard-nav-card:hover .dashboard-nav-card-icon {
        opacity: 1;
        transition: all 0.2s ease;
    }

    .dashboard-nav-card-icon {
        font-size: 1.25rem;
        left: 1rem;
        opacity: 0.5;
        position: absolute;
        top: 1rem;
        transition: all 0.2s ease;
        width: auto;
    }

    .dashboard-nav-card-title {
        bottom: 0;
        position: absolute;
        right: 1rem;
        text-align: right;
    }




</style>
