import VueRouter from 'vue-router';
import store from '@/common/store';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/Home.vue'),
    },
    {
        path: '/restaurant/new',
        component: () => import('@/components/pages/NewRestaurant.vue'),
        // Note the addition of this meta attribute:
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/restaurants',
        component: () => import('@/components/pages/Restaurants.vue'),
    },
    {
        path: '/places',
        component: () => import('@/components/pages/Places.vue'),
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/denied',
        component: () => import('@/components/pages/AccessDenied.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.user) {
        // If they’re trying to access a requiresAuth route and they're not logged in, they get sent to "Access Denied" page
        next('/denied');
    }
    else {
        // In all other circumstances, send them to the route they requested
        next();
    }
});

export default router;