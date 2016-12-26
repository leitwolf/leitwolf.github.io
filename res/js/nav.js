// jquery $(document).ready(function(){})
document.ready = function (callback) {
    ///兼容FF,Google
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false)
    }
    //兼容IE
    else if (document.attachEvent) {
        document.attachEvent('onreadytstatechange', function () {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                callback();
            }
        })
    }
    else if (document.lastChild == document.body) {
        callback();
    }
}
// 获取url参数
function getParam(key) {
    //获取url中"?"符后的字串
    var url = window.location.search;
    url = decodeURI(url);
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            // key=value
            var kv = strs[i].split("=");
            if (kv.length == 2 && kv[0] == key) {
                return kv[1];
            }
        }
    }
    return "";
}

// 处理上下页
function createNav() {
    // 当前打开的类型 tag category
    var tag = getParam("tag");
    var key = "";
    var list;
    if (tag != "") {
        key = tag;
        list = data_tags;
    }
    else {
        var category = getParam("category");
        if (category != "") {
            key = category;
            list = data_categories;
        }
    }
    // 当前的url
    var url = page_url;
    var content = "";
    if (key != "") {
        for (var i = 0; i < list.length; i++) {
            var tag = list[i];
            if (tag["type"] == key) {
                // index列表
                var indexList = tag["list"];
                for (var j = 0; j < indexList.length; j++) {
                    var index = indexList[j];
                    var article = data_articles[index];
                    if (article["url"] == url) {
                        // 找到当前所有位置
                        if (j != 0) {
                            content += getPrevNext("prev", data_articles[indexList[j - 1]]);
                        }
                        if (j < indexList.length - 1) {
                            content += getPrevNext("next", data_articles[indexList[j + 1]]);
                        }
                    }
                }
            }
        }
    }
    else {
        for (var i = 0; i < data_articles.length; i++) {
            var article = data_articles[i];
            if (article["url"] == url) {
                // 找到当前所有位置
                if (i != 0) {
                    content += getPrevNext("prev", data_articles[i - 1]);
                }
                if (i < data_articles.length - 1) {
                    content += getPrevNext("next", data_articles[i + 1]);
                }
            }
        }
    }
    document.getElementById("nav").innerHTML = content;
}
// 
// 获取上下页html
// @param type prev next
// 
function getPrevNext(flag, article) {
    var prevTemplate = '<a class="prev" href="{url}">\n' +
        '<i class="iconfont icon-left"></i>\n' +
        '<span class="prev-text nav-default">{title}</span>\n' +
        '<span class="prev-text nav-mobile">Prev</span>\n' +
        '</a>\n';
    var nextTemplate = '<a class="next" href="{url}">\n' +
        '<span class="next-text nav-default">{title}</span>\n' +
        '<span class="next-text nav-mobile">Next</span>\n' +
        '<i class="iconfont icon-right"></i>\n' +
        '</a>\n';
    var template;
    if (flag == "prev") {
        template = prevTemplate;
    }
    else {
        template = nextTemplate;
    }
    var str = template.replace("{url}", rootpath + article["url"] + window.location.search);
    str = str.replace("{title}", article["title"]);
    return str;
}

// 开始执行
document.ready(function () {
    createNav();
});
