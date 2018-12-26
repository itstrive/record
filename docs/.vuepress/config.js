module.exports = {
    title:'测试',
    description: 'Just for fun', //描述
    themeConfig: {
        // displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'Home', link: '/' },
            { text: 'JS', link: '/js/' },
            { text: 'GitHub', link: 'https://github.com/itstrive' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ],
        sidebar: [
            {
                'title':'基础文档',
                collapsable: false,
                children:[
                    'A',
                    'B'
                ]
            }
        ]
    }
}