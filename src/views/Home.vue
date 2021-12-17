<template>
    <div class="home">
        {{ $t('home.welcome') }}
    </div>
</template>

<script>
    export default {
        name: 'Home',

        /**
         * 
         */
        created() {
            this.fetch();
        },

        methods: {
            /**
             * 
             */
            fetch() {
                return this.$services.data.getTodo().then((response) => {
                    console.log('res', response);
                });
            },
        },
    };
</script>
