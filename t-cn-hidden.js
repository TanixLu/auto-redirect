const t_cn_url = window.location.href;
const t_cn_pattern = /http:\/\/t.cn\/[a-zA-Z0-9]{8}/;
if (t_cn_pattern.test(t_cn_url))
    document.documentElement.setAttribute("hidden", "");
