<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg" :gutter="20">
      <el-col
        v-for="(item, key) in list"
        :key="key"
        :xs="24"
        :sm="8"
        :md="8"
        :lg="6"
        :xl="4"
      >
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="content">
            <img :src="item.group_index_image" class="image" />
          </div>
          <div style="padding: 40px 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.created_at }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getAssetList } from "@/api/photo";

export default {
  data() {
    return {
      currentDate: new Date(),
      list: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getAssetList().then(response => {
        this.list = response.data.data;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  flex-wrap: wrap;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .card {
    width: 280px;
    height: 300px;
    margin: 10px 0;
    transition: all 0.6s ease;
    .content {
      width: 100%;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        user-select: none;
        max-width: 258px;
        max-height: 100%;
      }
    }

    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  }
}
</style>
