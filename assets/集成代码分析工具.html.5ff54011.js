import{_ as t,r,o as l,c as o,a as n,b as p,F as u,e as s,d as e}from"./app.d1b9ffe1.js";const i={},c=s(`<h1 id="\u96C6\u6210\u4EE3\u7801\u5206\u6790\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u4EE3\u7801\u5206\u6790\u5DE5\u5177" aria-hidden="true">#</a> \u96C6\u6210\u4EE3\u7801\u5206\u6790\u5DE5\u5177</h1><h2 id="\u521D\u8BC6tca\u4EFB\u52A1\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BC6tca\u4EFB\u52A1\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> \u521D\u8BC6TCA\u4EFB\u52A1\u6267\u884C\u673A\u5236</h2><ol><li>TCA server\u5728\u63A5\u6536\u5230\u5F00\u542F\u5206\u6790\u7684\u8BF7\u6C42\u540E\u6839\u636E\u6240\u9009\u89C4\u5219\u751F\u6210\u5BF9\u5E94\u7684task_request\uFF0C\u6BCF\u4E2Atask_request\u5BF9\u5E94\u4E00\u4E2A\u5DE5\u5177\u7684\u4EFB\u52A1</li><li>TCA server\u5C06<code>task_request</code>\u5206\u53D1\u5230\u80FD\u591F\u6267\u884C\u8BE5\u5DE5\u5177\u7684\u673A\u5668</li><li>TCA client\u5728\u6536\u5230task_request\u540E\u63D0\u53D6\u51FA\u672C\u6B21\u4EFB\u52A1\u7684\u5DE5\u5177\u540D\u4E5F\u5C31\u662F\u5176\u4E2D\u7684<code>task_name</code>\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u5BF9\u5E94\u4E8E\u5DE5\u5177\u7684<code>name</code>\u5B57\u6BB5</li><li>TCA client\u6309\u7167<code>task_name</code>\u5728client\u4E2D\u7684tool\u76EE\u5F55\u67E5\u627E\u5BF9\u5E94python\u542F\u52A8\u811A\u672C</li><li>\u6267\u884Cpython\u542F\u52A8\u811A\u672C\u4E2D\u7684\u5185\u5BB9</li></ol><h2 id="\u6DFB\u52A0\u5206\u6790\u5DE5\u5177-\u4EE5tca-ql-php-beta\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5206\u6790\u5DE5\u5177-\u4EE5tca-ql-php-beta\u4E3A\u4F8B" aria-hidden="true">#</a> \u6DFB\u52A0\u5206\u6790\u5DE5\u5177\uFF08\u4EE5tca_ql_php_beta\u4E3A\u4F8B\uFF09</h2><p>\u6839\u636E\u4E0A\u8FF0\u7684\u4EFB\u52A1\u673A\u5236\u6DFB\u52A0\u5DE5\u5177\u9700\u8981\u505A\u5230\u4EE5\u4E0B\u51E0\u70B9</p><ol><li>\u8BA9server\u77E5\u9053\u5B58\u5728<code>tca_ql_php_beta</code>\u5DE5\u5177\u53CA\u5176\u6240\u542B\u7684\u89C4\u5219</li><li>\u8BA9server\u77E5\u9053\u54EA\u4E9B\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6267\u884C<code>tca_ql_php_beta</code>\u5DE5\u5177</li><li>client\u4E0B\u8F7D/\u627E\u5230\u5DE5\u5177\u6240\u5728\u76EE\u5F55\u53CA\u9700\u8981\u7684\u73AF\u5883</li><li>\u8BA9client\u77E5\u9053<code>tca_ql_php_beta</code>\u5BF9\u5E94\u7684\u542F\u52A8\u811A\u672C\u662F\u4EC0\u4E48</li></ol><h3 id="\u5982\u4F55\u8BA9server\u77E5\u9053\u5B58\u5728\u76F8\u5E94\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8BA9server\u77E5\u9053\u5B58\u5728\u76F8\u5E94\u5DE5\u5177" aria-hidden="true">#</a> \u5982\u4F55\u8BA9Server\u77E5\u9053\u5B58\u5728\u76F8\u5E94\u5DE5\u5177</h3><ol><li><p>\u627E\u5230<code>server/projects/main/apps/scan_conf/management/commands/open_source</code>\u76EE\u5F55</p></li><li><p>\u521B\u5EFA\u5DE5\u5177json\u6587\u4EF6\uFF0Cjson\u6587\u4EF6\u540D\u5C3D\u91CF\u5BF9\u5E94\u5DE5\u5177\u540D\u79F0\u65B9\u4FBF\u67E5\u770B</p></li><li><p>json\u6587\u4EF6\u5185\u5BB9\u4E3A\uFF08\u4EE5tca_ql_php_beta\u4E3A\u4F8B)</p></li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>[
    {
        &quot;name&quot;: &quot;tca_ql_php_beta&quot;,
        &quot;display_name&quot;: &quot;Hades_Beta_PHP\uFF08\u5C55\u793A\u540D\u79F0\u7528\u4E8E\u524D\u7AEF\u5C55\u793A\u4F7F\u7528\uFF09&quot;,
        &quot;description&quot;: &quot;\u5DE5\u5177\u63CF\u8FF0&quot;,
        &quot;license&quot;: &quot;\u5DE5\u5177license&quot;,
        &quot;libscheme_set&quot;: [], # \u6682\u65F6\u4E0D\u9700\u8981
        &quot;task_processes&quot;: [
            &quot;analyze&quot;,
            &quot;datahandle&quot;,
            &quot;compile&quot;
        ],  # \u5DE5\u5177\u8FDB\u7A0B\uFF0C\u5305\u542Bcompile\u7F16\u8BD1, analyze\u5206\u6790, datahandle\u6570\u636E\u5904\u7406
        &quot;scan_app&quot;: &quot;codelint&quot;,  # \u4EE3\u7801\u5206\u6790\u7EDF\u4E00\u4E3Acodelint
        &quot;scm_url&quot;: &quot;&quot;, # \u6682\u65F6\u4E3A\u7A7A
        &quot;run_cmd&quot;: &quot;&quot;,
        &quot;envs&quot;: null, # \u662F\u5426\u9700\u8981\u7279\u6B8A\u73AF\u5883\uFF0C\u8FD9\u91CC\u65E0\u9700\u586B\u5199
        &quot;build_flag&quot;: false, # \u662F\u5426\u9700\u8981\u7F16\u8BD1\u547D\u4EE4\u624D\u80FD\u8FD0\u884C
        &quot;checkrule_set&quot;: [  # \u5DE5\u5177\u5305\u542B\u7684\u89C4\u5219
            {
                &quot;real_name&quot;: &quot;deser&quot;,  # \u89C4\u5219\u540D
                &quot;display_name&quot;: &quot;\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E&quot;,  # \u89C4\u5219\u524D\u7AEF\u5C55\u793A\uFF0C\u8003\u8651\u5404\u5DE5\u5177\u89C4\u5219\u540D\u53EF\u80FD\u6666\u6DA9\u96BE\u61C2\uFF0C\u8BBE\u7F6E\u5C55\u793A\u540D\u79F0\u65B9\u4FBF\u67E5\u627E
                &quot;severity&quot;: &quot;error&quot;,  # \u89C4\u5219\u7B49\u7EA7 \u4ECE\u4E0A\u5230\u4E0B\u5206\u4E3A fatal, error, warning, info \u56DB\u4E2A\u7B49\u7EA7
                &quot;category&quot;: &quot;security&quot;,  # \u89C4\u5219\u7C7B\u522B\u3002correctness \u529F\u80FD security\u5B89\u5168 performance\u6027\u80FD usability\u53EF\u7528\u6027 accessibility\u65E0\u969C\u788D\u5316 i18n\u56FD\u9645\u5316 convention\u4EE3\u7801\u98CE\u683C other\u5176\u4ED6
                &quot;rule_title&quot;: &quot;\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E&quot;,  # \u4E00\u53E5\u8BDD\u6982\u62EC\u89C4\u5219\u7B80\u4ECB
                &quot;rule_params&quot;: null,  # \u89C4\u5219\u53C2\u6570
                &quot;languages&quot;: [  # \u652F\u6301\u8BED\u8A00
                    &quot;php&quot;
                ],
                &quot;solution&quot;: &quot;&quot;,  # \u5EFA\u8BAE\u7684\u89E3\u51B3\u65B9\u6CD5
                &quot;owner&quot;: &quot;&quot;,
                &quot;labels&quot;: [],
                &quot;description&quot;: &quot;&quot;,  # \u89C4\u5219\u8BE6\u7EC6\u4ECB\u7ECD
            }
        ]
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ol start="4"><li>\u5728<code>server/projects/main/</code>\u76EE\u5F55\u6267\u884C<code>python manage.py loadcheckers --dir open_source tca_ql_php_beta</code> \u52A0\u8F7D\u5DE5\u5177\u8FDB\u5165\u6570\u636E\u5E93</li></ol><h2 id="\u8BA9server\u77E5\u9053\u54EA\u4E9B\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6267\u884Ctca-ql-php-beta\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u8BA9server\u77E5\u9053\u54EA\u4E9B\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6267\u884Ctca-ql-php-beta\u5DE5\u5177" aria-hidden="true">#</a> \u8BA9server\u77E5\u9053\u54EA\u4E9B\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6267\u884C<code>tca_ql_php_beta</code>\u5DE5\u5177</h2><ol><li>\u8FDB\u5165\u8282\u70B9\u7BA1\u7406\u9875\u9762</li></ol><p><img src="https://tencent.github.io/CodeAnalysis/media/node_mange.png" alt="\u8282\u70B9\u7BA1\u7406"></p><ol start="2"><li>\u9009\u62E9\u5176\u4E2D\u4E00\u53F0\u673A\u5668 \u5DE5\u5177\u8FDB\u7A0B\u914D\u7F6E\uFF0C\u52FE\u9009\u5176\u5DE5\u5177\u8FDB\u7A0B</li></ol><p><img src="https://tencent.github.io/CodeAnalysis/media/tool.png" alt="\u5DE5\u5177\u8FDB\u7A0B"></p><h2 id="client\u4E0B\u8F7D-\u627E\u5230\u5DE5\u5177\u6240\u5728\u76EE\u5F55\u53CA\u9700\u8981\u7684\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#client\u4E0B\u8F7D-\u627E\u5230\u5DE5\u5177\u6240\u5728\u76EE\u5F55\u53CA\u9700\u8981\u7684\u73AF\u5883" aria-hidden="true">#</a> client\u4E0B\u8F7D/\u627E\u5230\u5DE5\u5177\u6240\u5728\u76EE\u5F55\u53CA\u9700\u8981\u7684\u73AF\u5883</h2>`,16),d=e("\u627E\u5230puppy-tool-config\u82E5\u6CA1\u6709\u989D\u5916\u914D\u7F6E\u5219\u4E3A\u9ED8\u8BA4\u4EE3\u7801\u5E93"),b={href:"https://github.com/TCATools/puppy-tools-config.git",target:"_blank",rel:"noopener noreferrer"},m=e("https://github.com/TCATools/puppy-tools-config.git"),_=n("li",null,"\u4FEE\u6539\u5176\u4E2D\u7684 ini \u914D\u7F6E\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u5E94\u4E00\u4E2Aini",-1),q=n("li",null,"\u4EE5tca_ql_php_beta\u4E3A\u4F8B\u9700\u8981\u505A\u4EE5\u4E0B\u4FEE\u6539",-1),h=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; env_path \u4E3B\u8981\u586B\u5199\u5B58\u653E\u5DE5\u5177\u6587\u4EF6\u6240\u5728\u7684\u76F8\u5BF9\u76EE\u5F55\uFF0C\u4E00\u822C\u90FD\u5B58\u653E/\u62C9\u53D6\u5728tools\u4E0B\uFF0C\u4F1A\u5728\u5DE5\u5177\u6267\u884C\u524D\u52A0\u8F7D\u5230\u73AF\u5883\u53D8\u91CF\u4E2D\u63D0\u4F9B\u4F7F\u7528
[env_path]
ZEUS_BETA_HOME   : Zeus_Beta
HADES_BETA_HOME  : Hades_Beta

; toolz_url
[tool_url] \u4E3B\u8981\u586B\u5199\u5DE5\u5177\u7684git\u4ED3\u5E93\uFF0C\u8FD9\u91CC\u56E0\u4E3Atca_ql_php_beta\u76F4\u63A5\u4F7F\u7528tools\u4E0B\u7684\u76EE\u5F55\u6240\u4EE5\u4E0D\u7528\u518D\u8FDB\u884C\u989D\u5916\u62C9\u53D6\u4E5F\u65E0\u9700\u518D\u5199
CPPCHECK    : \${base_value:git_url}/linux-cppcheck-1.78

; \u5404\u5DE5\u5177\u914D\u7F6E \u4EE5tca_ql_php_beta\u4E3A\u4F8B
; env_path \u586B\u5199\u4E0A\u9762\u9700\u8981\u52A0\u8F7D\u7684\u73AF\u5883\u53D8\u91CF
; env_value \u901A\u7528\u73AF\u5883\u53D8\u91CF\uFF0C\u4E00\u822C\u65E0\u9700\u586B\u5199\u5982\u679C\u6709\u9700\u6C42\u9700\u8981\u73B0\u5728 [env_value] \u4E2D\u5B9A\u4E49\u597D\u518D\u586B\u5199
; path \u5DE5\u5177\u6240\u5728\u76EE\u5F55\u586B\u5199\u4E0A\u9762\u7684\u5B9A\u4E49
; tool_url \u5DE5\u5177git\u4ED3\u5E93\uFF0C\u4F7F\u7528\u672C\u5730\u76F8\u5BF9\u76EE\u5F55\u6545\u4E3A\u7A7A
[tca_ql_php_beta]
env_path  : ZEUS_BETA_HOME;HADES_BETA_HOME
env_value :
path      : \${env_path:ZEUS_BETA_HOME};\${env_path:HADES_BETA_HOME}
tool_url  : 

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u8BA9client\u77E5\u9053tca-ql-php-beta\u5BF9\u5E94\u7684\u542F\u52A8\u811A\u672C\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u8BA9client\u77E5\u9053tca-ql-php-beta\u5BF9\u5E94\u7684\u542F\u52A8\u811A\u672C\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u8BA9client\u77E5\u9053<code>tca_ql_php_beta</code>\u5BF9\u5E94\u7684\u542F\u52A8\u811A\u672C\u662F\u4EC0\u4E48</h2><ol><li><p>\u4EE5\u4E0A\u8FF0\u6B65\u9AA4\u5728<code>client/tool</code>\u76EE\u5F55\u6DFB\u52A0\u811A\u672C<code>tca_ql_php_beta.py</code>\u4F5C\u4E3A\u542F\u52A8\u811A\u672C \u6CE8\uFF1A\u542F\u52A8\u811A\u672C\u5FC5\u987B\u4E0E\u5DE5\u5177\u540D\u79F0\u76F8\u540C</p></li><li><p>\u7F16\u5199\u811A\u672C</p></li></ol><h3 id="\u811A\u672C\u7F16\u5199\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C\u7F16\u5199\u89C4\u8303" aria-hidden="true">#</a> \u811A\u672C\u7F16\u5199\u89C4\u8303</h3><p>\u4EE5<code>tca_ql_php_beta</code>\u4E3A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
from task.codelintmodel import CodeLintModel
from util.logutil import LogPrinter
from util.subprocc import SubProcController

logger = LogPrinter()


class TcaQlPHPBeta(CodeLintModel):
    # \u4EE3\u7801\u5206\u6790\u5DE5\u5177\u96C6\u6210\u57FA\u7C7BCodeLintModel
    def __init__(self, params):
        logger.info(&quot;\u627E\u5230\u5DE5\u5177\u4E86Q_Q&quot;)
        super().__init__(params)

    def compile(self, params):
        logger.info(&quot;\u5F00\u59CB\u7F16\u8BD1\u4E86Q_Q&quot;)
        build_cmd = params.get(&#39;build_cmd&#39;, None)  # \u4ECEparams\u4E2D\u83B7\u53D6\u7F16\u8BD1\u547D\u4EE4, params\u5185\u5BB9\u53EF\u4EE5\u5728\u6700\u540E\u9644\u5F55\u67E5\u770B
        lang = &quot;php&quot;
        do_some_things()

    def analyze(self, params):
        logger.info(&quot;\u5F00\u59CB\u5206\u6790\u4E86Q_Q&quot;)
        lang = &quot;php&quot;
        HADES_HOME = envs.get(&quot;HADES_BETA_HOME&quot;, None)
        output_json = &quot;result.json&quot;
        sp = SubProcController(
            command=[&quot;Hades&quot;, &quot;analyze&quot;, &quot;test.php&quot;, &quot;-o&quot;, output_json],
            cwd=HADES_HOME,
            stdout_line_callback=subprocc_log,
            stderr_line_callback=subprocc_log,
        )
        sp.wait()  # \u6267\u884C\u5DE5\u5177\u5206\u6790\u547D\u4EE4
        issues = []
        # \u5DE5\u5177\u7ED3\u679C\u8F93\u51FA\u5230output_json\uFF0C\u5177\u4F53\u5DE5\u5177\u53EF\u80FD\u6709\u6240\u4E0D\u540C
        if os.path.exists(output_json):
            with open(output_json, &quot;r&quot;) as result_reader:
                result = json.load(result_reader)
                issues.extend(result)
        return issues

tool = TcaQlPHPBeta  # \u5FC5\u987B\uFF0C\u5FC5\u987B\u5305\u542Btool\u53D8\u91CF\u5E76\u4E14\u4E3A\u8BE5\u5DE5\u5177\u7684\u7C7B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ol><li>\u811A\u672C\u5FC5\u987B\u5305\u542Banalyze\u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u914D\u7F6E\u7F16\u8BD1\u8FDB\u7A0B\u4E5F\u9700\u8981\u76F8\u5E94\u7684compile\u65B9\u6CD5\u6765\u505A\u7F16\u8BD1\u76F8\u5173\u5DE5\u4F5C\uFF0Cdatahandle\u51FD\u6570\u4E0D\u7528\u81EA\u5B9A\u4E49\u57FA\u7C7B\u65B9\u6CD5\u5DF2\u7ECF\u591F\u7528\u4E86\u3002\u65B9\u6CD5\u6267\u884C\u987A\u5E8F\u4E3A compile -&gt; analyze -&gt; datahandle</li><li>params\u53C2\u6570\u4E3A<code>task_request</code>\u4E2D\u7684<code>task_params</code>\u5B57\u6BB5\uFF0C\u5177\u4F53\u5B57\u6BB5\u5C06\u5728\u6700\u540E\u9644\u5F55\u8FDB\u884C\u8BF4\u660E</li><li>anlyze\u65B9\u6CD5\u5FC5\u987B\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u4E3Aissue\u5217\u8868\uFF0Cissue\u683C\u5F0F\u4E3A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;path&quot;: &quot;\u6587\u4EF6\u76F8\u5BF9\u8DEF\u5F84&quot;,
    &quot;line&quot;: &quot;\u884C\u53F7\uFF0Cint\u7C7B\u578B&quot;,
    &quot;column&quot;: &quot;\u5217\u53F7, int\u7C7B\u578B\uFF0C\u5982\u679C\u5DE5\u5177\u6CA1\u6709\u8F93\u51FA\u5217\u53F7\u4FE1\u606F\uFF0C\u53EF\u4EE5\u75280\u4EE3\u66FF&quot;,
    &quot;msg&quot;: &quot;\u63D0\u793A\u4FE1\u606F&quot;,
    &quot;rule&quot;: &quot;\u89C4\u5219\u540D\u79F0,\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8F93\u51FA\u4E0D\u540C\u7684\u89C4\u5219\u540D&quot;,
    &quot;refs&quot;: [
        {
            &quot;line&quot;: &quot;\u56DE\u6EAF\u884C\u53F7&quot;, 
            &quot;msg&quot;: &quot;\u63D0\u793A\u4FE1\u606F&quot;, 
            &quot;tag&quot;: &quot;\u7528\u4E00\u4E2A\u8BCD\u7B80\u8981\u6807\u8BB0\u8BE5\u884C\u4FE1\u606F\uFF0C\u6BD4\u5982uninit_member,member_decl\u7B49\uFF0C\u5982\u679C\u6CA1\u6709\u4E5F\u53EF\u4EE5\u90FD\u5199\u6210\u4E00\u6837\u7684&quot;, 
            &quot;path&quot;: &quot;\u56DE\u6EAF\u884C\u6240\u5728\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84&quot;
        },
        ...
    ]
}
\u8BF4\u660E\uFF1A
    refs\uFF1A\u53EF\u9009\uFF0C\u8BB0\u5F55\u95EE\u9898\u56DE\u6EAF\u8DEF\u5F84\u4FE1\u606F\u3002\u6BD4\u5982\u5F53\u524D\u6587\u4EF6\u7684\u56DE\u6EAF\u8DEF\u5F84\u5176\u4ED6\u76843\u884C\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E09\u884C\u7684\u8DEF\u5F84\u53CA\u63D0\u793A\u4FE1\u606F\uFF0C\u6309\u987A\u5E8F\u6DFB\u52A0\u5230refs\u6570\u7EC4\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h1 id="pr" tabindex="-1"><a class="header-anchor" href="#pr" aria-hidden="true">#</a> PR</h1><p>\u5982\u679C\u6709\u610F\u516C\u5F00\u60A8\u6DFB\u52A0\u7684\u5DE5\u5177\u6B22\u8FCE\u53D1\u8D77PR</p><p>\u6CE8\uFF1A\u522B\u5FD8\u4E86puppy-tool-config \u4E5F\u9700\u8981PR</p><h1 id="\u9644\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9644\u5F55" aria-hidden="true">#</a> \u9644\u5F55</h1><h2 id="params-\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#params-\u8868\u683C" aria-hidden="true">#</a> params \u8868\u683C</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>scan_languages</td><td>\u8BED\u8A00</td><td>\u5B57\u7B26\u4E32\u5217\u8868\u5982 [&quot;python&quot;, &quot;php&quot;]</td></tr><tr><td>pre_cmd</td><td>\u7F16\u8BD1\u524D\u7F6E\u547D\u4EE4</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>build_cmd</td><td>\u7F16\u8BD1\u547D\u4EE4</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>envs</td><td>\u989D\u5916\u73AF\u5883\u53D8\u91CF</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>scm_last_revision</td><td>\u4E0A\u6B21\u6210\u529F\u5206\u6790\u7684\u4EE3\u7801\u7248\u672C\uFF0C\u589E\u91CF\u4F7F\u7528</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>incr_scan</td><td>\u662F\u5426\u4E3A\u589E\u91CF\u5206\u6790</td><td>bool</td></tr><tr><td>rules</td><td>\u89C4\u5219\u540D\u79F0\u5217\u8868\uFF0C\u53EA\u6709\u89C4\u5219\u540D</td><td>\u5B57\u7B26\u4E32\u5217\u8868</td></tr><tr><td>rule_list</td><td>\u8BE6\u7EC6\u7684\u89C4\u5219\u5217\u8868\u5305\u542B\u89C4\u5219\u540D\u548C\u89C4\u5219\u53C2\u6570\u7B49</td><td>\u5B57\u5178\u5217\u8868</td></tr><tr><td>checktool</td><td>\u5DE5\u5177\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u6267\u884C\u4E00\u822C\u7528\u4E0D\u5230</td><td>\u5B57\u5178</td></tr><tr><td>path_filters</td><td>\u8FC7\u6EE4\u8DEF\u5F84</td><td>\u5B57\u5178</td></tr><tr><td>scm_url</td><td>\u4EE3\u7801\u5E93url</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>source_dir</td><td>\u4EE3\u7801\u5E93\u672C\u5730\u76EE\u5F55</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>work_dir</td><td>\u672C\u6B21\u4EFB\u52A1\u7684work_dir\u76EE\u5F55</td><td>\u5B57\u7B26\u4E32</td></tr><tr><td>project_id</td><td>\u5206\u6790\u9879\u76EEid</td><td>int</td></tr><tr><td>repo_id</td><td>\u4ED3\u5E93id</td><td>int</td></tr><tr><td>task_id</td><td>\u4EFB\u52A1id</td><td>int</td></tr><tr><td>job_id</td><td>\u672C\u6B21\u5206\u6790\u7684id</td><td>int</td></tr></tbody></table>`,14);function g(v,f){const a=r("ExternalLinkIcon");return l(),o(u,null,[c,n("ol",null,[n("li",null,[d,n("a",b,[m,p(a)])]),_,q]),h],64)}var y=t(i,[["render",g],["__file","\u96C6\u6210\u4EE3\u7801\u5206\u6790\u5DE5\u5177.html.vue"]]);export{y as default};
