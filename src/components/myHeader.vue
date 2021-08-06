<template>
    <div>
        <header class="flex justify-between max-w-full h-10">
            <headerDropdown></headerDropdown>
            <p class="mx-5 underline text-sm">ヘルプ</p>
            <!-- <link class="mx-5 underline" rel="stylesheet" href="" />ヘルプ -->
        </header>
    </div>
</template>

<script>
import headerDropdown from './home/dropdown.vue'
export default {
  components: { headerDropdown },
  props: {},
  data() {
    return {

    };
  },
  couputed: {},
  watch: {},
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
</style>
