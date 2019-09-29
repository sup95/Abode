module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    plugins: [
        [ 
          '@vuepress/google-analytics',
          {
            'ga': 'UA-142247486-1'
          }
        ],
        ['@vuepress/blog', {
          directories: [
            {
              id: 'post',
              dirname: 'blog/posts',
              path: '/blog/',
              layout: 'BlogLanding',
              itemLayout: 'Blog',
              itemPermalink: '/blog/:slug',
            },
          ],
        }]  
    ],
    markdown: {
        anchor: { permalink: false },
    }
}