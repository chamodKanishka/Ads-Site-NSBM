<template>
    <div>
        <HostelHome/>
        <div class="app-dashboard shrink-medium">
            <div class="app-dashboard-body off-canvas-wrapper">
                <div id="app-dashboard-sidebar" class="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
                    <div class="app-dashboard-sidebar-title-area">
                        <div class="app-dashboard-close-sidebar">
                            <h3 align="center" class="app-dashboard-sidebar-block-title">Menu</h3>
                        </div>
                        <div class="app-dashboard-open-sidebar">
                            <button id="open-sidebar" data-app-dashboard-toggle-shrink class="app-dashboard-open-sidebar-button show-for-medium" aria-label="open menu" type="button">
                                <span aria-hidden="true"><a href="#"><i class="large fa fa-angle-double-right"></i></a></span>
                            </button>
                        </div>
                    </div>
                    <div class="app-dashboard-sidebar-inner">
                        <ul class="menu vertical">
                            <li><router-link to="/Hostel/MyAds">
                                <i class="large fa fa-institution"></i><span class="app-dashboard-sidebar-text">My Ads</span>
                            </router-link></li>
                            <li><router-link to="/Hostel/Profile" class="active">
                                <i class="large fa fa-hourglass"></i><span class="app-dashboard-sidebar-text">Profile</span>
                            </router-link></li>
                            <li><router-link to="/Hostel/InnerContact">
                                <i class="large fa fa-industry"></i><span class="app-dashboard-sidebar-text">Contact us</span>
                            </router-link></li>
                        </ul>
                    </div>
                </div>
                <main role="main" class="container">
<!--                size is photo upload size in MB-->
                <picture-input
                        ref="pictureInput"
                        width="200"
                        height="200"
                        margin="10"
                        accept="image/jpeg,image/png"
                        radius="15"
                        removable="true"
                        changeOnClick="false"
                        size="5"
                        button-class="btn"
                        :custom-strings="{
                            upload: '<h1>Uploaded</h1>',
                            drag: 'Click Here or Drag and Drop'
                          }"
                        @change="onChange">
                </picture-input>
                <div class="details">
                    <md-field class="fields">
                    <label>(Can't change)</label>
                    <md-input v-model="initial" readonly></md-input>
                    </md-field>
                    <md-field>
                    <label>Contact No</label>
                    <md-input v-model="contact"></md-input>
                    </md-field>
                    <md-field>
                    <label>Email</label>
                    <md-input v-model="email"></md-input>
                    </md-field>
                    <md-button class="md-raised">Update</md-button>
                    
                </div>
                </main>
                </div>
                </div>
        <Footer/>
    </div>
</template>

<script>
    import HostelHome from "./HostelHome";
    import PictureInput from 'vue-picture-input';
    import QuickEdit from 'vue-quick-edit'
    import Footer from "../Footer";
    export default {
        name: "Profile",
        components: {Footer, HostelHome, PictureInput, QuickEdit},
        methods: {
            onChange (image) {
                console.log('New picture selected!')
                if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }
        },
        data: () => ({
            initial: 'Chamod Kanishka',
            initialC: '0756618720',
            email: 'chamodkanishka77@gmail.com',
            type: null,
            withLabel: null,
            inline: null,
            number: null,
            textarea: null,
            autogrow: null,
            disabled: null
            })
    }
</script>

<style scoped>

    main{
        margin-left: 100px;
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

    .imageUpload{
        margin-top: 50px;
    }

    .form-group {
        margin-bottom: 0;
    }
    .btn-group {
        display: inline-block;
    }
    .details{
       margin-left: 38%;
       margin-top: 30px;
       max-width: 300px;
       background-color: #f4f4f4;
       padding:20px;
    }

    .md-raised{
        background-color:#19589d;
        color: white;
    }
    

</style>
