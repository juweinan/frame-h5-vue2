<template>
  <div class="home">
    <div class="tip">
      <span class="tip-info">2021.12.25 法律知识库已更新3篇法律</span>
      <span class="tip-detail">详情</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Person {
  name: string;
  age?: number;
}
@Component({
  components: {},
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
  height: 100vh;
  background: #f5f5f5;

  .tip {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 750px;
    height: 57px;
    padding: 0 30px;
    font-size: 26px;
    background: rgba(253, 227, 227, 0.7);

    &-info {
      color: #666;
    }

    &-detail {
      color: #aa1f1f;
    }
  }
}
</style>
