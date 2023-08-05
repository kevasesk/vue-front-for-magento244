<script setup>
import FacebookIcon from '@/assets/images/socials/fb.svg';
import TwitterIcon from '@/assets/images/socials/twitter.svg';
import YoutubeIcon from '@/assets/images/socials/youtube.svg';
import GoogleIcon from '@/assets/images/socials/google.svg';

</script>
<template>
    <div class="homepage__social-links">
        <div class="homepage__social-link"><img class="icon" :src="FacebookIcon"/></div>
        <div class="homepage__social-link"><img class="icon" :src="TwitterIcon"/></div>
        <div class="homepage__social-link"><img class="icon" :src="YoutubeIcon"/></div>
        <div class="homepage__social-link"><img class="icon" :src="GoogleIcon"/></div>
    </div>
</template>
