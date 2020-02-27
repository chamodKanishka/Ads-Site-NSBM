<template>
<div>
    <FacultyHome/>
    <div class="app-dashboard shrink-medium">
        <div class="app-dashboard-body off-canvas-wrapper">
            <div id="app-dashboard-sidebar" class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
                <div class="app-dashboard-sidebar-title-area">
                    <div class="app-dashboard-close-sidebar">
                        <h3 align="center" class="app-dashboard-sidebar-block-title">Menu</h3>
                        <!-- Close button -->
                    </div>
                    <div class="app-dashboard-open-sidebar">
                        <button id="open-sidebar" data-app-dashboard-toggle-shrink class="app-dashboard-open-sidebar-button show-for-medium" aria-label="open menu" type="button">
                            <span aria-hidden="true"><a href="#"><i class="large fa fa-angle-double-right"></i></a></span>
                        </button>
                    </div>
                </div>
                <div class="app-dashboard-sidebar-inner">
                    <ul class="menu vertical">
                        <li><router-link to="/Faculty/Events" class="active">
                            <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">Events</span>
                        </router-link></li>
                        <li><router-link to="/Faculty/Notices">
                            <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">Notices</span>
                        </router-link></li>
                        <li><router-link to="/Admin/RegisterRequest" >
                            <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Profile</span>
                        </router-link></li>
                        <li><router-link to="/Admin/AdsPayments">
                            <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Contact us</span>
                        </router-link></li>
                        <li><router-link to="/Admin/UsersFeedback" >
                            <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">About us</span>
                        </router-link></li>
                    </ul>
                </div>
            </div>
            <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
                <h1>#Events__Section</h1>
                <hooper :settings="hooperSettings">
                    <slide>
                        <img src="../../images/nsbm.jpg" alt="image" class="image">
                        <h7>Bed Room</h7>
                    </slide>
                    <slide>
                        <img src="../../images/background.jpeg" class="image">
                        <h7>Kitchen</h7>
                    </slide>
                    <slide>
                        slide 3
                    </slide>
                    <slide>
                        slide 4
                    </slide>
                    <slide>
                        slide 5
                    </slide>
                    <slide>
                        slide 6
                    </slide>
                    <slide>
                        slide 7
                    </slide>
                </hooper>

            </div>
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
    import FacultyHome from "./FacultyNavbar";
    import Footer from "../Footer";
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "Events",
        components: {Footer, FacultyHome, Hooper, Slide},
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 2,
                    centerMode: true
                }
            };
        }
    }
</script>

<style scoped>
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
    li span{
        font-size: larger;
    }

    .image{
        height: 80%;
        width: 500px;
        padding: 10px;
    }

</style>
