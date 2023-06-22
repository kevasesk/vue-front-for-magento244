<script setup>
import FacebookIcon from '@/assets/images/socials/fb.svg';
import TwitterIcon from '@/assets/images/socials/twitter.svg';
import YoutubeIcon from '@/assets/images/socials/youtube.svg';
import GoogleIcon from '@/assets/images/socials/google.svg';
</script>

<template>
    <div class="share-container">
        <span>Share</span>
        <a href="#"><img :src="FacebookIcon"/></a>
        <a href="#"><img :src="TwitterIcon"/></a>
        <a href="#"><img :src="YoutubeIcon"/></a>
        <a href="#"><img :src="GoogleIcon"/></a>
    </div>
</template>
