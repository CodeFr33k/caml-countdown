<template>
  <div>
    <div>{{store.nowAsString}}</div>
    <div>{{store.futureAsString}}</div>
    <div>{{store.remaining}}</div>
  </div>
</template>

<script lang="ts">
import { Observer } from 'mobx-vue';
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Observer
@Component({
  components: {
  },
})
export default class App extends Vue {
    private store = store;
}
</script>

<style lang="sass">
</style>
