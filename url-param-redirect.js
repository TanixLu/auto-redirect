// 从url的parameter中就可以获取跳转的链接, 所以不用加载页面, 这样页面是白色的, 让人感觉不到跳转
window.stop();

// 可能的param列表
const posiable_params = ["target", "url", "u", "toasturl", "href", "pfurl", "gourl", "redirect", "remoteUrl"];

// 获取url, 遍历posiable_params, 如果有参数匹配上, 就跳转
let redirected = false;
const url = new URL(location.href);
for (const param of posiable_params) {
    // 有的需要decode两次
    const redirect_url = decodeURIComponent(url.searchParams.get(param));
    if (redirect_url != null && redirect_url.startsWith("http")){
        location.replace(redirect_url);
        console.log(redirect_url)
        redirected = true;
        break;
    }
}

// 如果还没跳转, 可能是这样的url: https://blog.51cto.com/transfer?http://www.msfn.org/
if (!redirected) {
    if (location.href.includes("51cto"))
        location.replace(location.href.substring(location.href.indexOf("?") + 1));
}
