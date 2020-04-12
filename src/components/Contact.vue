<template>
    <div class="row">
        <div class="col-md-12">
        <div class="col-md-1"></div>
        <div class="col-md-10 main">
            <div class="top-content-section">
                <NavHeader/>
            </div>
            <section class="contact-us-section">
                <div class="row medium-unstack">
                    <div class="columns contact-us-section-left">
                        <h1 class="contact-us-header">Get In Touch With Us</h1>
                        <div class="responsive-embed">
                            <img src="https://maps.googleapis.com/maps/api/staticmap?center=campbell&zoom=13&scale=false&size=600x300&maptype=roadmap&sensor=false&format=png&visual_refresh=true" alt="Google Map of campbell"/>
                        </div>

                        <ul class="contact-us-list">
                            <li class="address">NSBM Green University Town  ,<br>    Mahenwaththa,Pitipana, Homagama</li>
                            <li class="email"><a href="mailto:">adds@nsbm.lk</a></li>
                            <li class="phone">
                                (011) 2 544 5000
                            </li>
                        </ul>

                        <h5>Also on</h5>
                        <div class="clearfix"></div>
                        <a href="#" class="button social facebook">
                            <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                        </a>
                        <a href="#" class="button social linkedin">
                            <i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin
                        </a>
                        <a href="#" class="button social instagram">
                            <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
                        </a>
                    </div>
                    <div class="columns contact-us-section-right">
                        <h1 class="contact-us-header">Mail Us</h1>
                        <form class="contact-us-form">
                            <input type="text" placeholder="Full name">
                            <input type="email" placeholder="Email">
                            <textarea name="message" id="" rows="12" placeholder="Type your message here"></textarea>
                            <div class="contact-us-form-actions">
                                <input type="submit" class="button" value="Send it" />
                                <div>
                                    <label for="FileUpload" class="button contact-us-file-button">Attach Files(Only Images or Screen Shots)</label>
                                    <input type="file" id="FileUpload" class="show-for-sr">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        </div>
    </div>


</template>

<script>
    import NavHeader from "./NavHeader";
    export default {
        name: "Contact",
        components: {NavHeader}
    }
</script>

<style scoped>
    .top-content-section{
        margin-left: -10px;
    }
    .contact-us-section {
        padding: 1rem;
        background: #0a0a0a;
        opacity: 0.9;
        color: #fefefe;
        margin-left: 11%;

    }

    .col-md-12{
        background: url("../images/nsbm.jpg") center center no-repeat;
        background-size: cover;
        margin-top: -60px;
    }


    .contact-us-section .contact-us-section-left {
        padding-right: 2rem;
        border-bottom: 2px solid #e6e6e6;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }

    @media print, screen and (min-width: 40em) {
        .contact-us-section .contact-us-section-left {
            border-right: 1px solid #e6e6e6;
            border-bottom: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }

    .contact-us-section .contact-us-section-right {
        padding-left: 2rem;
    }

    @media print, screen and (min-width: 40em) {
        .contact-us-section .contact-us-section-right {
            border-left: 1px solid #e6e6e6;
        }
    }

    .contact-us-section .contact-us-header {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 40em) and (max-width: 74.9375em) {
        .contact-us-section .contact-us-header {
            font-size: 32px;
        }
    }

    .contact-us-section .responsive-embed {
        margin-bottom: 0;
        padding-bottom: 55%;
    }

    .contact-us-form input[type=text],
    .contact-us-form input[type=email],
    .contact-us-form textarea {
        margin-bottom: 1.5rem;
    }

    .contact-us-form-actions {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .contact-us-form-actions input[type=submit] {
        border-radius: 5000px;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .contact-us-form-actions .contact-us-file-button {
        background: transparent;
        color: #8a8a8a;
    }

    .contact-us-list {
        list-style-type: none;
        margin: 0;
    }

    .contact-us-list li a {
        color: #fefefe;
    }

    .contact-us-list li::before {
        margin-right: 2rem;
        font-size: 2rem;
        vertical-align: middle;
        color: #fefefe;
        font-family: 'FontAwesome';
    }

    .contact-us-list .address::before {
        content: '\f041';
        margin-left: 0.4rem;
        margin-right: 2.3rem;
    }

    .contact-us-list .email::before {
        content: '\f003';
    }

    .contact-us-list .phone::before {
        content: '\f098';
    }






    .social {
        margin-right: .25rem;
    }

    .social.facebook {
        background-color: #3b5998;
        color: #fefefe;
    }

    .social.facebook:hover, .social.facebook:focus {
        background-color: #2f477a;
        color: #fefefe;
    }

    .social.twitter {
        background-color: #55acee;
        color: #fefefe;
    }

    .social.twitter:hover, .social.twitter:focus {
        background-color: #1a8fe8;
        color: #fefefe;
    }

    .social.linkedin {
        background-color: #007bb5;
        color: #fefefe;
    }

    .social.linkedin:hover, .social.linkedin:focus {
        background-color: #006291;
        color: #fefefe;
    }

    .social.instagram {
        background-color: #bb0000;
        color: #fefefe;
    }

    .social.instagram:hover, .social.instagram:focus {
        background-color: #960000;
        color: #fefefe;
    }

    .social > .fa {
        color: #fefefe;
        margin-right: .25rem;
    }

    .placeholder{
        color: black;
    }



</style>