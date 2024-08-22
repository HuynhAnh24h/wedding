<template>
    <section class="heading container-fluid p-0 m-0">
        <div class="container logo__container d-flex flex-column justify-content-center align-items-center">
            <div class="row logo__row d-flex justify-content-center align-items-center py-3">
                <div class="logo__img">
                    <img src="../assets/logo.png" class="w-100" alt="">
                </div>
            </div>
            <div class="row heading__banner__row d-flex justify-content-center align-items-center">
                <div class="heading__banner">
                    <img src="../assets/heading-banner.png" class="w-100" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style lang="css" scoped>
.logo__img{
    width: 400px;
}
@media screen and (max-width: 992px ) {
    .logo__img{
        width: 300px;
    }
    .heading::after{
        top: 0px;
        width: 250px;
    }
    .heading::before{
        width: 200px;
        bottom: 0px;
    }
}
</style>