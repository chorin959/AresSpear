# Ares's Spear

阿瑞斯之矛，JS开发者的利器

## 快速开始

***安装***

`npm install ares-spear`

***使用***

全部导入
```javascript
  import * as AresSpear from "ares-spear";
```
按需导入
```javascript
  import {WaitFor} from "ares-spear";
```

## 功能介绍
### WaitChain

***功能***

实现按时间顺序的链式调用，适用于需要按一定时间顺序执行的功能的场景

***方法***

* wait - 等待控制
* then - 执行控制
---
### WaitFor

***功能***

条件等待， 适用于无法控制的异步处理的场景

***方法***

* then- 等待成功后回调，可链式调用
---
### Timer  
***功能***

时间控制工具

***方法***

* timeout - 通过Promise方式实现延时
* getTimeDistance - 获取两个时间戳之间的距离，可控制精度
