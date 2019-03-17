<template>
    <div class="home">
        <div class="right-bar">
            <title-container></title-container>
            <contact-container></contact-container>

        </div>
        <home-content></home-content>

    </div>
</template>

<script>
// @ is an alias to /src
import TitleContainer from "@/components/title-container-eng.vue";
import ContactContainer from "@/components/contact-container-eng.vue";
import HomeContent from "@/components/home-content-eng.vue";

export default {
    name: "home",
    components:{
        TitleContainer,
        ContactContainer,
        HomeContent
    }
};
</script>
<style lang="scss">

</style>

