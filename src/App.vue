<script setup lang="ts">
import { notification } from "ant-design-vue";
import { reactive } from "vue";
import { ref } from "vue";
import { SmileOutlined } from "@ant-design/icons-vue";
import type { Rule } from "ant-design-vue/es/form";
import { h } from "vue";

const collapsed = ref(false);

const selectedKeys = ref(["1"]);
const selectedMenuKeys = ref(["1"]);

const onClickHandler = () => {
  notification.info({
    message: "Hope you enjoy it!",
    icon: h(SmileOutlined, {
      class: "text-green",
    }),
  });
};

const formRef = ref();

const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "change",
    },
    { min: 3, max: 12, message: "Length should be 3 to 12", trigger: "blur" },
  ],
};

const formState = reactive({
  name: "",
  gender: "1",
  birthday: undefined,
});
const resetForm = () => {
  formRef.value.resetFields();
};

const loading = ref(false);
const submit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const labelCol = { style: { width: "100px" } };
const wrapperCol = { span: 14 };
</script>

<template>
  <a-layout un-h-full>
    <a-layout-sider v-model:collapsed="collapsed" collapsible theme="light">
      <div un-p-3>
        <figure un-flex un-gap-x-4 un-items-center>
          <img
            src="https://www.antdv.com/assets/logo.1ef800a8.svg"
            alt="antd logo"
            width="40"
          />
          <figcaption un-text-default-color un-fw-bold v-if="!collapsed">
            Antd template starter
          </figcaption>
        </figure>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <home-outlined />
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="2">
          <notification-outlined />
          <span>Messages</span>
        </a-menu-item>
        <a-menu-item key="3">
          <setting-outlined />
          <span>Settings</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="!bg-white !p-0 h-full">
        <a-menu v-model:selectedKeys="selectedMenuKeys" mode="horizontal">
          <a-menu-item key="1">
            <span>Navigation 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span>Navigation 2</span>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <section un-h-full un-overflow-y-auto>
          <div un-text-center>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
            <a href="https://next.antdv.com/" target="_blank">
              <img
                src="https://www.antdv.com/assets/logo.1ef800a8.svg"
                class="logo antd"
                alt="antd logo"
              />
            </a>
            <a href="https://unocss.dev/" target="_blank">
              <img
                src="https://unocss.dev/logo.svg"
                class="logo unocss"
                alt="unocss logo"
              />
            </a>
            <h1 un-text-10>Vite + Vue + Antd4 + UnoCSS</h1>
            <p>
              <a-button type="primary" @click="onClickHandler"
                >Click me!</a-button
              >
            </p>
          </div>

          <a-form
            ref="formRef"
            un-w-100
            un-m-auto
            un-py-10
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            :model="formState"
            :rules="rules"
          >
            <a-form-item label="name" name="name">
              <a-input
                placeholder="enter something..."
                v-model:value="formState.name"
              />
            </a-form-item>
            <a-form-item label="gender" name="gender">
              <a-radio-group v-model:value="formState.gender">
                <a-radio value="1">Male</a-radio>
                <a-radio value="2">Female</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="birthday" name="birthday">
              <a-date-picker
                class="w-full"
                v-model:value="formState.birthday"
              ></a-date-picker>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-space :size="20">
                <a-button type="primary" @click="submit" :loading="loading">
                  Submit
                </a-button>
                <a-button
                  style="margin-left: 10px"
                  @click="resetForm"
                  :disabled="loading"
                  >Reset</a-button
                >
              </a-space>
            </a-form-item>
          </a-form>
        </section>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
section {
  color: #213547;
}
.logo {
  height: 12rem;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.unocss:hover {
  filter: drop-shadow(0 0 2em rgb(204, 204, 204));
}

.antd.antd:hover {
  filter: drop-shadow(0 0 2em rgb(27, 162, 255));
}
</style>
