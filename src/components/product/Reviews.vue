<script setup>
import TabPlus from '@/assets/images/product/tabs/plus.png';
import CrossPlus from '@/assets/images/product/tabs/cross.png';

import Star from '@/assets/images/star.svg';
import StarActive from '@/assets/images/star_active.svg';

import StarInput from '@/assets/images/product/tabs/star_input.svg';
</script>
<template>
    <div class="product-tab">
        <div class="product-tab__title">
            <img class="product-tab__icon" :src="TabPlus"/>
            <span><b>Reviews</b></span>
        </div>
        <div class="product-tab__content">
            <h2 class="review__title">Customer Reviews</h2>
            <div class="review__list">
                <div class="review__item">
                    <div class="review__comment">As an ocean lifeguard, I've used
                        several types of lower grade binos
                        in the past and eventually just gave up on using
                        binos all together because they would always have issues.
                    </div>
                    <div class="review__meta">
                        <div class="review__item-title">
                            <span>Rating</span>
                            <div class="review__stars">
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="Star"/>
                                <img :src="Star"/>
                            </div>
                        </div>
                        <div class="review__item-wrapper">
                            <div class="review__text">
                                Rides up a bit during workouts but otherwise it's pretty comfy! I like the hood.
                            </div>
                            <div class="review__summary tiny-text">
                                <span class="review__nickname">Review by Gala</span>
                                <span class="review__created_at">3/25/19</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review__item">
                    <div class="review__comment">Rides up during workouts</div>
                    <div class="review__meta">
                        <div class="review__item-title">
                            <span>Rating</span>
                            <div class="review__stars">
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="Star"/>
                                <img :src="Star"/>
                            </div>
                        </div>
                        <div class="review__item-wrapper">
                            <div class="review__text">
                                Rides up a bit during workouts but otherwise it's pretty comfy! I like the hood.
                            </div>
                            <div class="review__summary tiny-text">
                                <span class="review__nickname">Review by Gala</span>
                                <span class="review__created_at">3/25/19</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review__item">
                    <div class="review__comment">Rides up during workouts</div>
                    <div class="review__meta">
                        <div class="review__item-title">
                            <span>Rating</span>
                            <div class="review__stars">
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="StarActive"/>
                                <img :src="Star"/>
                                <img :src="Star"/>
                            </div>
                        </div>
                        <div class="review__item-wrapper">
                            <div class="review__text">
                                Rides up a bit during workouts but otherwise it's pretty comfy! I like the hood.
                            </div>
                            <div class="review__summary tiny-text">
                                <span class="review__nickname">Review by Gala</span>
                                <span class="review__created_at">3/25/19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="review__form" action="#">
                <h4>You're reviewing:</h4>
                <h3 class="review__product-name">Mona Pullover Hoodlie</h3>
                <h4 class="review__form-rating-title">Your Rating  *</h4>
                <div class="review__stars-input">
                    <img :src="StarInput"/>
                    <img :src="StarInput"/>
                    <img :src="StarInput"/>
                    <img :src="StarInput"/>
                    <img :src="StarInput"/>
                </div>
                <div class="review__form-elements">
                    <label>Nickname <span class="required">*</span></label>
                    <input type="text" name="nickname" placeholder="Nickname"/>

                    <label>Summary <span class="required">*</span></label>
                    <input type="text" name="summary" placeholder="Summary"/>

                    <label>Review <span class="required">*</span></label>
                    <textarea rows="3" name="review"></textarea>

                </div>
                <div class="review__form-actions">
                    <div>
                        <button class="green-button" type="submit">Submit Review</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>
