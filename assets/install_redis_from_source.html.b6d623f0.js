import{_ as a,r as n,o as r,c as i,a as e,b as l,F as d,e as c,d as b}from"./app.d1b9ffe1.js";const p={},u=c(`<h1 id="\u6E90\u7801\u5B89\u88C5-redis" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5B89\u88C5-redis" aria-hidden="true">#</a> \u6E90\u7801\u5B89\u88C5 Redis</h1><h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><ol><li>\u57FA\u4E8Ex86_64\u7684CentOS</li><li>\u57FA\u4E8E\u9CB2\u9E4F920\uFF08aarch64\uFF09\u7684UOS V20</li><li>\u57FA\u4E8E\u98DE\u817E2000\uFF08aarch64\uFF09\u7684TencentOS Server</li></ol><h2 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h2><p>\u5B89\u88C5\u7F16\u8BD1\u6253\u5305\u9700\u8981\u7684\u5DE5\u5177</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum install -y gcc make tcl wget
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E0B\u8F7D\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6E90\u7801" aria-hidden="true">#</a> \u4E0B\u8F7D\u6E90\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget http://download.redis.io/releases/redis-5.0.4.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u89E3\u538B
$ tar zvxf redis-5.0.4.tar.gz -C /usr/local/src

# \u8FDB\u5165\u6E90\u7801\u76EE\u5F55
$ cd /usr/local/src/redis-5.0.4

# \u6784\u5EFAredis\u4F9D\u8D56\u5E93
$ cd deps; make -j4 hiredis jemalloc linenoise lua
$ cd ..

# \u6784\u5EFAredis
$ make -j4
$ make install
$ make clean
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5B89\u88C5\u540E\uFF0C\u53EF\u4EE5\u5728<code>/usr/local/src/redis-5.0.4/src</code>\u76EE\u5F55\u548C<code>/usr/local/bin/</code>\u76EE\u5F55\u4E0B\u627E\u5230<code>redis-server</code>\u4E0E<code>redis-cli</code>\u4E24\u4E2A\u6587\u4EF6</p><h2 id="\u8C03\u6574\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u914D\u7F6E" aria-hidden="true">#</a> \u8C03\u6574\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cp /usr/local/src/redis/redis.conf  /etc/redis.conf
vim /usr/local/src/redis/redis.conf 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u8BBE\u7F6ERedis\u5BC6\u7801
requirepass 123456

# \u5C06 daemonize no \u8C03\u6574\u4E3A daemonize yes\uFF0C\u5C06redis-server\u8C03\u6574\u4E3A\u9ED8\u8BA4\u540E\u53F0\u542F\u52A8
daemonize yes

# \u914D\u7F6E\u65E5\u5FD7
logfile &#39;/var/log/redis/redis-server.log&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-server /etc/redis.conf 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vim /etc/systemd/system/redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-service ext-service line-numbers-mode"><pre class="language-service"><code>[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /etc/redis.conf
ExecStop=/usr/local/bin/redis-cli shutdown
Restart=always

PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u542F\u52A8redis-server\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F00\u673A\u81EA\u52A8\u542F\u52A8redis\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl enable redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,25),t={href:"https://redis.io/topics/quickstart",target:"_blank",rel:"noopener noreferrer"},o=b("Redis\u5B98\u65B9\u6587\u6863");function h(m,v){const s=n("ExternalLinkIcon");return r(),i(d,null,[u,e("ul",null,[e("li",null,[e("a",t,[o,l(s)])])])],64)}var f=a(p,[["render",h],["__file","install_redis_from_source.html.vue"]]);export{f as default};
