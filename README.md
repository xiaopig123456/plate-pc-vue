# plate-pc-vue
PC端前端vue脚手架

## 项目启动
```
npm install
npm run serve （开发）
npm run build （生产）
```

## UI框架
- 使用[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)作为基础ui框架。
- 其他还引入了 `axios、nprogress、momentjs`等插件。

## 目录结构
```
dookay-pro
├── public
|   ├── img （图片，可选）
|   ├── favicon.ico
|   ├── index.html
├── src
|   ├── assets
│   |   └── img （图片，可选）
|   ├── components （组件）
│   |   └── layouts（全局组件）
|   ├── pages （页面组件）
│   |   └── layouts（布局，可选）
|   ├── plugins （插件）
|   ├── requests （请求api）
|   ├── routers （路由）
|   ├── styles （样式）
|   ├── utils （工具）
|   ├── App.vue
|   ├── main.js
|   ├── router.js
|   ├── store.js（vuex状态管理）
├── .env（环境配置）
├── .gitignore
├── babel.config.js
├── package.json
├── vue.config.js
```
## 使用约束
### .env文件
环境配置，通常包含配置api请求的域名

### 组件
- `src/components/global` 存放全局组件（系统自动引入）。

### 请求api
`src/requests`目录用于存放api接口（系统自动引入），其挂载为vue的一个属性，使用`this.$request`来访问。 例如：
```
<script>
  export default {
    name: "Index",
    mounted() {
        this.$request.demo().then(res=>{
          // doing something
        })
    }
  }
</script>
```

### 路由
`src/routers`目录用于存放路由文件（系统自动引入）。

### 样式
- `src/styles`样式目录，scss作为主预编译语言。
- `variables.scss`为全局变量，将会被注册到全局任意地方的scss中，**不可删除**。
- `index.scss`为样式入口，**不可删除**。
- `_common.scss`存放公共样式，`_tools.scss`存放工具类。

### 工具
`src/utils`目录用于存放自己写的一些工具函数（系统自动引入），其挂载为vue的一个属性，使用`this.$util`来访问。

### 状态管理
`src/store.js`文件用于状态管理。