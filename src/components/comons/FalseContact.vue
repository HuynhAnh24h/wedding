<script setup>
</script>
<template>
    <div class="col-md-6 ">
        <form>
            <div class="mb-3">
                <label for="text" class="form-label form__title">Họ và tên</label>
                <input type="text" class="form-control" id="text">
            </div>
            <div class="mb-3">
               <div class="row">
                    <div class="col-md">
                        <label for="exampleInputPassword1" class="form-label form__title">Lời chúc</label>
                        <textarea class="form-control" id="floatingTextarea2" style="height: 230px"></textarea> 
                    </div>
                    <div class="col-md-4">
                        <img src="../../assets/atm.png" class="w-100" style="width: 100%; height: 100%;" alt="">
                    </div>
               </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <button type="submit" class="btn__submit text-uppercase">gửi</button>
            </div>
            </form>
    </div>
</template>
<style lang="css" scoped>
.btn__submit{
    padding: 5px 30px;
    border: 1px solid var(--bg--banner);
    color: var(--primary--color);
    background: var(--bg--banner);
    font-size: 18px;
    font-weight: 400;
    transition: 0.3s linear;
}
.btn__submit:hover{
    cursor: pointer;
    opacity: 0.6;
}
.form-control{
    border: 1px solid var(--bg--banner);
}

.form__title{
    font-size: 20px;
    color: var(--primary--color);
    font-weight: 600;
    font-family: var(--font--title);
}
</style>
