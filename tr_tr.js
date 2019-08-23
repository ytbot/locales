const Locale = require("./Locale.js");

module.exports = new Locale({ //INFO
    name: 'Turkish (Turkey)',
    id: 'tr_TR',
    humanizerLanguage: 'tr',
    emoji: ':flag_tr:',
},
    // actual locales
    /**Format:
     * {
         category: "",
         name: "",
         message:""
     }
     */
    [
        {
            category: 'global',
            name: 'cooldown',
            message: '`{0}` komutu sadece her {1} saniyede kullanılabilir, yeniden kullanabilmek için {2} saniye bekleyin.',
        },
        {
            category: 'help',
            name: 'commandNotFound',
            message: 'Böyle bir komut bulunamadı. Geçerli komutların listesini görmek için `yt help` yazabilirsiniz.',
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: 'Toplamda {0} komut bulunmaktadır.',
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: 'Rütbeniz: {0}. Belli bir komut hakkında ayrıntılı bilgi almak için `yt help {komut/alternatif}` yazabilirsiniz.',
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: 'Komutlar',
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: 'Eğer herhangi bir yardıma ihtiyacınız olursa, \'yt support\' yazarak destek sunucusuna gelin.',
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: 'Modül',
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: 'Alternatifler',
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: 'Alternatif yok',
        },
        {
            category: 'help',
            name: 'embedInfoCooldown',
            message: 'Süre kısıtlaması',
        },
        {
            category: 'help',
            name: 'embedInfoNoCooldown',
            message: 'Kısıtlamasız',
        },
        {
            category: 'help',
            name: 'embedInfoGuildOnly',
            message: 'Sadece sunucu?',
        },
        {
            category: 'help',
            name: 'embedInfoElevated',
            message: 'Sadece geliştirici?',
        },
        {
            category: 'help',
            name: 'Yes',
            message: 'Evet',
        },
        {
            category: 'help',
            name: 'No',
            message: 'Hayır',
        },
        {
            category: 'help',
            name: 'LevelUser',
            message: 'kullanıcı',
        },
        {
            category: 'help',
            name: 'LevelDeveloper',
            message: 'geliştirici',
        },
        {
            category: 'ping',
            name: 'pinging',
            message: 'Gecikme ölçülüyor..',
        },
        {
            category: 'ping',
            name: 'pong',
            message: 'Pong! (shard {0}/{1}, {2}ms gateway {3}ms REST)',
        },
        {
            category: 'shard',
            name: 'embedTitle',
            message: 'Shard bilgileri',
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: 'Bu sunucu {0} numaralı shard\'da.',
        },
        {
            category: 'shard',
            name: 'embedID',
            message: 'ID',
        },
        {
            category: 'shard',
            name: 'embedGuilds',
            message: 'Sunucular',
        },
        {
            category: 'shard',
            name: 'embedUsers',
            message: 'Kullanıcılar',
        },
        {
            category: 'shards',
            name: 'embedTitle',
            message: 'Tüm shardlar',
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '`{0}` adlı sunucu {1}/{2} numaralı shard\'da.',
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: 'sunucu',
        },
        {
            category: 'shards',
            name: 'Users',
            message: 'kullanıcı',
        },
        {
            category: 'shards',
            name: 'Shard',
            message: 'Shard',
        },
        {
            category: 'support',
            name: 'response',
            message: 'Destek sunucusuna <{0}> adresinden katılabilir (ya da başkalarını davet edebilirsiniz).',
        },
        {
            category: 'invite',
            name: 'response',
            message: 'YouTube botunu sunucunuza davet etmek mi istiyorsunuz? Sadece <{0}> adresine gidin; ve unutma, bir bot ekleyebilmek için sunucu sahibi ya da `Sunucuyu Yönet` yetkisine sahip olmalısın.',
        },
        {
            category: 'about',
            name: 'botDescription',
            message: 'YouTube, youtube.com için en iyi ve tek Discord botudur; video/oynatma listesi/kanal bilgilerini gösterebilir, rastgele videolar önerebilir ve (şarkı) sözlerini gösterebilir.',
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: 'Bu shard ({0})',
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: 'Tüm shard\'lar ({0})',
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: 'Komutlar',
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: 'Yapımcı',
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: 'Yapım tarihi',
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: 'Hafıza kullanımı',
        },
        {
            category: 'about',
            name: 'Guilds',
            message: 'sunucu',
        },
        {
            category: 'about',
            name: 'Users',
            message: 'kullanıcı',
        },
        {
            category: 'about',
            name: 'Ran',
            message: 'kullanıldı',
        },
        {
            category: 'locale',
            name: 'noPermissions',
            message: 'Sunucunun bölgesini değiştirmeye yetecek yetkiye sahip değilsiniz. Bunu yapabilmek için sunucu sahibi olmalı ya da `Sunucuyu Yönet` yetkisine sahip olmalısınız.',
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: 'Sunucunun bölgesini değiştirmek için `yt locale <yeni bölge>` komutunu kullanabilirsiniz..',
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: 'Şuanda şu olarak ayarlı...',
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: 'Kullanılabilir bölgeler ({0})',
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: 'Böyle bir bölge bulunamadı. Geçerli bölgelerin bulunduğu listeyi görmek için `yt locale` yazabilirsiniz.',
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: 'Şuanda zaten bu bölge aktif.',
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: 'Sunucunun bölgesi değiştiriliyor... Bu biraz sürebilir.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: 'Sunucunun bölgesi değiştirilemedi. Eğer sorun devam ederse <https://discord.gg/nnpPGRy> adresinden yetkililere ulaşın.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: 'Sunucunun bölgesi `{0}` yerine, `{1}` olarak ayarlandı.',
        },
        {
            category: 'video',
            name: 'noArgs',
            message: 'Herhangi bir şey girmediniz! Video bilgilerini görebilmek için bir video ID\'si, URL\'si ya da arama terimi yazın.',
        },
        {
            category: 'video',
            name: 'searching',
            message: '{0} YouTube\'da aranıyor... Bu biraz sürebilir.',
        },
        {
            category: 'video',
            name: 'searchFail',
            message: 'Aramanıza uygun herhangi bir sonuç bulunamadı, bilgileri doğru girdiğinize emin olun. Eğer problem devam ederse <https://discord.gg/nnpPGRy> adresinden yetkililere ulaşın.',
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '{0} adet video bulundu.',
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '{0} adet video bulundu.',
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: 'Bir video seçmek için 15 saniye içerisinde sonuçların yanındaki numarayı girin ya da iptal etmek için `cancel` yazın.',
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: 'Seçim bir sayı olmalıdır, seçim iptal edilmiştir.',
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: 'Girilen sayı sonuç sayısından fazla olamaz, seçim iptal edilmiştir.',
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: 'On beş saniye içerisinde bir seçim yapılmadı, seçim iptal edilmiştir.',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: 'Yükleyen',
        },
        {
            category: 'video',
            name: 'embedVideoViews',
            message: 'İzlenme',
        },
        {
            category: 'video',
            name: 'embedVideoNoViews',
            message: 'İzlenme yok',
        },
        {
            category: 'video',
            name: 'embedVideoRating',
            message: 'Derecelendirme',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: 'Yüklenme tarihi',
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: 'Uzunluk',
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'noArgs',
            message: 'Herhangi bir şey girmediniz! Oynatma listesi bilgilerini görebilmek için bir oynatma listesi ID\'si, URL\'si ya da arama terimi yazın.',
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '{0} YouTube\'da aranıyor... Bu biraz sürebilir.',
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: 'Aramanıza uygun herhangi bir sonuç bulunamadı, bilgileri doğru girdiğinize emin olun. Eğer problem devam ederse <https://discord.gg/nnpPGRy> adresinden yetkililere ulaşın.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '{0} adet oynatma listesi bulundu.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '{0} adet oynatma listesi bulundu.',
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: 'Bir oynatma listesi seçmek için 15 saniye içerisinde sonuçların yanındaki numarayı girin ya da iptal etmek için `cancel` yazın.',
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: 'Seçim bir sayı olmalıdır, seçim iptal edilmiştir.',
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: 'Girilen sayı sonuç sayısından fazla olamaz, seçim iptal edilmiştir.',
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: 'On beş saniye içerisinde bir seçim yapılmadı, seçim iptal edilmiştir.',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: 'Oluşturan',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: 'Videolar',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: 'Video yok',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: 'Oluşturulma tarihi',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'View',
            message: 'Görüntüle',
        },
        {
            category: 'playlist',
            name: 'Or',
            message: 'ya da',
        },
        {
            category: 'playlist',
            name: 'Play',
            message: 'oynat',
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: 'youtube.com\'da',
        },
        {
            category: 'channel',
            name: 'noArgs',
            message: 'Herhangi bir şey girmediniz! Kanal bilgilerini görebilmek için bir kanal ID\'si, URL\'si ya da arama terimi yazın.',
        },
        {
            category: 'channel',
            name: 'searching',
            message: '{0} YouTube\'da aranıyor... Bu biraz sürebilir.',
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: 'Aramanıza uygun herhangi bir sonuç bulunamadı, bilgileri doğru girdiğinize emin olun. Eğer problem devam ederse <https://discord.gg/nnpPGRy> adresinden yetkililere ulaşın.',
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '{0} adet kanal bulundu.',
        },
        {
            category: 'channel',
            name: 'embedResultsFoundMultiple',
            message: '{0} adet kanal bulundu.',
        },
        {
            category: 'channel',
            name: 'embedResultsDescription',
            message: 'Bir kanalı seçmek için 15 saniye içerisinde sonuçların yanındaki numarayı girin ya da iptal etmek için `cancel` yazın.',
        },
        {
            category: 'channel',
            name: 'choiceNotANumber',
            message: 'Seçim bir sayı olmalıdır, seçim iptal edilmiştir.',
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: 'Girilen sayı sonuç sayısından fazla olamaz, seçim iptal edilmiştir.',
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: 'On beş saniye içerisinde bir seçim yapılmadı, seçim iptal edilmiştir.',
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: 'Aboneler',
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: 'Gizli',
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: 'Abone yok',
        },
        {
            category: 'channel',
            name: 'embedChannelViews',
            message: 'Görüntülenme',
        },
        {
            category: 'channel',
            name: 'embedChannelNoViews',
            message: 'Görüntülenme yok',
        },
        {
            category: 'channel',
            name: 'embedChannelJoinedAt',
            message: 'Katılma tarihi',
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: 'Videolar',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: 'Video yok',
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: 'Ülke',
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: 'Özel URL',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: 'Özel URL yok',
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: 'ID',
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: 'youtube.com\'da görüntüle',
        },
        {
            category: 'trending',
            name: 'invalidRegion',
            message: 'Girdiğiniz bölge geçerli değil. Geçerli bölgelerin listesine şuradan ulaşabilirsiniz <https://hasteb.in/eraqafum.yaml>.',
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '{0} YouTube\'dan trend videolar alınıyor... Bu biraz sürebilir.',
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: 'Trend videolar alınamadı. Eğer problem devam ederse <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: '{0} bölgesi için en iyi 5 video',
        },
        {
            category: 'lyrics',
            name: 'noArgs',
            message: 'Herhangi bir şey girmediniz! Sözleri görüntüleyebilmek için, arama terimi ya da YouTube URL\'si girin.',
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: 'Bu Youtube URL\'si için hiçbir sonuç bulunamadı. Linkin doğru olduğuna emin olun, eğer problem devam ederse <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '{0} Sözler aranıyor {1}... Bu biraz sürebilir.',
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: 'Sözler bulunamadı {0}. Eğer problem devam ederse <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'noArgs',
            message: 'Herhangi bir şey girmediniz! Önerilen şarkı bulmak için, dinlemeyi sevdiğiniz 1 ile 5 arasında YouTube müzik URL\'si yazın.',
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: 'Ya hiç yazmadınız, ya da fazla yazdınız. Sadece 1 ile 5 arası URL\'lerin kabul edildiğini unutmayın.',
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '{0} Denemeniz için bir müzik bulunuyor... Bu biraz sürebilir.',
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: 'Sizin için öneri bulunamadı. Eğer problem devam ederse <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: 'Sizin için {0} adet müzik önerimiz.',
        },
        {
            category: 'suggested',
            name: 'YouTube',
            message: 'YouTube',
        },
        {
            category: 'suggested',
            name: 'Spotify',
            message: 'Spotify',
        }
    ]
);