<template>
    <div class="main">
        <admin-panel-header/>
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
                            <li><router-link to="/Admin/RegisteredAccounts">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">Registered Accounts</span>
                            </router-link></li>
                            <li><router-link to="/Admin/RegisterRequest">
                                <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Register Request</span>
                            </router-link></li>
                            <li><router-link to="/Admin/AdsPayments">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Ads Payments</span>
                            </router-link></li>
                            <li><router-link to="/Admin/UsersFeedback">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Users Feedback</span>
                            </router-link></li>
                            <li><router-link to="/Admin/WebUsage" class="active">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Website Usage</span>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Website Usage</h1>
                        <ul class="stats-list">
                            <li>
                                135 <span class="stats-list-label">Feedback</span>
                            </li>
                            <li class="stats-list-positive">
                                17,678 <span class="stats-list-label">Registered</span>
                            </li>
                            <li class="stats-list-negative">
                                2,390 <span class="stats-list-label">New Request</span>
                            </li>
                            <li class="stats-list-massive">
                                2,390 <span class="stats-list-label">Payments</span>
                            </li>
                        </ul>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span data-feather="calendar"></span>
                                All Time
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="#">Last Week</a>
                                    <a class="dropdown-item" href="#">Last Month</a>
                                </div>
                            </button>
                        </div>
                    </div>


<!--                    bar graph-->
                    <ul class="bar-graph">
                        <li class="bar-graph-axis">
                            <div class="bar-graph-label">10000</div>
                            <div class="bar-graph-label">5000</div>
                            <div class="bar-graph-label">2000</div>
                            <div class="bar-graph-label">1000</div>
                            <div class="bar-graph-label">100</div>
                            <div class="bar-graph-label">0</div>
                        </li>
                        <li class="bar primary" style="height: 95%;" title="95">
                            <div class="percent">95<span>%</span></div>
                            <div class="description">Payments</div>
                        </li>
                        <li class="bar secondary" style="height: 90%;" title="90">
                            <div class="percent">90<span>%</span></div>
                            <div class="description">Feedback</div>
                        </li>
                        <li class="bar success" style="height: 80%;" title="80">
                            <div class="percent">80<span>%</span></div>
                            <div class="description">Registered</div>
                        </li>
                        <li class="bar warning" style="height: 75%;" title="75">
                            <div class="percent">75<span>%</span></div>
                            <div class="description">Cows that think they're Yetis</div>
                        </li>
                        <li class="bar alert" style="height: 40%;" title="40">
                            <div class="percent">40<span>%</span></div>
                            <div class="description">New Request</div>
                        </li>
                    </ul>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminPanelHeader from "./AdminPanelHeader";
    export default {
        name: "WebUsage",
        components: {AdminPanelHeader}
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

    .active{
        font-weight: bolder;
        text-decoration: none;
        font-size: larger;
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




    /*Color Fields*/
    .stats-list {
        list-style-type: none;
        clear: left;
        margin: 0;
        padding: 0;
        text-align: center;
        margin-bottom: 30px;
    }

    .stats-list .stats-list-positive {
        color: #3adb76;
    }

    .stats-list .stats-list-negative {
        color: #cc4b37;
    }

    .stats-list .stats-list-massive{
        color: #1779ba;
    }

    .stats-list > li {
        display: inline-block;
        margin-right: 10px;
        padding-right: 10px;
        border-right: 1px solid #cacaca;
        text-align: center;
        font-size: 1.25em;
        font-weight: bold;
    }

    .stats-list > li:last-child {
        border: none;
        margin: 0;
        padding: 0;
    }

    .stats-list > li .stats-list-label {
        display: block;
        margin-top: 2px;
        font-size: 0.9em;
        font-weight: normal;
    }




/*    bar graph CSS */

    .bar-graph {
        padding: 0;
        width: 100%;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end;
        height: 425px;
        margin: 0;
    }

    .bar-graph li {
        display: block;
        padding: 1.5625rem 0;
        position: relative;
        text-align: center;
        vertical-align: bottom;
        border-radius: 4px 4px 0 0;
        max-width: 20%;
        height: 100%;
        margin: 0 1.8% 0 0;
        -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
        flex: 1 1 15%;
    }

    .bar-graph .bar-graph-axis {
        -webkit-flex: 1 1 8%;
        -ms-flex: 1 1 8%;
        flex: 1 1 8%;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .bar-graph .bar-graph-label {
        margin: 0;
        background-color: none;
        color: #8a8a8a;
        position: relative;
    }

    @media print, screen and (min-width: 40em) {
        .bar-graph .bar-graph-label:before, .bar-graph .bar-graph-label:after {
            content: "";
            position: absolute;
            border-bottom: 1px dashed #8a8a8a;
            top: 0;
            left: 0;
            height: 50%;
            width: 20%;
        }
    }

    @media print, screen and (min-width: 40em) and (min-width: 64em) {
        .bar-graph .bar-graph-label:before, .bar-graph .bar-graph-label:after {
            width: 30%;
        }
    }

    @media print, screen and (min-width: 40em) {
        .bar-graph .bar-graph-label:after {
            left: auto;
            right: 0;
        }
    }

    .bar-graph .percent {
        letter-spacing: -3px;
        opacity: 0.4;
        width: 100%;
        font-size: 1.875rem;
        position: absolute;
    }

    @media print, screen and (min-width: 40em) {
        .bar-graph .percent {
            font-size: 3.875rem;
        }
    }

    .bar-graph .percent span {
        font-size: 1.875rem;
    }

    .bar-graph .description {
        font-weight: 800;
        opacity: 0.5;
        text-transform: uppercase;
        width: 100%;
        font-size: 14px;
        bottom: 20px;
        position: absolute;
        font-size: 1rem;
        overflow: hidden;
    }

    .bar-graph .bar.primary {
        border: 1px solid #1779ba;
        background: linear-gradient(#2196e3, #1779ba 70%);
    }

    .bar-graph .bar.secondary {
        border: 1px solid #767676;
        background: linear-gradient(#909090, #767676 70%);
    }

    .bar-graph .bar.success {
        border: 1px solid #3adb76;
        background: linear-gradient(#65e394, #3adb76 70%);
    }

    .bar-graph .bar.warning {
        border: 1px solid #ffae00;
        background: linear-gradient(#ffbe33, #ffae00 70%);
    }

    .bar-graph .bar.alert {
        border: 1px solid #cc4b37;
        background: linear-gradient(#d67060, #cc4b37 70%);
    }



</style>