<template>
  <div>
    <h1>aspida動作確認</h1>
    <p>{{ name }}</p>
    <nuxt-link :to="$pagesPath.hoge.$url()">Pathpida動作確認</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import axios from 'axios'
import { apiClient } from '~/lib/apiClient'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      name: 'APIリクエスト中...'
    }
  },
  async mounted() {
    // Pt1
    // const response = await axios.get('https://swapi.dev/api/people/1')
    // this.name = response.data.name

    // Pt2
    // 他で同じAPIを使っているときに保守性が下がる
    // リポジトリパターンを使おうみたいになるけど、バンドルサイズ肥大化、DIできない
    // const response = await axios.get<{ name: string }>('https://swapi.dev/api/people/1')
    // this.name = response.data.name

    // Pt3
    const response = await apiClient.people._id(1).$get()
    this.name = response.name
  }
})
</script>
