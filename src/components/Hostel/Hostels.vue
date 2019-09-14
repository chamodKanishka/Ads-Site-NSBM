<template>
    <div class="main">
        <nav class="top-bar topbar-responsive">
            <div class="columns medium-2">
                <strong><b>Hostels</b></strong>
            </div>
            <div id="topbar-responsive" class="topbar-responsive-links">
                <div class="top-bar-right">
                    <ul class="menu simple vertical medium-horizontal">
                        <li><router-link to="/Hostel/MyAds">Home</router-link></li>
                        <li><router-link to="/Hostel/Hostels" class="active">View Adds</router-link></li>
                        <li><router-link to="/Hostel/AddHostel">Post add</router-link></li>
                        <li>
                            <router-link to="/"><button type="button" class="button hollow topbar-responsive-button">Log Out</button></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="row">
        <div class="col-md-2"></div>
            <div class="scroll-me col-md-8">
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
                <div class="kolom"></div>
            </div>
        <div class="col-md-2"></div>
        </div>
        <div>

            <div class="pagination">
                <p>Current page: {{ currentPage }}</p>
                <v-pagination v-model="currentPage"
                              :page-count="totalPages"
                              :classes="bootstrapPaginationClasses"
                              :labels="paginationAnchorTexts"></v-pagination>
            </div>
        </div>

<Footer/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import vueNiceScrollbar from 'vue-nice-scrollbar'

    Vue.use(vueNiceScrollbar)
    import vPagination from 'vue-plain-pagination'
    import Footer from "../Footer";
    export default {
        name: "Hostels",
        components: {Footer, vPagination,vueNiceScrollbar },
        data() {
            return {
                currentPage: 1,
                totalPages: 30,
                bootstrapPaginationClasses: {
                    ul: 'pagination',
                    li: 'page-item',
                    liActive: 'active',
                    liDisable: 'disabled',
                    button: 'page-link'
                },
                paginationAnchorTexts: {
                    first: 'First',
                    prev: 'Previous',
                    next: 'Next',
                    last: 'Last'
                }
            }
        }
    }
</script>

<style scoped>


    .main{
        margin-top: -60px;
    }

    .topbar-responsive {
        background: #2c3840;
        padding: 1rem 1.5rem;
    }

    .topbar-responsive .topbar-responsive-logo {
        color: #fefefe;
        vertical-align: middle;
    }

    .topbar-responsive .menu {
        background: #2c3840;
    }

    .topbar-responsive .menu li:last-of-type {
        margin-right: 0;
    }

    .topbar-responsive .menu a {
        color: #fefefe;
        transition: color 0.15s ease-in;
    }

    .topbar-responsive .menu a:hover {
        color: #c6d1d8;
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive .menu a {
            padding: 0.875rem 0;
        }
    }

    .topbar-responsive .menu .topbar-responsive-button {
        color: #fefefe;
        border-color: #fefefe;
        border-radius: 5000px;
        transition: color 0.15s ease-in, border-color 0.15s ease-in;
    }

    .topbar-responsive .menu .topbar-responsive-button:hover {
        color: #c6d1d8;
        border-color: #c6d1d8;
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive .menu .topbar-responsive-button {
            width: 100%;
            margin: 0.875rem 0;
        }
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive {
            padding: 0.75rem;
        }
        .topbar-responsive .top-bar-title {
            position: relative;
            width: 100%;
        }
        .topbar-responsive .top-bar-title span {
            position: absolute;
            right: 0;
            border: 1px solid #fefefe;
            border-radius: 5px;
            padding: 0.25rem 0.45rem;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        .topbar-responsive .top-bar-title span .menu-icon {
            margin-bottom: 4px;
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes slideDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
        }
        100% {
            -webkit-transform: translateY(0%);
            transform: translateY(0%);
        }
    }

    @keyframes slideDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
        }
        100% {
            -webkit-transform: translateY(0%);
            transform: translateY(0%);
        }
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive-links {
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-duration: 0.5s;
            animation-duration: 0.5s;
            width: 100%;
            -webkit-animation: fadeIn 1s ease-in;
            animation: fadeIn 1s ease-in;
        }
    }

    b{
        color: #fefefe;
        margin-left: 20px;
        font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 24px;
    }
    .active{
        font-weight: bolder;
        text-decoration: none;
    }

    .my-scrollbar{
        width: 80%;
        min-width: 500px;
        max-height: 650px;
    }

    /* Content */
    .scroll-me{
        min-width: 750px;
    }
    .pagination{
        align-content: center;
    }



    /*h1 {*/
    /*    text-align: center;*/
    /*}*/

    .title {
        margin: 20px 0;
    }

    .side {
        position: relative;
        overflow: auto;
        width: 100%;
        height: 100%;
    }
    .my-scrollbar {
        width: 35%;
        min-width: 300px;
        max-height: 450px;
    }

    .scroll-me{
        /*min-width: 500px;*/
        background: #eee;
        /*overflow: hidden;*/
    }

    .kolom {
        background: #2196f3;
        width: 200px;
        height: 200px;
        float: left;
        display: inline-block;
        margin: 11px;
    }

</style>