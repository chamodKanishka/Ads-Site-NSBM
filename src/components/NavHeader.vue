<template>
    <div class="top-content-section">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text"><img src="http://placehold.it/75x30" alt="logo"></li>
                    <li><router-link to="/Hostel/HostelHome">Home</router-link></li>
                    <li><router-link to="/Faculty/FacultyHome">Contacts</router-link></li>
                    <li><router-link to="/Canteen/CanteenHome">About</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader"
    }
</script>

<style scoped>

    .top-bar {
        background: transparent;
    }

    .top-bar .menu {
        background: transparent;
    }

    .top-bar .menu-text {
        color: #fefefe;
    }

    .hero-full-screen .top-bar .menu li {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .top-bar .menu a {
        color: #fefefe;
        font-weight: bold;
    }


    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>