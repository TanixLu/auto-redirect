if (t_cn_pattern.test(t_cn_url))
    window.location.replace(document.getElementsByClassName("m-btn")[0]);
else
    document.documentElement.removeAttribute("hidden");
