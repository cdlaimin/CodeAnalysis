import{_ as n,e as s}from"./app.d1b9ffe1.js";const e={},t=s(`<h1 id="\u4EFB\u52A1\u7BA1\u7406\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u7BA1\u7406\u6A21\u5757" aria-hidden="true">#</a> \u4EFB\u52A1\u7BA1\u7406\u6A21\u5757</h1><h2 id="\u6267\u884C\u6307\u5B9A\u4EE3\u7801\u5E93\u6307\u5B9A\u5206\u652F\u9879\u76EE\u626B\u63CF\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6307\u5B9A\u4EE3\u7801\u5E93\u6307\u5B9A\u5206\u652F\u9879\u76EE\u626B\u63CF\u4EFB\u52A1" aria-hidden="true">#</a> \u6267\u884C\u6307\u5B9A\u4EE3\u7801\u5E93\u6307\u5B9A\u5206\u652F\u9879\u76EE\u626B\u63CF\u4EFB\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/scans/create/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>incr_scan</td><td>bool</td><td>\u589E\u91CF\u626B\u63CF\u6807\u5FD7\uFF0Ctrue\u8868\u793A\u589E\u91CF\uFF0Cfalse\u8868\u793A\u5168\u91CF</td></tr><tr><td>async_flag</td><td>bool</td><td>\u5F02\u6B65\u542F\u52A8\u6807\u5FD7\uFF0Ctrue\u8868\u793A\u5F02\u6B65\uFF0Cfalse\u8868\u793A\u540C\u6B65\uFF0C\u5EFA\u8BAE\u9009\u62E9\u5F02\u6B65</td></tr><tr><td>force_create</td><td>bool</td><td>\u5F3A\u5236\u542F\u52A8\u6807\u5FD7\uFF0Ctrue\u8868\u793A\u5F3A\u5236\u542F\u52A8\uFF0C\u4E0D\u7B49\u5F85\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u7ED3\u675F</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;job&quot;: {
        &quot;id&quot;: 7974
    },
    &quot;scan&quot;: {
        &quot;id&quot;: 5528
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u4EFB\u52A1\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u4EFB\u52A1\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u4EFB\u52A1\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/jobs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-1" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>create_time_gte</td><td>datetime</td><td>\u6700\u5C0F\u4EFB\u52A1\u542F\u52A8\u65F6\u95F4</td></tr><tr><td>create_time_lte</td><td>datetime</td><td>\u6700\u5927\u4EFB\u52A1\u542F\u52A8\u65F6\u95F4</td></tr><tr><td>result_code_gte</td><td>int</td><td>\u6700\u5C0F\u9519\u8BEF\u7801\u503C</td></tr><tr><td>result_code_lte</td><td>int</td><td>\u6700\u5927\u9519\u8BEF\u7801\u503C</td></tr><tr><td>result_msg</td><td>str</td><td>\u7ED3\u679C\u4FE1\u606F</td></tr><tr><td>state</td><td>int</td><td>\u4EFB\u52A1\u72B6\u6001, 0\u4E3A\u7B49\u5F85\u4E2D\uFF0C1\u4E3A\u6267\u884C\u4E2D\uFF0C2\u4E3A\u5173\u95ED\uFF0C3\u4E3A\u5165\u5E93\u4E2D\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>created_from</td><td>str</td><td>\u521B\u5EFA\u6765\u6E90</td></tr><tr><td>creator</td><td>str</td><td>\u521B\u5EFA\u7528\u6237</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;state&quot;: 2,
                &quot;result_code&quot;: 0,
                &quot;result_msg&quot;: &quot;success&quot;,
                &quot;code_line_num&quot;: 1000,
                &quot;comment_line_num&quot;: 5,
                &quot;blank_line_num&quot;: 305,
                &quot;total_line_num&quot;: 1400
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u4EFB\u52A1\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u4EFB\u52A1\u8BE6\u60C5" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u4EFB\u52A1\u8BE6\u60C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/jobs/&lt;job_id&gt;/detail/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-2" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;scan_id&quot;: 1,
        &quot;create_time&quot;: &quot;2021-01-28T10:27:26.442961+08:00&quot;,
        &quot;waiting_time&quot;: &quot;1&quot;,
        &quot;start_time&quot;: &quot;2021-01-28T11:14:56.760427+08:00&quot;,
        &quot;execute_time&quot;: &quot;3&quot;,
        &quot;project&quot;: {
            &quot;id&quot;: 1,
            &quot;branch&quot;: &quot;master&quot;,
            &quot;repo_id&quot;: 1,
            &quot;scan_scheme&quot;: 1,
            &quot;repo_scm_url&quot;: &quot;http://github.com/xxx/test_demo.git&quot;
        },
        &quot;end_time&quot;: &quot;2021-01-28T11:14:59.760427+08:00&quot;,
        &quot;expire_time&quot;: &quot;2021-01-28T14:07:52.968932+08:00&quot;,
        &quot;task_num&quot;: 1,
        &quot;task_done&quot;: 1,
        &quot;tasks&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;module&quot;: &quot;codelint&quot;,
                &quot;task_name&quot;: &quot;pylint&quot;,
                &quot;progress_rate&quot;: 1,
                &quot;state&quot;: 2,
                &quot;result_code&quot;: 0,
                &quot;result_msg&quot;: &quot;success&quot;,
                &quot;result_path&quot;: null
            }
        ],
        &quot;co_jobs&quot;: [],
        &quot;state&quot;: 2,
        &quot;result_code&quot;: 0,
        &quot;result_code_msg&quot;: null,
        &quot;result_msg&quot;: &quot;success&quot;,
        &quot;result_path&quot;: null,
        &quot;remarks&quot;: null,
        &quot;remarked_by&quot;: null,
        &quot;code_line_num&quot;: 1000,
        &quot;comment_line_num&quot;: 5,
        &quot;blank_line_num&quot;: 305,
        &quot;total_line_num&quot;: 1400,
        &quot;created_from&quot;: &quot;codedog_web&quot;,
        &quot;creator&quot;: &quot;creator&quot;
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,17);function a(r,u){return t}var o=n(e,[["render",a],["__file","\u4EFB\u52A1\u7BA1\u7406\u6A21\u5757\u63A5\u53E3.html.vue"]]);export{o as default};
