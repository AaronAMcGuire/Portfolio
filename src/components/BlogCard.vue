<template>
  <div class="blog-card">
    <div class='blog-card-image'><img :src="CoverImg" alt=''></div>
    <div class='blog-card-content'>
        <span class='blog-card-content__author'><img :src="Author" alt=''></span>
        <span class='blog-card-content__category'>{{Category}}</span>
        <a class='blog-card-content__link' href='' title=''><h2 class='blog-card-content__title'>{{Title}}</h2></a>

    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    Title: String,
    Description: String,
    Category: String,
    Author: String,
    CoverImg: String,
  }
};
</script>
<style scoped>
.blog-card{
border-radius:5px;
    flex-basis:27%;
    transition: .3s ease;
}
.blog-card:hover{
    box-shadow: 0 20px 20px 5px rgba(33,55,87,0.05);
    transition: .3s ease;
}
.blog-card-content{
    padding: 40px;
    background:rgb(255,255,255);
    min-height: 120px;
    position: relative;
     border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.blog-card-image{
    background:rgb(230,230,230);
    height: 230px;
   
}
.blog-card-image img{
    display:block;
    width:100%;
    height:100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.blog-card-content__author{
    width:50px;
    height:50px;
    border-radius:100rem;
    position:absolute;
    top:-25px;
    right:25px;
    background-color:rgb(200,200,200);
    overflow: hidden;
    box-shadow: 0 20px 30px 0 rgba(33,55,87,0.22);
}
.blog-card-content__author img{
    width:100%;
    height:100%;
    object-fit: cover;
    display:block;
}
.blog-card-content__title{
    color:#162944;
    font-size:26px;
    font-weight:400;
    line-height:35px;
}
.blog-card-content__category{
    color:#5319e1;
    margin-bottom:15px;
    display:block;
    font-size:14px;
    text-transform:uppercase;
    font-family:'Roboto-Bold';
    letter-spacing: 1px;

}
.blog-card-content__link{
    text-decoration: none;
}

</style>
