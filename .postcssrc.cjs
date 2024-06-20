module.exports={
    "plugins":{
        'postcss-pxtorem': {
            rootValue: 192,  //结果为：设计稿元素尺寸/10，
            propList: ['*'],
            includes: [],
            exclude: function (file) {
                return false;
              }//判断哪个文件需要px转换rem
          }
    },
}