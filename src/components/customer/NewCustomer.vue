<template>
    <div class="customer-registration-container">
        <form action="#">
            <h3>Personal Information</h3>
            <div class="form-elements">
                <label>First name <span class="required">*</span></label>
                <input type="text" name="firstname" placeholder="Some firstname"/>

                <label>Last name <span class="required">*</span></label>
                <input type="text" name="lastname" placeholder="Some lastname"/>
            </div>
            <div class="sign-up">
                <input type="checkbox" name="subscribe"/> <span>Sign Up for Newsletter</span>
            </div>
            <h3>Email & Password</h3>
            <div class="form-elements">
                <label>Email <span class="required">*</span></label>
                <input type="email" name="email" placeholder="Some email"/>

                <label>Password <span class="required">*</span></label>
                <input type="password" name="password" placeholder="Some password"/>

                <label>Confirm Password <span class="required">*</span></label>
                <input type="password" name="confirm_password" placeholder="Some password"/>

            </div>
            <div class="form-actions">
                <div><button class="green-button">Create an Account</button></div>
                <div class="back"><a href="#">Back</a></div>
            </div>
        </form>
    </div>
</template>
