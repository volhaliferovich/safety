<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="locale in availableLocales" :key="`locale-${locale.code}`" :value="locale.code">{{ locale.text }}</option>
        </select>
    </div>
</template>

<script>
const availableLocales = [
    { code: "en", text: "English" },
    { code: "fr", text: "French" },
];

export default {
    name: "LocaleChanger",
    setup() {
        return {
            availableLocales,
        }
    }
}
</script>

<style scoped>

</style>