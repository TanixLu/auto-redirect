window.stop();
const url = new URL(window.location.href);
const posiableParams = ["target", "url", "u"];
for (const param of posiableParams) {
    const redirectUrl = url.searchParams.get(param);
    if (redirectUrl !== null && redirectUrl.startsWith("http"))
        window.location.replace(redirectUrl);
}
