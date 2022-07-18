import{_ as s,e as n}from"./app.d1b9ffe1.js";const e={},a=n(`<h1 id="\u8FC7\u6EE4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u914D\u7F6E" aria-hidden="true">#</a> \u8FC7\u6EE4\u914D\u7F6E</h1><h2 id="\u8DEF\u5F84\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84\u8FC7\u6EE4" aria-hidden="true">#</a> \u8DEF\u5F84\u8FC7\u6EE4</h2><p>\u7528\u4E8E\u8BBE\u5B9A\u4EE3\u7801\u5206\u6790\u7684\u8303\u56F4\uFF0C\u8BBE\u5B9A\u540E\uFF0C\u5DF2\u7ECF\u5F00\u542F\u7684\u4EE3\u7801\u68C0\u67E5\u3001\u4EE3\u7801\u5EA6\u91CF\u5404\u9879\u529F\u80FD\u90FD\u4F1A\u5728\u6307\u5B9A\u7684\u4EE3\u7801\u8303\u56F4\u5185\u751F\u6548\u3002</p><p>\u76EE\u524D\u652F\u6301<strong>\u6B63\u5219\u8868\u8FBE\u5F0F</strong>\u548C<strong>\u901A\u914D\u7B26</strong>\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ul><li><p><strong>\u6B63\u5219\u8868\u8FBE\u5F0F</strong></p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u8BF7\u586B\u5199\u76F8\u5BF9\u8DEF\u5F84(\u57FA\u4E8E\u4EE3\u7801\u5E93\u6839\u76EE\u5F55)\uFF0C\u8981\u6C42\u5339\u914D\u5230\u6587\u4EF6
\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u683C\u5F0F\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A
    \u4EE3\u7801\u6839\u76EE\u5F55
    |-src
      |- test
          |- main_test.py
          |- input_test.py
      |- main.py
    |-test
      |- param_test.py
    \u5339\u914Dsrc/test\u76EE\u5F55\uFF1Asrc/test/.*
    \u5339\u914D\u6839\u76EE\u5F55\u4E0B\u7684test\u76EE\u5F55\uFF1Atest/.*
    \u5339\u914D\u6240\u6709_test.py\u540E\u7F00\u7684\u6587\u4EF6\uFF1A.*_test\\\\.py
\u4FEE\u6539\u540E\uFF0C\u4E0B\u6B21\u5206\u6790\u751F\u6548\uFF0C\u9700\u8981\u542F\u52A8\u4E00\u6B21\u5168\u91CF\u5206\u6790\u5904\u7406\u5386\u53F2\u5B58\u91CF\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Include \u8868\u793A\u53EA\u5206\u6790\uFF0C\u5982\u53EA\u5206\u6790 src/ \u76EE\u5F55\uFF1Asrc/.*
Exclude \u8868\u793A\u53EA\u5C4F\u853D\uFF0C\u5982\u8981\u5C4F\u853D src/lib/ \u76EE\u5F55\uFF1Asrc/lib/.*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><strong>\u901A\u914D\u7B26</strong></p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u8BF7\u586B\u5199\u76F8\u5BF9\u8DEF\u5F84(\u57FA\u4E8E\u4EE3\u7801\u5E93\u6839\u76EE\u5F55)\uFF0C\u8981\u6C42\u5339\u914D\u5230\u6587\u4EF6
\u4F7F\u7528Unix\u901A\u914D\u7B26\u683C\u5F0F\uFF0C\u793A\u4F8B\u5982\u4E0B
    \u4EE3\u7801\u6839\u76EE\u5F55
    |-src
      |- test
          |- main_test.py
          |- input_test.py
      |- main.py
    |-test
      |- param_test.py
    \u5339\u914Dsrc/test\u76EE\u5F55\uFF1Asrc/test/*
    \u5339\u914D\u6839\u76EE\u5F55\u4E0B\u7684test\u76EE\u5F55\uFF1Atest/*
    \u5339\u914D\u6240\u6709_test.py\u540E\u7F00\u7684\u6587\u4EF6\uFF1A*_test.py
\u4FEE\u6539\u540E\uFF0C\u4E0B\u6B21\u5206\u6790\u751F\u6548\uFF0C\u9700\u8981\u542F\u52A8\u4E00\u6B21\u5168\u91CF\u5206\u6790\u5904\u7406\u5386\u53F2\u5B58\u91CF\u95EE\u9898\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Include \u8868\u793A\u53EA\u5206\u6790\uFF0C\u5982\u53EA\u5206\u6790 src/ \u76EE\u5F55\uFF1Asrc/*
Exclude \u8868\u793A\u53EA\u5C4F\u853D\uFF0C\u5982\u8981\u5C4F\u853D src/lib/ \u76EE\u5F55\uFF1Asrc/lib/*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><p>\u5982\u679C\u51E0\u4E2A\u5206\u6790\u65B9\u6848\u5E0C\u671B\u5171\u4EAB\u76F8\u540C\u7684\u8DEF\u5F84\u8FC7\u6EE4\u65B9\u6848\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BFC\u5165\u5BFC\u51FA\u8DEF\u5F84\u914D\u7F6E\u7684\u65B9\u5F0F\u8FDB\u884C\u5904\u7406\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u4E0B\u6B21\u542F\u52A8\u5206\u6790\u751F\u6548</p></div><h2 id="\u95EE\u9898\u8FC7\u6EE4" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u8FC7\u6EE4" aria-hidden="true">#</a> \u95EE\u9898\u8FC7\u6EE4</h2><ul><li><p><strong>\u5168\u5C40 Issue \u5FFD\u7565\u72B6\u6001\u540C\u6B65</strong></p><p>\u4EC5\u5BF9\u4EE3\u7801\u68C0\u67E5\u751F\u6548\u3002\u5F00\u542F\u540E\uFF0C\u5728 Issue \u9875\u9762\u8FDB\u884C\u5168\u5C40\u5FFD\u7565\u64CD\u4F5C\u65F6\uFF0C\u5176\u4ED6\u5229\u7528\u8BE5\u65B9\u6848\u5206\u6790\u7684\u5206\u652F\u9879\u76EE\u5728\u53D1\u73B0\u76F8\u540C Issue \u65F6\uFF0C\u4F1A\u540C\u6B65\u5FFD\u7565\u8BE5 Issue\u3002\u5426\u5219\u4E0D\u53D7\u5168\u5C40 Issue \u5FFD\u7565\u72B6\u6001\u540C\u6B65\u5F71\u54CD\u3002</p></li></ul>`,9);function r(l,t){return a}var i=s(e,[["render",r],["__file","\u8FC7\u6EE4\u914D\u7F6E.html.vue"]]);export{i as default};
