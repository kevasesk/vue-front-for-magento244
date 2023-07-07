<script setup>
import { useNotyStore } from "@/store/noty";

const noty = useNotyStore()
</script>
<template>
    <div class="notification__container small-text" v-show="noty.visible">
        <div class="notification__container-text" :class="noty.type">
            {{noty.message}}
        </div>
    </div>
</template>
