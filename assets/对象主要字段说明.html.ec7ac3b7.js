import{_ as n,e}from"./app.d1b9ffe1.js";const s={},a=e(`<h1 id="\u5BF9\u8C61\u4E3B\u8981\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u4E3B\u8981\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> \u5BF9\u8C61\u4E3B\u8981\u5B57\u6BB5\u8BF4\u660E</h1><p>\u6CE8\uFF1A\u4EE5\u4E0B\u5B57\u6BB5\u7528\u4E8E\u53C2\u8003\uFF0C\u5177\u4F53\u5B57\u6BB5\u683C\u5F0F\u9700\u8981\u4EE5\u5177\u4F53\u63A5\u53E3\u8FD4\u56DE\u4E3A\u51C6</p><h2 id="\u56E2\u961F-org" tabindex="-1"><a class="header-anchor" href="#\u56E2\u961F-org" aria-hidden="true">#</a> \u56E2\u961F\uFF08org\uFF09\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>org_sid: str\uFF0C\u56E2\u961F\u7F16\u53F7
name: str\uFF0C\u56E2\u961F\u540D\u79F0
description: str\uFF0C\u56E2\u961F\u63CF\u8FF0
certificated: boolean\uFF0C\u56E2\u961F\u8BA4\u8BC1\u6807\u5FD7\u4F4D
created_time: datetime\uFF0C\u56E2\u961F\u521B\u5EFA\u65F6\u95F4
updated_time: datetime\uFF0C\u56E2\u961F\u66F4\u65B0\u65F6\u95F4
admins: list\uFF0C\u7BA1\u7406\u5458\u5217\u8868
project_count: int\uFF0C\u5206\u6790\u4EFB\u52A1\u6570\u91CF
team_count: int\uFF0C\u9879\u76EE\u7EC4\u6570\u91CF
user_count: int\uFF0C\u6210\u5458\u6570\u91CF
owner: str\uFF0C\u8D1F\u8D23\u4EBA\u540D\u79F0
tel_number: str\uFF0C\u8D1F\u8D23\u4EBA\u7535\u8BDD
address: str\uFF0C\u529E\u516C\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u9879\u76EE-team" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE-team" aria-hidden="true">#</a> \u9879\u76EE\uFF08team\uFF09\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: str\uFF0C\u9879\u76EE\u7EC4\u540D\u79F0
display_name: str\uFF0C\u9879\u76EE\u7EC4\u5C55\u793A\u540D\u79F0
description: str\uFF0C\u9879\u76EE\u7EC4\u63CF\u8FF0\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4EE3\u7801\u5E93-repository" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5E93-repository" aria-hidden="true">#</a> \u4EE3\u7801\u5E93\uFF08repository\uFF09\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: str\uFF0C\u4EE3\u7801\u5E93\u540D\u79F0
scm_url: str\uFF0C\u4EE3\u7801\u5E93\u5730\u5740
scm_type: int\uFF0C\u4EE3\u7801\u5E93\u7C7B\u578B
created_from: str\uFF0C\u521B\u5EFA\u6765\u6E90
state\uFF1Astr\uFF0C\u4EE3\u7801\u5E93\u72B6\u6001\uFF0C1\u8868\u793A\u6D3B\u8DC3\uFF0C2\u8868\u793A\u5931\u6D3B\uFF0C3\u8868\u793A\u6682\u505C\u4F7F\u7528
labels\uFF1Alist\uFF0C\u6807\u7B7E
project_team: \u9879\u76EE
organization: \u56E2\u961F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u626B\u63CF\u65B9\u6848-scanscheme" tabindex="-1"><a class="header-anchor" href="#\u626B\u63CF\u65B9\u6848-scanscheme" aria-hidden="true">#</a> \u626B\u63CF\u65B9\u6848\uFF08scanscheme\uFF09\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: str\uFF0C\u626B\u63CF\u65B9\u6848\u540D\u79F0
repo\uFF1A\u5173\u8054\u7684\u4EE3\u7801\u5E93
refer_scheme: \u53C2\u7167\u7684\u626B\u63CF\u65B9\u6848
description: str\uFF0C\u63CF\u8FF0
tag: \u6267\u884C\u6807\u7B7E
languages: \u5305\u542B\u8BED\u8A00
default_flag: boolean\uFF0C\u9ED8\u8BA4\u65B9\u6848\u6807\u5FD7
created_from: str\uFF0C\u521B\u5EFA\u6765\u6E90
ignore_merged_issue: boolean\uFF0C\u8FC7\u6EE4\u5176\u4ED6\u5206\u652F\u5F15\u5165\u7684\u95EE\u9898\uFF0C\u9ED8\u8BA4False\uFF0C\u4E0D\u8FC7\u6EE4
ignore_branch_issue: str\uFF0C\u8FC7\u6EE4\u6307\u5B9A\u5206\u652F\u5F15\u5165\u7684\u95EE\u9898
ignore_submodule_clone: boolean\uFF0C\u4E0D\u62C9\u53D6\u5B50\u6A21\u5757\uFF0C\u9ED8\u8BA4False
ignore_submodule_issue: boolean\uFF0C\u5FFD\u7565\u5B50\u6A21\u5757\u95EE\u9898\uFF0C\u9ED8\u8BA4False
issue_global_ignore: boolean\uFF0C\u5F00\u542F\u95EE\u9898\u5168\u5C40\u5FFD\u7565\uFF0C\u9ED8\u8BA4False
daily_save: boolean\uFF0C\u65E5\u5E38\u626B\u63CF\u8BB0\u5F55\u4FDD\u5B587\u5929\u5F00\u5173\uFF0C\u9ED8\u8BA4False
lfs_flag: boolean\uFF0C\u81EA\u52A8\u62C9\u53D6lfs\u6587\u4EF6\uFF0C\u9ED8\u8BA4True
status: int\uFF0C\u626B\u63CF\u65B9\u6848\u72B6\u6001\uFF0C1\u4E3A\u6D3B\u8DC3\uFF0C2\u4E3A\u5E9F\u5F03
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10);function r(l,i){return a}var b=n(s,[["render",r],["__file","\u5BF9\u8C61\u4E3B\u8981\u5B57\u6BB5\u8BF4\u660E.html.vue"]]);export{b as default};
