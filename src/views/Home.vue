<template>
  <div class="home">
    <div class="tip">
      <span class="tip-info">2021.12.25 法律知识库已更新3篇法律</span>
      <span class="tip-detail">详情</span>
    </div>

    <van-button type="primary">主要按钮</van-button>

    <p class="less-detail">
      因为 Less 和 CSS 非常像，因此很容易学习。而且 Less 仅对 CSS 语言增加了少许方便的扩展，这就是
      Less 如此易学的原因之一。
    </p>

    <img src="@assets/images/test.png" alt="" />
    <img src="@assets/images/test1.png" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { testRequest } from '@/api/test';

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

  private created() {
    this.testRequest();
  }

  private async testRequest() {
    try {
      await testRequest({ name: 'wdx' });
    } catch (error) {
      console.log(error);
    }
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
    margin-bottom: 20px;
    font-size: 26px;
    background: rgba(253, 227, 227, 0.7);

    &-info {
      color: #666;
    }

    &-detail {
      color: #aa1f1f;
    }
  }

  .less-detail {
    color: @yellow;
  }
}
</style>
