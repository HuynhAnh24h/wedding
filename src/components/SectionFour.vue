<template>
  <section class="sections__four py-5">
    <div class="container d-flex flex-column gap-3 justify-content-center align-items-center">
      <div class="top d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="image col-md-4">
              <div class="style__img">
                <img src="../assets/session__3__left.png" alt="" />
              </div>
            </div>
            <div class="content col-md-6">
              <p class="content__title text-center text-uppercase">Cô dâu</p>
              <p class="content__title text-center text-uppercase">Thanh Trà</p>
              <p class="content__text text-center">
                Cung
                <span class="hight__light__text">MA KẾT</span>, tính cách
                <span class="hight__light__text">ĐỘC LẬP - MẠNH MẼ</span>, tự
                mình hoàn thành mọi công việc và là người
                <span class="hight__light__text"
                  >TRƯỞNG NHÓM CỦA NINETY NINE BAND</span
                >
                Cô dâu là
                <span class="hight__light__text">NGƯỜI SUY NGHĨ RẤT NHIỀU</span
                >, và giải quyết mọi thứ rốp rẻng không phiền đến ai.
              </p>
              <p class="content__text text-center">
                Ngoài ra công việc phụ của cô dâu đó là dẹp hết mấy cái suy nghĩ
                tiêu cực trong đầu chú rể và hướng chú rể đi con đường đúng đắn
                sáng suốt hơn.<br />
                <span class="hight__light__text"
                  >NỮ CƯỜNG TRONG TRUYỀN THUYẾT</span
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="bottom__row row d-flex justify-content-center align-items-center">
              <div class="content col-md-6">
                <p class="content__title text-center text-uppercase">Chú rể</p>
                <p class="content__title text-center text-uppercase">Tuấn Đạt</p>
                <p class="content__text text-center">
                  Cung
                  <span class="hight__light__text">Sư tử</span>, tinh thần
                  <span class="hight__light__text"
                    >bảo vệ - thích che chở cô dâu, sẵn sàng chiến với ai có ý
                    định không tốt với cô dâu</span
                  > luôn khao khát trở thành người dẫn đầu trong mọi tình huống <br> 
                  (nhưng không khéo khoảng ăn nói nên cô dâu là người truyền đạt ý tưởng thay)
                </p>
                <p class="content__text text-center">
                  <span class="hight__light__text"
                    >không ngại khó khăn - thử thách</span
                  >. tính cách
                  <span class="hight__light__text"
                    >thân thiện, thái độ tích cực</span>, mang nụ cười chân thành, ấm áp. Ngoài việc có sở thích ôm
                  10 mấy cây đàn giutar ra thì có sở thích so sánh eo cây đàn với eo vợ.
                </p>
              </div>
              <div class="image col-md-4">
                <div class="style__img"     >
                  <img src="../assets/session__3__right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="css" scoped>
.content__title {
  font-size: 50px;
  font-family: var(--font--heading);
  font-weight: 600;
  margin: 0;
  color: var(--primary--color);
}

.content__text {
  margin: 0;
  font-size: 18px;
  font-family: var(--font--title);
  line-height: 1.6;
  color: var(--primary--color);
}

.hight__light__text {
  text-transform: uppercase;
  font-weight: 800;
}

.style__img {
  width: 100%;
}

.style__img img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 992px ) {
    .bottom__row{
      flex-wrap: wrap-reverse;
    }
    .content__text{
      font-size: 18px;
    }
    .content__title{
      font-size: 25px;
    }
}
@media screen and (max-width: 768px ) {
    .content__text{
      font-size: 16px;
    }
    .content__title{
      font-size: 20px;
    }
}
</style>
