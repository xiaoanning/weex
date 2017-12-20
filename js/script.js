
  
  export default 
  {

    data :
    {
      currentPlatform : '' ,
      platformWeb : 'Web' ,
      platformIOS : 'iOS' ,
      platformAndroid : 'Android' ,
      screenWidth : 0 ,
      screenHeight : 0 ,

      toolBar:
      {
        beSelectedIndex:0,

        menus: 
        [
          {'text':'手机银行','selectedText':'手机银行','img':'./../../dist/assets/mobile_bank@3x.png', 'imgSelected':'./../../dist/assets/mobile_bankon@3x.png','defaultImg':'./../../dist/assets/err.jpg'},
          {'text':'金融服务','selectedText':'金融服务','img':'./../../dist/assets/financial_service@3x.png', 'imgSelected':'./../../dist/assets/financial_serviceon@3x.png','defaultImg':'./../../dist/assets/err.jpg'},
          {'text':'我的','selectedText':'我的','img':'./../../dist/assets/mine@3x.png', 'imgSelected':'./../../dist/assets/mineon@3x.png','defaultImg':'./../../dist/assets/err.jpg'},
        ],
        height : 88 ,
        item:
        {
          image:
          {
            height : '58px' ,
            width : '96px' ,
          },
          text:
          {

          },

          selected:
          {
            backgroundColor : 'rgba(0, 0, 0, 0.0)' ,
            color : 'red' ,
            fontSize : '30px' ,
          },
          noSelected:
          {
            backgroundColor : 'rgba(0, 0, 0, 0.0)' ,
            color : 'black' ,
            fontSize : '24px' ,
          },

        },
      
      },
      controller :
      {

        c1:
        {
          backgroundColor :'red',
          height : '662px'  ,
        },
        c2:
        {
          backgroundColor : 'green',
          height :  '662px'  ,

        },
        c3:
        {
          backgroundColor : 'blue' ,
          height : '28px' ,

        },
      },
      redColor:'red',
      blueColor:'blue',
      isTrue:true,


    },
    methods: 
    {
      
      startLog:function(a)
      {
          console.log('=========================='+":"+this.screenWidth);
          console.log('==========================beSelectedIndex'+":"+a);
          console.log('==========================config'+":"+weex.config.config);
          console.log('==========================budleUrl'+":"+weex.config.budleUrl);
          console.log('==========================debug'+":"+weex.config.debug);
          console.log('==========================weexVersion'+":"+weex.config.env.weexVersion);
          console.log('==========================appName'+":"+weex.config.env.appName);
          console.log('==========================appVersion'+":"+weex.config.env.appVersion);
          console.log('==========================platform'+":"+weex.config.env.platform);
          console.log('==========================osVersion'+":"+weex.config.env.osVersion);
          console.log('==========================deviceModel'+":"+weex.config.env.deviceModel);
          console.log('==========================deviceWidth'+":"+weex.config.env.deviceWidth);
          console.log('==========================deviceHeight'+":"+weex.config.env.deviceHeight);
      },

      changeSelectedStyle:function(index)
      {
        var height = this.screenHeight - this.toolBar.height - 200 ;
        //height = 120 ;

        switch(this.toolBar.beSelectedIndex)
        {
          case 0 :
          {
            this.controller.c1.height = height+'px' ;
            this.controller.c1.backgroundColor = 'orange' ;

            break ;
          }
          case 1 :
          {
            this.controller.c2.height = height+'px' ;
            this.controller.c2.backgroundColor = 'orange' ;

            break ;
          }
          case 2 :
          {
            this.controller.c3.height = height+'px' ;
            this.controller.c3.backgroundColor = 'orange' ;

            break ;
          }
        }

        var newHeight = height - 100 ;
        //newHeight = 100 ;
        switch(index)
        {
          case 0 :
          {
            this.controller.c1.height = newHeight+'px' ;
            this.controller.c1.backgroundColor = 'red' ;

            break ;
          }
          case 1 :
          {
            this.controller.c2.height = newHeight+'px' ;
            this.controller.c2.backgroundColor = 'green' ;

            break ;
          }
          case 2 :
          {
            this.controller.c3.height = newHeight+'px' ;
            this.controller.c3.backgroundColor = 'blue' ;

            break ;
          }
        }

        this.toolBar.beSelectedIndex = index;

      },
      switchTab: function (index) 
      {
        console.log(index);
        this.changeSelectedStyle(index);


      },
      setDefaultValue:function()
      {
        this.currentPlatform = weex.config.env.platform ;
        this.screenWidth = weex.config.env.deviceWidth ;
        this.screenHeight = weex.config.env.deviceHeight ;
        this.toolBar.item.image.height = '58px' ;
        this.toolBar.beSelectedIndex = 1 ;
        var height = this.screenHeight - this.toolBar.height ;
        console.log(height,this.screenHeight,this.toolBar.height);
        //height = 120 ;
        this.controller.c1.height = height +'px' ;
        this.controller.c2.height = height +'px' ;
        this.controller.c3.height = height +'px' ;

      }

    },
    mounted()
    {
        this.startLog('mounted');
        this.setDefaultValue();

    },

    
  }

