/**
 * 无障碍辅助指令：v-panel-header
 *
 * 为 MDUI 可折叠面板的标题（.mdui-panel-item-header）补充：
 *  - aria-expanded 状态同步（监听面板 item 的 class 变化，兼容 MDUI 动画）
 *  - 键盘操作（Enter / Space 展开收起）
 *
 * 仅在面板容器带有 mdui-panel 属性（可折叠）时生效；
 * 静态面板标题不会被错误地标记为可交互元素。
 */
const observers = new WeakMap<HTMLElement, MutationObserver>()
const keydownHandlers = new WeakMap<HTMLElement, (event: KeyboardEvent) => void>()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('panel-header', {
    mounted(el: HTMLElement) {
      const item = el.closest('.mdui-panel-item')
      if (!item) return

      const panel = item.closest('.mdui-panel')
      // 非可折叠面板：撤销模板中的交互语义
      if (!panel || !panel.hasAttribute('mdui-panel')) {
        el.removeAttribute('role')
        el.removeAttribute('tabindex')
        return
      }

      const syncAriaExpanded = () => {
        el.setAttribute(
          'aria-expanded',
          item.classList.contains('mdui-panel-item-open') ? 'true' : 'false'
        )
      }
      syncAriaExpanded()

      const observer = new MutationObserver(syncAriaExpanded)
      observer.observe(item, { attributes: true, attributeFilter: ['class'] })
      observers.set(el, observer)

      const onKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          el.click()
        }
      }
      el.addEventListener('keydown', onKeydown)
      keydownHandlers.set(el, onKeydown)
    },
    unmounted(el: HTMLElement) {
      observers.get(el)?.disconnect()
      observers.delete(el)
      const handler = keydownHandlers.get(el)
      if (handler) {
        el.removeEventListener('keydown', handler)
        keydownHandlers.delete(el)
      }
    },
  })
})
