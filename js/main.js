(function () {
  window.onload = function () {
    /**
     * 配置 MutationObserver
     */
    const observerCallback = function (mutationList, observer) {
      console.log(mutationList, observer);
    };
    const observer = new MutationObserver(observerCallback);

    /**
     * 元素监测的参数
     */
    const observerConfig = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      attributes: true, // 观察属性变动
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
    };

    /**
     * 带监测的 DOM 元素
     */
    const targetElement = document.getElementById('line');

    /**
     * 监测 DOM 变化
     */
    observer.observe(targetElement, observerConfig);
  };
})();
