<template>
  <div class="home">
    <MainBanner/>
    <BlogBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/MainBanner.vue";
import BlogBlock from "@/components/BlogBlock.vue";
export default {
  name: "home",
  components: {
    MainBanner,
    BlogBlock
  }
};
</script>
