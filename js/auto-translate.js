// auto-translate.js

// 1. 加载 translate.js 库（确保库先加载好）
// 注意：这个文件需要在 HTML 中先于本脚本引入，或者动态加载。
// 为了方便，我们在 HTML 中先引入 translate.js，再引入本脚本。

(function() {
    // 等待 DOM 和 translate 库都准备就绪
    function initTranslate() {
        if (typeof translate === 'undefined') {
            console.warn('translate.js 未加载，请确保在 HTML 中先引入 translate.js');
            return;
        }

        // 设置网站原始语言为简体中文（固定）
        translate.language.setLocal('chinese_simplified');
        // 选择翻译服务（可以用 'client.edge' 或 'client.google'）
        translate.service.use('client.edge');
        
        // 从 localStorage 读取上次选择的语言
        let savedLang = localStorage.getItem('website_language');
        
        // 如果没有保存过，默认为中文（不翻译）
        if (!savedLang) {
            savedLang = 'chinese_simplified';
        }
        
        // 执行翻译或恢复
        if (savedLang === 'chinese_simplified') {
            // 确保显示原始中文（清除之前的翻译）
            if (typeof translate.restore === 'function') {
                translate.restore();
            }
        } else {
            translate.language.setLanguageTo(savedLang);
            translate.execute();
        }
        
        // 给页面上的语言切换器绑定事件（如果有的话）
        // 假设你的切换器有一个 id="languageSwitcher"
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            // 将下拉菜单的当前值设置为已保存的语言
            if (switcher.querySelector(`option[value="${savedLang}"]`)) {
                switcher.value = savedLang;
            }
            
            switcher.addEventListener('change', function() {
                let targetLang = this.value;
                if (targetLang === 'chinese_simplified') {
                    translate.restore();
                } else {
                    translate.language.setLanguageTo(targetLang);
                    translate.execute();
                }
                // 保存用户的选择
                localStorage.setItem('website_language', targetLang);
            });
        }
    }
    
    // 确保在 DOM 加载完成后运行（translate.js 可能需要）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTranslate);
    } else {
        initTranslate();
    }
})();