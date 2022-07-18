import{_ as n,e as s}from"./app.d1b9ffe1.js";const a={},e=s(`<h1 id="\u9879\u76EE\u7BA1\u7406\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7BA1\u7406\u6A21\u5757" aria-hidden="true">#</a> \u9879\u76EE\u7BA1\u7406\u6A21\u5757</h1><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scm_url_or_name</td><td>str</td><td>\u4EE3\u7801\u5E93\u5730\u5740\u6216\u8005\u540D\u79F0\uFF0C\u652F\u6301\u6A21\u7CCA\u5339\u914D</td></tr><tr><td>scm_url</td><td>str</td><td>\u4EE3\u7801\u5E93\u4ED3\u5E93\u5339\u914D</td></tr><tr><td>scope</td><td>str</td><td>\u8FC7\u6EE4\u8303\u56F4\uFF08my/subscribed/related_me\uFF09\uFF0Cmy\u8868\u793A\u6211\u521B\u5EFA\u7684\uFF0Csubscribed\u8868\u793A\u6211\u5173\u6CE8\u7684\uFF0Crelated_me\u8868\u793A\u6211\u6709\u6743\u9650\u7684</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;count&quot;: 1,
    &quot;next&quot;: null,
    &quot;previous&quot;: null,
    &quot;results&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;test_repo.git&quot;,
            &quot;scm_url&quot;: &quot;http://git.com/xxx/test_repo&quot;,
            &quot;scm_type&quot;: &quot;git&quot;,
            &quot;branch_count&quot;: 1,
            &quot;scheme_count&quot;: 1,
            &quot;job_count&quot;: 1,
            &quot;created_time&quot;: &quot;2021-03-15 02:26:31.423674+00:00&quot;,
            &quot;recent_active&quot;: {
                &quot;id&quot;: 1,
                &quot;branch_name&quot;: &quot;master&quot;,
                &quot;active_time&quot;: &quot;2021-03-15T03:14:56.760427Z&quot;,
                &quot;total_line_num&quot;: null,
                &quot;code_line_num&quot;: null
            },
            &quot;created_from&quot;: &quot;codedog_web&quot;,
            &quot;creator&quot;: {
                &quot;username&quot;: &quot;username&quot;,
                &quot;nickname&quot;: &quot;nickname&quot;,
                &quot;status&quot;: 1,
                &quot;avatar&quot;: null,
                &quot;org&quot;: 1
            },
            &quot;symbol&quot;: null
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u8BE6\u60C5" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u8BE6\u60C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;:{
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;test_repo.git&quot;,
        &quot;scm_url&quot;: &quot;http://git.com/xxx/test_repo&quot;,
        &quot;scm_type&quot;: &quot;git&quot;,
        &quot;branch_count&quot;: 1,
        &quot;scheme_count&quot;: 1,
        &quot;job_count&quot;: 1,
        &quot;created_time&quot;: &quot;2021-03-15 02:26:31.423674+00:00&quot;,
        &quot;recent_active&quot;: {
            &quot;id&quot;: 1,
            &quot;branch_name&quot;: &quot;master&quot;,
            &quot;active_time&quot;: &quot;2021-03-15T03:14:56.760427Z&quot;,
            &quot;total_line_num&quot;: null,
            &quot;code_line_num&quot;: null
        },
        &quot;created_from&quot;: &quot;codedog_web&quot;,
        &quot;creator&quot;: {
            &quot;username&quot;: &quot;username&quot;,
            &quot;nickname&quot;: &quot;nickname&quot;,
            &quot;status&quot;: 1,
            &quot;avatar&quot;: null,
            &quot;org&quot;: 1
        },
        &quot;symbol&quot;: null
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u4E0D\u540C\u5206\u652F\u7684\u5217\u8868\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u4E0D\u540C\u5206\u652F\u7684\u5217\u8868\u63A5\u53E3" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u4E0D\u540C\u5206\u652F\u7684\u5217\u8868\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/branches/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-2" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;branch&quot;: &quot;master&quot;,
                &quot;schemes&quot;: [
                    {
                        &quot;project_id&quot;: 1,
                        &quot;scan_scheme_id&quot;: 1,
                        &quot;scan_scheme_name&quot;: &quot;\u9ED8\u8BA4&quot;
                    }
                ]
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u5206\u652F\u9879\u76EE\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u5206\u652F\u9879\u76EE\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u5206\u652F\u9879\u76EE\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-1" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>branch</td><td>str</td><td>\u5206\u652F\u540D\u79F0</td></tr><tr><td>scan_scheme</td><td>int</td><td>\u626B\u63CF\u65B9\u6848\u540D\u79F0</td></tr><tr><td>scan_scheme__status</td><td>int</td><td>\u626B\u63CF\u65B9\u6848\u72B6\u6001\uFF0C1\u4E3A\u6D3B\u8DC3\uFF0C2\u4E3A\u5E9F\u5F03</td></tr><tr><td>branch_or_scheme</td><td>str</td><td>\u5206\u652F\u540D\u79F0/\u626B\u63CF\u65B9\u6848\u540D\u79F0</td></tr><tr><td>status</td><td>int</td><td>\u9879\u76EE\u72B6\u6001\u7B5B\u9009\uFF0C1\u8868\u793A\u6D3B\u8DC3\uFF0C2\u8868\u793A\u5931\u6D3B\uFF0C3\u8868\u793A\u5173\u95ED</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-3" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;creator&quot;: {
                    &quot;username&quot;: &quot;username&quot;,
                    &quot;nickname&quot;: &quot;nickname&quot;,
                    &quot;status&quot;: 1,
                    &quot;avatar&quot;: null,
                    &quot;org&quot;: 1
                },
                &quot;created_time&quot;: &quot;2021-01-28 02:27:26.256015+00:00&quot;,
                &quot;modifier&quot;: null,
                &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.256284+00:00&quot;,
                &quot;deleter&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;scan_scheme&quot;: {
                    &quot;id&quot;: 1,
                    &quot;creator&quot;: {
                        &quot;username&quot;: &quot;username&quot;,
                        &quot;nickname&quot;: &quot;nickname&quot;,
                        &quot;status&quot;: 1,
                        &quot;avatar&quot;: null,
                        &quot;org&quot;: 1
                    },
                    &quot;created_time&quot;: &quot;2021-01-28 02:27:26.209661+00:00&quot;,
                    &quot;modifier&quot;: null,
                    &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.255023+00:00&quot;,
                    &quot;deleter&quot;: null,
                    &quot;deleted_time&quot;: null,
                    &quot;languages&quot;: [
                        &quot;python&quot;
                    ],
                    &quot;tag&quot;: &quot;TCA_Linux&quot;,
                    &quot;refer_scheme_info&quot;: null,
                    &quot;name&quot;: &quot;\u9ED8\u8BA4&quot;,
                    &quot;description&quot;: null,
                    &quot;default_flag&quot;: true,
                    &quot;created_from&quot;: &quot;web&quot;,
                    &quot;job_runtime_limit&quot;: 600,
                    &quot;ignore_merged_issue&quot;: false,
                    &quot;ignore_branch_issue&quot;: null,
                    &quot;ignore_submodule_clone&quot;: false,
                    &quot;ignore_submodule_issue&quot;: true,
                    &quot;issue_global_ignore&quot;: false,
                    &quot;daily_save&quot;: false,
                    &quot;lfs_flag&quot;: null,
                    &quot;webhook_flag&quot;: false,
                    &quot;issue_revision_merge_flag&quot;: false,
                    &quot;status&quot;: 1,
                    &quot;scheme_key&quot;: null,
                    &quot;repo&quot;: 1
                },
                &quot;branch&quot;: &quot;master&quot;,
                &quot;status&quot;: 1,
                &quot;created_from&quot;: &quot;codedog_web&quot;,
                &quot;repo&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><h2 id="\u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-2" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_scheme_id</td><td>int</td><td>\u5F53\u524D\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7F16\u53F7</td></tr><tr><td>global_scheme_id</td><td>int</td><td>\u626B\u63CF\u65B9\u6848\u6A21\u677F\u7F16\u53F7</td></tr><tr><td>custom_scheme_name</td><td>str</td><td>\u81EA\u5B9A\u4E49\u65B9\u6848\u540D\u79F0</td></tr><tr><td>branch</td><td>str</td><td>\u5206\u652F</td></tr><tr><td>created_from</td><td>str</td><td>\u521B\u5EFA\u6E20\u9053\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u8FD0\u884C\u573A\u666F</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-4" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;:1,
        &quot;creator&quot;: {
            &quot;username&quot;: &quot;username&quot;,
            &quot;nickname&quot;: &quot;nickname&quot;,
            &quot;status&quot;: 1,
            &quot;avatar&quot;: null,
            &quot;org&quot;: 1
        },
        &quot;created_time&quot;: &quot;2021-01-28 02:27:26.256015+00:00&quot;,
        &quot;modifier&quot;: null,
        &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.256284+00:00&quot;,
        &quot;deleter&quot;: null,
        &quot;deleted_time&quot;: null,
        &quot;repo&quot;: {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;test_demo.git&quot;,
            &quot;scm_url&quot;: &quot;http://github.com/xxxx/test_demo.git&quot;,
            &quot;scm_type&quot;: &quot;git&quot;,
            &quot;scm_auth&quot;: {
                &quot;id&quot;: 1,
                &quot;scm_account&quot;: null,
                &quot;scm_oauth&quot;: null,
                &quot;scm_ssh&quot;: {
                    &quot;id&quot;: 1,
                    &quot;name&quot;: &quot;1&quot;,
                    &quot;scm_platform&quot;: 1,
                    &quot;scm_platform_desc&quot;: null,
                    &quot;user&quot;: {
                        &quot;username&quot;: &quot;username&quot;,
                        &quot;nickname&quot;: &quot;nickname&quot;,
                        &quot;status&quot;: 1,
                        &quot;avatar&quot;: null,
                        &quot;org&quot;: 1
                    }
                },
                &quot;auth_type&quot;: &quot;ssh_token&quot;,
                &quot;created_time&quot;: &quot;2021-01-28T10:26:31.453389+08:00&quot;,
                &quot;modified_time&quot;: &quot;2021-01-28T10:26:31.453417+08:00&quot;
            },
            &quot;symbol&quot;: null
        },
        &quot;scan_scheme&quot;: {
            &quot;id&quot;: 1,
            &quot;creator&quot;: {
                &quot;username&quot;: &quot;username&quot;,
                &quot;nickname&quot;: &quot;nickname&quot;,
                &quot;status&quot;: 1,
                &quot;avatar&quot;: null,
                &quot;org&quot;: 1
            },
            &quot;created_time&quot;: &quot;2021-01-28 02:27:26.209661+00:00&quot;,
            &quot;modifier&quot;: null,
            &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.255023+00:00&quot;,
            &quot;deleter&quot;: null,
            &quot;deleted_time&quot;: null,
            &quot;languages&quot;: [
                &quot;python&quot;
            ],
            &quot;tag&quot;: &quot;TCA_Linux&quot;,
            &quot;refer_scheme_info&quot;: null,
            &quot;name&quot;: &quot;\u9ED8\u8BA4&quot;,
            &quot;description&quot;: null,
            &quot;default_flag&quot;: true,
            &quot;created_from&quot;: &quot;web&quot;,
            &quot;job_runtime_limit&quot;: 600,
            &quot;ignore_merged_issue&quot;: false,
            &quot;ignore_branch_issue&quot;: null,
            &quot;ignore_submodule_clone&quot;: false,
            &quot;ignore_submodule_issue&quot;: true,
            &quot;issue_global_ignore&quot;: false,
            &quot;daily_save&quot;: false,
            &quot;lfs_flag&quot;: null,
            &quot;webhook_flag&quot;: false,
            &quot;issue_revision_merge_flag&quot;: false,
            &quot;status&quot;: 1,
            &quot;scheme_key&quot;: null,
            &quot;repo&quot;: 1
        },
        &quot;branch&quot;: &quot;master&quot;,
        &quot;status&quot;: 1,
        &quot;created_from&quot;: &quot;tca_web&quot;
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u5206\u652F\u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/&lt;project_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-5" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-5" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;:1,
        &quot;creator&quot;: {
            &quot;username&quot;: &quot;username&quot;,
            &quot;nickname&quot;: &quot;nickname&quot;,
            &quot;status&quot;: 1,
            &quot;avatar&quot;: null,
            &quot;org&quot;: 1
        },
        &quot;created_time&quot;: &quot;2021-01-28 02:27:26.256015+00:00&quot;,
        &quot;modifier&quot;: null,
        &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.256284+00:00&quot;,
        &quot;deleter&quot;: null,
        &quot;deleted_time&quot;: null,
        &quot;repo&quot;: {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;test_demo.git&quot;,
            &quot;scm_url&quot;: &quot;http://github.com/xxxx/test_demo.git&quot;,
            &quot;scm_type&quot;: &quot;git&quot;,
            &quot;scm_auth&quot;: {
                &quot;id&quot;: 1,
                &quot;scm_account&quot;: null,
                &quot;scm_oauth&quot;: null,
                &quot;scm_ssh&quot;: {
                    &quot;id&quot;: 1,
                    &quot;name&quot;: &quot;1&quot;,
                    &quot;scm_platform&quot;: 1,
                    &quot;scm_platform_desc&quot;: null,
                    &quot;user&quot;: {
                        &quot;username&quot;: &quot;username&quot;,
                        &quot;nickname&quot;: &quot;nickname&quot;,
                        &quot;status&quot;: 1,
                        &quot;avatar&quot;: null,
                        &quot;org&quot;: 1
                    }
                },
                &quot;auth_type&quot;: &quot;ssh_token&quot;,
                &quot;created_time&quot;: &quot;2021-01-28T10:26:31.453389+08:00&quot;,
                &quot;modified_time&quot;: &quot;2021-01-28T10:26:31.453417+08:00&quot;
            },
            &quot;symbol&quot;: null
        },
        &quot;scan_scheme&quot;: {
            &quot;id&quot;: 1,
            &quot;creator&quot;: {
                &quot;username&quot;: &quot;username&quot;,
                &quot;nickname&quot;: &quot;nickname&quot;,
                &quot;status&quot;: 1,
                &quot;avatar&quot;: null,
                &quot;org&quot;: 1
            },
            &quot;created_time&quot;: &quot;2021-01-28 02:27:26.209661+00:00&quot;,
            &quot;modifier&quot;: null,
            &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.255023+00:00&quot;,
            &quot;deleter&quot;: null,
            &quot;deleted_time&quot;: null,
            &quot;languages&quot;: [
                &quot;python&quot;
            ],
            &quot;tag&quot;: &quot;TCA_Linux&quot;,
            &quot;refer_scheme_info&quot;: null,
            &quot;name&quot;: &quot;\u9ED8\u8BA4&quot;,
            &quot;description&quot;: null,
            &quot;default_flag&quot;: true,
            &quot;created_from&quot;: &quot;web&quot;,
            &quot;job_runtime_limit&quot;: 600,
            &quot;ignore_merged_issue&quot;: false,
            &quot;ignore_branch_issue&quot;: null,
            &quot;ignore_submodule_clone&quot;: false,
            &quot;ignore_submodule_issue&quot;: true,
            &quot;issue_global_ignore&quot;: false,
            &quot;daily_save&quot;: false,
            &quot;lfs_flag&quot;: null,
            &quot;webhook_flag&quot;: false,
            &quot;issue_revision_merge_flag&quot;: false,
            &quot;status&quot;: 1,
            &quot;scheme_key&quot;: null,
            &quot;repo&quot;: 1
        },
        &quot;branch&quot;: &quot;master&quot;,
        &quot;status&quot;: 1,
        &quot;created_from&quot;: &quot;tca_web&quot;
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-3" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>name</td><td>str</td><td>\u626B\u63CF\u65B9\u6848\u540D\u79F0</td></tr><tr><td>status</td><td>int</td><td>\u626B\u63CF\u65B9\u6848\u72B6\u6001\uFF0C1\u4E3A\u6D3B\u8DC3\uFF0C2\u4E3A\u5E9F\u5F03</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-6" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-6" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;creator&quot;: {
                    &quot;username&quot;: &quot;username&quot;,
                    &quot;nickname&quot;: &quot;nickname&quot;,
                    &quot;status&quot;: 1,
                    &quot;avatar&quot;: null,
                    &quot;org&quot;: 1
                },
                &quot;created_time&quot;: &quot;2021-01-28 02:27:26.209661+00:00&quot;,
                &quot;modifier&quot;: null,
                &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.255023+00:00&quot;,
                &quot;deleter&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;languages&quot;: [
                    &quot;python&quot;
                ],
                &quot;tag&quot;: &quot;TCA_Linux&quot;,
                &quot;refer_scheme&quot;: null,
                &quot;name&quot;: &quot;\u9ED8\u8BA4&quot;,
                &quot;description&quot;: null,
                &quot;default_flag&quot;: true,
                &quot;created_from&quot;: &quot;web&quot;,
                &quot;job_runtime_limit&quot;: 600,
                &quot;ignore_merged_issue&quot;: false,
                &quot;ignore_branch_issue&quot;: null,
                &quot;ignore_submodule_clone&quot;: false,
                &quot;ignore_submodule_issue&quot;: true,
                &quot;issue_global_ignore&quot;: false,
                &quot;daily_save&quot;: false,
                &quot;lfs_flag&quot;: null,
                &quot;issue_revision_merge_flag&quot;: false,
                &quot;status&quot;: 1,
                &quot;repo&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u626B\u63CF\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u626B\u63CF\u65B9\u6848" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u626B\u63CF\u65B9\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/basicconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-7" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-7" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;creator&quot;: {
            &quot;username&quot;: &quot;username&quot;,
            &quot;nickname&quot;: &quot;nickname&quot;,
            &quot;status&quot;: 1,
            &quot;avatar&quot;: null,
            &quot;org&quot;: 1
        },
        &quot;created_time&quot;: &quot;2021-01-28 02:27:26.209661+00:00&quot;,
        &quot;modifier&quot;: null,
        &quot;modified_time&quot;: &quot;2021-01-28 02:27:26.255023+00:00&quot;,
        &quot;deleter&quot;: null,
        &quot;deleted_time&quot;: null,
        &quot;languages&quot;: [
            &quot;python&quot;
        ],
        &quot;tag&quot;: &quot;TCA_Linux&quot;,
        &quot;refer_scheme&quot;: null,
        &quot;name&quot;: &quot;\u9ED8\u8BA4&quot;,
        &quot;description&quot;: null,
        &quot;default_flag&quot;: true,
        &quot;created_from&quot;: &quot;web&quot;,
        &quot;job_runtime_limit&quot;: 600,
        &quot;ignore_merged_issue&quot;: false,
        &quot;ignore_branch_issue&quot;: null,
        &quot;ignore_submodule_clone&quot;: false,
        &quot;ignore_submodule_issue&quot;: true,
        &quot;issue_global_ignore&quot;: false,
        &quot;daily_save&quot;: false,
        &quot;lfs_flag&quot;: null,
        &quot;issue_revision_merge_flag&quot;: false,
        &quot;status&quot;: 1,
        &quot;repo&quot;: 1
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848" aria-hidden="true">#</a> \u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/basicconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-4" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>languages</td><td>list</td><td>\u4EE3\u7801\u8BED\u8A00</td></tr><tr><td>tag</td><td>str</td><td>\u6267\u884C\u6807\u7B7E\uFF0C\u76EE\u524D\u53EA\u652F\u6301 CodeDog_Linux</td></tr><tr><td>name</td><td>str</td><td>\u65B9\u6848\u540D\u79F0</td></tr><tr><td>description</td><td>str</td><td>\u65B9\u6848\u63CF\u8FF0</td></tr><tr><td>default_flag</td><td>bool</td><td>\u9ED8\u8BA4\u65B9\u6848\u6807\u5FD7\uFF0C\u4E00\u4E2A\u4EE3\u7801\u5E93\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u65B9\u6848</td></tr><tr><td>job_runtime_limit</td><td>int</td><td>\u4EFB\u52A1\u6267\u884C\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A600\u5206\u949F</td></tr><tr><td>ignore_merged_issue</td><td>bool</td><td>\u5FFD\u7565\u5408\u5165\u7684\u95EE\u9898</td></tr><tr><td>ignore_branch_issue</td><td>str</td><td>\u8FC7\u6EE4\u53C2\u8003\u5206\u652F\u5F15\u5165\u7684\u95EE\u9898</td></tr><tr><td>ignore_submodule_clone</td><td>bool</td><td>\u4E0D\u62C9\u53D6\u5B50\u6A21\u5757\u626B\u63CF\uFF0CTrue\u8868\u793A\u4E0D\u62C9\u53D6\uFF0CFalse\u8868\u793A\u62C9\u53D6</td></tr><tr><td>ignore_submodule_issue</td><td>bool</td><td>\u5FFD\u7565\u5B50\u6A21\u5757\u5F15\u5165\u7684\u95EE\u9898\uFF0CTrue\u8868\u793A\u5FFD\u7565\uFF0CFalse\u8868\u793A\u4E0D\u5FFD\u7565</td></tr><tr><td>issue_global_ignore</td><td>bool</td><td>\u95EE\u9898\u5168\u5C40\u5FFD\u7565</td></tr><tr><td>daily_save</td><td>bool</td><td>\u6BCF\u6B21\u626B\u63CF\u539F\u59CB\u6570\u636E\u5B58\u50A8\uFF0C\u9ED8\u8BA4\u5B58\u50A87\u5929</td></tr><tr><td>lfs_flag</td><td>bool</td><td>\u62C9\u53D6lfs\u6A21\u5757\u5F00\u5173</td></tr><tr><td>issue_revision_merge_flag</td><td>bool</td><td>&quot;\u662F\u5426\u5F00\u542FIssue\u6309\u5F15\u5165\u7248\u672C\u53F7\u805A\u5408\u5F00\u5173</td></tr><tr><td>status</td><td>int</td><td>\u65B9\u6848\u72B6\u6001\uFF0C1\u8868\u793A\u6D3B\u8DC3\uFF0C2\u8868\u793A\u5E9F\u5F03</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-8" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-8" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><p>\u540C<a href="%E6%9F%A5%E7%9C%8B%E6%8C%87%E5%AE%9A%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9A%84%E6%8C%87%E5%AE%9A%E6%89%AB%E6%8F%8F%E6%96%B9%E6%A1%88">\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u626B\u63CF\u65B9\u6848</a>\u7684\u8FD4\u56DE\u7ED3\u679C\u4E00\u81F4</p><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/lintconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-9" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-9" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;enabled&quot;: true,
        &quot;checkprofile&quot;: {
            &quot;id&quot;: 1,
            &quot;profile_type&quot;: 1,
            &quot;custom_checkpackage&quot;: 1,
            &quot;checkpackages&quot;: [
                1
            ]
        },
        &quot;scan_scheme&quot;: 1
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E" aria-hidden="true">#</a> \u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/lintconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-5" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>enabled</td><td>bool</td><td>\u662F\u5426\u5F00\u542F\u4EE3\u7801\u626B\u63CF</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-10" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-10" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><p>\u540C<a href="%E6%8C%87%E5%AE%9A%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9A%84%E6%8C%87%E5%AE%9A%E6%96%B9%E6%A1%88%E7%9A%84%E4%BB%A3%E7%A0%81%E6%89%AB%E6%8F%8F%E9%85%8D%E7%BD%AE">\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u626B\u63CF\u914D\u7F6E</a>\u7684\u8FD4\u56DE\u7ED3\u679C\u4E00\u81F4</p><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/metricconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-11" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-11" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;cc_scan_enabled&quot;: false,
        &quot;min_ccn&quot;: 20,
        &quot;dup_scan_enabled&quot;: false,
        &quot;dup_block_length_min&quot;: 120,
        &quot;dup_block_length_max&quot;: null,
        &quot;dup_min_dup_times&quot;: 2,
        &quot;dup_max_dup_times&quot;: null,
        &quot;dup_min_midd_rate&quot;: 5,
        &quot;dup_min_high_rate&quot;: 11,
        &quot;dup_min_exhi_rate&quot;: 20,
        &quot;dup_issue_limit&quot;: 1000,
        &quot;cloc_scan_enabled&quot;: false,
        &quot;scan_scheme&quot;: 1
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/metricconf/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-6" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cc_scan_enabled</td><td>bool</td><td>\u5708\u590D\u6742\u5EA6\u626B\u63CF\u5F00\u5173</td></tr><tr><td>min_ccn</td><td>int</td><td>\u6700\u5C0F\u5708\u590D\u6742\u5EA6</td></tr><tr><td>dup_scan_enabled</td><td>bool</td><td>\u91CD\u590D\u4EE3\u7801\u626B\u63CF\u5F00\u5173</td></tr><tr><td>dup_block_length_min</td><td>int</td><td>\u91CD\u590D\u5757\u6700\u5C0F\u957F\u5EA6</td></tr><tr><td>dup_block_length_max</td><td>int</td><td>\u91CD\u590D\u5757\u6700\u5927\u957F\u5EA6</td></tr><tr><td>dup_max_dup_times</td><td>int</td><td>\u6700\u5927\u91CD\u590D\u6B21\u6570</td></tr><tr><td>dup_min_midd_rate</td><td>int</td><td>\u4E2D\u98CE\u9669\u6700\u5C0F\u91CD\u590D\u7387</td></tr><tr><td>dup_min_high_rate</td><td>int</td><td>\u9AD8\u98CE\u9669\u6700\u5C0F\u91CD\u590D\u7387</td></tr><tr><td>dup_min_exhi_rate</td><td>int</td><td>\u6781\u9AD8\u98CE\u9669\u98CE\u9669\u6700\u5C0F\u91CD\u590D\u7387</td></tr><tr><td>dup_issue_limit</td><td>int</td><td>\u4E0A\u62A5\u91CD\u590D\u4EE3\u7801\u5757\u6570\u4E0A\u9650</td></tr><tr><td>cloc_scan_enabled</td><td>boolean</td><td>\u4EE3\u7801\u7EDF\u8BA1\u626B\u63CF\u5F00\u5173</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-12" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-12" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><p>\u540C<a href="%E6%8C%87%E5%AE%9A%E4%BB%A3%E7%A0%81%E5%BA%93%E7%9A%84%E6%8C%87%E5%AE%9A%E6%96%B9%E6%A1%88%E7%9A%84%E4%BB%A3%E7%A0%81%E5%BA%A6%E9%87%8F%E9%85%8D%E7%BD%AE">\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u4EE3\u7801\u5EA6\u91CF\u914D\u7F6E</a>\u7684\u8FD4\u56DE\u7ED3\u679C\u4E00\u81F4</p><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/scandirs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-13" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-13" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;dir_path&quot;: &quot;test/*&quot;,
                &quot;path_type&quot;: 1,
                &quot;scan_type&quot;: 1,
                &quot;scan_scheme&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u8FC7\u6EE4\u8DEF\u5F84\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/scandirs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-7" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-7" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>dir_path</td><td>str</td><td>\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84</td></tr><tr><td>path_type</td><td>int</td><td>\u8DEF\u5F84\u683C\u5F0F\uFF0C1\u8868\u793A\u901A\u914D\u7B26\uFF0C2\u8868\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26</td></tr><tr><td>scan_type</td><td>int</td><td>\u626B\u63CF\u7C7B\u578B\uFF0C1\u8868\u793A\u5305\u542B\uFF0C2\u8868\u793A\u6392\u9664</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-14" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-14" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 13,
        &quot;dir_path&quot;: &quot;test/*.py&quot;,
        &quot;path_type&quot;: 1,
        &quot;scan_type&quot;: 1,
        &quot;scan_scheme&quot;: 36
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 201
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u626B\u63CF\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/scandirs/&lt;dir_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-15" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-15" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;dir_path&quot;: &quot;test/*.py&quot;,
        &quot;path_type&quot;: 1,
        &quot;scan_type&quot;: 1,
        &quot;scan_scheme&quot;: 1
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" aria-hidden="true">#</a> \u66F4\u65B0\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/scandirs/&lt;dir_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-8" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-8" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>dir_path</td><td>str</td><td>\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84</td></tr><tr><td>path_type</td><td>int</td><td>\u8DEF\u5F84\u683C\u5F0F\uFF0C1\u8868\u793A\u901A\u914D\u7B26\uFF0C2\u8868\u793A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u901A\u914D\u7B26</td></tr><tr><td>scan_type</td><td>int</td><td>\u626B\u63CF\u7C7B\u578B\uFF0C1\u8868\u793A\u5305\u542B\uFF0C2\u8868\u793A\u6392\u9664</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-16" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-16" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 13,
        &quot;dir_path&quot;: &quot;test/*.py&quot;,
        &quot;path_type&quot;: 1,
        &quot;scan_type&quot;: 1,
        &quot;scan_scheme&quot;: 36
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 201
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u5220\u9664\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84" aria-hidden="true">#</a> \u5220\u9664\u6307\u5B9A\u4EE3\u7801\u5E93\u7684\u6307\u5B9A\u65B9\u6848\u7684\u6307\u5B9A\u8FC7\u6EE4\u8DEF\u5F84</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE /server/main/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/schemes/&lt;scheme_id&gt;/scandirs/&lt;dir_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-17" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-17" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><p>\u65E0</p>`,91);function t(u,r){return e}var o=n(a,[["render",t],["__file","\u9879\u76EE\u7BA1\u7406\u6A21\u5757\u63A5\u53E3.html.vue"]]);export{o as default};
