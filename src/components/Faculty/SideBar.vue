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
                        <li><router-link to="/Hostel/MyAds" class="active">
                            <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">My Ads</span>
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
                <h1>#Content__Section</h1>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import FacultyHome from "./FacultyHome";
    export default {
        name: "SideBar",
        components: {FacultyHome}
    }
</script>

<style scoped>
    .sidebar-sticky{
        height: 80vh;
        overflow: hidden;
    }

</style>