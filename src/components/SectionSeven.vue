<script setup>
import FalseContact from './comons/FalseContact.vue';
import TrueContact from './comons/TrueContact.vue';
import {ref} from 'vue'
const showElement1 = ref(false)
const showElement2 = ref(false)
const showHideElement = () =>{
    showElement1.value = !showElement1.value
    if(showElement1.value == true){
        showElement2.value = false
    }else{
        showElement2.value = true
    }  
}
const showHideElement2 = () =>{
    showElement2.value = !showElement2.value
    if(showElement2.value == true){
        showElement1.value = false
    }else{
        showElement1.value = true
    }  
}
</script>
<template>
   <section class="session__seven py-5">
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <p class="text-center text-uppercase m-0 seven__title">bạn sẽ tham gia chứ</p>
        </div>
        <div class="row py-5">
            <div class="col-md d-flex justify-content-center align-items-center gap-3">
                <p class="m-0">
                    <button class="seven__btn true__btn" @click="showHideElement">Có có</button>
                </p>
                <p class="m-0">
                    <button class="seven__btn false__btn" @click="showHideElement2">Mình bù sau nha</button>
                </p>
            </div>
        </div>
        <div class="form__seven col-md d-flex justify-content-center align-items-center" v-if="showElement1">
            <TrueContact />
        </div>
        <div class="form__seven d-flex justify-content-center align-items-center" v-if="showElement2">
           <FalseContact/>
        </div>
    </div>
   </section>
</template>
<style lang="css" scoped>
.seven__title{
    font-size: 20px;
    font-weight: 600;
    padding: 20px 30px;
    background: var(--bg--banner) ;
    border-radius: 5px;
}

.seven__btn{
    padding: 10px 30px;
    border: 1px solid var(--bg--banner);
    font-size: 18px;
    font-weight: 400;
    color: var(--primary--color);
    border-radius: 3px;
    transition: 0.3s linear;
}

.true__btn{
    background: var(--bg--banner);
}

.true__btn:hover{
    opacity: 0.5;
}

.false__btn{
    background: #ffffff;
}

.false__btn:hover{
    background: var(--bg--banner);
    cursor: pointer;
}

</style>