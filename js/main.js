/**
 * 创建 observer 对象
 */
const observerCallback = function (mutationList, observer) {
  console.log('Observer: ', observer);

  mutationList.forEach((mutationRecord) => {
    console.log(mutationRecord);
  });
};
const observer = new MutationObserver(observerCallback);

/**
 * 监测 DOM 元素
 */
const targetElement = document.querySelector('ul');
const observerConfig = {
  childList: true, // 观察目标子节点的变化，添加或者删除
  attributes: true, // 观察属性变动
  subtree: true, // 默认为 false，设置为 true 可以观察后代节点（默认只观察父节点，即 observe 的节点本身）
};
observer.observe(targetElement, observerConfig);

/**
 * 停止监听
 */
// observer.disconnect();

/**
 * 一些辅助操作
 */
// childList 属性变化
function addList() {
  const childLen = targetElement.childElementCount;

  const newLi = document.createElement('li');
  newLi.innerHTML = `This is a new Paragraph, the line is ${childLen}`;

  targetElement.appendChild(newLi);
}
// attribute 属性变化
function changeColor() {
  const firstChild = targetElement.firstElementChild;
  firstChild.setAttribute('style', 'color: #5392ff');
}
