# 项目初筛及研判系统

这是一个基于Web的项目初筛及研判系统，用于帮助评估和记录项目的基本情况。

## 功能特点

- 完整的项目初筛"红绿灯"评估
- 详细的项目研判指引
- 响应式设计，支持移动端访问
- 本地数据存储，支持数据持久化
- 用户友好的界面设计

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 填写表单中的各项内容
3. 点击"提交评估"按钮保存数据
4. 使用"重置表单"按钮清空当前表单

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- LocalStorage 用于数据存储

## 项目结构

```
.
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript逻辑
└── README.md       # 项目说明文档
```

## 数据存储

目前系统使用浏览器的 LocalStorage 进行数据存储。数据以 JSON 格式保存，包含以下信息：

- 初筛"红绿灯"评估结果
- 技术评估信息
- 产品评估信息
- 销售评估信息
- 团队背景信息
- 项目亮点
- 提交时间戳

## 注意事项

- 由于使用 LocalStorage 存储数据，数据仅保存在本地浏览器中
- 清除浏览器数据会导致已保存的信息丢失
- 建议定期导出重要数据

## 后续开发计划

- [ ] 添加数据导出功能
- [ ] 支持多项目数据管理
- [ ] 添加数据可视化功能
- [ ] 集成后端数据库存储 