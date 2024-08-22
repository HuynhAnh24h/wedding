<template>
  <section class="session__five py-5">
    <p class="five__title text-center text-uppercase">
      Hình cưới chúng mình nè
    </p>
    <section class="container-fluid p-5 m-0 section__best__seller">
        <div class="container">
            <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <div class="row d-flex justify-content-center align-content-center">
                            <div class="col-md-6">
                                <div class="img__slide__item">
                                    <img src="../assets/five__left.png" class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row d-flex justify-content-center align-content-center">
                            <div class="col-md-6">
                                <div class="img__slide__item">
                                    <img src="../assets/five__left.png" class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                    <p aria-hidden="true" class="prev__icon"><</p>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next best__seller__next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <p aria-hidden="true" class="next__icon">></p>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
  </section>
  <section class="banner">
        <h3 class="text-center text-uppercase banner__text">Câu chuyện của chúng mình</h3>
  </section>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style>
.five__title {
  margin: 0;
  font-size: 40px;
  font-family: var(--font--title);
  font-weight: 500;
  color: var(--primary--color);
}
.banner__text{
    background:var(--bg--banner);
    padding: 15px;
    font-family: var(--font--title);
    font-size: 45px;
    margin-bottom: 0;
    line-height: 1.6;
}

.next__icon,
.prev__icon{
  font-size: 40px;
  font-weight: 900;
  color: var(--bg--banner);
}

.img__slide__item{
  width: 100%;
  height: 800px;
}

.img__slide__item > img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 992px ) {
    .banner__text, .five__title{
        font-size: 20px;
    }
    .session__five::after,
    .session__five::before{
      height: 150px;
      width: 100px;
    }
}
</style>
