const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '星茶会',
            artist: '灰澈',
            url: 'http://music.163.com/song/media/outer/url?id=492390949.mp3',
            cover: '/./dist/music/imgs/xingchahui.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'You',
            artist: '千坂/N2V',
            url: 'http://music.163.com/song/media/outer/url?id=506520164.mp3',
            cover: '/./dist/music/imgs/you.jpg',
            lrc: '',
            theme: '#46718b'
        },
		{
            name: '素颜',
            artist: '许嵩/何曼婷',
            url: 'http://music.163.com/song/media/outer/url?id=167827.mp3',
            cover: '/./dist/music/imgs/素颜.jpg',
            lrc: '',
            theme: '#46718b'
        },
		{
            name: '天空之城(八音盒版)',
            artist: 'V.A.',
            url: 'http://music.163.com/song/media/outer/url?id=28668499.mp3',
            cover: '/./dist/music/imgs/天空之城.jpg',
            lrc: '',
            theme: '#46718b'
        },
		{
            name: '稻香',
            artist: '周杰伦',
            url: '/./dist/music/songs/周杰伦 - 稻香.mp3',
            cover: '/./dist/music/imgs/稻香.jpg',
            lrc: '',
            theme: '#46718b'
        }
    ]
});