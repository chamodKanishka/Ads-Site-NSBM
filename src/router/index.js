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
import FacultyHome from '../components/Faculty/FacultyNavbar'
import Model from 'vue-js-modal'
import VueSwal from 'vue-swal'
import NoticeAdd from "../components/Faculty/NoticeAdd";
import EventsAdd from "../components/Faculty/EventsAdd";
import AdminPanelHeader from "../components/Admin/AdminPanelHeader";
import RegisteredAccounts from "../components/Admin/RegisteredAccounts";
import UsersFeedback from "../components/Admin/UsersFeedback";
import NavHeader from "../components/NavHeader";
import AdsPayments from "../components/Admin/AdsPayments";
import WebUsage from "../components/Admin/WebUsage";
import Profile from "../components/Profile";
import MyAds from "../components/Hostel/MyAds";
import Footer from "../components/Footer";
import Notices from "../components/Faculty/Notices";
import Events from "../components/Faculty/Events";
import InnerContact from "../components/InnerContact";


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
            path: "/Hostel/MyAds",
            name: "MyAds",
            component: MyAds
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
            path: "/Faculty/Notices",
            name: "Notices",
            component: Notices
        },
        {
            path: "/Faculty/Events",
            name: "Events",
            component: Events
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
        {
            path: "/Footer",
            name: "Footer",
            component: Footer
        },
        {
            path: "/InnerContact",
            name: "InnerContact",
            component: InnerContact
        },
    ]
})
