// 从按钮的href获取链接并跳转
function btn_href_redirect(selector) {
    const redirect_url = document.querySelector(selector).getAttribute("href");
    location.replace(redirect_url);
}

// 匹配具体是哪个网址, 确定需要使用的方法
const pattern_action_list = [
    [/https?:\/\/t\.cn\/.+/, () => btn_href_redirect("body > div > div.open-url > a")],
    [/https?:\/\/jump\.bdimg\.com\/safecheck.+/,
        () => btn_href_redirect("body > div > div.warning_info > p.btns > a")],
    [/https?:\/\/iphone\.myzaker\.com\/zaker\/link\.php.+/, () => btn_href_redirect("body > div > div > a.btn")]
];

let should_redirect = false;
let redirect_action = null;
for (const pattern_action of pattern_action_list) {
    if (pattern_action[0].test(location.href)) {
        // 隐藏整个页面
        document.documentElement.setAttribute("hidden", "");
        redirect_action = pattern_action[1];
        should_redirect = true;
        break;
    }
}
