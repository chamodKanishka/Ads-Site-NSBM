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
                    <DataTable
                            :header-fields="headerFields"
                            :sort-field="sortField"
                            :sort="sort"
                            :data="data || []"
                            :is-loading="isLoading"
                            :css="datatableCss"
                            not-found-msg="Items not found"
                            @onUpdate="dtUpdateSort"
                            trackBy="firstName"
                    >
                        <input
                                slot="actions"
                                slot-scope="props"
                                type="button"
                                class="btn btn-info"
                                value="View"
                                @click="dtEditClick(props)"
                        >
                        <Spinner slot="spinner"/>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminPanelHeader from "./AdminPanelHeader";
    import Spinner from "vue-simple-spinner";
    import { DataTable, ItemsPerPageDropdown, Pagination } from "v-datatable-light";
    import orderBy from "lodash.orderby";

    const addZero = value => ("0" + value).slice(-2);

    const formatDate = value => {
        if (value) {
            const dt = new Date(value);
            return `${addZero(dt.getDate())}/${addZero(
                dt.getMonth() + 1
            )}/${dt.getFullYear()}`;
        }
        return "";
    };

    const initialData = [
        {
            id:1,
            firstName: "Lucca",
            lastName: "Lin",
            Location: "Melbourne",
            Contact: "13/02/1975",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:2,
            firstName: "Zahid",
            lastName: "Werner",
            Location: "Sydney",
            Contact: "18/09/1979",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:3,
            firstName: "Gabriel",
            lastName: "Griffiths",
            Location: "Chicago",
            Contact: "25/11/1984",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:4,
            firstName: "Talha",
            lastName: "Tucker",
            Location: "Berlim",
            Contact: "27/01/1999",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:5,
            firstName: "Aariz",
            lastName: "Piper",
            Location: "Auckland",
            Contact: "11/07/1964",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:6,
            firstName: "Macsen",
            lastName: "Schultz",
            Location: "Rio de Janeiro",
            Contact: "01/10/1987",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:7,
            firstName: "Sebastian",
            lastName: "Cervantes",
            Location: "Brisbane",
            Contact: "13/11/1994",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:8,
            firstName: "Tayyab",
            lastName: "Lister",
            Location: "Perth",
            Contact: "14/12/1997",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:9,
            firstName: "Anum",
            lastName: "Warren",
            Location: "Manaus",
            Contact: "17/02/1951",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:10,
            firstName: "Areeba",
            lastName: "Stein",
            Location: "Rome",
            Contact: "18/03/1954",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:11,
            firstName: "Alesha",
            lastName: "Sharp",
            Location: "New York City",
            Contact: "18/04/1966",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:12,
            firstName: "Aadil",
            lastName: "Fitzgerald",
            Location: "Vancouver",
            Contact: "18/05/1967",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:13,
            firstName: "Amaya",
            lastName: "Dillon",
            Location: "Montreal",
            Contact: "11/06/1986",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:14,
            firstName: "Hammad",
            lastName: "Ruiz",
            Location: "Buenos Aires",
            Contact: "12/07/1997",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:15,
            firstName: "Sapphire",
            lastName: "Pacheco",
            Location: "Mexico City",
            Contact: "12/07/1996",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:16,
            firstName: "Amanah",
            lastName: "Velez",
            Location: "London",
            Contact: "13/08/1992",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:17,
            firstName: "Mirza",
            lastName: "Ratliff",
            Location: "Manchester",
            Contact: "03/09/1981",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:18,
            firstName: "Emre",
            lastName: "Amos",
            Location: "Sapiranga",
            Contact: "05/10/1983",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:19,
            firstName: "Yunus",
            lastName: "Vu",
            Location: "Madrid",
            Contact: "05/10/1984",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:20,
            firstName: "Duncan",
            lastName: "Cotton",
            Location: "Barcelona",
            Contact: "06/10/1985",
            created: new Date().getTime(),
            updated: new Date().getTime()
        },
        {
            id:21,
            firstName: "Elvis",
            lastName: "Ray",
            Location: "Lisbon",
            Contact: "08/11/1980",
            created: new Date().getTime(),
            updated: new Date().getTime()
        }
    ];


    export default {
        name: "RegisteredAccounts",
        components: {AdminPanelHeader,
            DataTable,
            ItemsPerPageDropdown,
            Pagination,
            Spinner
        },
        data: function() {
            return {
                headerFields: [
                    {
                        name: "id",
                        label: "Account ID",
                        sortable: true
                    },
                    {
                        name: "firstName",
                        label: "First Name",
                        sortable: true
                    },
                    {
                        name: "lastName",
                        label: "Last Name",
                        sortable: true
                    },
                    {
                        name: "Location",
                        label: "Location",
                        sortable: true
                    },
                    {
                        name: "Contact",
                        label: "Contact No",
                        sortable: true
                    },
                    {
                        name: "created",
                        label: "Account Created",
                        sortable: true,
                        format: formatDate
                    },
                    {
                        name: "updated",
                        label: "Last Updated",
                        sortable: false,
                        format: formatDate
                    },
                    "__slot:actions"
                ],
                data: initialData.slice(0, 10),
                datatableCss: {
                    table: "table table-bordered table-hover table-striped table-center",
                    th: "header-item",
                    thWrapper: "th-wrapper",
                    thWrapperCheckboxes: "th-wrapper checkboxes",
                    arrowsWrapper: "arrows-wrapper",
                    arrowUp: "arrow up",
                    arrowDown: "arrow down",
                    footer: "footer"
                },
                itemsPerPageCss: {
                    select: "item-per-page-dropdown"
                },
                isLoading: false,
                sort: "asc",
                sortField: "firstName",
                listItemsPerPage: [5, 10, 20, 50, 100],
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: 16
            };
        },
        methods: {
            dtEditClick: props => alert("Click props:" + JSON.stringify(props)),

            dtUpdateSort: function({ sortField, sort }) {
                const sortedData = orderBy(initialData, [sortField], [sort]);
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = this.currentPage * this.itemsPerPage;
                this.data = sortedData.slice(start, end);
                console.log("load data based on new sort", this.currentPage);
            },

            updateItemsPerPage: function(itemsPerPage) {
                this.itemsPerPage = itemsPerPage;
                if (itemsPerPage >= initialData.length) {
                    this.data = initialData;
                } else {
                    this.data = initialData.slice(0, itemsPerPage);
                }
                console.log("load data with new items per page number", itemsPerPage);
            },

            changePage: function(currentPage) {
                this.currentPage = currentPage;
                const start = (currentPage - 1) * this.itemsPerPage;
                const end = currentPage * this.itemsPerPage;
                this.data = initialData.slice(start, end);
                console.log("load data for the new page", currentPage);
            },

            updateCurrentPage: function(currentPage) {
                this.currentPage = currentPage;
                console.log("update current page without need to load data", currentPage);
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



    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #app .title {
        margin-bottom: 30px;
    }

    #app .items-per-page {
        height: 100%;
        display: flex;
        align-items: center;
        color: #337ab7;
    }

    #app .items-per-page label {
        margin: 0 15px;
    }

    /* Datatable CSS */
    #v-datatable-light .header-item {
        cursor: pointer;
        color: #337ab7;
        transition: color 0.15s ease-in-out;
    }

    #v-datatable-light .header-item:hover {
        color: #ed9b19;
    }

    #v-datatable-light .header-item.no-sortable {
        cursor: default;
    }
    #v-datatable-light .header-item.no-sortable:hover {
        color: #337ab7;
    }

    #v-datatable-light .header-item .th-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        font-weight: bold;
    }

    #v-datatable-light .header-item .th-wrapper.checkboxes {
        justify-content: center;
    }

    #v-datatable-light .header-item .th-wrapper .arrows-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-between;
    }

    #v-datatable-light .header-item .th-wrapper .arrows-wrapper.centralized {
        justify-content: center;
    }

    #v-datatable-light .arrow {
        transition: color 0.15s ease-in-out;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
    }

    #v-datatable-light .arrow.up {
        border-bottom: 8px solid #337ab7;
    }

    #v-datatable-light .arrow.up:hover {
        border-bottom: 8px solid #ed9b19;
    }

    #v-datatable-light .arrow.down {
        border-top: 8px solid #337ab7;
    }

    #v-datatable-light .arrow.down:hover {
        border-top: 8px solid #ed9b19;
    }

    #v-datatable-light .footer {
        display: flex;
        justify-content: space-between;
        width: 500px;
    }
    /* End Datatable CSS */

    /* Pagination CSS */
    #v-datatable-light-pagination {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        width: 300px;
        height: 30px;
    }

    #v-datatable-light-pagination .pagination-item {
        width: 30px;
        margin-right: 5px;
        font-size: 16px;
        transition: color 0.15s ease-in-out;
    }

    #v-datatable-light-pagination .pagination-item.selected {
        color: #ed9b19;
    }

    #v-datatable-light-pagination .pagination-item .page-btn {
        background-color: transparent;
        outline: none;
        border: none;
        color: #337ab7;
        transition: color 0.15s ease-in-out;
    }

    #v-datatable-light-pagination .pagination-item .page-btn:hover {
        color: #ed9b19;
    }

    #v-datatable-light-pagination .pagination-item .page-btn:disabled {
        cursor: not-allowed;
        box-shadow: none;
        opacity: 0.65;
    }
    /* END PAGINATION CSS */

    /* ITEMS PER PAGE DROPDOWN CSS */
    .item-per-page-dropdown {
        background-color: transparent;
        min-height: 30px;
        border: 1px solid #337ab7;
        border-radius: 5px;
        color: #337ab7;
    }
    .item-per-page-dropdown:hover {
        cursor: pointer;
    }




</style>
