import{_ as n,e as s}from"./app.d1b9ffe1.js";const t={},a=s(`<h1 id="\u4EE3\u7801\u5EA6\u91CF\u6570\u636E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5EA6\u91CF\u6570\u636E\u7BA1\u7406" aria-hidden="true">#</a> \u4EE3\u7801\u5EA6\u91CF\u6570\u636E\u7BA1\u7406</h1><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/ccfiles/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u5DF2\u5904\u7406\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>scan_open</td><td>int</td><td>\u53D1\u73B0\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>scan_close</td><td>int</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>worse</td><td>boolean</td><td>\u5708\u590D\u6742\u5EA6\u662F\u5426\u6076\u5316</td></tr><tr><td>over_cc_sum_gte</td><td>int</td><td>\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_sum_lte</td><td>int</td><td>\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5927\u503C</td></tr><tr><td>over_cc_avg_gte</td><td>int</td><td>\u5E73\u5747\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_avg_lte</td><td>int</td><td>\u5E73\u5747\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5927\u503C</td></tr><tr><td>over_cc_func_count_gte</td><td>int</td><td>\u8D85\u6807\u5708\u590D\u6742\u5EA6\u51FD\u6570\u4E2A\u6570\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_func_count_lte</td><td>int</td><td>\u8D85\u6807\u5708\u590D\u6742\u5EA6\u51FD\u6570\u4E2A\u6570\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u53C2\u6570" aria-hidden="true">#</a> \u8FD4\u56DE\u53C2\u6570</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;created_time&quot;: &quot;2021-02-19T15:30:20.968525+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-02-19T15:30:20.968532+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;ccn&quot;: 22,
                &quot;g_cc_hash&quot;: null,
                &quot;cc_hash&quot;: null,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;func_name&quot;: &quot;test_func&quot;,
                &quot;func_param_num&quot;: 4,
                &quot;long_name&quot;: &quot;test_func( project , result_data , scan , task_params )&quot;,
                &quot;change_type&quot;: 0,
                &quot;status&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author,author2&quot;,
                &quot;is_tapdbug&quot;: false,
                &quot;ignore_time&quot;: null,
                &quot;is_latest&quot;: true,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2020-03-18T19:46:48+08:00&quot;,
                &quot;diff_ccn&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/ccfiles/&lt;file_id&gt;/ccissues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-1" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>status</td><td>str</td><td>\u95EE\u9898\u72B6\u6001\uFF0C1\u4E3A\u9700\u8981\u5173\u6CE8\uFF0C2\u4E3A\u65E0\u9700\u5173\u6CE8\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>ccn_gte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>ccn_lte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;created_time&quot;: &quot;2021-02-19T15:30:20.968525+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-02-19T15:30:20.968532+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;ccn&quot;: 22,
                &quot;g_cc_hash&quot;: null,
                &quot;cc_hash&quot;: null,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;func_name&quot;: &quot;test_func&quot;,
                &quot;func_param_num&quot;: 4,
                &quot;long_name&quot;: &quot;test_func( project , result_data , scan , task_params )&quot;,
                &quot;change_type&quot;: 0,
                &quot;status&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author,author2&quot;,
                &quot;is_tapdbug&quot;: false,
                &quot;ignore_time&quot;: null,
                &quot;is_latest&quot;: true,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2020-03-18T19:46:48+08:00&quot;,
                &quot;diff_ccn&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/ccissues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-2" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>status</td><td>str</td><td>\u95EE\u9898\u72B6\u6001\uFF0C1\u4E3A\u9700\u8981\u5173\u6CE8\uFF0C2\u4E3A\u65E0\u9700\u5173\u6CE8\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>ccn_gte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>ccn_lte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;created_time&quot;: &quot;2021-02-19T15:30:20.968525+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-02-19T15:30:20.968532+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;ccn&quot;: 22,
                &quot;g_cc_hash&quot;: null,
                &quot;cc_hash&quot;: null,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;func_name&quot;: &quot;test_func&quot;,
                &quot;func_param_num&quot;: 4,
                &quot;long_name&quot;: &quot;test_func( project , result_data , scan , task_params )&quot;,
                &quot;change_type&quot;: 0,
                &quot;status&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author,author2&quot;,
                &quot;is_tapdbug&quot;: false,
                &quot;ignore_time&quot;: null,
                &quot;is_latest&quot;: true,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2020-03-18T19:46:48+08:00&quot;,
                &quot;diff_ccn&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/scans/&lt;scan_id&gt;/ccfiles/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-3" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u5DF2\u5904\u7406\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>scan_open_id</td><td>int</td><td>\u53D1\u73B0\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>scan_close_id</td><td>int</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>worse</td><td>boolean</td><td>\u5708\u590D\u6742\u5EA6\u662F\u5426\u6076\u5316</td></tr><tr><td>over_cc_sum_gte</td><td>int</td><td>\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_sum_lte</td><td>int</td><td>\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5927\u503C</td></tr><tr><td>over_cc_avg_gte</td><td>int</td><td>\u5E73\u5747\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_avg_lte</td><td>int</td><td>\u5E73\u5747\u5708\u590D\u6742\u5EA6\u603B\u548C\u6700\u5927\u503C</td></tr><tr><td>over_cc_func_count_gte</td><td>int</td><td>\u8D85\u6807\u5708\u590D\u6742\u5EA6\u51FD\u6570\u4E2A\u6570\u6700\u5C0F\u503C</td></tr><tr><td>over_cc_func_count_lte</td><td>int</td><td>\u8D85\u6807\u5708\u590D\u6742\u5EA6\u51FD\u6570\u4E2A\u6570\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-2" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 32,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;tapd_url&quot;: null,
                &quot;created_time&quot;: &quot;2020-06-02T10:59:09.418250+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2020-06-03T16:17:40.892224+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;over_func_cc&quot;: 0,
                &quot;over_cc_sum&quot;: 0,
                &quot;over_cc_avg&quot;: 0,
                &quot;over_cc_func_count&quot;: 0,
                &quot;diff_over_func_cc&quot;: 0,
                &quot;diff_over_cc_sum&quot;: 0,
                &quot;diff_over_cc_avg&quot;: 0,
                &quot;diff_over_cc_func_count&quot;: 0,
                &quot;worse&quot;: false,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;state&quot;: 3,
                &quot;change_type&quot;: 0,
                &quot;last_modifier&quot;: &quot;author1&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author1;author2&quot;,
                &quot;file_owners&quot;: null,
                &quot;language&quot;: &quot;python&quot;,
                &quot;tapd_ws_id&quot;: null,
                &quot;tapd_bug_id&quot;: null,
                &quot;revision&quot;: null,
                &quot;ci_time&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: 2
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u6587\u4EF6\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/scans/&lt;scan_id&gt;/ccfiles/&lt;file_id&gt;/ccissues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-4" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>status</td><td>str</td><td>\u95EE\u9898\u72B6\u6001\uFF0C1\u4E3A\u9700\u8981\u5173\u6CE8\uFF0C2\u4E3A\u65E0\u9700\u5173\u6CE8\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>ccn_gte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>ccn_lte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-3" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;created_time&quot;: &quot;2021-02-19T15:30:20.968525+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-02-19T15:30:20.968532+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;ccn&quot;: 22,
                &quot;g_cc_hash&quot;: null,
                &quot;cc_hash&quot;: null,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;func_name&quot;: &quot;test_func&quot;,
                &quot;func_param_num&quot;: 4,
                &quot;long_name&quot;: &quot;test_func( project , result_data , scan , task_params )&quot;,
                &quot;change_type&quot;: 0,
                &quot;status&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author,author2&quot;,
                &quot;is_tapdbug&quot;: false,
                &quot;ignore_time&quot;: null,
                &quot;is_latest&quot;: true,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2020-03-18T19:46:48+08:00&quot;,
                &quot;diff_ccn&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u6307\u5B9A\u626B\u63CF\u7684\u5708\u590D\u6742\u5EA6\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/scans/&lt;scan_id&gt;/ccissues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-5" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>status</td><td>str</td><td>\u95EE\u9898\u72B6\u6001\uFF0C1\u4E3A\u9700\u8981\u5173\u6CE8\uFF0C2\u4E3A\u65E0\u9700\u5173\u6CE8\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u53D8\u5316\u60C5\u51B5\uFF0C0\u4E3A\u65E0\uFF0C1\u4E3A\u65B0\u589E\uFF0C2\u4E3A\u5220\u9664\uFF0C3\u4E3A\u65E0\u53D8\u5316\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>ccn_gte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5C0F\u503C</td></tr><tr><td>ccn_lte</td><td>str</td><td>\u5708\u590D\u6742\u5EA6\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-4" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;created_time&quot;: &quot;2021-02-19T15:30:20.968525+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-02-19T15:30:20.968532+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;ccn&quot;: 22,
                &quot;g_cc_hash&quot;: null,
                &quot;cc_hash&quot;: null,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;func_name&quot;: &quot;test_func&quot;,
                &quot;func_param_num&quot;: 4,
                &quot;long_name&quot;: &quot;test_func( project , result_data , scan , task_params )&quot;,
                &quot;change_type&quot;: 0,
                &quot;status&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;author&quot;: null,
                &quot;related_modifiers&quot;: &quot;author,author2&quot;,
                &quot;is_tapdbug&quot;: false,
                &quot;ignore_time&quot;: null,
                &quot;is_latest&quot;: true,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2020-03-18T19:46:48+08:00&quot;,
                &quot;diff_ccn&quot;: null,
                &quot;project&quot;: 1,
                &quot;scan_open&quot;: 1,
                &quot;scan_close&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u91CD\u590D\u6587\u4EF6\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u91CD\u590D\u6587\u4EF6\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u91CD\u590D\u6587\u4EF6\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/dupfiles/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-6" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>issue__state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u53EF\u5FFD\u7565\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>change_type</td><td>str</td><td>\u91CD\u590D\u6587\u4EF6\u66F4\u6539\u7C7B\u578B\uFF0Cadd\u4E3A\u65B0\u589E\uFF0Cdel\u4E3A\u5220\u9664\uFF0Cmod\u4E3A\u5220\u9664\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3Aadd,del,mod</td></tr><tr><td>issue__owner</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>last_modifier</td><td>str</td><td>\u6700\u8FD1\u4FEE\u6539\u4EBA</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>duplicate_rate_gte</td><td>int</td><td>\u91CD\u590D\u7387\u6700\u5C0F\u503C</td></tr><tr><td>duplicate_rate_lte</td><td>int</td><td>\u91CD\u590D\u7387\u6700\u5927\u503C</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-5" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-5" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;issue&quot;: {
                    &quot;id&quot;: 1,
                    &quot;state&quot;: 1,
                    &quot;owner&quot;: &quot;author&quot;
                },
                &quot;project_id&quot;: 1,
                &quot;scan_id&quot;: 1,
                &quot;issue_id&quot;: 1,
                &quot;issue_state&quot;: 1,
                &quot;issue_owner&quot;: &quot;author&quot;,
                &quot;dir_path&quot;: &quot;test&quot;,
                &quot;file_name&quot;: &quot;demo.py&quot;,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;duplicate_rate&quot;: 4.63,
                &quot;total_line_count&quot;: 259,
                &quot;total_duplicate_line_count&quot;: 12,
                &quot;distinct_hash_num&quot;: 1,
                &quot;block_num&quot;: 1,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;change_type&quot;: null,
                &quot;scm_revision&quot;: &quot;12345678abc&quot;,
                &quot;is_latest&quot;: true
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
} 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u91CD\u590D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u91CD\u590D\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u91CD\u590D\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/dupfiles/&lt;file_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-6" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-6" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;repo&quot;: 1,
        &quot;issue&quot;: {
            &quot;id&quot;: 1,
            &quot;state&quot;: 1,
            &quot;owner&quot;: &quot;author&quot;
        },
        &quot;blocks&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;duplicate_file&quot;: 1,
                &quot;project_id&quot;: 1,
                &quot;scan_id&quot;: 1,
                &quot;duplicate_file_id&quot;: 1,
                &quot;token_num&quot;: 120,
                &quot;duplicate_times&quot;: 2,
                &quot;duplicate_rate&quot;: 4.63,
                &quot;start_line_num&quot;: 216,
                &quot;end_line_num&quot;: 227,
                &quot;duplicate_line_count&quot;: 12,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;change_type&quot;: null,
                &quot;related_modifiers&quot;: &quot;author&quot;
            }
        ],
        &quot;duplicate_rate_trend&quot;: 0.0,
        &quot;project_id&quot;: 1815,
        &quot;scan_id&quot;: 488,
        &quot;issue_id&quot;: 3,
        &quot;issue_state&quot;: 1,
        &quot;issue_owner&quot;: &quot;author&quot;,
        &quot;dir_path&quot;: &quot;test&quot;,
        &quot;file_name&quot;: &quot;demo.py&quot;,
        &quot;file_path&quot;: &quot;test/demo.py&quot;,
        &quot;duplicate_rate&quot;: 4.63,
        &quot;total_line_count&quot;: 259,
        &quot;total_duplicate_line_count&quot;: 12,
        &quot;distinct_hash_num&quot;: 1,
        &quot;block_num&quot;: 1,
        &quot;last_modifier&quot;: &quot;author&quot;,
        &quot;change_type&quot;: null,
        &quot;scm_revision&quot;: &quot;xxx&quot;,
        &quot;is_latest&quot;: true
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u91CD\u590D\u5757\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u91CD\u590D\u5757\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u91CD\u590D\u5757\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/dupfiles/&lt;file_id&gt;/blocks/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-7" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-7" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;duplicate_file&quot;: 1,
                &quot;project_id&quot;: 1,
                &quot;scan_id&quot;: 1,
                &quot;duplicate_file_id&quot;: 1,
                &quot;token_num&quot;: 120,
                &quot;duplicate_times&quot;: 2,
                &quot;duplicate_rate&quot;: 4.63,
                &quot;start_line_num&quot;: 216,
                &quot;end_line_num&quot;: 227,
                &quot;duplicate_line_count&quot;: 12,
                &quot;last_modifier&quot;: &quot;author&quot;,
                &quot;change_type&quot;: null,
                &quot;related_modifiers&quot;: &quot;author&quot;
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6587\u4EF6\u884C\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6587\u4EF6\u884C\u6570\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u6587\u4EF6\u884C\u6570\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/clocfiles/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-7" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-7" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>change_type</td><td>str</td><td>\u6539\u53D8\u7C7B\u578B\uFF08add\u3001mod\u3001del\uFF09\uFF0C\u652F\u6301\u591A\u503C\uFF0C\u4F7F\u7528\u82F1\u6587\u9017\u53F7&#39;,&#39;\u5206\u9694</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-8" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-8" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: &quot;&quot;,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;code_line_num&quot;: 108587,
                &quot;comment_line_num&quot;: 0,
                &quot;blank_line_num&quot;: 0,
                &quot;total_line_num&quot;: 108587,
                &quot;add_code_line_num&quot;: 108587,
                &quot;add_comment_line_num&quot;: 0,
                &quot;add_blank_line_num&quot;: 0,
                &quot;add_total_line_num&quot;: 108587,
                &quot;mod_code_line_num&quot;: 0,
                &quot;mod_comment_line_num&quot;: 0,
                &quot;mod_blank_line_num&quot;: 0,
                &quot;mod_total_line_num&quot;: 0,
                &quot;del_code_line_num&quot;: 0,
                &quot;del_comment_line_num&quot;: 0,
                &quot;del_blank_line_num&quot;: 0,
                &quot;del_total_line_num&quot;: 0,
                &quot;project_id&quot;: 1,
                &quot;scan_id&quot;: 1,
                &quot;is_latest&quot;: true,
                &quot;dir_path&quot;: &quot;test&quot;,
                &quot;file_name&quot;: &quot;test.json&quot;,
                &quot;language&quot;: &quot;JSON&quot;,
                &quot;change_type&quot;: &quot;add&quot;
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u8BED\u8A00\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u8BED\u8A00\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u9879\u76EE\u7684\u8BED\u8A00\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codemetric/cloclangs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-9" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-9" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 2,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;code_line_num&quot;: 9753,
                &quot;comment_line_num&quot;: 4220,
                &quot;blank_line_num&quot;: 2454,
                &quot;total_line_num&quot;: 16427,
                &quot;add_code_line_num&quot;: 9753,
                &quot;add_comment_line_num&quot;: 4220,
                &quot;add_blank_line_num&quot;: 2454,
                &quot;add_total_line_num&quot;: 16427,
                &quot;mod_code_line_num&quot;: 0,
                &quot;mod_comment_line_num&quot;: 0,
                &quot;mod_blank_line_num&quot;: 0,
                &quot;mod_total_line_num&quot;: 0,
                &quot;del_code_line_num&quot;: 0,
                &quot;del_comment_line_num&quot;: 0,
                &quot;del_blank_line_num&quot;: 0,
                &quot;del_total_line_num&quot;: 0,
                &quot;project_id&quot;: 1815,
                &quot;scan_id&quot;: 695,
                &quot;is_latest&quot;: true,
                &quot;name&quot;: &quot;Python&quot;,
                &quot;file_num&quot;: 165
            },
            {
                &quot;id&quot;: 2,
                &quot;code_line_num&quot;: 379,
                &quot;comment_line_num&quot;: 0,
                &quot;blank_line_num&quot;: 153,
                &quot;total_line_num&quot;: 532,
                &quot;add_code_line_num&quot;: 379,
                &quot;add_comment_line_num&quot;: 0,
                &quot;add_blank_line_num&quot;: 153,
                &quot;add_total_line_num&quot;: 532,
                &quot;mod_code_line_num&quot;: 0,
                &quot;mod_comment_line_num&quot;: 0,
                &quot;mod_blank_line_num&quot;: 0,
                &quot;mod_total_line_num&quot;: 0,
                &quot;del_code_line_num&quot;: 0,
                &quot;del_comment_line_num&quot;: 0,
                &quot;del_blank_line_num&quot;: 0,
                &quot;del_total_line_num&quot;: 0,
                &quot;project_id&quot;: 1815,
                &quot;scan_id&quot;: 695,
                &quot;is_latest&quot;: true,
                &quot;name&quot;: &quot;Markdown&quot;,
                &quot;file_num&quot;: 7
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,61);function e(u,r){return a}var o=n(t,[["render",e],["__file","\u4EE3\u7801\u5EA6\u91CF\u6570\u636E\u6A21\u5757\u63A5\u53E3.html.vue"]]);export{o as default};
