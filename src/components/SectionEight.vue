<script setup>
</script>
<template>
    <section class="session__eight d-flex justify-content-center align-items-center">
        <div class="container">
            <p class="text-center text-uppercase text__end">Sự hiện diện của quý khách <br> là niềm vui của gia đình chúng tôi</p>
        </div>
    </section>
</template>
<style lang="css" scoped>
.text__end{
    font-size: 35px;
    color: var(--primary--color);
    font-weight: 500;
}

@media screen and (max-width: 992px ) {
    .text__end{
        font-size: 30px;
    }
    .session__eight::after{
        background-position-x: 100%;
    }
    .session__eight::after,
    .session__eight::before{
        width: 150px;
    }
}
</style>

