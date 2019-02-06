<template>
  <div id="app">
    <div class='container'>
      <header>
      <a class='logo' href='' title=''>McGuire.</a>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact" class='contact' >Contact</router-link>
    </nav>
    </header>
    </div>
    <router-view />
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
}
body{
  background-color:#F5F7FA;
}
p,li,ul,span,label,textarea,input,table,a{
  font-size:16px;
  line-height:27px;
}
h1,h2,h3,h4,h5,h6{
  font-family:'Roboto-Regular',Helvetica,Arial,sans-serif;
}
@font-face {
  font-family: Roboto-Regular;
  src: url(./assets/fonts/Roboto-Regular.ttf);
}
@font-face {
  font-family: Roboto-Bold;
  src: url(./assets/fonts/Roboto-Bold.ttf);
}
@font-face {
  font-family: Roboto-Light;
  src: url(./assets/fonts/Roboto-Light.ttf);
}
@font-face {
  font-family: Karla-Regular;
  src: url(./assets/fonts/Karla-Regular.ttf);
}
@font-face {
  font-family: Karla-Italic;
  src: url(./assets/fonts/Karla-Italic.ttf);
}
@font-face {
  font-family: Karla-Bold;
  src: url(./assets/fonts/Karla-Bold.ttf);
}
#app {
  font-family: "Karla-Regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  max-width:1400px;
  width:100%;
  margin:0 auto;
  position:relative;
}
.container-content{
  max-width:870px;
}
#nav{
  width:100%;

}
#nav a{
  text-decoration: none;
  color:rgba(255,255,255,.7);
  margin:0 20px;
}
#nav a:hover{
  color:rgba(255,255,255,.97);
  
}
#nav .contact{
  padding: 11px 20px;
  font-family:"Karla-Bold";
  background-color:#5319e1;
  border-radius:4px;
  color:rgb(255,255,255);
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  transition:.3s ease;
}
#nav .contact:hover{
  background-color:#4013b0;
  transition:.3s ease;
}

#nav .router-link-exact-active{
  color:rgb(255,255,255);
  padding-bottom:5px;
  border-bottom:2px solid rgb(255,255,255);
}
header{
  display:flex;
  align-items:center;
  justify-content: center;
  position:absolute;
  padding:40px 0;
  z-index: 2;
  width:100%;

}
.logo{
  display:inline-block;
  text-decoration: none;
  color:rgb(255,255,255);
  font-size:30px;
  margin-right:120px;
}

</style>
