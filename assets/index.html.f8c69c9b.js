import{_ as n}from"./API\u7684\u4E2A\u4EBA\u4EE4\u724C.c46f3130.js";import{_ as s,e as a}from"./app.d1b9ffe1.js";const e={},t=a(`<h1 id="\u63A5\u53E3\u8C03\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8C03\u7528\u8BF4\u660E" aria-hidden="true">#</a> \u63A5\u53E3\u8C03\u7528\u8BF4\u660E</h1><h2 id="\u63A5\u53E3\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5730\u5740" aria-hidden="true">#</a> \u63A5\u53E3\u5730\u5740</h2><p><code>http://{host}/server/</code></p><p>\u6CE8\uFF1Ahost \u6307\u5F53\u524D\u6D4F\u89C8\u5668\u8BBF\u95EE\u8BE5\u6587\u6863\u7684 URL \u57DF\u540D\u90E8\u5206\u3002</p><h2 id="\u63A5\u53E3\u9274\u6743\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u9274\u6743\u65B9\u5F0F" aria-hidden="true">#</a> \u63A5\u53E3\u9274\u6743\u65B9\u5F0F</h2><p>\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u9700\u8981\u5728\u5934\u90E8\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u683C\u5F0F\u5F62\u5F0F\uFF0C\u5BF9\u5E94\u7684 value \u8BF7\u770B\u4E0B\u9762\u83B7\u53D6\u65B9\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;Authorization&quot;: &quot;\u5F53\u524Duser\u7684token&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u83B7\u53D6 token \u4F4D\u7F6E\uFF08\u4E2A\u4EBA\u4E2D\u5FC3-\u4E2A\u4EBA\u4EE4\u724C\uFF09\uFF1A</p><p><img src="`+n+`" alt="API\u7684\u4E2A\u4EBA\u4EE4\u724C"></p><h2 id="\u83B7\u53D6-org-sid-\u548C-project-team-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-org-sid-\u548C-project-team-\u4FE1\u606F" aria-hidden="true">#</a> \u83B7\u53D6 org_sid \u548C project_team \u4FE1\u606F</h2><p>\u901A\u8FC7\u5E73\u53F0\u8BBF\u95EE\u5177\u4F53\u4EE3\u7801\u5E93\u626B\u63CF\u60C5\u51B5\u65F6\uFF0C\u53EF\u4ECE URL \u4E2D\u83B7\u53D6\u5BF9\u5E94 org_sid \u548C project_team \u5B57\u6BB5\uFF0C\u67E5\u770B\u65B9\u5F0F\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><p>\u4EE3\u7801\u5E93\u626B\u63CF\u5730\u5740\uFF1A<code>http://{host}/t/xxx/p/yyy/code-analysis/repos/1/projects?limit=10&amp;offset=0</code></p><p>\u5176\u4E2D\uFF0Corg_sid \u4E3A<code>xxx</code>\u5B57\u6BB5\uFF0Cproject_team \u4E3A <code>yyy</code>\u5B57\u6BB5</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import requests
# \u5047\u8BBE\uFF1A
# \u5F53\u524D\u57DF\u540D\u4E3Ahttp://tca.com/\uFF0C\u5F53\u524Dorg_sid\u4E3Ahelloworld
# \u83B7\u53D6helloworld\u56E2\u961F\u4E0B\u7684hellotca\u9879\u76EE\u4E0B\u767B\u8BB0\u7684\u4EE3\u7801\u5E93
url=&quot;http://tca.com/server/main/api/orgs/helloworld/teams/hellotca/repos/?limit=12&amp;offset=0&quot;
headers = {
  &quot;Authorization&quot;: token,
}

response = requests.get(url, headers=headers)
print(response.json())
# \u7ED3\u679C\u5982\u4E0B\uFF1A
{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 23,
                &quot;name&quot;: &quot;repo_name&quot;,
                &quot;scm_url&quot;: &quot;http://git.repo.com/group/repo_name&quot;,
                &quot;scm_type&quot;: &quot;git&quot;,
                &quot;branch_count&quot;: 1,
                &quot;scheme_count&quot;: 1,
                &quot;job_count&quot;: 1,
                &quot;created_time&quot;: &quot;2021-05-14 02:34:44.509118+00:00&quot;,
                &quot;recent_active&quot;: {
                    &quot;id&quot;: 27,
                    &quot;branch_name&quot;: &quot;master&quot;,
                    &quot;active_time&quot;: &quot;2021-05-14 02:34:44.509118+00:00&quot;,
                    &quot;total_line_num&quot;: 1,
                    &quot;code_line_num&quot;: 1
                },
                &quot;created_from&quot;: &quot;tca&quot;,
                &quot;creator&quot;: {
                    &quot;username&quot;: &quot;author&quot;,
                    &quot;nickname&quot;: &quot;author&quot;,
                    &quot;status&quot;: 1,
                    &quot;avatar&quot;: &quot;url&quot;,
                    &quot;org&quot;: &quot;org_name&quot;
                },
                &quot;symbol&quot;: null,
                &quot;scm_auth&quot;: {
                    &quot;id&quot;: 1,
                    &quot;scm_account&quot;: null,
                    &quot;scm_oauth&quot;: null,
                    &quot;scm_ssh&quot;: {
                        &quot;id&quot;: 1,
                        &quot;name&quot;: &quot;test&quot;,
                        &quot;scm_platform&quot;: 2,
                        &quot;scm_platform_desc&quot;: null,
                        &quot;user&quot;: {
                            &quot;username&quot;: &quot;username&quot;,
                            &quot;nickname&quot;: &quot;nickname&quot;,
                            &quot;status&quot;: 1,
                            &quot;avatar&quot;: &quot;url&quot;,
                            &quot;org&quot;: &quot;org_name&quot;
                        }
                    },
                    &quot;auth_type&quot;: &quot;ssh_token&quot;,
                    &quot;created_time&quot;: &quot;2021-05-14T10:34:44.552859+08:00&quot;,
                    &quot;modified_time&quot;: &quot;2021-05-14T10:34:44.552887+08:00&quot;
                },
                &quot;project_team&quot;: {
                    &quot;name&quot;: &quot;test&quot;,
                    &quot;display_name&quot;: &quot;\u6D4B\u8BD5&quot;,
                    &quot;status&quot;: 1,
                    &quot;org_sid&quot;: &quot;test&quot;
                }
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h2 id="\u5206\u9875\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u65B9\u5F0F" aria-hidden="true">#</a> \u5206\u9875\u65B9\u5F0F</h2><p>\u5E73\u53F0\u8FD4\u56DE\u7684\u6570\u636E\u5206\u9875\u683C\u5F0F\u662F\u4F7F\u7528<code>limit</code>\u548C<code>offset</code>\u53C2\u6570\u8FDB\u884C\u5206\u9875\u5904\u7406</p><p>\u6BD4\u5982\uFF1A<code>server/main/api/orgs/&lt;org_sid&gt;/teams/?limit=12&amp;offset=12</code>\u83B7\u53D6\u5F97\u5230\u7684\u6570\u636E\u662F\u4ECE\u7B2C 13 \u6761\u5F00\u59CB\u83B7\u53D6</p>`,18);function u(r,o){return t}var i=s(e,[["render",u],["__file","index.html.vue"]]);export{i as default};
