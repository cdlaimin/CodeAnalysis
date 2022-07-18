import{_ as n,e as s}from"./app.d1b9ffe1.js";const a={},e=s(`<h1 id="\u4EE3\u7801\u626B\u63CF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u626B\u63CF\u7BA1\u7406" aria-hidden="true">#</a> \u4EE3\u7801\u626B\u63CF\u7BA1\u7406</h1><h2 id="\u67E5\u770B\u9879\u76EE\u626B\u63CF\u6700\u65B0\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u626B\u63CF\u6700\u65B0\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u626B\u63CF\u6700\u65B0\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u8FD4\u56DE\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;lintscan&quot;: {
        &quot;issue_open_num&quot;: 74,
        &quot;issue_fix_num&quot;: 439,
        &quot;issue_detail_num&quot;: 310,
        &quot;scan&quot;: {
            &quot;id&quot;: 1,
            &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
            &quot;execute_time&quot;: &quot;00:02:17.844712&quot;
        },
        &quot;current_scan&quot;: {
            &quot;active_category_detail&quot;: {
                &quot;convention&quot;: 70,
                &quot;other&quot;: 4
            },
            &quot;active_severity_detail&quot;: {
                &quot;error&quot;: 69,
                &quot;warning&quot;: 5
            },
            &quot;issue_open_num&quot;: 74,
            &quot;issue_fix_num&quot;: 439
        },
        &quot;total&quot;: {
            &quot;state_detail&quot;: {
                &quot;active&quot;: 197,
                &quot;resolved&quot;: 13,
                &quot;closed&quot;: 23297
            },
            &quot;category_detail&quot;: {
                &quot;convention&quot;: {
                    &quot;active&quot;: 184,
                    &quot;resolved&quot;: 13,
                    &quot;closed&quot;: 21143
                },
                &quot;other&quot;: {
                    &quot;active&quot;: 13,
                    &quot;closed&quot;: 154
                },
                &quot;correctness&quot;: {
                    &quot;closed&quot;: 1997
                },
                &quot;performance&quot;: {
                    &quot;closed&quot;: 3
                }
            },
            &quot;severity_detail&quot;: {
                &quot;error&quot;: {
                    &quot;active&quot;: 157,
                    &quot;resolved&quot;: 11,
                    &quot;closed&quot;: 20113
                },
                &quot;warning&quot;: {
                    &quot;active&quot;: 40,
                    &quot;resolved&quot;: 2,
                    &quot;closed&quot;: 2930
                },
                &quot;info&quot;: {
                    &quot;closed&quot;: 254
                }
            }
        },
        &quot;status&quot;: 0,
        &quot;text&quot;: &quot;\u6210\u529F&quot;,
        &quot;description&quot;: null,
        &quot;scan_summary&quot;: {
            &quot;convention&quot;: {
                &quot;error&quot;: {
                    &quot;rule_count&quot;: 7,
                    &quot;active&quot;: 65
                },
                &quot;warning&quot;: {
                    &quot;rule_count&quot;: 2,
                    &quot;active&quot;: 5
                }
            },
            &quot;other&quot;: {
                &quot;error&quot;: {
                    &quot;rule_count&quot;: 1,
                    &quot;active&quot;: 4
                }
            }
        },
        &quot;total_summary&quot;: {
            &quot;correctness&quot;: {
                &quot;error&quot;: {
                    &quot;rule_count&quot;: 16,
                    &quot;closed&quot;: 1315
                },
                &quot;warning&quot;: {
                    &quot;rule_count&quot;: 10,
                    &quot;closed&quot;: 629
                },
                &quot;info&quot;: {
                    &quot;rule_count&quot;: 1,
                    &quot;closed&quot;: 53
                }
            },
            &quot;performance&quot;: {
                &quot;warning&quot;: {
                    &quot;rule_count&quot;: 1,
                    &quot;closed&quot;: 3
                }
            },
            &quot;convention&quot;: {
                &quot;error&quot;: {
                    &quot;rule_count&quot;: 42,
                    &quot;active&quot;: 149,
                    &quot;resolved&quot;: 11,
                    &quot;closed&quot;: 18778
                },
                &quot;warning&quot;: {
                    &quot;rule_count&quot;: 17,
                    &quot;active&quot;: 35,
                    &quot;resolved&quot;: 2,
                    &quot;closed&quot;: 2298
                },
                &quot;info&quot;: {
                    &quot;rule_count&quot;: 1,
                    &quot;closed&quot;: 67
                }
            },
            &quot;other&quot;: {
                &quot;error&quot;: {
                    &quot;rule_count&quot;: 2,
                    &quot;active&quot;: 8,
                    &quot;closed&quot;: 20
                },
                &quot;warning&quot;: {
                    &quot;rule_count&quot;: 1,
                    &quot;active&quot;: 5
                },
                &quot;info&quot;: {
                    &quot;rule_count&quot;: 3,
                    &quot;closed&quot;: 134
                }
            }
        }
    },
    &quot;cyclomaticcomplexityscan&quot;: {
        &quot;id&quot;: 1,
        &quot;scan_revision&quot;: &quot;scan_revision&quot;,
        &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
        &quot;default_summary&quot;: {
            &quot;min_ccn&quot;: 20,
            &quot;over_cc_func_count&quot;: 6,
            &quot;under_cc_func_count&quot;: 796,
            &quot;diff_over_cc_func_count&quot;: 0,
            &quot;over_cc_func_average&quot;: 22.333333333333332,
            &quot;cc_func_average&quot;: 2.5099750623441395,
            &quot;over_cc_sum&quot;: 14,
            &quot;cc_average_of_lines&quot;: 1.0422094841063054
        },
        &quot;custom_summary&quot;: null,
        &quot;created_time&quot;: &quot;2021-03-11T20:48:59.976947+08:00&quot;,
        &quot;creator&quot;: null,
        &quot;modified_time&quot;: &quot;2021-03-11T20:49:00.088841+08:00&quot;,
        &quot;modifier&quot;: null,
        &quot;deleted_time&quot;: null,
        &quot;deleter&quot;: null,
        &quot;last_revision&quot;: &quot;last_revision&quot;,
        &quot;diff_cc_num&quot;: 0,
        &quot;cc_open_num&quot;: 6,
        &quot;cc_average_of_lines&quot;: 1.0422094841063054,
        &quot;cc_fix_num&quot;: 0,
        &quot;worse_cc_file_num&quot;: 0,
        &quot;min_ccn&quot;: 20,
        &quot;code_line_num&quot;: 13433,
        &quot;scan&quot;: 1
    },
    &quot;duplicatescan&quot;: {
        &quot;id&quot;: 1,
        &quot;scan_revision&quot;: &quot;scan_revision&quot;,
        &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
        &quot;default_summary&quot;: {
            &quot;exhi_risk&quot;: {
                &quot;range&quot;: [
                    0.2,
                    1
                ],
                &quot;file_count&quot;: 1,
                &quot;diff&quot;: {
                    &quot;diff_file_count&quot;: 0
                }
            },
            &quot;high_risk&quot;: {
                &quot;range&quot;: [
                    0.11,
                    0.2
                ],
                &quot;file_count&quot;: 3,
                &quot;diff&quot;: {
                    &quot;diff_file_count&quot;: 0
                }
            },
            &quot;midd_risk&quot;: {
                &quot;range&quot;: [
                    0.05,
                    0.11
                ],
                &quot;file_count&quot;: 2,
                &quot;diff&quot;: {
                    &quot;diff_file_count&quot;: 0
                }
            },
            &quot;low_risk&quot;: {
                &quot;range&quot;: [
                    0,
                    0.05
                ],
                &quot;file_count&quot;: 2,
                &quot;diff&quot;: {
                    &quot;diff_file_count&quot;: 0
                }
            }
        },
        &quot;custom_summary&quot;: null,
        &quot;last_revision&quot;: &quot;last_revision&quot;,
        &quot;duplicate_file_count&quot;: 8,
        &quot;duplicate_block_count&quot;: 55,
        &quot;duplicate_line_count&quot;: 1177,
        &quot;diff_duplicate_block_count&quot;: 0,
        &quot;diff_duplicate_line_count&quot;: 0,
        &quot;close_issue_count&quot;: 0,
        &quot;new_issue_count&quot;: 0,
        &quot;reopen_issue_count&quot;: 5,
        &quot;ignored_issue_count&quot;: 0,
        &quot;duplicate_rate&quot;: 4.98,
        &quot;unique_duplicate_line_count&quot;: 1083,
        &quot;total_duplicate_line_count&quot;: 1083,
        &quot;total_line_count&quot;: 21745,
        &quot;scan&quot;: 1
    },
    &quot;clocscan&quot;: {
        &quot;id&quot;: 1,
        &quot;scan_revision&quot;: &quot;scan_revision&quot;,
        &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
        &quot;last_revision&quot;: &quot;last_revision&quot;,
        &quot;code_line_num&quot;: 140490,
        &quot;comment_line_num&quot;: 5410,
        &quot;blank_line_num&quot;: 3408,
        &quot;total_line_num&quot;: 149308,
        &quot;add_code_line_num&quot;: 6673,
        &quot;add_comment_line_num&quot;: 2309,
        &quot;add_blank_line_num&quot;: 1289,
        &quot;add_total_line_num&quot;: 10271,
        &quot;mod_code_line_num&quot;: 965,
        &quot;mod_comment_line_num&quot;: 297,
        &quot;mod_blank_line_num&quot;: 0,
        &quot;mod_total_line_num&quot;: 1262,
        &quot;del_code_line_num&quot;: 35844,
        &quot;del_comment_line_num&quot;: 2117,
        &quot;del_blank_line_num&quot;: 1794,
        &quot;del_total_line_num&quot;: 39755,
        &quot;scan&quot;: 1
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br></div></div><h2 id="\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u6700\u65B0\u626B\u63CF\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u6700\u65B0\u626B\u63CF\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u4EE3\u7801\u6700\u65B0\u626B\u63CF\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/latestscan/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_revision</td><td>str</td><td>\u6307\u5B9A\u67E5\u8BE2\u7684\u626B\u63CF\u7248\u672C\u53F7\uFF0C\u5982\u4E0D\u6307\u5B9A\u5219\u4E3A\u5F53\u524D\u9879\u76EE\u6700\u65B0\u7684\u4E00\u6B21\u626B\u63CF</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-1" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: 1,                            # \u626B\u63CF\u7F16\u53F7
        &quot;repo_id&quot;: 1,                       # \u4EE3\u7801\u5E93\u7F16\u53F7
        &quot;project_id&quot;: 1,                    # \u9879\u76EE\u7F16\u53F7
        &quot;job_gid&quot;: 1,                       # \u5173\u8054\u4EFB\u52A1\u7F16\u53F7
        &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,  # \u626B\u63CF\u65F6\u95F4
        &quot;current_revision&quot;: &quot;current_revision&quot;,  # \u626B\u63CF\u7248\u672C\u53F7
        &quot;result_code&quot;: 0,                   # \u626B\u63CF\u4EFB\u52A1\u7ED3\u679C\u7801\uFF0C0\u8868\u793A\u6B63\u5E38
        &quot;result_code_msg&quot;: &quot;\u6210\u529F&quot;,
        &quot;result_msg&quot;: null,
        &quot;lintscan&quot;: {                         # \u4EE3\u7801\u626B\u63CF\u7ED3\u679C\u4FE1\u606F
            &quot;current_scan&quot;: {                 # \u672C\u6B21\u626B\u63CF\u4FE1\u606F
                &quot;active_severity_detail&quot;: {   # \u4E0D\u540C\u4E25\u91CD\u7EA7\u522B\u7684\u6D3B\u8DC3\u95EE\u9898\u6570\uFF0C\u5305\u542B fatal\uFF081-\u81F4\u547D\uFF09, error\uFF082-\u9519\u8BEF\uFF09, warning\uFF083-\u8B66\u544A\uFF09, info\uFF084-\u63D0\u793A\uFF09
                    &quot;error&quot;: 69,              
                    &quot;warning&quot;: 5              
                },
                &quot;issue_open_num&quot;: 10,         # \u672C\u6B21\u626B\u63CF\u65B0\u53D1\u73B0\u95EE\u9898\u6570
                &quot;issue_fix_num&quot;: 2            # \u672C\u6B21\u626B\u63CF\u5173\u95ED\u5B58\u91CF\u95EE\u9898\u6570
            },
            &quot;total&quot;: {                        # \u5F53\u524D\u9879\u76EE\u6574\u4F53\u4FE1\u606F
                &quot;state_detail&quot;: {             # \u4E0D\u540C\u5904\u7406\u72B6\u6001\u7684\u95EE\u9898\u6570\uFF0C\u5305\u542B active\uFF081-\u6D3B\u8DC3\uFF09\u3001resolved\uFF082-\u5DF2\u5904\u7406\uFF09\u3001closed\uFF083-\u5DF2\u5173\u95ED\uFF09
                    &quot;active&quot;: 197,            
                    &quot;resolved&quot;: 13,
                    &quot;closed&quot;: 23297
                },
                &quot;severity_detail&quot;: {         # \u4E0D\u540C\u4E25\u91CD\u7EA7\u522B\u4E0B\u4E0D\u540C\u5904\u7406\u72B6\u6001\u7684\u95EE\u9898\u91CF
                    &quot;error&quot;: {
                        &quot;active&quot;: 157,
                        &quot;resolved&quot;: 11,
                        &quot;closed&quot;: 20113
                    },
                    &quot;warning&quot;: {
                        &quot;active&quot;: 40,
                        &quot;resolved&quot;: 2,
                        &quot;closed&quot;: 2930
                    },
                    &quot;info&quot;: {
                        &quot;closed&quot;: 254
                    }
                }
            }
        },
        &quot;duplicatescan&quot;: {                    # \u91CD\u590D\u4EE3\u7801\u626B\u63CF\u7ED3\u679C\u4FE1\u606F
            &quot;id&quot;: 1,                          # \u626B\u63CF\u4EFB\u52A1\u7F16\u53F7
            &quot;scan_revision&quot;: &quot;scan_revision&quot;, # \u626B\u63CF\u7248\u672C\u53F7
            &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,  # \u626B\u63CF\u65F6\u95F4
            &quot;default_summary&quot;: {              # \u9ED8\u8BA4\u6982\u89C8
                &quot;exhi_risk&quot;: {                # \u6781\u9AD8\u98CE\u9669
                    &quot;range&quot;: [                # \u91CD\u590D\u7387\u8303\u56F4: 0.2-1
                        0.2,
                        1
                    ],
                    &quot;file_count&quot;: 1,          # \u6587\u4EF6\u6570\u91CF
                    &quot;diff&quot;: {                 # \u589E\u91CF\u6570\u636E
                        &quot;diff_file_count&quot;: 0  # \u589E\u91CF\u6587\u4EF6\u6570\u91CF
                    }
                },
                &quot;high_risk&quot;: {                # \u9AD8\u98CE\u9669
                    &quot;range&quot;: [                # \u91CD\u590D\u7387\u8303\u56F4\uFF1A0.11-0.2
                        0.11,
                        0.2
                    ],
                    &quot;file_count&quot;: 3,
                    &quot;diff&quot;: {
                        &quot;diff_file_count&quot;: 0
                    }
                },
                &quot;midd_risk&quot;: {                # \u4E2D\u98CE\u9669
                    &quot;range&quot;: [                # \u91CD\u590D\u7387\u8303\u56F4\uFF1A0.05-0.11
                        0.05,
                        0.11
                    ],
                    &quot;file_count&quot;: 2,
                    &quot;diff&quot;: {
                        &quot;diff_file_count&quot;: 0
                    }
                },
                &quot;low_risk&quot;: {                 # \u4F4E\u98CE\u9669
                    &quot;range&quot;: [                # \u91CD\u590D\u7387\u8303\u56F4\uFF1A0-0.05
                        0,
                        0.05
                    ],
                    &quot;file_count&quot;: 2,
                    &quot;diff&quot;: {
                        &quot;diff_file_count&quot;: 0
                    }
                }
            },
            &quot;custom_summary&quot;: null,           # \u81EA\u5B9A\u4E49\u6982\u89C8\u6570\u636E
            &quot;last_revision&quot;: &quot;2010ef28ff3a26424d4e8f32df022f90cd682eda&quot;,  # \u4E0A\u6B21\u626B\u63CF\u7248\u672C\u53F7
            &quot;duplicate_file_count&quot;: 8,        # \u91CD\u590D\u6587\u4EF6\u6570\u91CF
            &quot;duplicate_block_count&quot;: 55,      # \u91CD\u590D\u4EE3\u7801\u5757\u6570\u91CF
            &quot;duplicate_line_count&quot;: 1177,     # \u91CD\u590D\u4EE3\u7801\u884C\u6570
            &quot;diff_duplicate_block_count&quot;: 0,  # \u589E\u91CF\u91CD\u590D\u4EE3\u7801\u5757\u6570\u91CF
            &quot;diff_duplicate_line_count&quot;: 0,   # \u589E\u91CF\u91CD\u590D\u4EE3\u7801\u884C\u6570
            &quot;close_issue_count&quot;: 0,           # \u5173\u95ED\u95EE\u9898\u6570
            &quot;new_issue_count&quot;: 0,             # \u65B0\u589E\u95EE\u9898\u6570
            &quot;reopen_issue_count&quot;: 5,          # \u91CD\u65B0\u6253\u5F00\u95EE\u9898\u6570
            &quot;ignored_issue_count&quot;: 0,         # \u5FFD\u7565\u95EE\u9898\u6570
            &quot;duplicate_rate&quot;: 4.98,           # \u91CD\u590D\u7387
            &quot;unique_duplicate_line_count&quot;: 1083,  # \u53BB\u91CD\u540E\u7684\u91CD\u590D\u4EE3\u7801\u884C\u6570
            &quot;total_duplicate_line_count&quot;: 1083,   # \u9879\u76EE\u603B\u7684\u53BB\u91CD\u540E\u7684\u91CD\u590D\u4EE3\u7801\u884C\u6570
            &quot;total_line_count&quot;: 21745,            # \u9879\u76EE\u603B\u884C\u4E66
            &quot;scan&quot;: 1                         # \u5173\u8054\u626B\u63CF\u4EFB\u52A1\u7F16\u53F7
        },
        &quot;cyclomaticcomplexityscan&quot;: {         # \u5708\u590D\u6742\u5EA6\u626B\u63CF\u6570\u636E
            &quot;id&quot;: 1,                          # \u5708\u590D\u6742\u5EA6\u626B\u63CF\u7F16\u53F7
            &quot;scan_revision&quot;: &quot;scan_revision&quot;, # \u626B\u63CF\u7248\u672C\u53F7
            &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
            &quot;default_summary&quot;: {                      # \u9ED8\u8BA4\u6982\u89C8\u6570\u636E
                &quot;min_ccn&quot;: 20,                        # \u6700\u5C0F\u5708\u590D\u6742\u5EA6\u9608\u503C
                &quot;over_cc_func_count&quot;: 6,              # \u8D85\u6807\u51FD\u6570\u6570\u91CF
                &quot;under_cc_func_count&quot;: 796,           # \u672A\u8D85\u6807\u51FD\u6570\u6570\u91CF
                &quot;diff_over_cc_func_count&quot;: 0,         # \u589E\u91CF\u8D85\u6807\u51FD\u6570\u6570\u636E
                &quot;over_cc_func_average&quot;: 22.333333333333332,  # \u5E73\u5747\u8D85\u6807\u5708\u590D\u6742\u5EA6
                &quot;cc_func_average&quot;: 2.5099750623441395,  # \u5E73\u5747\u5708\u590D\u6742\u5EA6
                &quot;over_cc_sum&quot;: 14,                      # \u6587\u4EF6\u8D85\u6807\u65B9\u6CD5\u5708\u590D\u6742\u5EA6\u8D85\u8FC7\u9608\u503C\u7684\u5DEE\u503C\u4E4B\u548C
                &quot;cc_average_of_lines&quot;: 1.0422094841063054 # \u5343\u884C\u4EE3\u7801\u5E73\u5747\u5708\u590D\u6742\u5EA6
            },
            &quot;custom_summary&quot;: null,                     # \u81EA\u5B9A\u4E49\u6982\u89C8\u6570\u636E
            &quot;created_time&quot;: &quot;2021-03-11T20:48:59.976947+08:00&quot;,
            &quot;creator&quot;: null,
            &quot;modified_time&quot;: &quot;2021-03-11T20:49:00.088841+08:00&quot;,
            &quot;modifier&quot;: null,
            &quot;deleted_time&quot;: null,
            &quot;deleter&quot;: null,
            &quot;last_revision&quot;: &quot;last_revision&quot;,           # \u4E0A\u4E00\u6B21\u626B\u63CF\u7248\u672C\u53F7
            &quot;diff_cc_num&quot;: 0,                           # \u589E\u91CF\u8D85\u6807\u51FD\u6570\u6570\u91CF
            &quot;cc_open_num&quot;: 6,                           # \u8D85\u6807\u51FD\u6570\u91CF
            &quot;cc_average_of_lines&quot;: 1.0422094841063054,  # \u5343\u884C\u4EE3\u7801\u5E73\u5747\u5708\u590D\u6742\u5EA6
            &quot;cc_fix_num&quot;: 0,                            # \u4FEE\u590D\u6570\u91CF
            &quot;worse_cc_file_num&quot;: 0,                     # \u5708\u590D\u6742\u5EA6\u6076\u5316\u7684\u6587\u4EF6\u6570\u636E
            &quot;min_ccn&quot;: 20,                              # \u6700\u5C0F\u5708\u590D\u6742\u5EA6\u9608\u503C
            &quot;code_line_num&quot;: 13433,                     # \u4EE3\u7801\u884C\u6570
            &quot;scan&quot;: 1
        },
        &quot;clocscan&quot;: {
            &quot;id&quot;: 1,
            &quot;scan_revision&quot;: &quot;scan_revision&quot;,           # \u626B\u63CF\u7248\u672C\u53F7
            &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,  # \u626B\u63CF\u65F6\u95F4
            &quot;last_revision&quot;: &quot;last_revision&quot;,           # \u4E0A\u4E00\u6B21\u626B\u63CF\u7248\u672C\u53F7
            &quot;code_line_num&quot;: 140490,                    # \u4EE3\u7801\u884C\u6570
            &quot;comment_line_num&quot;: 5410,                   # \u6CE8\u91CA\u884C\u6570
            &quot;blank_line_num&quot;: 3408,                     # \u7A7A\u767D\u884C\u6570
            &quot;total_line_num&quot;: 149308,                   # \u603B\u884C\u6570
            &quot;add_code_line_num&quot;: 6673,                  # \u589E\u52A0\u7684\u4EE3\u7801\u884C\u6570
            &quot;add_comment_line_num&quot;: 2309,               # \u589E\u52A0\u7684\u6CE8\u91CA\u884C\u6570
            &quot;add_blank_line_num&quot;: 1289,                 # \u589E\u52A0\u7684\u7A7A\u767D\u884C\u6570
            &quot;add_total_line_num&quot;: 10271,                # \u589E\u52A0\u7684\u603B\u884C\u6570
            &quot;mod_code_line_num&quot;: 965,                   # \u4FEE\u6539\u7684\u4EE3\u7801\u884C\u6570
            &quot;mod_comment_line_num&quot;: 297,                # \u4FEE\u6539\u7684\u6CE8\u91CA\u884C\u6570
            &quot;mod_blank_line_num&quot;: 0,                    # \u4FEE\u6539\u7684\u7A7A\u767D\u884C\u6570
            &quot;mod_total_line_num&quot;: 1262,                 # \u4FEE\u6539\u7684\u603B\u884C\u6570
            &quot;del_code_line_num&quot;: 35844,                 # \u5220\u9664\u7684\u4EE3\u7801\u884C\u6570
            &quot;del_comment_line_num&quot;: 2117,               # \u5220\u9664\u7684\u6CE8\u91CA\u884C\u6570
            &quot;del_blank_line_num&quot;: 1794,                 # \u5220\u9664\u7684\u7A7A\u767D\u884C\u6570
            &quot;del_total_line_num&quot;: 39755,                # \u5220\u9664\u7684\u603B\u884C\u6570
            &quot;scan&quot;: 1
        }
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br></div></div><h2 id="\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u626B\u63CF\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u626B\u63CF\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u4EE3\u7801\u626B\u63CF\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/lintscans/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-1" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_time_before</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u8D77\u59CB\u65F6\u95F4\uFF0C\u683C\u5F0F: 2021-01-01 00:00:00</td></tr><tr><td>scan_time_after</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u7ED3\u675F\u65F6\u95F4</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-2" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;issue_open_num&quot;: 10,             # \u672C\u6B21\u626B\u63CF\u65B0\u53D1\u73B0\u95EE\u9898\u6570
                &quot;issue_fix_num&quot;: 2,               # \u672C\u6B21\u626B\u63CF\u5173\u95ED\u5B58\u91CF\u95EE\u9898\u6570
                &quot;issue_detail_num&quot;: 310,          # \u672C\u6B21\u626B\u63CF\u4E0A\u62A5\u539F\u59CB\u95EE\u9898\u6570\uFF08\u95EE\u9898\u5C55\u793A\u4F1A\u8FDB\u884C\u805A\u5408\uFF09
                &quot;scan&quot;: {                         # \u626B\u63CF\u4FE1\u606F
                    &quot;id&quot;: 1,                      # \u626B\u63CF\u4EFB\u52A1\u7F16\u53F7
                    &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,  # \u626B\u63CF\u5F00\u59CB\u65F6\u95F4
                    &quot;execute_time&quot;: &quot;00:02:17.844712&quot;                 # \u626B\u63CF\u6267\u884C\u8017\u65F6
                },
                &quot;current_scan&quot;: {                 # \u672C\u6B21\u626B\u63CF\u4FE1\u606F
                    &quot;active_category_detail&quot;: {   # \u6D3B\u8DC3\u95EE\u9898\u5206\u7C7B\uFF0C\u5305\u542B CORRECTNESS\uFF081-\u529F\u80FD\uFF09\u3001SECURITY\uFF082-\u5B89\u5168\uFF09\u3001PERFORMANCE\uFF083-\u6027\u80FD\uFF09\u3001USABILITY\uFF084-\u53EF\u7528\u6027\uFF09\u3001ACCESSIBILITY\uFF085-\u65E0\u969C\u788D\u5316\uFF09\u3001I18N\uFF086-\u56FD\u9645\u5316\uFF09\u3001CONVENTION\uFF087-\u4EE3\u7801\u98CE\u683C\uFF09\u3001OTHER\uFF088-\u5176\u4ED6\uFF09
                        &quot;convention&quot;: 70,         # \u4EE3\u7801\u98CE\u683C\u7C7B\u578B\u95EE\u9898
                        &quot;other&quot;: 4                # \u5176\u4ED6\u7C7B\u578B\u95EE\u9898
                    },
                    &quot;active_severity_detail&quot;: {   # \u4E0D\u540C\u4E25\u91CD\u7EA7\u522B\u7684\u6D3B\u8DC3\u95EE\u9898\u6570\uFF0C\u5305\u542B fatal\uFF081-\u81F4\u547D\uFF09, error\uFF082-\u9519\u8BEF\uFF09, warning\uFF083-\u8B66\u544A\uFF09, info\uFF084-\u63D0\u793A\uFF09
                        &quot;error&quot;: 69,              
                        &quot;warning&quot;: 5              
                    },
                    &quot;issue_open_num&quot;: 10,         # \u672C\u6B21\u626B\u63CF\u65B0\u53D1\u73B0\u95EE\u9898\u6570
                    &quot;issue_fix_num&quot;: 2            # \u672C\u6B21\u626B\u63CF\u5173\u95ED\u5B58\u91CF\u95EE\u9898\u6570
                },
                &quot;total&quot;: {                        # \u5F53\u524D\u9879\u76EE\u6574\u4F53\u4FE1\u606F
                    &quot;state_detail&quot;: {             # \u4E0D\u540C\u5904\u7406\u72B6\u6001\u7684\u95EE\u9898\u6570\uFF0C\u5305\u542B active\uFF081-\u6D3B\u8DC3\uFF09\u3001resolved\uFF082-\u5DF2\u5904\u7406\uFF09\u3001closed\uFF083-\u5DF2\u5173\u95ED\uFF09
                        &quot;active&quot;: 197,            
                        &quot;resolved&quot;: 13,
                        &quot;closed&quot;: 23297
                    },
                    &quot;category_detail&quot;: {          # \u4E0D\u540C\u5206\u7C7B\u4E0B\u4E0D\u540C\u5904\u7406\u72B6\u6001\u7684\u95EE\u9898\u91CF
                        &quot;convention&quot;: {           
                            &quot;active&quot;: 184,
                            &quot;resolved&quot;: 13,
                            &quot;closed&quot;: 21143
                        },
                        &quot;other&quot;: {                
                            &quot;active&quot;: 13,
                            &quot;closed&quot;: 154
                        },
                        &quot;correctness&quot;: {
                            &quot;closed&quot;: 1997
                        },
                        &quot;performance&quot;: {
                            &quot;closed&quot;: 3
                        }
                    },
                    &quot;severity_detail&quot;: {         # \u4E0D\u540C\u4E25\u91CD\u7EA7\u522B\u4E0B\u4E0D\u540C\u5904\u7406\u72B6\u6001\u7684\u95EE\u9898\u91CF
                        &quot;error&quot;: {
                            &quot;active&quot;: 157,
                            &quot;resolved&quot;: 11,
                            &quot;closed&quot;: 20113
                        },
                        &quot;warning&quot;: {
                            &quot;active&quot;: 40,
                            &quot;resolved&quot;: 2,
                            &quot;closed&quot;: 2930
                        },
                        &quot;info&quot;: {
                            &quot;closed&quot;: 254
                        }
                    }
                },
                &quot;status&quot;: 0,                     # \u626B\u63CF\u72B6\u6001\uFF0C0\u8868\u793A\u6210\u529F
                &quot;text&quot;: &quot;\u6210\u529F&quot;,
                &quot;description&quot;: null,
                &quot;scan_summary&quot;: {                # \u626B\u63CF\u6982\u89C8
                    &quot;convention&quot;: {              
                        &quot;error&quot;: {               
                            &quot;rule_count&quot;: 7,     # \u89C4\u5219\u6570
                            &quot;active&quot;: 65         # \u6D3B\u8DC3\u95EE\u9898\u6570
                        },
                        &quot;warning&quot;: {
                            &quot;rule_count&quot;: 2,
                            &quot;active&quot;: 5
                        }
                    },
                    &quot;other&quot;: {
                        &quot;error&quot;: {
                            &quot;rule_count&quot;: 1,
                            &quot;active&quot;: 4
                        }
                    }
                },
                &quot;total_summary&quot;: {
                    &quot;correctness&quot;: {
                        &quot;error&quot;: {
                            &quot;rule_count&quot;: 16,
                            &quot;closed&quot;: 1315
                        },
                        &quot;warning&quot;: {
                            &quot;rule_count&quot;: 10,
                            &quot;closed&quot;: 629
                        },
                        &quot;info&quot;: {
                            &quot;rule_count&quot;: 1,
                            &quot;closed&quot;: 53
                        }
                    },
                    &quot;performance&quot;: {
                        &quot;warning&quot;: {
                            &quot;rule_count&quot;: 1,
                            &quot;closed&quot;: 3
                        }
                    },
                    &quot;convention&quot;: {
                        &quot;error&quot;: {
                            &quot;rule_count&quot;: 42,
                            &quot;active&quot;: 149,
                            &quot;resolved&quot;: 11,
                            &quot;closed&quot;: 18778
                        },
                        &quot;warning&quot;: {
                            &quot;rule_count&quot;: 17,
                            &quot;active&quot;: 35,
                            &quot;resolved&quot;: 2,
                            &quot;closed&quot;: 2298
                        },
                        &quot;info&quot;: {
                            &quot;rule_count&quot;: 1,
                            &quot;closed&quot;: 67
                        }
                    },
                    &quot;other&quot;: {
                        &quot;error&quot;: {
                            &quot;rule_count&quot;: 2,
                            &quot;active&quot;: 8,
                            &quot;closed&quot;: 20
                        },
                        &quot;warning&quot;: {
                            &quot;rule_count&quot;: 1,
                            &quot;active&quot;: 5
                        },
                        &quot;info&quot;: {
                            &quot;rule_count&quot;: 3,
                            &quot;closed&quot;: 134
                        }
                    }
                }
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br></div></div><h2 id="\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u5708\u590D\u6742\u5EA6\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u5708\u590D\u6742\u5EA6\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u5708\u590D\u6742\u5EA6\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/cycscans/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-2" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_time_before</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u8D77\u59CB\u65F6\u95F4\uFF0C\u683C\u5F0F: 2021-01-01 00:00:00</td></tr><tr><td>scan_time_after</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u7ED3\u675F\u65F6\u95F4</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-3" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
                &quot;default_summary&quot;: {
                    &quot;min_ccn&quot;: 20,
                    &quot;over_cc_func_count&quot;: 6,
                    &quot;under_cc_func_count&quot;: 796,
                    &quot;diff_over_cc_func_count&quot;: 0,
                    &quot;over_cc_func_average&quot;: 22.333333333333332,
                    &quot;cc_func_average&quot;: 2.5099750623441395,
                    &quot;over_cc_sum&quot;: 14,
                    &quot;cc_average_of_lines&quot;: 1.0422094841063054
                },
                &quot;custom_summary&quot;: null,
                &quot;created_time&quot;: &quot;2021-03-11T20:48:59.976947+08:00&quot;,
                &quot;creator&quot;: null,
                &quot;modified_time&quot;: &quot;2021-03-11T20:49:00.088841+08:00&quot;,
                &quot;modifier&quot;: null,
                &quot;deleted_time&quot;: null,
                &quot;deleter&quot;: null,
                &quot;last_revision&quot;: &quot;last_revision&quot;,
                &quot;diff_cc_num&quot;: 0,
                &quot;cc_open_num&quot;: 6,
                &quot;cc_average_of_lines&quot;: 1.0422094841063054,
                &quot;cc_fix_num&quot;: 0,
                &quot;worse_cc_file_num&quot;: 0,
                &quot;min_ccn&quot;: 20,
                &quot;code_line_num&quot;: 13433,
                &quot;scan&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u91CD\u590D\u4EE3\u7801\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u91CD\u590D\u4EE3\u7801\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u91CD\u590D\u4EE3\u7801\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/dupscans/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-3" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_time_before</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u8D77\u59CB\u65F6\u95F4\uFF0C\u683C\u5F0F: 2021-01-01 00:00:00</td></tr><tr><td>scan_time_after</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u7ED3\u675F\u65F6\u95F4</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-4" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
                &quot;default_summary&quot;: {
                    &quot;exhi_risk&quot;: {
                        &quot;range&quot;: [
                            0.2,
                            1
                        ],
                        &quot;file_count&quot;: 1,
                        &quot;diff&quot;: {
                            &quot;diff_file_count&quot;: 0
                        }
                    },
                    &quot;high_risk&quot;: {
                        &quot;range&quot;: [
                            0.11,
                            0.2
                        ],
                        &quot;file_count&quot;: 3,
                        &quot;diff&quot;: {
                            &quot;diff_file_count&quot;: 0
                        }
                    },
                    &quot;midd_risk&quot;: {
                        &quot;range&quot;: [
                            0.05,
                            0.11
                        ],
                        &quot;file_count&quot;: 2,
                        &quot;diff&quot;: {
                            &quot;diff_file_count&quot;: 0
                        }
                    },
                    &quot;low_risk&quot;: {
                        &quot;range&quot;: [
                            0,
                            0.05
                        ],
                        &quot;file_count&quot;: 2,
                        &quot;diff&quot;: {
                            &quot;diff_file_count&quot;: 0
                        }
                    }
                },
                &quot;custom_summary&quot;: null,
                &quot;last_revision&quot;: &quot;last_revision&quot;,
                &quot;duplicate_file_count&quot;: 8,
                &quot;duplicate_block_count&quot;: 55,
                &quot;duplicate_line_count&quot;: 1177,
                &quot;diff_duplicate_block_count&quot;: 0,
                &quot;diff_duplicate_line_count&quot;: 0,
                &quot;close_issue_count&quot;: 0,
                &quot;new_issue_count&quot;: 0,
                &quot;reopen_issue_count&quot;: 5,
                &quot;ignored_issue_count&quot;: 0,
                &quot;duplicate_rate&quot;: 4.98,
                &quot;unique_duplicate_line_count&quot;: 1083,
                &quot;total_duplicate_line_count&quot;: 1083,
                &quot;total_line_count&quot;: 21745,
                &quot;scan&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u4EE3\u7801\u7EDF\u8BA1\u7ED3\u679C\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u4EE3\u7801\u7EDF\u8BA1\u7ED3\u679C\u6982\u89C8" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u4EE3\u7801\u5EA6\u91CF\u4EE3\u7801\u7EDF\u8BA1\u7ED3\u679C\u6982\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /server/analysis/api/orgs/&lt;org_sid&gt;/teams/&lt;team_name&gt;/repos/&lt;repo_id&gt;/projects/&lt;project_id&gt;/overview/clocscans/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53C2\u6570\u5217\u8868-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5217\u8868-4" aria-hidden="true">#</a> \u53C2\u6570\u5217\u8868</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>scan_time_before</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u8D77\u59CB\u65F6\u95F4\uFF0C\u683C\u5F0F: 2021-01-01 00:00:00</td></tr><tr><td>scan_time_after</td><td>str</td><td>\u626B\u63CF\u4EFB\u52A1\u7ED3\u675F\u65F6\u95F4</td></tr></tbody></table><h4 id="\u8FD4\u56DE\u7ED3\u679C-5" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7ED3\u679C-5" aria-hidden="true">#</a> \u8FD4\u56DE\u7ED3\u679C</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;data&quot;: {
        &quot;count&quot;: 1,
        &quot;next&quot;: null,
        &quot;previous&quot;: null,
        &quot;results&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;scan_revision&quot;: &quot;scan_revision&quot;,
                &quot;scan_time&quot;: &quot;2021-03-11T20:46:44.171607+08:00&quot;,
                &quot;last_revision&quot;: &quot;last_revision&quot;,
                &quot;code_line_num&quot;: 140490,
                &quot;comment_line_num&quot;: 5410,
                &quot;blank_line_num&quot;: 3408,
                &quot;total_line_num&quot;: 149308,
                &quot;add_code_line_num&quot;: 6673,
                &quot;add_comment_line_num&quot;: 2309,
                &quot;add_blank_line_num&quot;: 1289,
                &quot;add_total_line_num&quot;: 10271,
                &quot;mod_code_line_num&quot;: 965,
                &quot;mod_comment_line_num&quot;: 297,
                &quot;mod_blank_line_num&quot;: 0,
                &quot;mod_total_line_num&quot;: 1262,
                &quot;del_code_line_num&quot;: 35844,
                &quot;del_comment_line_num&quot;: 2117,
                &quot;del_blank_line_num&quot;: 1794,
                &quot;del_total_line_num&quot;: 39755,
                &quot;scan&quot;: 1
            }
        ]
    },
    &quot;code&quot;: 0,
    &quot;msg&quot;: &quot;\u8BF7\u6C42\u6210\u529F&quot;,
    &quot;status_code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,35);function u(r,l){return e}var o=n(a,[["render",u],["__file","\u7ED3\u679C\u6982\u89C8\u6A21\u5757\u63A5\u53E3.html.vue"]]);export{o as default};
