<template>
    <div>
    <h1>hello</h1>

    <Tabs orientation="vertical">
        <Tab name="Tab 1" :selected="true">
            Tab 1 Content
        </Tab>
        <Tab name="Tab 2">
            Tab 2 Content
        </Tab>
    </Tabs>
    </div>
</template>

<script>
    import { Tabs, Tab } from '@crow1796/vue-bulma-tabs'

    export default {
        name: "Profile",
        components: {
            Tabs,
            Tab
        }
    }
</script>

<style scoped>

</style>