<template>
<section>

 <div class='container'>
     <div class='blog-introduction'>
         <h2 class='blog-introduction__title'>Read Through Aarons Latest Thoughts </h2>
         <h3 class='blog-introduction__subtitle'>Browse the most recent of Aaron's posts</h3>
     </div>
     <div class='blog-card-container'>
     <BlogCard Author='https://picsum.photos/50/50?random' CoverImg="https://picsum.photos/380/230?random" Category="Laravel" Title="From WordPress to Artisan - The Beginning"/>
     <BlogCard Author='https://picsum.photos/50/50?random' CoverImg="https://picsum.photos/380/230?random" Category="WordPress" Title="Self Initiated Project: Powered By WordPress"/>
     <BlogCard Author='https://picsum.photos/50/50?random' CoverImg="https://picsum.photos/380/230?random" Category="CSS" Title="Working With The Future: CSS Grid Layouts"/>
     </div>
      <a href='' class='blog-card__more' title=''>View All Posts <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg></a>
 </div>   

</section>
</template>

<script>
import BlogCard from './BlogCard';

export default {
    name:'BlogBlock',
    components:{
        BlogCard
    }
}
</script>



<style scoped>

.blog-introduction__title{
    text-transform:uppercase;
    color:#5319e1;
    font-size:14px;
    letter-spacing: 1px;
    margin-bottom:10px;
}
.blog-introduction__subtitle{
    font-size:35px;
    font-weight:400;
    max-width:400px;
    
}
.blog-card-container{
    display:flex;
    justify-content: space-around;
    margin:80px 0 40px 0;
}

.blog-card__more{
    padding:15px 25px;
    color:rgb(255,255,255);
    background-color:#5319e1;
    border-radius:8px;
    text-decoration:none;
    margin-right:45px;
    float:right;
    width:180px;
    position:relative;
} 

.blog-card__more svg{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:10px;
    
}
</style>
