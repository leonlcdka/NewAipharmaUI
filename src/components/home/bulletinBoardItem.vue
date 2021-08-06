<template>
    <div class="rounded-md border-2 border-blue-300 my-4">
        <div class="bg-cardTitle text-white flex justify-between p-2">
            掲示板
            <img src="../../assets/image/iconmonstr-right.svg" alt="" />
            <!-- <svg
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
                    d="M9 5l7 7-7 7"
                ></path>
            </svg> -->
        </div>
        <div class="bg-white p-2">
            <div v-for="item in sites" :key="item">
                <div class="flex justify-between p-1">
                    <div class="p-1 flex justify-start">
                        <div>
                            <div v-if="item.group == 1">
                                <a
                                    class="
                                        bg-cardGroup1
                                        text-center text-xs text-white
                                        px-2
                                    "
                                    >組織内</a
                                >
                            </div>
                            <div v-if="item.group == 2">
                                <a
                                    class="
                                        bg-cardGroup2
                                        w-14
                                        text-center text-xs text-white
                                        px-2
                                    "
                                    >全　体</a
                                >
                            </div>
                            <div v-if="item.group == 3">
                                <a
                                    class="
                                        bg-cardGroup3
                                        w-14
                                        text-center text-xs text-white
                                        px-2
                                    "
                                    >グループ</a
                                >
                            </div>
                            <div v-if="item.group == 4">
                                <a
                                    class="
                                        bg-cardGroup2
                                        w-14
                                        text-center text-xs text-white
                                        px-2
                                    "
                                    >学　会</a
                                >
                            </div>
                        </div>

                        <div>
                            <div class="ml-3" v-if="item.looked == 0">
                                <a
                                    class="
                                        ring-1 ring-yellow-600
                                        bg-cardLooked
                                        text-yellow-600 text-xs
                                    "
                                    >未</a
                                >
                            </div>
                            <div class="ml-3" v-else>
                                <a
                                    class="
                                        ring-1 ring-yellow-600
                                        bg-yellow-100
                                        text-yellow-600 text-xs
                                        invisible
                                    "
                                    >已</a
                                >
                            </div>
                        </div>

                        <div class="ml-3">
                            <div v-if="item.looked == 0">
                                <p class="underline font-medium">
                                    {{ item.title }}
                                </p>
                            </div>
                            <div v-else>
                                <p class="underline font-medium text-gray-500">
                                    {{ item.title }}
                                </p>
                            </div>
                        </div>
                        <div class="" v-if="item.browseRequired == 1">
                            <a
                                class="
                                    bg-cardBrowseRequired
                                    w-14
                                    text-center text-xs text-white
                                    px-2
                                "
                                >要閲覧</a
                            >
                        </div>
                    </div>
                    <div class="p-1">
                        <div class="grid grid-cols-2 gap-1">
                            <div v-if="item.notificationType == 1">
                                <div
                                    class="
                                        ring-1 ring-gray-400
                                        text-xs text-center text-gray-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    告　知
                                </div>
                            </div>
                            <div v-if="item.notificationType == 2">
                                <div
                                    class="
                                        ring-1 ring-gray-400
                                        text-xs text-center text-gray-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    イベント
                                </div>
                            </div>
                            <div v-if="item.notificationType == 3">
                                <div
                                    class="
                                        ring-1 ring-gray-400
                                        text-xs text-center text-gray-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    その他
                                </div>
                            </div>
                            <div v-if="item.notificationType == 4">
                                <div
                                    class="
                                        ring-1 ring-gray-400
                                        text-xs text-center text-gray-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    アンケート
                                </div>
                            </div>
                            <div v-if="item.notificationType == 5">
                                <div
                                    class="
                                        ring-1 ring-gray-400
                                        text-xs text-center text-gray-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    質　問
                                </div>
                            </div>
                            <div class="mx-2">
                                <div
                                    class="
                                        ring-1 ring-blue-400
                                        bg-cardViewCount
                                        text-xs text-center text-blue-400
                                        font-medium
                                        w-20
                                    "
                                >
                                    {{ item.viewCount }} view
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      sites: [{ id: 0, group: '4', looked: '0', title: '2021.05.25　○○の簡易懸濁について◯◯◯◯◯◯◯◯◯◯…', browseRequired: '0', notificationType: '2', viewCount: '12345' },
      { id: 1, group: '3', looked: '0', title: '2021.05.23　○○と△△の副作用は◯◯◯◯◯◯◯◯◯◯◯…', browseRequired: '0', notificationType: '3', viewCount: '12345' },
      { id: 2, group: '1', looked: '0', title: '2021.05.23 ○○の提出締切について◯◯◯◯◯◯◯◯…', browseRequired: '0', notificationType: '1', viewCount: '54321' },
      { id: 3, group: '3', looked: '0', title: '2021.05.23　AI-PHARMA アップデート情報◯◯◯◯◯◯◯…', browseRequired: '0', notificationType: '4', viewCount: '12345' },
      { id: 4, group: '1', looked: '1', title: '2021.05.20　○○の簡易懸濁について◯◯◯◯◯◯◯◯◯◯…', browseRequired: '0', notificationType: '5', viewCount: '12345' }
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
