<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorites</strong>
                <p v-if="favorites && favorites.length == 0">
                    No favorites yet.
                </p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">
                    {{ favorite.name }}
                </li>
            </div>

            <button @click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label>Email: <input type="text" v-model="data.email" /></label>
            </div>
            <div>
                <label
                    >Password: <input type="password" v-model="data.password"
                /></label>
            </div>

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>

            <h2>Register</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label>Email: <input type="text" v-model="data.email" /></label>
            </div>
            <div>
                <label
                    >Password: <input type="password" v-model="data.password"
                /></label>
            </div>
            <div>
                <label
                    >Name: <input type="name" v-model="data.name"
                /></label>
            </div>

            <button @click="register">Register</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf',
            },
            errors: null,
            favorites: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        register() {
            axios.post('register', this.data).then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
        loadFavorites() {
            if (this.user) {
                axios.get('favorite').then(response => {
                    this.favorites = response.data.favorite.map(favorite => {
                        return this.$store.getters.getRestaurantById(
                            favorite.product_id
                        );
                    });
                });
            }
        },
    },
    watch: {
        // When user changes, update favorites
        user() {
            this.loadFavorites();
        }
    },
    mounted() {
        this.loadFavorites();
    }
};
</script>