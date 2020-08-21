
const { shell } = nodeRequire('electron');

/**
 * 
 * 打开外部浏览器链接方法集合
 * 
 * @author 心叶(yelloxing)
 * 
 * 2020年6月12日于大同
 */

export default {
    install(iCrush) {

        // github网站
        iCrush.prototype.openGithubLink = href => {
            shell.openExternal("https://github.com/" + href);
        };

    }
};