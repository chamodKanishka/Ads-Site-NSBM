<template>
    <div>
        <HostelHome/>
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
                        <li><router-link to="/Hostel/MyAds" class="active">
                            <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">My Ads</span>
                        </router-link></li>
                        <li><router-link to="/Hostel/Profile" >
                            <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Profile</span>
                        </router-link></li>
                        <li><router-link to="/Hostel/InnerContact">
                            <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Contact us</span>
                        </router-link></li>
                    </ul>
                </div>
            </div>
        <main role="main" class="container">
            <div class="app-dashboard-body-content off-canvas-content">
                <hooper :settings="hooperSettings">
                    <slide>
                        <img src="../../images/livingroom.jpg" alt="image" class="image">
                        <h7>Living Room</h7>
                    </slide>
                    <slide>
                        <img src="../../images/bedroom.jpg" alt="image" class="image">
                        <h7>Bed Room</h7>
                    </slide>
                    <slide>
                        <img src="../../images/bathroom.jpg" alt="image" class="image">
                        <h7>Bath Room</h7>
                    </slide>
                    <slide>
                        <img src="../../images/studyroom.jpg" alt="image" class="image">
                        <h7>Study Room</h7>
                    </slide>
                    <slide>
                        <img src="../../images/kitchen.jpg" alt="image" class="image">
                        <h7>Kitchen</h7>
                    </slide>
                </hooper>
                <table>
                    <thead>
                    <th>
                        <tr>
                        </tr>
                    </th>
                    <th>
                        <tr>
                        </tr>
                    </th>
                    </thead>
                    <tbody>
                    <tr>
                        <td><lable>Location</lable></td>
                        <td><quick-edit v-model="myValue" buttonCancelText="Reset" buttonOkText="Update"></quick-edit></td>

                    </tr>
                    <tr>
                        <td><lable>Address</lable></td>
                        <td><quick-edit type="textarea"></quick-edit></td>
                    </tr>
                    <tr>
                        <td><lable>Contact No</lable></td>
                        <td><quick-edit type="txt"></quick-edit></td>
                    </tr>
                    <tr>
                        <td><lable>Type of hostle</lable></td>
                        <td><quick-edit type="select">Boys</quick-edit></td>
                    </tr>
                    <tr>
                        <td><lable>For</lable></td>
                        <td><quick-edit type="Select"></quick-edit></td>
                    </tr>
                    <tr>
                        <td><lable>Count</lable></td>
                        <td><quick-edit placeholderValue=""></quick-edit></td>
                    </tr>
                    <tr>
                        <td><lable>Description</lable></td>
                        <td><quick-edit type="textarea"></quick-edit></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </main>
            </div>
    </div>

        <Footer/>
    </div>
</template>

<script>
    import QuickEdit from 'vue-quick-edit';
    import HostelHome from "./HostelHome";
    import Footer from "../Footer";
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "MyAds",
        components: {Footer, HostelHome, Hooper, Slide,QuickEdit},
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 3,
                    centerMode: true
                },
            };
        }
    }
</script>

<style scoped>

    .app-dashboard {
        /*height: 200vh;*/
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
