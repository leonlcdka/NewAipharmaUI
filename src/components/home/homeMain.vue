<template>
    <div class="flex justify-center">
        <img
            sty
            class="h-48"
            src="../../assets/image/AI-PHARMA_logo.svg"
            alt=""
        />
    </div>
    <!-- 選択 -->
    <selectTemplate></selectTemplate>
    <div class="mx-10 grid grid-cols-5">
        <div class="col-span-4 my-4">
            <!-- お知らせ -->
            <searchTemplate></searchTemplate>
            <!-- 掲示板 -->
            <bulletinBoardTemplate></bulletinBoardTemplate>
            <!-- 学会情報 -->
            <societyInfoTemplate></societyInfoTemplate>
            <!-- PMDA -->
            <pharmaceuticalsTemplate></pharmaceuticalsTemplate>
            <div class="grid grid-cols-2 gap-4 my-4">
                <!-- 医薬品更新情報 -->
                <pharmaceuticalsInfoTemplate></pharmaceuticalsInfoTemplate>
                <!-- Topics -->
                <topicsTemplate></topicsTemplate>
            </div>
            <!-- その他の情報 -->
            <otherInfoTemplate></otherInfoTemplate>
        </div>
        <div class="my-4 ml-6">
            <!-- ユーザーの情報 -->
            <dataManagementTemplate></dataManagementTemplate>
        </div>
    </div>
    <p class="text-center">Powered by KIMURA information technology</p>
</template>

<script>
import searchTemplate from './personItem.vue'
import bulletinBoardTemplate from './bulletinBoardItem.vue'
import selectTemplate from './select/selectAre.vue'
import societyInfoTemplate from './societyInforItem.vue'
import pharmaceuticalsTemplate from './pharmaceuticalsItem.vue'
import pharmaceuticalsInfoTemplate from './pharmaceuticalsInfoItem.vue'
import topicsTemplate from './topicsItem.vue'
import otherInfoTemplate from './otherinfoItem.vue'
import dataManagementTemplate from './dataManagementItem.vue'

export default {
  components: {
    searchTemplate, bulletinBoardTemplate, selectTemplate,
    societyInfoTemplate, pharmaceuticalsTemplate,
    pharmaceuticalsInfoTemplate, topicsTemplate,
    otherInfoTemplate, dataManagementTemplate
  },
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

