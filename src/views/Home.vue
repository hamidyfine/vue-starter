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
                this.$services.wp.postsList().then((response) => {
                    console.log('res', response);
                });

                this.$wc.get('products').then((response) => {
                    console.log('res', response);
                });
            },
        },
    };
</script>
