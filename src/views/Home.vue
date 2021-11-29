<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="getPersonName" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      title="Welcome to Your Vue.js + TypeScript AppWelcome to Your Vue.js + TypeScript AppWelcome to Your Vue.js + TypeScript App"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src
interface Person {
  name: string;
  age?: number;
}
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private person: Person | null = null;
  private student: Person = { name: 'wdx' };

  private getPersonName() {
    console.log(this.person?.name || '12313');
  }
}
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  font-size: 12px;
  color: #000;
}
</style>
