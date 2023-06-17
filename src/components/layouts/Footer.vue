<script setup>
import Logo from '@/assets/images/logo.svg';

import FacebookIcon from '@/assets/images/socials/fb.svg';
import TwitterIcon from '@/assets/images/socials/twitter.svg';
import YoutubeIcon from '@/assets/images/socials/youtube.svg';
import GoogleIcon from '@/assets/images/socials/google.svg';

</script>
<template>
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="help-links">
                    <div class="link"><a href="#" class="link">Policy</a></div>
                    <div class="link"><a href="#" class="link">Term and Conditions</a></div>
                    <div class="link"><a href="#" class="link">Help</a></div>
                </div>
                <img :src="Logo" class="logo" alt="logo"/>
                <div class="social-links">
                    <div class="link">Follow Us on Social</div>
                    <div class="link"><img class="icon" :src="FacebookIcon"/></div>
                    <div class="link"><img class="icon" :src="TwitterIcon"/></div>
                    <div class="link"><img class="icon" :src="YoutubeIcon"/></div>
                    <div class="link"><img class="icon" :src="GoogleIcon"/></div>
                </div>
            </div>
            <div class="copyrights small-text">
                Copyring © Viachas Kul. All right reserved.
            </div>
        </div>
    </footer>
</template>
