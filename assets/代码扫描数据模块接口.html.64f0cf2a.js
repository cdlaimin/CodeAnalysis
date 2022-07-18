import{_ as n,e as t}from"./app.d1b9ffe1.js";const s={},a=t(`<h1 id="\u4EE3\u7801\u626B\u63CF\u6570\u636E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u626B\u63CF\u6570\u636E\u7BA1\u7406" aria-hidden="true">#</a> \u4EE3\u7801\u626B\u63CF\u6570\u636E\u7BA1\u7406</h1><h2 id="\u67E5\u770B\u626B\u63CF\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u626B\u63CF\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u626B\u63CF\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/issues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u5DF2\u5904\u7406\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>severity</td><td>str</td><td>\u4E25\u91CD\u7A0B\u5EA6, 1\u4E3A\u81F4\u547D\uFF0C2\u4E3A\u9519\u8BEF\uFF0C3\u4E3A\u8B66\u544A\uFF0C4\u4E3A\u63D0\u793A\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3,4</td></tr><tr><td>resolution</td><td>str</td><td>\u89E3\u51B3\u65B9\u5F0F, 0\u4E3A\u65E0\uFF0C1\u4E3A\u4FEE\u590D\uFF0C2\u4E3A\u65E0\u9700\u4FEE\u590D\uFF0C3\u4E3A\u8BEF\u62A5\uFF0C4\u4E3A\u91CD\u590D\u5355\u8FC7\u6EE4\uFF0C5\u4E3A\u8DEF\u5F84\u8FC7\u6EE4\uFF0C6\u4E3A\u89C4\u5219\u79FB\u9664</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>scan_open</td><td>int</td><td>\u53D1\u73B0\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>scan_fix</td><td>int</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>ci_time_gte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u8D77\u59CB\u65F6\u95F4\uFF0C\u683C\u5F0F\u4E3A&quot;2021-01-01 00:00:00&quot;</td></tr><tr><td>ci_time_lte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u7ED3\u675F\u65F6\u95F4</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>checkrule_display_name</td><td>str</td><td>\u68C0\u67E5\u89C4\u5219\u540D</td></tr><tr><td>checkpackage</td><td>int</td><td>\u95EE\u9898\u6240\u5C5E\u7684\u89C4\u5219\u5305</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;project&quot;: 1,
                &quot;repo&quot;: 1,
                &quot;checkrule_real_name&quot;: &quot;xxx&quot;,
                &quot;checkrule_display_name&quot;: &quot;xxx&quot;,
                &quot;checktool_name&quot;: &quot;xxx&quot;,
                &quot;msg&quot;: &quot;xxx&quot;,
                &quot;state&quot;: 3,
                &quot;resolution&quot;: 1,
                &quot;author&quot;: &quot;author&quot;,
                &quot;author_email&quot;: null,
                &quot;severity&quot;: 2,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2021-02-02T13:31:38+08:00&quot;,
                &quot;file_owners&quot;: null,
                &quot;is_external&quot;: false,
                &quot;scm_url&quot;: &quot;&quot;,
                &quot;real_file_path&quot;: &quot;&quot;,
                &quot;scan_open&quot;: 1,
                &quot;scan_fix&quot;: 2,
                &quot;fixed_time&quot;: &quot;2021-02-19T15:25:15.152350+08:00&quot;
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u67E5\u770B\u95EE\u9898\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u95EE\u9898\u8BE6\u60C5" aria-hidden="true">#</a> \u67E5\u770B\u95EE\u9898\u8BE6\u60C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/issues/&lt;issue_id&gt;/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;issue_details&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;issue_refers&quot;: [],
                &quot;creator&quot;: null,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;issuedetail_uuid&quot;: &quot;0fcc376e-7283-11eb-bd53-5254005e71ca&quot;,
                &quot;checkrule_real_name&quot;: &quot;xxx&quot;,
                &quot;checktool_name&quot;: &quot;xxx&quot;,
                &quot;author&quot;: &quot;author&quot;,
                &quot;author_email&quot;: null,
                &quot;line&quot;: 1809,
                &quot;column&quot;: 15,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2021-02-02T13:31:38+08:00&quot;,
                &quot;real_revision&quot;: &quot;&quot;,
                &quot;created_time&quot;: &quot;2021-02-19T15:21:19.625658+08:00&quot;,
                &quot;modified_time&quot;: &quot;2021-02-19T15:21:19.625662+08:00&quot;,
                &quot;issue&quot;: null,
                &quot;project&quot;: 1
            }
        ],
        &quot;is_external&quot;: false,
        &quot;repo&quot;: 1,
        &quot;author&quot;: &quot;author&quot;,
        &quot;created_time&quot;: &quot;2021-02-19T15:21:19.625685+08:00&quot;,
        &quot;creator&quot;: null,
        &quot;modifier&quot;: null,
        &quot;deleted_time&quot;: null,
        &quot;deleter&quot;: null,
        &quot;file_path&quot;: &quot;test/demo.py&quot;,
        &quot;file_hash&quot;: &quot;xxx&quot;,
        &quot;scm_url&quot;: &quot;&quot;,
        &quot;real_file_path&quot;: &quot;&quot;,
        &quot;checkrule_gid&quot;: 1,
        &quot;checkrule_real_name&quot;: &quot;xxx&quot;,
        &quot;checkrule_display_name&quot;: &quot;xxx&quot;,
        &quot;checkrule_rule_title&quot;: &quot;xxx&quot;,
        &quot;checktool_name&quot;: &quot;xxx&quot;,
        &quot;category&quot;: 7,
        &quot;state&quot;: 3,
        &quot;resolution&quot;: 1,
        &quot;scan_revision&quot;: null,
        &quot;severity&quot;: 2,
        &quot;language&quot;: &quot;python&quot;,
        &quot;revision&quot;: &quot;revision&quot;,
        &quot;ci_time&quot;: &quot;2021-02-02T13:31:38+08:00&quot;,
        &quot;file_owners&quot;: null,
        &quot;fixed_time&quot;: &quot;2021-02-19T15:25:15.152350+08:00&quot;,
        &quot;tapd_ws_id&quot;: null,
        &quot;tapd_bug_id&quot;: null,
        &quot;modified_time&quot;: &quot;2021-02-19T15:25:17.807478+08:00&quot;,
        &quot;project&quot;: 1,
        &quot;scan_open&quot;: 1,
        &quot;scan_fix&quot;: 2
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;xxx&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="\u67E5\u770B\u6BCF\u6B21\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6BCF\u6B21\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6BCF\u6B21\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/scans/&lt;scan_id&gt;/issues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-1" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u5DF2\u5904\u7406\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>severity</td><td>str</td><td>\u4E25\u91CD\u7A0B\u5EA6, 1\u4E3A\u81F4\u547D\uFF0C2\u4E3A\u9519\u8BEF\uFF0C3\u4E3A\u8B66\u544A\uFF0C4\u4E3A\u63D0\u793A\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3,4</td></tr><tr><td>resolution</td><td>str</td><td>\u89E3\u51B3\u65B9\u5F0F, 0\u4E3A\u65E0\uFF0C1\u4E3A\u4FEE\u590D\uFF0C2\u4E3A\u65E0\u9700\u4FEE\u590D\uFF0C3\u4E3A\u8BEF\u62A5\uFF0C4\u4E3A\u91CD\u590D\u5355\u8FC7\u6EE4\uFF0C5\u4E3A\u8DEF\u5F84\u8FC7\u6EE4\uFF0C6\u4E3A\u89C4\u5219\u79FB\u9664</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>scan_open_id</td><td>int</td><td>\u53D1\u73B0\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>scan_fix_id</td><td>int</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>ci_time_gte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u8D77\u59CB\u65F6\u95F4</td></tr><tr><td>ci_time_lte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u7ED3\u675F\u65F6\u95F4</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>checkrule_display_name</td><td>str</td><td>\u68C0\u67E5\u89C4\u5219\u540D</td></tr><tr><td>checkpackage</td><td>int</td><td>\u95EE\u9898\u6240\u5C5E\u7684\u89C4\u5219\u5305</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-2" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo_id&quot;: 1,
                &quot;project_id&quot;: 1,
                &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;scm_url&quot;: &quot;&quot;,
                &quot;real_file_path&quot;: &quot;&quot;,
                &quot;line&quot;: 21,
                &quot;column&quot;: 68,
                &quot;checkrule_gid&quot;: 1,
                &quot;checkrule_real_name&quot;: &quot;xxx&quot;,
                &quot;checkrule_display_name&quot;: &quot;xxx&quot;,
                &quot;checkrule_rule_title&quot;: &quot;xxx&quot;,
                &quot;checktool_name&quot;: &quot;xxx&quot;,
                &quot;category&quot;: 7,
                &quot;msg&quot;: &quot;xxx&quot;,
                &quot;state&quot;: 1,
                &quot;resolution&quot;: null,
                &quot;author&quot;: &quot;author&quot;,
                &quot;scan_open_id&quot;: 1,
                &quot;scan_fix_id&quot;: null,
                &quot;issuedetail_uuid&quot;: &quot;26d7ba88-8268-11eb-a304-5254005e71ca&quot;,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;real_revision&quot;: &quot;&quot;,
                &quot;severity&quot;: 2,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2019-07-01T10:28:19+08:00&quot;,
                &quot;file_owners&quot;: null,
                &quot;created_time&quot;: &quot;2021-03-11T20:49:00.539537+08:00&quot;,
                &quot;fixed_time&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;xxx&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="\u67E5\u770B\u6307\u5B9Acr\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9Acr\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9ACR\u626B\u63CF\u7684\u95EE\u9898\u5217\u8868</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/codelint/crscans/&lt;scan_id&gt;/issues/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570-2" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>state</td><td>str</td><td>\u95EE\u9898\u72B6\u6001, 1\u4E3A\u672A\u5904\u7406\uFF0C2\u4E3A\u5DF2\u5904\u7406\uFF0C3\u4E3A\u5173\u95ED\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3</td></tr><tr><td>severity</td><td>str</td><td>\u4E25\u91CD\u7A0B\u5EA6, 1\u4E3A\u81F4\u547D\uFF0C2\u4E3A\u9519\u8BEF\uFF0C3\u4E3A\u8B66\u544A\uFF0C4\u4E3A\u63D0\u793A\uFF0C\u53EF\u591A\u9009\uFF0C\u683C\u5F0F\u4E3A1,2,3,4</td></tr><tr><td>resolution</td><td>str</td><td>\u89E3\u51B3\u65B9\u5F0F, 0\u4E3A\u65E0\uFF0C1\u4E3A\u4FEE\u590D\uFF0C2\u4E3A\u65E0\u9700\u4FEE\u590D\uFF0C3\u4E3A\u8BEF\u62A5\uFF0C4\u4E3A\u91CD\u590D\u5355\u8FC7\u6EE4\uFF0C5\u4E3A\u8DEF\u5F84\u8FC7\u6EE4\uFF0C6\u4E3A\u89C4\u5219\u79FB\u9664</td></tr><tr><td>author</td><td>str</td><td>\u95EE\u9898\u8D23\u4EFB\u4EBA</td></tr><tr><td>scan_open_id</td><td>int</td><td>\u53D1\u73B0\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>scan_fix_id</td><td>int</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u626B\u63CF\u7F16\u53F7</td></tr><tr><td>ci_time_gte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u8D77\u59CB\u65F6\u95F4</td></tr><tr><td>ci_time_lte</td><td>str</td><td>\u4FEE\u590D\u95EE\u9898\u7684\u7ED3\u675F\u65F6\u95F4</td></tr><tr><td>file_path</td><td>str</td><td>\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td>checkrule_display_name</td><td>str</td><td>\u68C0\u67E5\u89C4\u5219\u540D</td></tr><tr><td>checkpackage</td><td>int</td><td>\u95EE\u9898\u6240\u5C5E\u7684\u89C4\u5219\u5305</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-3" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;repo_id&quot;: 1,
                &quot;project_id&quot;: 1,
                &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
                &quot;file_path&quot;: &quot;test/demo.py&quot;,
                &quot;scm_url&quot;: &quot;&quot;,
                &quot;real_file_path&quot;: &quot;&quot;,
                &quot;line&quot;: 21,
                &quot;column&quot;: 68,
                &quot;checkrule_gid&quot;: 1,
                &quot;checkrule_real_name&quot;: &quot;xxx&quot;,
                &quot;checkrule_display_name&quot;: &quot;xxx&quot;,
                &quot;checkrule_rule_title&quot;: &quot;xxx&quot;,
                &quot;checktool_name&quot;: &quot;xxx&quot;,
                &quot;category&quot;: 7,
                &quot;msg&quot;: &quot;xxx&quot;,
                &quot;state&quot;: 1,
                &quot;resolution&quot;: null,
                &quot;author&quot;: &quot;author&quot;,
                &quot;scan_open_id&quot;: 1,
                &quot;scan_fix_id&quot;: null,
                &quot;issuedetail_uuid&quot;: &quot;26d7ba88-8268-11eb-a304-5254005e71ca&quot;,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;real_revision&quot;: &quot;&quot;,
                &quot;severity&quot;: 2,
                &quot;language&quot;: &quot;python&quot;,
                &quot;revision&quot;: &quot;revision&quot;,
                &quot;ci_time&quot;: &quot;2019-07-01T10:28:19+08:00&quot;,
                &quot;file_owners&quot;: null,
                &quot;created_time&quot;: &quot;2021-03-11T20:49:00.539537+08:00&quot;,
                &quot;fixed_time&quot;: null
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;xxx&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,23);function e(u,r){return a}var l=n(s,[["render",e],["__file","\u4EE3\u7801\u626B\u63CF\u6570\u636E\u6A21\u5757\u63A5\u53E3.html.vue"]]);export{l as default};
