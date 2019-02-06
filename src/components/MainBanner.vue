<template>
 <section class='home-hero'>
   <div class='container container-content'>
     <div class='home-hero-content'>
       <h1 class='home-hero__title'>Stockport Based Web Developer</h1>
       <div class='home-hero-info'>
        <div class='home-hero-info__left'>
         <a class='home-hero-info__button' href='' title=''>Read About Me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg></a>
          <span class='home-hero-info__alternative'>or <a href='' title=''>Browse my Portfolio</a></span>
        </div>
        <div class='home-hero-info__right'>
            <p class='home-hero-info__body'>I am a <strong>Web Developer</strong> with 3 years <strong>industry experience</strong> and a <strong>BSc First Class Honours</strong> In Web development</p>
          </div>
        </div>
      </div>
    </div>
    <div class='home-hero-lower'>
    <div class='home-hero-lower__left'>
    <img class='home-hero__img' :src="require('@/assets/Images/heroImage.jpg')" />
    </div>
    <div class='home-hero-lower__right'>
    <div class='home-hero-points'>
        <ul class='home-hero-points__ul'>
            <li class='home-hero-points__li'>
                <h2 class='home-hero-points__title'>BSc Web Development</h2>
                <p class='home-hero-points__body'>I have a First Class Degree from Manchester Metropolitan University</p>
            </li>
            <li class='home-hero-points__li'>
                <h2 class='home-hero-points__title'>3 Years Agency Experience</h2>
                <p class='home-hero-points__body'>I have experience working at various Digital/Web agencies in Manchester</p>
            </li>
            <li class='home-hero-points__li'>
                <h2 class='home-hero-points__title'>A11y Accessibility Concious</h2>
                <p class='home-hero-points__body'>I am actively looking to improving my understanding of web accessability  </p>
            </li>
          
        </ul>
    </div>
    <p class='home-hero-lower__body home-hero-lower__body--first'>Currently Working at Pixel Kicks as a Web Developer</p>
    <p class='home-hero-lower__body'>Working as a Freelance WordPress Developer in my spare time</p>
    </div>
    </div>
  </section>
</template>

<script>
export default{}
</script>
<style scoped>
.home-hero {
  height: 90vh;
  min-height: 900px;
  width: 100%;
  background-image: linear-gradient(to bottom, #3b1796, #0C1B54);
  display: flex;
  align-items: center;
  position:relative;
  margin-bottom:26%;

}

.home-hero-content {
  transform: translateY(-100px);
}
.home-hero__title {
  font-size: 80px;
  color: rgb(255, 255, 255);
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 40px;
}
.home-hero-info {
  display: flex;
}
.home-hero-info__left {
  flex-basis: 33%;
}
.home-hero-info__right {
  flex-basis: 47%;
}
.home-hero-info__button {
  color: rgb(255, 255, 255);
  background-color: #5319e1;
  padding: 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 200px;
  font-weight: 600;
  font-family: "Karla-Bold";
  position:relative;
   transition:.3s ease;
}
.home-hero-info__button:hover{
    background-color:#4013b0;
    transition:.3s ease;
}
.home-hero-info__button:hover svg{
    right:15px;
    transition:.3s ease;
}
.home-hero-info__button svg{
    position:absolute;
    right:10px;
    top:50%;
    transition:.3s ease;
    transform:translateY(-50%);
}
.home-hero-info__alternative {
  display: block;
  margin-top: 20px;
  color: rgb(255, 255, 255);
}
.home-hero-info__alternative a {
  color: rgb(255, 255, 255);
  font-size: 18px;
}

.home-hero-info__body {
  color: rgb(255, 255, 255);
  line-height: 30px;
  font-size: 17px;
}
.home-hero__img{
  width:100%;
  height:auto;
  max-width:1000px;
}

.home-hero-points {
    max-width:800px;
    padding:40px 0;
    margin-left:35px;
}
.home-hero-points__ul{
    display:flex;
}
.home-hero-points__li{
color:rgb(255,255,255);
list-style:none;
padding:0 25px;
}
.home-hero-points__title{
margin-bottom:10px;
line-height:35px;
}
.home-hero-points__body{
color:rgba(255,255,255,.7);
}


.home-hero-lower {
    position: absolute;
    width: 100%;
    bottom: -26%;
    transform: translateY(26%);
    left:0;
    display:flex;
    align-items:flex-start;
}
.home-hero-lower__right{

}
.home-hero-lower__body{
    font-size:25px;
    padding:20px;
    max-width:500px; 
    position:absolute;
    bottom:50px;
    transform:translateX(-60px);
    background-color: #f5f7fa;
        box-shadow: 6px 9px 40px 0 rgba(33,55,87,0.06);
    padding: 25px 50px;
    border-bottom-right-radius: 50px;
    border-left:10px solid #5319e1;
}
.home-hero-lower__body--first{
    bottom:185px;
    border-bottom-right-radius:0;
    border-bottom-left-radius: 50px;
    border-left:0;
    border-right:10px solid #5319e1;
}
</style>
