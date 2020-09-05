<template>
<div class="h-screen flex w-full bg-img">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
        <vx-card>
            <div slot="no-body" class="full-page-bg-color">
                <div class="vx-row">
                    <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                        <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto" />
                    </div>

                    <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                        <div class="p-8">
                            <div class="vx-card__title">
                                <h4 class="mb-4">Create Account</h4>
                                <p>Fill the below form to create a new account.</p>
                            </div>
                            <div class="clearfix">
                                <vs-input label-placeholder="Name" name="name" placeholder="Name" v-model="name" class="w-full" />
                                <vs-input name="email" type="email" label-placeholder="Email" placeholder="Email" v-model="email" class="w-full mt-6" />
                                <vs-input ref="password" type="password" name="password" label-placeholder="Password" placeholder="Password" v-model="password" class="w-full mt-6" />
                                <vs-input type="password" name="confirm_password" label-placeholder="Confirm Password" placeholder="Confirm Password" v-model="confirm_password" class="w-full mt-6" />

                                <vs-button type="border" to="/pages/login" class="mt-6">Login</vs-button>
                                <vs-button class="float-right mt-6" @click="registerUser" :disabled="!validateForm">Register</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vx-card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            isTermsConditionAccepted: true
        };
    },
    computed: {
        validateForm() {
            return false;
        }
    },
    methods: {
        registerUser() {
            alert("regsitered user");
        }
    }
};
</script>
