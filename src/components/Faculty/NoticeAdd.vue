<template>
    <div class="main">
        <nav class="top-bar topbar-responsive">
            <div class="columns medium-2">
                <strong><b>Notice Add</b></strong>
            </div>
            <div id="topbar-responsive" class="topbar-responsive-links">
                <div class="top-bar-right">
                    <ul class="menu simple vertical medium-horizontal">
                        <li><router-link to="/Faculty/FacultyHome">Home</router-link></li>
                        <li><router-link to="/Faculty/NoticeAdd" class="active">Add Notice</router-link></li>
                        <li><router-link to="/Faculty/EventsAdd">Add Event</router-link></li>
                        <li>
                            <router-link to="/"><button type="button" class="button hollow topbar-responsive-button">Log Out</button></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h2>Add a Notice</h2>
                <p class="lead">Enter every detail in correct. we don't get responsibility of your fault</p>
            </div>

            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 order-md-1">
                    <h4 class="mb-3">Notice Details</h4>
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="Location">Notice Title</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="location" placeholder="Title" required>
                                <div class="invalid-feedback" style="width: 100%;">
                                    Title is required.
                                </div>
                            </div>
                        </div>

                        <h4 class="mb-3">Description</h4>
                        <div class="md-3">
                        <textarea placeholder="Enter Notice"
                                  rows="20" name="comment[text]"
                                  id="comment_text" cols="40"
                                  class="ui-autocomplete-input"
                                  autocomplete="off" role="textbox"
                                  aria-autocomplete="list"
                                  aria-haspopup="true"></textarea>
                        </div>
                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Batch</label>
                                <select class="custom-select d-block w-100" id="country" required>
                                    <option value="">All</option>
                                    <option>19.1</option>
                                    <option>18.2</option>
                                    <option>18.1</option>
                                    <option>17.2</option>
                                    <option>17.1</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select any of choice
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">Faculty</label>
                                <select class="custom-select d-block w-100" id="state" required>
                                    <option value="">All</option>
                                    <option>Business</option>
                                    <option>Computing</option>
                                    <option>Engineering</option>

                                </select>
                                <div class="invalid-feedback">
                                    Please select one of them
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Publish Notice</button>
                    </form>
                </div>
            </div>
            <footer class="my-5 pt-5 text-muted text-center text-small">

            </footer>

    </div>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "../Footer";
    export default {
        name: "NoticeAdd",
        components: {Footer}
    }
</script>

<style scoped>

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
    b{
        color: #fefefe;
        margin-left: 20px;
        font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 24px;
    }
    .active{
        font-weight: bolder;
        text-decoration: none;
    }

</style>