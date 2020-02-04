<template>
    <div class="main">
        <nav class="top-bar topbar-responsive">
            <div class="columns medium-2">
                <strong><b>Post Hostel</b></strong>
            </div>
            <div id="topbar-responsive" class="topbar-responsive-links">
                <div class="top-bar-right">
                    <ul class="menu simple vertical medium-horizontal">
                        <li><router-link to="/Hostel/MyAds">Home</router-link></li>
                        <li><router-link to="/Hostel/Hostels">View Adds</router-link></li>
                        <li><router-link to="/Hostel/AddHostel" class="active">Post add</router-link></li>
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
                <h2>Add Your Ad Here</h2>
                <p class="lead">Enter every detail in correct. we don't get responsibility of your fault</p>
            </div>

            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 order-md-1">
                    <h4 class="mb-3">Advertisement Details</h4>
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="Location">Location</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="location" placeholder="Location" required>
                                <div class="invalid-feedback" style="width: 100%;">
                                    Location is required.
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="Contact">Contact Number</label>
                            <input type="number" class="form-control" id="Contact" placeholder="Contact Number"><div class="invalid-feedback">
                            Please enter your contact no
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Type of Hostel</label>
                                <select class="custom-select d-block w-100" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Floor</option>
                                    <option>Room</option>
                                    <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select any of choice
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">For</label>
                                <select class="custom-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Boys</option>
                                    <option>Girls</option>
                                    <option>Anyone</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select one of them
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Count</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required>
                                <div class="invalid-feedback">
                                    Count is required.
                                </div>
                            </div>
                        </div>
                        <h5 class="mb-3">Images</h5>
                        <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
                            <vue-upload-multiple-image
                                    @upload-success="uploadImageSuccess"
                                    @before-remove="beforeRemove"
                                    @edit-image="editImage"
                                    @data-change="dataChange"
                                    :data-images="images"
                            ></vue-upload-multiple-image>
                        </div>
                        <hr class="mb-4">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Next</button>
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
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    import Footer from "../Footer";
    export default {
        name: "AddHostel",
        data () {
            return {
                images: []
            }
        },
        components: {
            Footer,
            VueUploadMultipleImage
        },
        methods: {
            uploadImageSuccess(formData, index, fileList) {
                console.log('data', formData, index, fileList)
                // Upload image api
                // axios.post('http://your-url-upload', { data: formData }).then(response => {
                //   console.log(response)
                // })
            },
            beforeRemove(index, done, fileList) {
                console.log('index', index, fileList)
                var r = confirm("remove image")
                if (r == true) {
                    done()
                } else {
                }
            },
            editImage(formData, index, fileList) {
                console.log('edit data', formData, index, fileList)
            },
            dataChange(data) {
                console.log(data)
            }

        }
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
