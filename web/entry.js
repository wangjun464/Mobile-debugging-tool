import iCrush from 'icrush';

// 引入启动界面
import App from './App.iCrush';

// 引入基础样式
import '@yelloxing/normalize.css';

// 引入公共样式
import './assets/styles/style.scss';

// 引入全局指令
import './directive/index';

// 简单的传递信息给node.js的全局方法
iCrush.prototype.emit = (event, ...params) => nodeRequire('electron').ipcRenderer.send(event, ...params);

// 引入全局通知机制
import event from './plug/@event.js'; iCrush.use(event);

// 通过浏览器打开外部链接方法集
import browserLink from './plug/browserLink'; iCrush.use(browserLink);

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App),

    mounted() {

        const Menu = nodeRequire('electron').remote.Menu;

        let menuObj = Menu.buildFromTemplate([
            {
                label: 'Mobile Debugging Tool',
                submenu: [
                    {
                        label: '退出程序',
                        accelerator: 'CmdOrCtrl+Q',
                        click: function () {
                            icrush.emit("quit");
                        }
                    }
                ]
            },
            {
                label: '操作',
                submenu: [
                    {
                        label: '连接手机',
                        accelerator: 'CmdOrCtrl+N',
                        click: function () {
                            icrush.trigger("phoneConnect");
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: '刷新',
                        accelerator: 'CmdOrCtrl+F5',
                        click: function () {
                            alert('刷新');
                        }
                    }
                ]
            },
            {
                label: '帮助',
                submenu: [
                    {
                        label: '关于我们',
                        click: function () {
                            alert('点击了关于我们');
                        }
                    }
                ]
            }
        ]);

        Menu.setApplicationMenu(menuObj);

    }

});
