<template>
  <div id="app">
    <h1 class="title">
    &nbsp;GPA计算
    <div class="method-switcher">
      <el-dropdown @command="switchMethod" trigger="click">
        <el-button type="primary">
          {{ dropdownText }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/standMethod">
            <el-dropdown-item command="标准四分制">标准四分制</el-dropdown-item>
          </router-link>
          <router-link to="/cadaMethod">
            <el-dropdown-item command="财大四分制">财大四分制</el-dropdown-item>
          </router-link>
          <router-link to="/rankMethod">
            <el-dropdown-item command="等级制" divided>等级制</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <help-dialog></help-dialog>
    </h1>
    <transition name="fade">
      <router-view style="position: absolute;width: 100%"></router-view>
    </transition>
  </div>
</template>



<script type="text/ecmascript-6">
import helpDialog from 'components/helpDialog/helpDialog'
export default {
  components: {
    'help-dialog': helpDialog
  },
  data() {
    return {
      dropdownText: '标准四分制'
    }
  },
  methods: {
    switchMethod(key) {
      if (this.dropdownText === key) {
        this.$message({
          message: `当前算法已为 ${key}`,
          type: 'warning',
          duration: 1000,
          offset: 100
        })
        return
      }
      this.$message({
        message: `已将算法切换为 ${key}`,
        type: 'success',
        duration: 1000,
        offset: 100
      })
      this.dropdownText = key
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app
  .title
    border-1px(rgba(7, 17, 27, 0.1))
    .tag
      position absolute
      bottom 5px
      margin-left 10px
      font-size 12px
    .method-switcher
      position absolute
      right 30px
      bottom 5px
.fade-enter
  opacity 0
  transform translateX(-100%)
.fade-enter-active, .fade-leave-active 
  transition all 0.65s
.fade-leave-active 
  opacity 0
  transform translateX(100%)
</style>
