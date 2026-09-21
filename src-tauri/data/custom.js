window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// ============================================================
// PakePlus 注入脚本
// 1) hookClick —— 原样保留，负责拦截 target="_blank" 链接
// 2) Transparent Patch —— 配合窗口设置里的 transparent 开关
// ============================================================

// ---------- 1) 链接拦截（不要修改） ----------
// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}
document.addEventListener('click', hookClick, true)

// ---------- 2) 透明背景补丁 ----------
// 让网页根元素背景透明，配合窗口设置的 transparent
// 不改动原网页代码，仅注入样式
(function () {
    'use strict'

    const STYLE_ID = 'pake-transparent-patch'

    // 需要覆盖的选择器：Nuxt / Vue / 常见 App 容器
    // 如果预览时仍是白底，用开发者工具找到撑背景的节点，把选择器加进来
    const CSS = `
        html, body, #__nuxt, #app {
            background: transparent !important;
            background-color: transparent !important;
        }
    `

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) return

        // document-start 阶段 head 可能还没生成
        const target = document.head || document.documentElement
        if (!target) return

        const style = document.createElement('style')
        style.id = STYLE_ID
        style.type = 'text/css'
        style.textContent = CSS
        target.appendChild(style)

        // 兜底：直接改根元素行内样式，防止页面自身 !important 覆盖
        if (document.documentElement) {
            document.documentElement.style.setProperty(
                'background', 'transparent', 'important'
            )
        }
        if (document.body) {
            document.body.style.setProperty(
                'background', 'transparent', 'important'
            )
        }
    }

    // 尽早执行一次
    injectStyle()

    // DOM 就绪后再补一次（此时 body / #__nuxt / #app 才存在）
    document.addEventListener('DOMContentLoaded', injectStyle)

    // 有些 Nuxt 页面会在 hydration 之后重建根节点，再延迟兜一次
    window.addEventListener('load', () => {
        setTimeout(injectStyle, 300)
    })
})()// ============================================================
// PakePlus 注入脚本
// 1) hookClick —— 原样保留，负责拦截 target="_blank" 链接
// 2) Transparent Patch —— 配合窗口设置里的 transparent 开关
// ============================================================

// ---------- 1) 链接拦截（不要修改） ----------
// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}
document.addEventListener('click', hookClick, true)

// ---------- 2) 透明背景补丁 ----------
// 让网页根元素背景透明，配合窗口设置的 transparent
// 不改动原网页代码，仅注入样式
(function () {
    'use strict'

    const STYLE_ID = 'pake-transparent-patch'

    // 需要覆盖的选择器：Nuxt / Vue / 常见 App 容器
    // 如果预览时仍是白底，用开发者工具找到撑背景的节点，把选择器加进来
    const CSS = `
        html, body, #__nuxt, #app {
            background: transparent !important;
            background-color: transparent !important;
        }
    `

    function injectStyle() {
        if (document.getElementById(STYLE_ID)) return

        // document-start 阶段 head 可能还没生成
        const target = document.head || document.documentElement
        if (!target) return

        const style = document.createElement('style')
        style.id = STYLE_ID
        style.type = 'text/css'
        style.textContent = CSS
        target.appendChild(style)

        // 兜底：直接改根元素行内样式，防止页面自身 !important 覆盖
        if (document.documentElement) {
            document.documentElement.style.setProperty(
                'background', 'transparent', 'important'
            )
        }
        if (document.body) {
            document.body.style.setProperty(
                'background', 'transparent', 'important'
            )
        }
    }

    // 尽早执行一次
    injectStyle()

    // DOM 就绪后再补一次（此时 body / #__nuxt / #app 才存在）
    document.addEventListener('DOMContentLoaded', injectStyle)

    // 有些 Nuxt 页面会在 hydration 之后重建根节点，再延迟兜一次
    window.addEventListener('load', () => {
        setTimeout(injectStyle, 300)
    })
})()