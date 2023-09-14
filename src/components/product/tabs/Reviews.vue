<script setup>
import {useProductStore} from "@/store/product";
import {ref} from 'vue';

import Star from '@/assets/images/star.svg';
import StarActive from '@/assets/images/star_active.svg';

import StarInput from '@/assets/images/star.svg';
import StarActiveInput from '@/assets/images/star_active.svg';

const product = useProductStore()
const starImages = ref([
    StarInput,
    StarInput,
    StarInput,
    StarInput,
    StarInput
]);
function starRatingHandler(event){
    const clickedKey = parseInt(event.target.getAttribute('data-key'));
    product.reviewForm.rating = btoa(clickedKey + 1);

    const images = [...starImages.value];
    for (let i = 0; i <= clickedKey; i++) {
        images[i] = StarActiveInput;
    }
    for (let i = clickedKey + 1; i < starImages.value.length; i++) {
        images[i] = StarInput;
    }
    starImages.value = images;
}
</script>
<template>
    <h2 class="review__title" id="review-list">Customer Reviews</h2>
    <div class="review__list">
        <div class="review__item" v-for="review in product.currentProduct.reviews.items">
            <div class="review__comment">{{review.summary}}</div>
            <div class="review__meta">
                <div class="review__item-title">
                    <span>Rating</span>
                    <div class="review__stars">
                        <img :src="review.average_rating >= 20 ? StarActive : Star"/>
                        <img :src="review.average_rating >= 40 ? StarActive : Star"/>
                        <img :src="review.average_rating >= 60 ? StarActive : Star"/>
                        <img :src="review.average_rating >= 80 ? StarActive : Star"/>
                        <img :src="review.average_rating >= 100 ? StarActive : Star"/>
                    </div>
                </div>
                <div class="review__item-wrapper">
                    <div class="review__text">
                        {{review.text}}
                    </div>
                    <div class="review__summary tiny-text">
                        <span class="review__nickname">Review by {{review.nickname}}&nbsp</span>
                        <span class="review__created_at">{{product.formatDate(review.created_at)}}</span><!--TODO format date-->

                    </div>
                </div>
            </div>
        </div>
    </div>
    <form class="review__form" @submit="product.addReview" id="review-form">
        <h4>You're reviewing:</h4>
        <h3 class="review__product-name">Mona Pullover Hoodlie</h3>
        <h4 class="review__form-rating-title">Your Rating  *</h4>
        <div class="review__stars-input">
            <img
                :src="starImages[star]"
                v-for="star in [0,1,2,3,4]"
                :key="star"
                :data-key="star"
                @click="starRatingHandler($event)"
            />
        </div>
        <div class="review__form-elements">
            <label>Nickname <span class="required">*</span></label>
            <input type="text" placeholder="Nickname" v-model="product.reviewForm.nickname"/>

            <label>Summary <span class="required">*</span></label>
            <input type="text" placeholder="Summary" v-model="product.reviewForm.summary"/>

            <label>Review <span class="required">*</span></label>
            <textarea rows="3" v-model="product.reviewForm.review" ></textarea>

        </div>
        <div class="review__form-actions">
            <div>
                <button class="green-button" type="submit">Submit Review</button>
            </div>
        </div>

    </form>
</template>
