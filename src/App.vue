<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',

        created() {
            this.api();
        },

        methods: {
            /**
             * Test API Call
             */
            api() {
                return this.$services.login().then((response) => {
                    console.log('response', response);
                }).catch((error) => {
                    this.handleError(error);
                });
            },
        },
    };
</script>
