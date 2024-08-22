<template>
    <section class="session__six flex-column justify-content-center align-items-center">
       <div class="container py-5 d-flex flex-nowrap justify-content-end ">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="card d-flex justify-content-end">
            <div class="row">
                <div class="icon">
                    <p class="text__stunning">Giai đoạn tìm hiểu</p>
                </div>
                <div class="desc">
                    Cả 2 biết nhau thông qua một hội guitar vào năm 2018 , Tuấn Đạt thì đánh đàn còn Thanh Trà đi nghe hát thôi chứ chưa vào nghề. Kết bạn facebook đc một thời gian thì cãi nhau to chỉ vì con rồng nam mĩ nhà dì 3 của cd nuôi. Sau đó cả 2 block nhau quyết không bao giờ gặp lại
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c2">
        <label for="c2" class="card d-flex justify-content-end">
            <div class="row">
                <div class="icon">
                    <p class="text__stunning">Câu chuyện tình yêu</p>
                </div>
                <div class="desc">
                    Một thời gian sau khi cô dâu đi nghe Acoustic cùng một người anh thì vô tình người anh đó là bạn chú rể , hơi ngại nhưng nói chuyện lại và mở block. Chú rể khá ít nói và khép mình lại không muốn chơi hay nói chuyện với ai, chỉ nhốt mình ở nhà. Còn cô dâu thì hướng ngoại, nói nhiều , hoạt bát vui vẻ khiến chú rể mở lòng hơn. Bữa đi chơi đầu tiên là rủ đi coi phim ma Valak chú rể ngủ hết phim vì quá chán, ngáy to nữa. Ngày chính thức quen nhau là ngày công chiếu Valak 9/9/2018 nhưng chú rể không bao giờ nhớ nên ăn giận mấy lần
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c3">
        <label for="c3" class="card d-flex justify-content-end">
            <div class="row">
                <div class="icon">
                    <p class="text__stunning">Quyết định của cả hai</p>
                </div>
                <div class="desc">
                    Quen nhau, trải qua những ngày nắng mưa cùng nhau đi show cùng ăn sập thế giới và cả 2 tăng cân ú nu luôn. Vui có buồn cũng có, có lúc tưởng chừng muốn bỏ cuộc không muốn quen nhau nữa nhưng cuối cùng vẫn chọn ở lại cùng nhau giờ tròn 6 năm - cũng là ngày cưới được tổ chức
                </div>
            </div>
        </label>
       </div>
    </section>
    <section class="session__six__mobile  p-5">
        <ul class="list__sory d-flex justify-content-between align-items-center " id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="list__story__link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                    Giai đoạn tìm hiểu
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="list__story__link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    Câu chuyện tình yêu
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="list__story__link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    Quyết định của cả hai
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="love__story">
                    <div class="story__img__head">
                        <img src="../assets/c-1.png" class="w-100" alt="">
                    </div>
                    <div class="love__desc">
                        Cả 2 biết nhau thông qua một hội guitar vào năm 2018 , Tuấn Đạt thì đánh đàn còn Thanh Trà đi nghe hát thôi chứ chưa vào nghề. Kết bạn facebook đc một thời gian thì cãi nhau to chỉ vì con rồng nam mĩ nhà dì 3 của cd nuôi. Sau đó cả 2 block nhau quyết không bao giờ gặp lại
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="love__story">
                    <div class="story__img__head">
                        <img src="../assets/c-2.png" class="w-100" alt="">
                    </div>
                    <div class="love__desc">
                        Một thời gian sau khi cô dâu đi nghe Acoustic cùng một người anh thì vô tình người anh đó là bạn chú rể , hơi ngại nhưng nói chuyện lại và mở block. Chú rể khá ít nói và khép mình lại không muốn chơi hay nói chuyện với ai, chỉ nhốt mình ở nhà. Còn cô dâu thì hướng ngoại, nói nhiều , hoạt bát vui vẻ khiến chú rể mở lòng hơn. Bữa đi chơi đầu tiên là rủ đi coi phim ma Valak chú rể ngủ hết phim vì quá chán, ngáy to nữa. Ngày chính thức quen nhau là ngày công chiếu Valak 9/9/2018 nhưng chú rể không bao giờ nhớ nên ăn giận mấy lần
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="love__story">
                    <div class="story__img__head">
                        <img src="../assets/c-3.png" class="w-100" alt="">
                    </div>
                    <div class="love__desc">
                        Quen nhau, trải qua những ngày nắng mưa cùng nhau đi show cùng ăn sập thế giới và cả 2 tăng cân ú nu luôn. Vui có buồn cũng có, có lúc tưởng chừng muốn bỏ cuộc không muốn quen nhau nữa nhưng cuối cùng vẫn chọn ở lại cùng nhau giờ tròn 6 năm - cũng là ngày cưới được tổ chức
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup></script>
<style lang="css" scoped>
.card{
    height: 700px;
    width: 250px;
    background-size: contain;
    background-position-x: 30%;
    cursor: pointer;
    overflow: hidden;
    margin: 0 10px;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    border: none;
}


.card > .row{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}

.card > .row .icon{
    background: var(--bg--stunning);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.text__stunning{
    font-family: var(--font--title);
    color: var(--primary--color);
    padding: 15px;
    margin: 0;
    font-size: 20px;
    font-weight: 800;
}

.card > .row > .desc{
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    display: none;
    width: 100%;
    transition-delay: .3s;
    transition: all .3s ease;
}

.desc > p{
    color: var(--primary--color);
    padding-top: 5px;
}
input{
    display: none;
}

input:checked + label{
    width: 100%;
}

input:checked + label .text__stunning{
    text-align: right !important;
}

input:checked + label .desc{
    display: block !important;
    transform: translateY(0) !important;
    color: var(--primary--color);
    padding: 20px;
    font-size: 16px;
    background:#ffffff;
}

.card[for='c1']{
    background: url(../assets/c-1.png);
    background-size: cover;
    background-position-x: 25%;
}
.card[for='c2']{
    background: url(../assets/c-2.png);
    background-size: cover;
    background-position-x: 30%;
}
.card[for='c3']{
    background: url(../assets/c-3.png);
    background-size: cover;
    background-position-x: 45%;
}

.session__six__mobile{
    display: none;
}

ul, li {
    list-style: none;
}
.list__sory{
    padding: 0;
    gap: 5px;
}

.list__story__link{
    padding: 5px;
    border: none;
    background-color: var(--bg--stunning);
    color: var(--primary--color);
    font-weight: 800;
    font-family: var(--font--title);
    border-radius: 5px;
}
.love__desc{
    font-size: 18px;
    font-weight: 400;
    padding-top: 10px;
    line-height: 1.6;
    font-family: var(--font--title);
}
.active{
    opacity: 0.5;
}
@media screen and (max-width: 992px) {
  .session__six{
    display: none;
  }

  .session__six__mobile{
    display: block;
  }
}
</style>