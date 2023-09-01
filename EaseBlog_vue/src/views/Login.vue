<template>
  <div class="login-panel">
    <n-card title="EaseBlog后台登陆">
      <template #header-extra> #header-extra </template>
      <n-form :rules="rules" :model="admin">
        <n-form-item path="account" label="账号">
          <n-input v-model:value="admin.account" placeholder="输入账号" />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="admin.account"
            type="password"
            placeholder="输入账号"
          />
        </n-form-item>
      </n-form>
      <template #footer> #footer </template>
      <template #action>
        <n-button strong secondary round type="primary"> Primary </n-button>
      </template>
    </n-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-panel {
  width: 500px;
  margin: 0 auto;
  margin-top: 130px;
}
</style>
