<template>
    <footer class="footer" >
<!--        <div class="row lg-menu">-->
<!--            <div class="container">-->
<!--                <div class="col-md-4 col-sm-4">-->
<!--                    <img src="assets/img/nsbm-green-uni-logo.png" class="img-responsive" alt="" />-->
<!--                </div>-->
<!--                <div class="col-md-8 co-sm-8 pull-right">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="row">
            <div class="row">
                <div class="logo">
                    <img src="../images/logo.png" alt="logo">
                </div>
                <div class="col-md-2">
                    <div class="footer-widget">

                        <div class="textwidget name">
                            <p>NSBM Green University Town.</p>
                        </div>
                    </div>
                </div>
<!--                <div class="col-md-1"></div>-->
                <div class="col-md-3">
                    <div class="footer-widget">
                        <div class="textwidget">
                            <div class="textwidget">
                                <p>Mahenwatta, Pitipana, Homagama, <br />Sri Lanka.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <div class="footer-widget">

                        <div class="textwidget">
                            <div class="textwidget">
                                <p><strong>Official website:</strong><a href="https://www.nsbm.lk" target="_blank">www.nsbm.lk</a></p>
                            </div>
                        </div>
                    </div>
                </div>
<!--                <div class="col-md-1"></div>-->
                <div class="col-md-3.5">
                    <div class="footer-widget no">

                        <div class="textwidget">
                            <p><strong>Call:</strong> <a href="tel:+15555555555">(94)11-544-5000</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row copyright">
            <div class="container">
                <p>Copyright NSBM © 2019. All Rights Reserved </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .row{
        background-color: #1c2733;
        padding-top: 20px;
    }
    .copyright{
        background-color: #111922;
    }
    .logo{
        height: 30px;
        width: 140px;
        margin-left: 70px;
    }
    .textwidget{
        color: #909090;
        margin-left: 30px;
    }
    .copyright{
        color: #909090;
        font-size: larger;
    }
    .name{
        font-size: large;
    }
</style>