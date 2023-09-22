<script setup>
import OkIcon from '@/assets/images/cart/ok.svg';
import {usePageStore} from "@/store/page";
import {onMounted} from "vue";

const page = usePageStore()
onMounted(() => {
    page.setTitle('Success')
})
</script>
<template>
    <div class="container">
        <div class="success-message">
            <img class="success-message__icon" :src="OkIcon"/>
            <div class="success-message__text">
                Thank you, your order #00000000000 has been processed!
            </div>
        </div>
        <div class="success-info">
            <div class="success-address">
                <div class="success-address__title">
                    Your address:
                </div>
                <div class="success-address__address">
                    <div class="success-address__city">
                        Los Angeles
                    </div>
                    <div class="success-address__street">
                        Street 43, vol. 78, 45
                    </div>
                    <div class="success-address__telephone">
                        +38023534643452345
                    </div>
                    <div class="success-address__email">
                        some@email.com
                    </div>
                </div>
            </div>
            <div class="success-delivery">
                <div class="success-delivery__title">
                    Delivery:
                </div>
                <div class="success-delivery__info">
                    <div class="success-delivery__city">
                        Los Angeles
                    </div>
                    <div class="success-delivery__street">
                        Street 43, vol. 78, 45
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
