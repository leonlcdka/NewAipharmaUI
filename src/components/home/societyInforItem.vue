<template>
    <div class="my-4">
        <div
            class="
                border-2 border-gray-400 border-b-0
                rounded-t-lg
                flex
                items-baseline
                p-2
            "
        >
            学会情報
            <p class="p-1 underline text-xs text-blue-300">予約はこちら▶</p>
            <!-- <link class="mx-5 underline" rel="stylesheet" href="" />ヘルプ -->
        </div>
        <div class="border-2 border-gray-400 rounded-b-lg p-2">
            <div
                class="p-1 flex justify-start font-medium"
                v-for="item in sites"
                :key="item"
            >
                <div class="w-28">
                    {{ item.date }}
                </div>
                <div class="w-full mx-1">
                    <div class="">{{ item.title }}</div>
                    <p class="underline">{{ item.urlTitle }}</p>
                    <!-- <div class="bg-red-700">
                        {{ item.urlTitle }}
                    </div> -->
                </div>
            </div>
            <!-- <div class="bg-green-400">
                <div class="grid grid-rows-2 grid-flow-col gap-4">
                    <div class="row-span-2 bg-yellow-400">1</div>
                    <div class="col-span-2 bg-yellow-500">2</div>
                    <div class="col-span-2 bg-yellow-600">3</div>
                </div>
            </div> -->
            <!-- <div class="bg-yellow-600">轮播效果(Carousel)</div> -->
            <scarouselTemplate></scarouselTemplate>
        </div>
    </div>
</template>

<script>
import scarouselTemplate from './carousel.vue'
export default {
  components: { scarouselTemplate },
  props: {},
  data() {
    return {
      sites: [{
        id: 0, date: '2021.04.23 - 2026.04.23', title: '一般社団法人妊娠と薬情報研究会', urlTitle: 'e- ラーニング BASIC'
      },
      { id: 1, date: '2021.07.30', title: '福井県病院薬剤師会', urlTitle: '血液腫瘍における感染症対策について考える ～福井県病院薬剤師会共催～' },
      { id: 2, date: '2021.10.29 - 2021.10.30', title: '日本製薬医学会', urlTitle: '【ハイブリット開催】第 12 回日本製薬医学会年次大会' },
      ]
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
