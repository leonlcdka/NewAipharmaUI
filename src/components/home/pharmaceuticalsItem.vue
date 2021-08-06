<template>
    <div class="rounded-md border-2 border-gray-400 my-4">
        <div class="bg-cardTitlePmad text-white flex justify-between p-1">
            PMDA
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
            </svg>
        </div>
        <div class="bg-white p-2 font-medium">
            <div
                class="p-2 flex justify-start"
                v-for="item in sites"
                :key="item"
            >
                <div class="mx-1">
                    <div>
                        <div v-if="item.type == 1">
                            <a class="bg-cardTypePmad1 text-center text-xs px-2"
                                >完 全</a
                            >
                        </div>
                        <div v-if="item.type == 2">
                            <a class="bg-cardTypePmad2 text-center text-xs px-2"
                                >採 用</a
                            >
                        </div>
                        <div v-if="item.type == 3">
                            <a class="bg-cardTypePmad3 text-center text-xs px-2"
                                >審 査</a
                            >
                        </div>
                    </div>
                </div>
                <div class="mx-1">
                    <p class="underline">{{ item.date }}</p>
                </div>
                <div class="mx-1">
                    <div>
                        <div v-if="item.states == 1">
                            <a
                                class="
                                    border-4 border-red-700
                                    text-center text-xs
                                    px-2
                                "
                                >New</a
                            >
                        </div>
                        <div v-if="item.states == 2">
                            <a
                                class="
                                    border-4 border-yellow-500
                                    text-center text-xs
                                    px-2
                                "
                                >update</a
                            >
                        </div>
                    </div>
                </div>
                <div class="mx-1">
                    <p class="underline">{{ item.title }}</p>
                </div>
            </div>
            <!-- <div class="bg-green-500">1213131</div>
            <div class="bg-green-400">1213131</div>
            <div class="bg-green-300">1213131</div>
            <div class="bg-green-200">1213131</div> -->
        </div>
    </div>
</template>

<script>
export default {

  components: {},
  props: {},
  data() {
    return {
      sites: [{ id: 0, type: '1', date: '2021.07.14', states: '1', title: '「「医薬品等の注意事項等情報の提供について」に関する質疑応答…', },
      { id: 1, type: '2', date: '2021.07.14', states: '1', title: '日事務補助員（医薬品、医療機器等の審査・届出等に関する事務…', },
      { id: 2, type: '3', date: '2021.07.14', states: '2', title: '日 IRB 登録情報を更新しました', },
      { id: 3, type: '3', date: '2021.07.14', states: '2', title: '日令和 2 年度　医療機器の承認品目を掲載しました', },
      { id: 4, type: '1', date: '2021.07.13', states: '1', title: '医薬品・医療機器等安全性情報 No.384（厚生労働省発行）を掲…', }
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

<style>
</style>
