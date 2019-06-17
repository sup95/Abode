module.exports = {
    plugins: [
        [ 
          '@vuepress/google-analytics',
          {
            'ga': 'UA-142247486-1'
          }
        ]  
    ],
    markdown: {
        anchor: { permalink: false },
    }
}