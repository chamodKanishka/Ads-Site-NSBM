<template>
    <div class="main">
        <canteen-dashboard-header/>
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
                            <li><router-link to="/Canteen/CanteenDashboard">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">New Orders</span>
                            </router-link></li>
                            <li><a>
                                <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Completed Orders</span>
                            </a></li>
                            <li><a>
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Un-Payed Items</span>
                            </a></li>
                            <li><a href="#" class="is-active">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">Customer Feedbacks</span>
                            </a></li>
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Selling reports</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <li><router-link to="/Canteen/Selling">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Selling</span>
                            </router-link></li>
                            <li><a href="#" class="is-active">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">Week</span>
                            </a></li>
                            <li><a>
                                <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Month</span>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                        </div>
                    </div>
                    <h2 class="text-center">Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ligula eget est feugiat viverra. Duis a arcu laoreet, rhoncus libero imperdiet, placerat velit. Vestibulum euismod mi et ornare sodales. Donec efficitur mattis blandit. Proin in massa elit. Praesent malesuada iaculis nisl, a venenatis dui. Nullam venenatis tincidunt placerat. Suspendisse egestas urna a aliquet pretium.</p>

                    <p>Curabitur ullamcorper mollis lobortis. Integer a scelerisque turpis, sed dictum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam quis placerat sem. Suspendisse vulputate, leo ac sollicitudin lobortis, dui dui blandit justo, ut molestie justo sem in ipsum. Vestibulum convallis ex ac est tristique tincidunt. Vivamus dui dui, viverra et urna vitae, aliquam facilisis erat. Nam lorem nibh, elementum semper commodo at, fermentum quis justo. Donec finibus sapien eget scelerisque rhoncus. Nullam at nisi sed mi congue vestibulum. Vivamus nec scelerisque orci, vel fringilla nisi. Sed dictum, leo in consectetur porttitor, quam nibh aliquet nisi, in pulvinar sapien ante id dui. Aliquam massa nisl, auctor eget nisl in, faucibus gravida lectus. Nullam mattis orci at turpis finibus egestas. Nam vitae lorem accumsan, tempus lectus vitae, rutrum diam. Integer pulvinar placerat magna aliquam scelerisque.</p>

                    <p>Duis consectetur magna velit, nec porttitor velit fermentum pulvinar. Duis varius justo eu varius pellentesque. Curabitur aliquet velit mauris, quis aliquam leo pharetra in. Integer rhoncus ut dui in rhoncus. Maecenas nec libero neque. Duis ac lacus at justo ullamcorper efficitur. Praesent ornare urna ante. Aliquam dapibus posuere nisl sit amet vestibulum. Quisque dapibus iaculis justo non egestas. Curabitur interdum semper justo, eget condimentum orci bibendum nec.</p>

                    <p>Vivamus pharetra massa non risus sollicitudin iaculis. Donec semper finibus hendrerit. Nam ut volutpat mauris, sit amet molestie nisi. Curabitur ac nisi urna. Nulla id turpis nec dui ornare tempor in ac justo. Cras quis cursus nisi. Donec vel pellentesque ante. Maecenas non nisi risus. Praesent posuere scelerisque varius. Cras vitae mollis quam. Etiam ut dui massa. Etiam mattis aliquam enim, eget facilisis erat elementum eu. Proin et lorem volutpat, pretium massa a, venenatis mi. Suspendisse quam orci, feugiat eget suscipit ac, vehicula a ante. Nam ut mauris at tortor cursus interdum.</p>

                    <p>Nullam hendrerit tincidunt risus. Sed nec nibh vel nibh euismod lobortis sed a sem. Nulla nec libero dolor. Pellentesque non sodales orci. Phasellus odio ligula, varius non orci ac, fermentum pulvinar nibh. Aliquam erat volutpat. Curabitur vehicula varius porttitor. Integer purus sapien, placerat sodales eros et, interdum vestibulum sem. Duis faucibus felis vitae augue ultricies, aliquet tempor orci vestibulum. Duis eu justo mi. Praesent feugiat, ante interdum fringilla auctor, ex nibh aliquet neque, sed feugiat tellus tortor non dui. Suspendisse potenti. Aliquam fringilla sapien felis, at faucibus justo interdum congue.</p>


                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import CanteenDashboardHeader from "./CanteenDashboardHeader";
    import Footer from "../Footer";
    export default {
        name: "CanteenDashboard",
        components: {Footer, CanteenDashboardHeader},
    }
</script>

<style scoped>

    .main{
        margin-top: -60px;
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

    .app-dashboard-top-nav-bar {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: space-between;
        -ms-flex-pack: center;
        justify-content: space-between;
        background: #2c3840;
        height: 55px;
        width: 100%;
        -webkit-flex: 0 0 55px;
        -ms-flex: 0 0 55px;
        flex: 0 0 55px;
        margin-left: 10px;
    }
    .app-dashboard-top-nav-bar a{
        color: #fefefe;
        transition: color 0.15s ease-in;
    }
    .app-dashboard-top-nav-bar a:hover{
        color: #c6d1d8;
        text-decoration: none;
    }

    .app-dashboard-top-nav-bar .menu-icon {
        vertical-align: text-bottom;
    }

    .app-dashboard-top-bar-actions button {
        margin-bottom: 0;
        margin-right: 2rem;
    }

    .app-dashboard-top-bar-actions button.hollow {
        border-color: #fefefe;
        color: #fefefe;
    }

    .app-dashboard-top-bar-actions button.hollow:hover {
        background: #fefefe;
        color: #1779ba;
    }

    .app-dashboard-top-bar-actions .fa-info-circle {
        color: #fefefe;
        font-size: 1.5rem;
    }

    .app-dashboard-sidebar {
        background-color: #fefefe;
        height: 100%;
        overflow-x: visible;
        overflow-y: auto;
        z-index: 1;
        transition: all 0.5s ease;
    }

    .app-dashboard-sidebar .app-dashboard-open-sidebar, .app-dashboard-sidebar .app-dashboard-close-sidebar {
        -webkit-align-items: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 2rem 1rem;
    }

    .app-dashboard-sidebar .app-dashboard-sidebar-close-button {
        font-size: 14px;
    }

    .app-dashboard-sidebar .app-dashboard-sidebar-inner {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .app-dashboard-sidebar .app-dashboard-sidebar-inner .menu > li > a {
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .app-dashboard-sidebar .fa.large {
        font-size: 1.5rem;
        width: 40px;
    }

    .reveal-for-medium .app-dashboard-open-sidebar {
        display: none;
    }

    .app-dashboard-sidebar-footer {
        background: rgba(42, 57, 79, 0.8);
        bottom: 0;
        left: 0;
        padding: 1rem;
        position: absolute;
        width: 100%;
    }

    .app-dashboard-open-sidebar {
        text-align: center;
    }

    .app-dashboard-body-content {
        transition: all 0.5s ease;
        overflow-y: auto;
        -webkit-flex: 1 1 0;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        padding: 20px;
        background-color: #fefefe;
    }

    @media screen and (min-width: 40em) and (max-width: 63.9375em) {
        .app-dashboard.shrink-medium .app-dashboard-close-sidebar, .app-dashboard.shrink-medium .app-dashboard-sidebar-text {
            display: none;
        }
        .app-dashboard.shrink-medium .app-dashboard-open-sidebar {
            display: block;
        }
        .app-dashboard.shrink-medium .app-dashboard-sidebar {
            width: 80px;
        }
        .app-dashboard.shrink-medium .app-dashboard-sidebar .fa.large {
            width: auto;
        }
        .app-dashboard.shrink-medium .off-canvas-content {
            margin-left: 80px;
            width: calc(100% - 80px);
        }
        .app-dashboard.shrink-medium .navigation {
            margin-top: 2rem;
            text-align: center;
        }
        .app-dashboard.shrink-medium .menu.vertical > li > a {
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .app-dashboard.shrink-medium .menu li::after {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .app-dashboard.shrink-medium .menu li a {
            padding: 0.75rem;
        }
        .app-dashboard.shrink-medium .menu li a svg {
            margin: 0;
        }
        .app-dashboard.shrink-medium .menu li a span {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
    }

    @media print, screen and (min-width: 64em) {
        .app-dashboard.shrink-large .app-dashboard-close-sidebar, .app-dashboard.shrink-large .app-dashboard-sidebar-text {
            display: none;
        }
        .app-dashboard.shrink-large .app-dashboard-open-sidebar {
            display: block;
        }
        .app-dashboard.shrink-large .app-dashboard-sidebar {
            width: 80px;
        }
        .app-dashboard.shrink-large .app-dashboard-sidebar .fa.large {
            width: auto;
        }
        .app-dashboard.shrink-large .off-canvas-content {
            margin-left: 80px;
            width: calc(100% - 80px);
        }
        .app-dashboard.shrink-large .navigation {
            margin-top: 2rem;
            text-align: center;
        }
        .app-dashboard.shrink-large .menu.vertical > li > a {
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .app-dashboard.shrink-large .menu li::after {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .app-dashboard.shrink-large .menu li a {
            padding: 0.75rem;
        }
        .app-dashboard.shrink-large .menu li a svg {
            margin: 0;
        }
        .app-dashboard.shrink-large .menu li a span {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
    }
    b{
        color: #fefefe;
        margin-left: 20px;
        font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 24px;
    }

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

</style>