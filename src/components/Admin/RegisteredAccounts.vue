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
                            <li><router-link to="/Admin/RegisteredAccounts" class="active">
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
                            <li><router-link to="/Admin/WebUsage">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Website Usage</span>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Registered Accounts</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary">New to Old</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Old to New</button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span data-feather="calendar"></span>
                                All Users
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="#">Faculty Users</a>
                                    <a class="dropdown-item" href="#">Canteen Users</a>
                                    <a class="dropdown-item" href="#">Hostel action</a>
                                </div>
                            </button>
                        </div>
                    </div>
                    <table class="dashboard-table">
                        <colgroup>
                            <col width="200">
                            <col width="150">
                            <col width="130">
                            <col width="60">
                            <col width="220">
                            <col width="120">
                        </colgroup>
                        <thead>
                        <tr>
                            <th><a href="#">Profile<i class="fa fa-caret-down"></i></a></th>
                            <th><a href="#">Contact Info<i class="fa fa-caret-down"></i></a></th>
                            <th><a href="#">Account Type<i class="fa fa-caret-down"></i></a></th>
                            <th><a href="#">Gender<i class="fa fa-caret-down"></i></a></th>
                            <th><a href="#">Address<i class="fa fa-caret-down"></i></a></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div class="flex-container align-justify align-top">
                                    <div class="flex-child-shrink">
                                        <img class="dashboard-table-image" src="http://lorempixel.com/50/50/people/">
                                    </div>
                                    <div class="flex-child-grow">
                                        <h6 class="dashboard-table-text">First Last Names</h6>
                                        <span class="dashboard-table-timestamp">Registered : 03/04/2017</span>
                                    </div>
                                </div>
                            </td>
                            <td>Single Line</td>
                            <td class="bold">Canteen User</td>
                            <td>A Date</td>
                            <td class="listing-inquiry-status">

                                <div class="flex-container align-top">
                                    <div class="flex-child">
                                        <h6 class="dashboard-table-text"><a href="#">A longer wrapping item with an image that is aligned to the top</a></h6>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>
                                <div class="flex-container align-justify align-top">
                                    <div class="flex-child-shrink">
                                        <img class="dashboard-table-image" src="http://lorempixel.com/50/50/people/">
                                    </div>
                                    <div class="flex-child-grow">
                                        <h6 class="dashboard-table-text">First Last Names</h6>
                                        <span class="dashboard-table-timestamp">Registered : 03/04/2017</span>
                                    </div>
                                </div>
                            </td>
                            <td>Single Line</td>
                            <td class="bold">Hostel User</td>
                            <td>A Date</td>
                            <td class="listing-inquiry-status">

                                <div class="flex-container align-top">
                                    <div class="flex-child">
                                        <h6 class="dashboard-table-text"><a href="#">A longer wrapping item with an image that is aligned to the top</a></h6>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>
                                <div class="flex-container align-justify align-top">
                                    <div class="flex-child-shrink">
                                        <img class="dashboard-table-image" src="http://lorempixel.com/50/50/people/">
                                    </div>
                                    <div class="flex-child-grow">
                                        <h6 class="dashboard-table-text">First Last Names</h6>
                                        <span class="dashboard-table-timestamp">Registered : 03/04/2017</span>
                                    </div>
                                </div>
                            </td>
                            <td>Email: <br> Contact: </td>
                            <td class="bold">Faculty User</td>
                            <td>A Date</td>
                            <td class="listing-inquiry-status">

                                <div class="flex-container align-top">
                                    <div class="flex-child">
                                        <h6 class="dashboard-table-text"><a href="#">A longer wrapping item with an image that is aligned to the top</a></h6>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminPanelHeader from "./AdminPanelHeader";
    export default {
        name: "RegisteredAccounts",
        components: {AdminPanelHeader},
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



/*tables CSS*/
    .dashboard-table {
        border-collapse: collapse;
        margin-bottom: 0;
    }

    .dashboard-table td {
        border-bottom: 1px dashed #d7d7d7;
    }

    .dashboard-table a {
        color: #242424;
    }

    .dashboard-table .bold {
        color: #0a0a0a;
        font-weight: 600;
    }

    .dashboard-table thead {
        background: none;
        border: 0;
        border-bottom: 1px solid #e6e6e6;
        color: #8a8a8a;
        font-size: 0.8rem;
    }

    .dashboard-table thead a {
        color: #8a8a8a;
    }

    .dashboard-table tbody {
        border: 1px solid #e1e1e1;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    }

    .dashboard-table tbody tr {
        transition: all 0.5s ease;
    }

    .dashboard-table tbody tr:hover {
        background: #fcf7da;
        transition: all 0.5s ease;
    }

    .dashboard-table tbody tr:nth-child(even) {
        background: none;
    }

    .dashboard-table tr:last-child td {
        border-bottom: 0;
    }

    .dashboard-table-text {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0;
        margin-top: 0.5rem;
    }

    .dashboard-table-timestamp {
        color: #9a9a9a;
        font-size: 0.9rem;
        font-weight: 400;
    }

    .dashboard-table-image {
        display: inline;
        margin-right: 1rem;
        margin-top: 0.6rem;
        max-width: none;
    }







</style>