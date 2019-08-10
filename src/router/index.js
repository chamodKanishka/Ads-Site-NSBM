import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/Landing'
import Login from '../components/Login'
import Register from '../components/Register'
import Contact from '../components/Contact'
import About from '../components/About'
import AddHostel from '../components/Hostel/AddHostel'
import HostelHome from '../components/Hostel/HostelHome'
import Hostels from '../components/Hostel/Hostels'
import FacultyHome from '../components/Faculty/FacultyHome'
import CanteenHome from '../components/Canteen/CanteenHome'
import CanteenDashboard from '../components/Canteen/CanteenDashboard'
import Selling from "../components/Canteen/Selling";
import CanteenProducts from "../components/Canteen/CanteenProducts";
import Model from 'vue-js-modal'
import VueSwal from 'vue-swal'
import CanteenAdds from "../components/Canteen/CanteenAdds";
import NoticeAdd from "../components/Faculty/NoticeAdd";
import EventsAdd from "../components/Faculty/EventsAdd";
import AdminPanelHeader from "../components/Admin/AdminPanelHeader";
import RegisteredAccounts from "../components/Admin/RegisteredAccounts";
import RegisterRequest from "../components/Admin/RegisterRequest";
import UsersFeedback from "../components/Admin/UsersFeedback";
import NavHeader from "../components/NavHeader";
import AdsPayments from "../components/Admin/AdsPayments";
import WebUsage from "../components/Admin/WebUsage";
import Profile from "../components/Profile";


Vue.use(VueSwal)

Vue.use(Router)
Vue.use(Model)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Landing",
            component: Landing
        },
        {
            path: "/NavHeader",
            name: "NavHeader",
            component: NavHeader
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/Register",
            name: "Register",
            component: Register
        },
        {
            path: "/Contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/About",
            name: "About",
            component: About
        },
        {
            path: "/Hostel/AddHostel",
            name: "AddHostel",
            component: AddHostel
        },
        {
            path: "/Hostel/Hostels",
            name: "Hostels",
            component: Hostels
        },
        {
            path: "/Hostel/HostelHome",
            name: "HostelHome",
            component: HostelHome
        },
        {
            path: "/Faculty/FacultyHome",
            name: "FacultyHome",
            component: FacultyHome
        },
        {
            path: "/Faculty/NoticeAdd",
            name: "NoticeAdd",
            component: NoticeAdd
        },
        {
            path: "/Faculty/EventsAdd",
            name: "EventsAdd",
            component: EventsAdd
        },
        {
            path: "/Canteen/CanteenHome",
            name: "CanteenHome",
            component: CanteenHome
        },
        {
            path: "/Canteen/CanteenDashboard",
            name: "CanteenDashboard",
            component: CanteenDashboard
        },
        {
            path: "/Canteen/Selling",
            name: "Selling",
            component: Selling
        },
        {
            path: "/Canteen/CanteenProducts",
            name: "CanteenProducts",
            component: CanteenProducts
        },
        {
            path: "/Canteen/CanteenAdds",
            name: "CanteenAdds",
            component: CanteenAdds
        },
        {
            path: "/Admin/AdminPanelHeader",
            name: "AdminPanelHeader",
            component: AdminPanelHeader
        },
        {
            path: "/Admin/RegisteredAccounts",
            name: "RegisteredAccounts",
            component: RegisteredAccounts
        },
        {
            path: "/Admin/RegisterRequest",
            name: "RegisterRequest",
            component: RegisterRequest
        },
        {
            path: "/Admin/UsersFeedback",
            name: "UsersFeedback",
            component: UsersFeedback
        },
        {
            path: "/Admin/AdsPayments",
            name: "AdsPayments",
            component: AdsPayments
        },
        {
            path: "/Admin/WebUsage",
            name: "WebUsage",
            component: WebUsage
        },
        {
            path: "/Profile",
            name: "Profile",
            component: Profile
        },
    ]
})