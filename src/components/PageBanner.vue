<template>
    <section class='page-hero'>
        <div class='container container-content'>
            <div class='page-hero-content'>
                <h1 class='page-hero-content__title'>{{Heading}}</h1>
                <p v-if='Info' class="page-hero-content__body">{{Info}}</p>
                    <a v-if='LinkText' class='page-hero-content__link' href='' title=''>{{LinkText}} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg></a>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name:'Pagebanner',
    props:{
        Heading: String,
        Info: String,
        LinkText: String
    }
}
</script>

<style scoped>
.page-hero{
    width: 100%;
    height: 50vh;
    min-height: 600px;
    background-image: linear-gradient(to bottom, #3b1796, #0C1B54);
    display: flex;
    justify-content: center;
    align-items: center;
}
.page-hero-content__title{
    font-size:80px;
    color:rgb(255,255,255);
    margin-bottom:30px;
}
.page-hero-content__body{
    font-size:17px;
    color:rgb(255,255,255);
}
.page-hero-content__link{
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
  margin-top:20px;
}

.page-hero-content__link:hover{
    background-color:#4013b0;
    transition:.3s ease;
}
.page-hero-content__link:hover svg{
    right:15px;
    transition:.3s ease;
}
.page-hero-content__link svg{
    position:absolute;
    right:10px;
    top:50%;
    transition:.3s ease;
    transform:translateY(-50%);
}
</style>