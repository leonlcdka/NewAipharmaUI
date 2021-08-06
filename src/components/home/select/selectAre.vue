<template>
    <div class="mx-10 rounded-md bg-backgroundMainSearch flex justify-center">
        <searchDropdownListTemplate class="my-4"></searchDropdownListTemplate>
        <input
            class="border-2 w-3/5 my-4"
            type="text"
            placeholder="Q&A、おくすり事例、DI 辞書、掲示板、その他の検索エンジンの一括検索ができます"
        />
        <button
            class="
                bg-searchBunnon
                text-white
                rounded-tr-lg rounded-br-lg
                my-4
                w-20
            "
        >
            <div class="flex justify-center">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </div>
        </button>
    </div>
</template>

<script>
import searchDropdownListTemplate from './searchDropdownList.vue'
export default {
  components: { searchDropdownListTemplate },
}
</script>

<style>
</style>
