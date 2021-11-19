<template>
    <router-link to="/vue/reports" class="link" :class="{active: isActive}">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-gray-700 block p-3">
            <i class="fas fa-align-right fill-current transform hover:translate-x-2 transition-transform ease-in duration-200"></i>
        </a>
        <slot/>
    </router-link>
</template>
<script>
export default {
    name: 'Reports',
};
</script>