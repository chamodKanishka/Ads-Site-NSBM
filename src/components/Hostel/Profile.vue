<template>
    <div>
        <HostelHome/>
        <div class="app-dashboard shrink-medium">
            <div class="app-dashboard-body off-canvas-wrapper">
                <div id="app-dashboard-sidebar" class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
                    <div class="app-dashboard-sidebar-title-area">
                        <div class="app-dashboard-close-sidebar">
                            <h3 align="center" class="app-dashboard-sidebar-block-title">Menu</h3>
                        </div>
                        <div class="app-dashboard-open-sidebar">
                            <button id="open-sidebar" data-app-dashboard-toggle-shrink class="app-dashboard-open-sidebar-button show-for-medium" aria-label="open menu" type="button">
                                <span aria-hidden="true"><a href="#"><i class="large fa fa-angle-double-right"></i></a></span>
                            </button>
                        </div>
                    </div>
                    <div class="app-dashboard-sidebar-inner">
                        <ul class="menu vertical">
                            <li><router-link to="/Hostel/MyAds">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">My Ads</span>
                            </router-link></li>
                            <li><router-link to="/Hostel/Profile" class="active">
                                <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Profile</span>
                            </router-link></li>
                            <li><router-link to="/InnerContact">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Contact us</span>
                            </router-link></li>
                            <li><router-link to="/About" >
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">About us</span>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="app-dashboard-body-content off-canvas-content">
                </div>
                <picture-input
                        ref="pictureInput"
                        width="150"
                        height="150"
                        margin="6"
                        accept="image/jpeg,image/png"
                        size="4"
                        button-class="btn"
                        :custom-strings="{
                            upload: '<h1>Bummer!</h1>',
                            drag: 'Click Here or Drag and Drop'
                          }"
                        @change="onChange">
                </picture-input>
                </div>
                </div>
        <Footer/>
    </div>
</template>

<script>
    import HostelHome from "./HostelHome";
    import PictureInput from 'vue-picture-input';
    import Footer from "../Footer";
    export default {
        name: "Profile",
        components: {Footer, HostelHome, PictureInput},
        methods: {
            onChange (image) {
                console.log('New picture selected!')
                if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }
        }
    }
</script>

<style scoped>

    .app-dashboard {
        height: 87vh;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .app-dashboard-body {
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    .app-dashboard-sidebar {
        /*background-color: #fefefe;*/
        height: 100%;
        /*overflow-x: visible;*/
        /*overflow-y: auto;*/
        z-index: 1;
        transition: all 0.5s ease;
    }

    .app-dashboard-sidebar .app-dashboard-sidebar-inner {
        /*height: 100%;*/
        overflow-x: hidden;
        overflow-y: auto;
    }

    .reveal-for-medium .app-dashboard-open-sidebar {
        display: none;
    }

    .active{
        font-weight: bolder;
        text-decoration: none;
    }
    li{
        font-size: larger;
    }

    .image{
        height: 80%;
        width: 500px;
        padding: 10px;
    }

    .form-group {
        margin-bottom: 0;
    }
    .btn-group {
        display: inline-block;
    }

</style>
