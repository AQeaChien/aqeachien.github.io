// 你可以在这里添加交互效果或其他功能
document.addEventListener('DOMContentLoaded', function() {
    // 示例：滚动到页面顶部
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
