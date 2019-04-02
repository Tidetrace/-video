Page({
  data: {
    active: 0,
    icon: [{
      normal: '../../pages/images/index_normal.png',
      active: '../../pages/images/index_active.png',
      title: "首页"
    }, {
      normal: '../../pages/images/read_normal.png',
      active: '../../pages/images/read_active.png',
      title: "书架"
    }, {
      normal: '../../pages/images/person_normal.png',
      active: '../../pages/images/person_active.png',
      title: "我的"
    }],
    subject: [{
      id: "0001",
      title: "玄幻",
      content: [{
        id: "01",
        texts: "这是“广告位”玄幻类的01~"
      }, {
        id: "01",
        texts: "这是“广告位”玄幻类的02~"
      }],
      list: [{
          id: "01",
          score: 3,
          title: "牧神记玄幻",
          image: "mushenji.jpg",
          info: "大墟的祖训说，天黑，别出门。大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。 这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……做个春..."
        },
        {
          id: "02",
          score: 2,
          title: 2,
          image: "quanzhifashi.jpg",
          info: "一觉醒来，世界大变。 熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师。 居住的都市之外游荡着袭击人类的魔物妖兽，虎视眈眈。 崇尚科学的世界变成了崇尚魔法，偏..."
        },
        {
          id: "03",
          score: 5,
          title: "超级狂少",
          image: "chaojikuangshao.jpg",
          info: "谭笑笑说：我是极品校花！ 彭莹诗说：我是极品杀手！ 尹宝儿说：我是极品宝贝！ 上官无道说：我还是极品公子呢……叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践..."
        },
        {
          id: "04",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者。 修行者们， 开法眼，可看妖魔鬼怪。 炼一口飞剑，可千里杀敌。 千里眼、..."
        },
        {
          id: "05",
          score: 2,
          title: "带着农场混异界",
          image: "daizhenongchanghunyijie.jpg",
          info: "他横任他横，我自种我田，若要来惹我，过不了明年。 宅男赵海带着QQ农场穿越到了异界，附身到了一个落迫的小贵族身上，他的封地是一片种不出东西的黑土地，而最主..."
        },
        {
          id: "06",
          score: 5,
          title: "绝世邪神",
          image: "jueshixieshen.jpg",
          info: "重生异世，放荡不羁的叶楚面对众多绝世天才，倾世红颜。他如何踏破苍穹，让或冷艳或性感的佳人随他一起涨姿势？！ 各位书友要是觉得《绝世邪神》还不错的话请不要忘..."
        },
        {
          id: "07",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者..."
        }
      ]
    }, {
      id: "0002",
      title: "文艺",
      content: [{
        id: "01",
        texts: "这是“广告位”文艺类的01~"
      }, {
        id: "01",
        texts: "这是“广告位”文艺类的02~"
      }],
      list: [{
          id: "01",
          score: 3,
          title: "牧神记",
          image: "mushenji.jpg",
          info: "大墟的祖训说，天黑，别出门。大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。 这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……做个春..."
        },
        {
          id: "02",
          score: 6,
          title: "全职法师文艺",
          image: "quanzhifashi.jpg",
          info: "一觉醒来，世界大变。 熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师。 居住的都市之外游荡着袭击人类的魔物妖兽，虎视眈眈。 崇尚科学的世界变成了崇尚魔法，偏..."
        },
        {
          id: "03",
          score: 6,
          title: "超级狂少",
          image: "chaojikuangshao.jpg",
          info: "谭笑笑说：我是极品校花！ 彭莹诗说：我是极品杀手！ 尹宝儿说：我是极品宝贝！ 上官无道说：我还是极品公子呢……叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践..."
        },
        {
          id: "04",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者。 修行者们， 开法眼，可看妖魔鬼怪。 炼一口飞剑，可千里杀敌。 千里眼、..."
        },
        {
          id: "05",
          score: 2,
          title: "带着农场混异界",
          image: "daizhenongchanghunyijie.jpg",
          info: "他横任他横，我自种我田，若要来惹我，过不了明年。 宅男赵海带着QQ农场穿越到了异界，附身到了一个落迫的小贵族身上，他的封地是一片种不出东西的黑土地，而最主..."
        },
        {
          id: "06",
          score: 5,
          title: "绝世邪神",
          image: "jueshixieshen.jpg",
          info: "重生异世，放荡不羁的叶楚面对众多绝世天才，倾世红颜。他如何踏破苍穹，让或冷艳或性感的佳人随他一起涨姿势？！ 各位书友要是觉得《绝世邪神》还不错的话请不要忘..."
        },
        {
          id: "07",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者..."
        }
      ]
    }, {
      id: "0003",
      title: "仙侠",
      content: [{
        id: "01",
        texts: "这是“广告位”仙侠类的01~"
      }, {
        id: "01",
        texts: "这是“广告位”仙侠类的02~"
      }],
      list: [{
          id: "01",
          score: 2,
          title: "牧神记仙侠",
          image: "mushenji.jpg",
          info: "大墟的祖训说，天黑，别出门。大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。 这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……做个春..."
        },
        {
          id: "02",
          score: 4,
          title: 2,
          image: "quanzhifashi.jpg",
          info: "一觉醒来，世界大变。 熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师。 居住的都市之外游荡着袭击人类的魔物妖兽，虎视眈眈。 崇尚科学的世界变成了崇尚魔法，偏..."
        },
        {
          id: "03",
          score: 6,
          title: "超级狂少",
          image: "chaojikuangshao.jpg",
          info: "谭笑笑说：我是极品校花！ 彭莹诗说：我是极品杀手！ 尹宝儿说：我是极品宝贝！ 上官无道说：我还是极品公子呢……叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践..."
        },
        {
          id: "04",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者。 修行者们， 开法眼，可看妖魔鬼怪。 炼一口飞剑，可千里杀敌。 千里眼、..."
        },
        {
          id: "05",
          score: 2,
          title: "带着农场混异界",
          image: "daizhenongchanghunyijie.jpg",
          info: "他横任他横，我自种我田，若要来惹我，过不了明年。 宅男赵海带着QQ农场穿越到了异界，附身到了一个落迫的小贵族身上，他的封地是一片种不出东西的黑土地，而最主..."
        },
        {
          id: "06",
          score: 5,
          title: "绝世邪神",
          image: "jueshixieshen.jpg",
          info: "重生异世，放荡不羁的叶楚面对众多绝世天才，倾世红颜。他如何踏破苍穹，让或冷艳或性感的佳人随他一起涨姿势？！ 各位书友要是觉得《绝世邪神》还不错的话请不要忘..."
        },
        {
          id: "07",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者..."
        }
      ]
    }, {
      id: "0001",
      title: "看空间",
      content: [{
        id: "01",
        texts: "这是“广告位”aa类的01~"
      }, {
        id: "01",
        texts: "这是“广告位”aa类的02~"
      }],
      list: [{
          id: "01",
          score: 4,
          title: "牧神记",
          image: "mushenji.jpg",
          info: "大墟的祖训说，天黑，别出门。大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧，含辛茹苦将他养大。 这一天夜幕降临，黑暗笼罩大墟，秦牧走出了家门……做个春..."
        },
        {
          id: "02",
          score: 4,
          title: 2,
          image: "quanzhifashi.jpg",
          info: "一觉醒来，世界大变。 熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师。 居住的都市之外游荡着袭击人类的魔物妖兽，虎视眈眈。 崇尚科学的世界变成了崇尚魔法，偏..."
        },
        {
          id: "03",
          score: 6,
          title: "超级狂少",
          image: "chaojikuangshao.jpg",
          info: "谭笑笑说：我是极品校花！ 彭莹诗说：我是极品杀手！ 尹宝儿说：我是极品宝贝！ 上官无道说：我还是极品公子呢……叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践..."
        },
        {
          id: "04",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者。 修行者们， 开法眼，可看妖魔鬼怪。 炼一口飞剑，可千里杀敌。 千里眼、..."
        },
        {
          id: "05",
          score: 2,
          title: "带着农场混异界",
          image: "daizhenongchanghunyijie.jpg",
          info: "他横任他横，我自种我田，若要来惹我，过不了明年。 宅男赵海带着QQ农场穿越到了异界，附身到了一个落迫的小贵族身上，他的封地是一片种不出东西的黑土地，而最主..."
        },
        {
          id: "06",
          score: 5,
          title: "绝世邪神",
          image: "jueshixieshen.jpg",
          info: "重生异世，放荡不羁的叶楚面对众多绝世天才，倾世红颜。他如何踏破苍穹，让或冷艳或性感的佳人随他一起涨姿势？！ 各位书友要是觉得《绝世邪神》还不错的话请不要忘..."
        },
        {
          id: "07",
          score: 4,
          title: "飞剑问道",
          image: "feijianwendao.jpg",
          info: "在这个世界，有狐仙、河神、水怪、大妖，也有求长生的修行者..."
        }
      ]
    }, {
      id: "0001",
      title: "mmmmmm",
      content: [{
        id: "01",
        texts: "这是“广告位”mmm类的01~"
      }, {
        id: "01",
        texts: "这是“广告位”m类的02~"
      }]
    }, ]



  },
  onClick(event) {
    wx.showToast({
      title: `${event.detail.title}类`,
      icon: 'none'
    });
  },
  onChange(event) {
    console.log(event.detail);
  }
});