<template>
    <div class="row">
        <div class="col-md-4.5 left">
            <NavHeader/>
        </div>
        <div class="col-md-4 forms">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

    <form>

        <div class="form-icons">
            <h4><strong>Login here</strong></h4>
            <div class="input-group">
              <span class="input-group-label">
                <i class="fa fa-envelope"></i>
              </span>
                <input class="input-group-field" type="email" placeholder="Email">
            </div>

            <div class="input-group">
              <span class="input-group-label">
                <i class="fa fa-key"></i>
              </span>
                <input class="input-group-field" type="password" placeholder="Password">
            </div>

            <router-link to="/Faculty/Events"><button class="button expanded">Login</button></router-link>
            <vue-recaptcha sitekey="6LdVl8sUAAAAAANB6ln8rmx5Rvh8aym05P9IzzGg"></vue-recaptcha>

            <p>if you don't have an account, <b><router-link to="/Register">Register</router-link></b></p>
        </div>
        <div data-closable class="alert-box callout alert">
            <i class="fa fa-ban"></i> Email or Password doesn't match. Please try again.
            <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&CircleTimes;</span>
            </button>
        </div>

        <div data-closable class="alert-box callout warning">
            <i class="fa fa-exclamation-triangle"></i> Please fill in all required fields.
            <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&CircleTimes;</span>
            </button>
        </div>

        <div data-closable class="alert-box callout success">
            <i class="fa fa-check"></i> File upload successful!
            <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&CircleTimes;</span>
            </button>
        </div>

        <div data-closable class="alert-box callout info">
            <i class="fa fa-eye"></i>This Email haven't account yet
            <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&CircleTimes;</span>
            </button>
        </div>


    </form>
        </div>
        </div>
</template>

<script>
    import NavHeader from "./NavHeader";
    import VueRecaptcha from 'vue-recaptcha';
    export default {
        name: "Login",
        components: {NavHeader, VueRecaptcha},
        data(){
            return{

            }

        }

    }

</script>

<style scoped>



    .left{
        margin-left: 30px;
    }
    .row{
        height: 100vh;
        margin: -60px;
        padding-bottom: 15%;
        overflow: hidden;
        background: url("../images/nsbm.jpg") center center no-repeat;
        background-size: cover;

    }
    .forms{
        background: #0a0a0a;
        opacity: 0.9;
        margin-top: 8%;
        margin-left: -10px;
    }
    form .form-icons {
        text-align: center;
        margin-top: 15%;
    }

    form .form-icons h4 {
        margin-bottom: 1rem;
        color:cornsilk;
    }

    form .form-icons .input-group-label {
        background-color: #1779ba;
        border-color: #1779ba;
    }

    form .form-icons .input-group-field {
        border-color: #1779ba;
    }

    form .form-icons .fa {
        color: white;
        width: 1rem;
    }

    .top-bar{
        color: #fefefe;
    }
    .top-bar .menu a {
        color: #fefefe;
        font-weight: bold;
    }
    .top-bar {
        background: transparent;
    }
    .top-bar .menu {
        background: transparent;
    }


    .alert-box {
        padding-right: 3.25rem;
        width: 100%;
    }

    .alert-box.callout {
        color: #fefefe;
        font-weight: bold;
    }

    .alert-box.alert {
        border: 3px solid #cc4b37;
        border-radius: 5px;
        background-color: rgba(204, 75, 55, 0.2);
    }

    .alert-box.warning {
        border: 3px solid #ffae00;
        border-radius: 5px;
        background-color: rgba(255, 174, 0, 0.2);
    }

    .alert-box.success {
        border: 3px solid #3adb76;
        border-radius: 5px;
        background-color: rgba(58, 219, 118, 0.2);
    }

    .alert-box.info {
        border: 3px solid #1779ba;
        border-radius: 5px;
        background-color: rgba(23, 121, 186, 0.2);
    }

    .alert-box i {
        border: 2px solid #fefefe;
        border-radius: 50%;
        padding: .3em .325em;
        margin-right: 0.5rem;
    }

    .alert-box .close-button {
        color: rgba(254, 254, 254, 0.5);
        font-size: 2rem;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 1rem;
        font-weight: bold;
    }

    p{
        color: white;
    }


</style>
