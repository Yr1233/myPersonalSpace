<template>
<div class="test-container">
    <Menu />
</div>
</template>

<script>

import Menu from "@/components/SiteAside/Menu";

export default {
    components: {
        Menu
    }
}
</script>

<style>
.test-container{
    width: 200px;
    height: 300px;
    background: #000;
    padding-top: 100px;
}
</style>