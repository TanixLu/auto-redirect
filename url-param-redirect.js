// 从url的parameter中就可以获取跳转的链接, 所以不用加载页面, 这样页面是白色的, 让人感觉不到跳转
window.stop();

// 可能的param列表
const possible_params = ["target", "url", "u", "toasturl", "href", "pfurl", "gourl", "redirect", "remoteUrl"];

const valid_url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

// 获取url, 遍历possible_params, 如果有参数匹配上, 就跳转
let redirected = false;
const url = new URL(location.href);
for (const param of possible_params) {
    let redirect_url = url.searchParams.get(param);
    if (redirect_url == null) continue;
    while (!valid_url_regex.test(redirect_url)) {
        const decoded = decodeURIComponent(redirect_url);
        if (decoded === redirect_url) break;
        redirect_url = decoded;
    }
    if (valid_url_regex.test(redirect_url)) {
        location.replace(redirect_url);
        redirected = true;
        break;
    }
}

// 如果还没跳转, 可能是这样的url: https://blog.51cto.com/transfer?http://www.msfn.org/
if (!redirected) {
    if (location.href.includes("51cto")) location.replace(location.href.substring(location.href.indexOf("?") + 1));
}
