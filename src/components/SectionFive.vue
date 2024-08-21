<template>
  <section class="session__five py-5">
    <p class="five__title text-center text-uppercase">
      Hình cưới chúng mình nè
    </p>
    <div class="container py-3">
      <div class="row d-flex justify-content-center align-items-center py-3">
        <div class="col-md-3">
            <RouterLink to="/library">
                <img src="../assets/five__left.png" class="w-100" alt="">
            </RouterLink>
        </div>
        <div class="col-md-3">
            <RouterLink to="/library">
                <img src="../assets/five__right.png" class="w-100" alt="">
            </RouterLink>
        </div>
      </div>
    </div>
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
</style>
