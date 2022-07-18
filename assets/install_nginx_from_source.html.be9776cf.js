import{_ as s,r as a,o as r,c as l,a as n,b as i,F as c,e as p,d as b}from"./app.d1b9ffe1.js";const d={},u=p(`<h1 id="\u6E90\u7801\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u6E90\u7801\u5B89\u88C5 Nginx</h1><h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><ol><li>\u57FA\u4E8Ex86_64\u7684CentOS</li><li>\u57FA\u4E8Eaarch64\uFF08\u9CB2\u9E4F920\uFF09\u7684UOS V20</li><li>\u57FA\u4E8Eaarch64\uFF08\u98DE\u817E2000\uFF09\u7684TencentOS Server</li></ol><h2 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h2><p>\u5B89\u88C5\u7F16\u8BD1\u6253\u5305\u9700\u8981\u7684\u5DE5\u5177</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y install gcc zlib-devel pcre-devel bzip2-devel openssl-devel readline-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Ubuntu: <code>apt install gcc libssl-dev zlib1g-dev libpcre3-dev libbz2-dev libreadline-dev</code></p></blockquote><h2 id="\u4E0B\u8F7D\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6E90\u7801" aria-hidden="true">#</a> \u4E0B\u8F7D\u6E90\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget http://nginx.org/download/nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u89E3\u538B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u5B89\u88C5" aria-hidden="true">#</a> \u89E3\u538B\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u89E3\u538B
$ tar zvxf nginx-1.20.2.tar.gz -C /usr/local/src

# \u8FDB\u5165\u6E90\u7801\u76EE\u5F55
$ cd /usr/local/src/nginx-1.20.2

# \u914D\u7F6E
$ ./configure \\
--sbin-path=/usr/local/nginx/nginx \\
--conf-path=/etc/nginx/nginx.conf \\
--pid-path=/run/nginx.pid \\
--with-stream \\
--with-http_ssl_module --with-http_v2_module --with-http_auth_request_module

# \u6784\u5EFAnginx
$ make -j4
$ make install
$ make clean

# \u5EFA\u7ACB\u8F6F\u94FE
$ ln -s /usr/local/nginx/nginx /usr/local/bin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u6DFB\u52A0nginx\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0nginx\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0nginx\u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir /etc/nginx/conf.d/
vi /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u68C0\u67E5<code>nginx.conf</code>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><ol><li>\u68C0\u67E5<code>pid /run/nginx.pid</code>\uFF0C\u5982\u679C\u7F3A\u5931\u6216\u88AB\u6CE8\u91CA\u5219\u52A0\u4E0A\uFF0C\u52A0\u4E0A\u4F4D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A</li><li>\u68C0\u67E5\u662F\u5426\u7F3A\u5931\u8FD9\u4E00\u884C<code>include conf.d/*.conf;</code>\uFF0C\u5982\u679C\u7F3A\u5931\u5219\u52A0\u4E0A\uFF0C\u52A0\u4E0A\u4F4D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># ...\u7701\u7565\u5185\u5BB9
#pid        logs/nginx.pid;  # \u9ED8\u8BA4\u6709\u7684
pid         /run/nginx.pid;

events {
    # ...\u7701\u7565\u5185\u5BB9
}

# ...\u7701\u7565\u5185\u5BB9

http {
    # ...\u7701\u7565\u5185\u5BB9
    # 
    include conf.d/*.conf;    
    server {
        # ...\u7701\u7565\u5185\u5BB9
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u540E\u7EED\u53EF\u4EE5\u5C06nginx\u914D\u7F6E\u6587\u4EF6\u653E\u7F6E\u5230<code>/etc/nginx/conf.d/</code>\u76EE\u5F55\u4E0B</p><h2 id="\u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u673A\u81EA\u52A8\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vim /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[Unit]
Description=The nginx HTTP and reverse proxy server
After=network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
# Nginx will fail to start if /run/nginx.pid already exists but has the wrong
# SELinux context. This might happen when running \`nginx -t\` from the cmdline.
# https://bugzilla.redhat.com/show_bug.cgi?id=1268621
ExecStartPre=/bin/rm -f /run/nginx.pid
ExecStartPre=/usr/local/bin/nginx -t
ExecStart=/usr/local/bin/nginx
ExecReload=/usr/local/bin/nginx -s reload
ExecStop=/usr/local/bin/nginx -s stop
KillSignal=SIGQUIT
TimeoutStopSec=5
KillMode=process
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u542F\u52A8nginx\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F00\u673A\u81EA\u52A8\u542F\u52A8nginx\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl enable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,26),t={href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#downloading-the-sources",target:"_blank",rel:"noopener noreferrer"},o=b("Nginx\u5B98\u65B9\u6587\u6863");function m(h,g){const e=a("ExternalLinkIcon");return r(),l(c,null,[u,n("ul",null,[n("li",null,[n("a",t,[o,i(e)])])])],64)}var v=s(d,[["render",m],["__file","install_nginx_from_source.html.vue"]]);export{v as default};
