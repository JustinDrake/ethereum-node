<template>
  <div class="setting-items_parent" :style="itemStyle()">
    <div class="setting-items_title">
      <span>{{ title }}</span>
    </div>

    <language-setting
      v-if="isLanguage"
      @language-box="langAction"
      :flag="savedFlag"
      :lang="savedLang"
      :label="savedLabel"
    ></language-setting>

    <router-link
      class="setting-items_btn"
      :style="color()"
      to="/credit"
      v-else-if="link"
      >{{ linkValue }}</router-link
    >
    <div
      iv
      class="setting-items_btn"
      v-else
      @click="customizeSetting"
      :style="color()"
    >
      <span>{{ btnValue }}</span>
    </div>
  </div>
</template>
<script>
import LanguageSetting from "./LanguageSetting.vue";
export default {
  components: { LanguageSetting },
  props: {
    title: {
      type: String,
      required: true,
    },
    btnValue: {
      type: String,
      required: false,
    },
    isColor: {
      type: String,
      required: false,
    },
    isLang: {
      type: Boolean,
      required: false,
      default: false,
    },
    itemType: {
      type: String,
      required: true,
    },
    savedFlag: {
      type: String,
      required: false,
    },
    savedLang: {
      type: String,
      required: false,
    },
    savedLabel: {
      type: String,
      required: false,
    },
    link: {
      type: Boolean,
      required: false,
    },
    isLanguage: {
      type: Boolean,
      required: false,
    },
    linkValue: {
      type: String,
      required: false,
    },
  },
  emits: ["customize-setting", "lang-action"],
  data() {
    return {
      colorStyle: this.isColor,
      heightItem: this.itemType,
    };
  },
  computed: {
    grey() {
      return { backgroundColor: "#787575", borderRadius: "20px" };
    },
    red() {
      return { backgroundColor: "#EB5353" };
    },
    light() {
      return { backgroundColor: "#FFFFFF" };
    },
    green() {
      return { backgroundColor: "#316464", color: "#c1c1c1" };
    },
    generalStyle() {
      return { height: "55%" };
    },
    updateStyle() {
      return { height: "2.5rem" };
    },
  },
  methods: {
    color() {
      if (this.colorStyle === "alpha") {
        return this.grey;
      } else if (this.colorStyle === "red") {
        return this.red;
      } else if (this.colorStyle === "manual") {
        return this.light;
      } else if (this.colorStyle === "green") {
        return this.green;
      }
    },
    itemStyle() {
      if (this.heightItem === "general") {
        return this.generalStyle;
      } else if (this.heightItem === "update") {
        return this.updateStyle;
      }
    },
    customizeSetting() {
      this.$emit("customize-setting");
    },
    langAction() {
      this.$emit("lang-action");
    },
  },
};
</script>
<style scoped>
.setting-items_parent {
  width: 95%;
  display: flex;
  color: #eee;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #343434;
  background: rgb(42, 42, 42);
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgb(23, 23, 23);
  text-decoration: none;
  margin: 0.5% 0;
  border-radius: 20px;
}
.setting-items_parent:hover,
.setting-items_parent:active {
  background: #313131;
}
.setting-items_title {
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 100%;
  font-weight: 600;
}
.setting-items_title span {
  margin: 0 5%;
}
.setting-items_btn {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: 500;
  border: 1.5px solid #30353a;
  cursor: pointer;
  margin: 0 2%;
  height: 90%;
  color: #000;
  font-size: 100%;
  box-shadow: 0 0 1px 0.5px rgb(23, 23, 23);
  box-sizing: border-box;
  text-transform: uppercase;
}
.setting-items_select {
  display: flex;
  width: 25%;
  height: 90%;
  margin: 0 2%;
}
.setting-items_btn:hover,
setting-items_btn:focus {
  font-weight: 700;
  border: 1.5px solid #eee;
}
</style>
