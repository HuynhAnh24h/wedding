<template>
    <section class="session__content">
        <div class="container py-5">
            <div class="row d-flex flex-column justify-content-center align-items-center">
                <div class="col-md pt-3">
                    <p class="text__title__content text-center">16.10.2024</p>
                    <p class="sub__text__content text-center">Thứ 4</p>
                </div>
                <div class="col-md d-flex justify-content-center align-items-center pt-3">
                    <div class="content__img">
                        <img src="../assets/rings.png" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-md pt-3">
                    <p class="text__title__content text-center">Royal Palace</p>
                    <p class="sub__text__content text-center">98 phan văn hớn - tân thới nhất - Q.12 - TP.HCM</p>
                </div>
                <div class="col-md pt-3">
                    <p class="text__title__content text-center">17:00</p>
                    <p class="sub__text__content text-center">Đón khách 17:00 - Nhập tiệc 19:00</p>
                </div>
            </div>
        </div>
    </section>
    <section class="banner">
        <h3 class="text-center text-uppercase banner__text">tính cách của chúng mình</h3>
    </section>
</template>
<script setup>
</script>
<style lang="css" scoped>
.content__img{
    width: 100px;
    height: 50px;
}

.content__img>img{
    width: 100%;
    height: 100%;
}

.text__title__content,
.sub__text__content{
    margin-bottom: 0;
    color: var(--primary--color);
}

.text__title__content{
    font-size: 45px;
    font-family: var(--font--title);
    font-weight: 500;
}

.sub__text__content{
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 400;
}

.banner__text{
    background:var(--bg--banner);
    padding: 15px;
    font-family: var(--font--title);
    font-size: 45px;
    margin-bottom: 0;
    line-height: 1.6;
}
</style>