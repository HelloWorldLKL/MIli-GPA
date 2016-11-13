

## MIli-GPA是什么？

MIli-GPA 是一个为内蒙古财经大学的学生提供的**用于计算个人 GPA 的 [SPA](http://baike.baidu.com/link?url=4viWu2RiTc_0qmeP7Vo943qnlZrsGIwYIAPYCMU6YxffvJ8BosDflsHSErQBuU-lP2UkPw51lVl3ekSiLLt9Q_) ** ，它目前只支持一种算法 和 百分制的分数填写。它致力于简化查询学分绩点，让我们不再进行繁琐的计算。

## MIli-GPA的特点

MIli-GPA的特点是它专门为移动端打造，手机端的用户体验很不错，它能很方便的作为子页面嵌入其他地方。

而且，因为有了BootStrap 和 Font Awesome，它的界面更加美观简洁，更吸引人。

除此之外，MIli-GPA 的特点是它是个开源项目，因为有了你们 ，MIli-GPA 会被开发的更加完善

## 为什么要创建 MIli-GPA 绩点计算器？

我是一名内蒙古财经大学的学生，同时是 米粒技术部 的一位部员。我们的微信公众平台使用的技术是第三方平台提供的，而我们现在希望能使这个平台使用自己的技术，这样更加可控也更加经济，而这个绩点计算器就是其中一部分。但是在我着手这个项目的过程中，我感到了自己的局限性，并且Github上貌似没有类似的开源项目，于是我希望能将这个项目开源，使它不仅仅属于米粒，同时在大家的努力下变得更加强大。

>这里的米粒是内蒙古财经大学的一个校园服务平台，属于学校扶持的创业项目

## 路线图

1. 减少BootStrap 和 Font Awesome 的依赖，优化算法
2. 提供更多的GPA计算算法
3. 提供更多的分数输入方法
4. 提供更准确温暖的错误提示
5. 提供更人性化的界面，使用更适合移动端的设计语言
6. 使用Vue.js 开发一个 beta 版

## 当前算法

 ![mathML](img/mathML.png)




| 成绩      | 绩点   |
| ------- | ---- |
| 90—100分 | 4    |
| 85—89.9 | 3.7  |
| 82—84.9 | 3.3  |
| 78—81.9 | 3    |
| 75—77.9 | 2.7  |
| 72—74.9 | 2.3  |
| 68—71.9 | 2    |
| 66—67.9 | 1.7  |
| 64—65.9 | 1.5  |
| 60—63.9 | 1    |
| 60分以下   | 0    |

