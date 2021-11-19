<template>
    <router-link to="/vue/quiz" class="link" :class="{active: isActive}">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-gray-700 block p-3">
            <i class="fas fa-question-circle fill-current transform hover:translate-x-2 transition-transform ease-in duration-200"></i>
        </a>
        <slot/>
    </router-link>
</template>
<script>
export default {
    name: 'Quiz',
};
</script>