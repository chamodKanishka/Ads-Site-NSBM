<template>
    <div class="top-content-section">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text"><div class="logo"><img src="../images/logo.png" alt="logo"></div></li>
                    <li><router-link to="/Hostel/MyAds">Home</router-link></li>
                    <li><router-link to="/Faculty/Events">Contacts</router-link></li>
                    <li><router-link to="/Admin/RegisteredAccounts">About</router-link></li>
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

    .logo{
        height: 30px;
        width: 140px;
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