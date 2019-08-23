const Locale = require("./Locale.js");

module.exports = new Locale({ //INFO
    name: 'Indonesian (Indonesia)',
    id: 'id_ID',
    humanizerLanguage: 'id',
    emoji: ':flag_id:',
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
            message: '`{0}` hanya bisa di pakai {1}, tunggu {2} sebelum dipakai lagi',
        },
        {
            category: 'help',
            name: 'commandNotFound',
            message: 'Perintah itu tidak dapat ditemukan, untik lihat daftar perintah lihat `yt help`.',
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: 'Ada {0} perintah tersedia.',
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: 'Anda adalah {0}. Untuk lihat informasi pada perintah tertentu, jalankan `yt help {command/alias}`.',
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: 'Perintah',
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: 'If you need any help, join the support server with \'yt support\'',
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: 'Modul',
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: 'Alias',
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: 'Tidak ada alias',
        },
        {
            category: 'help',
            name: 'embedInfoCooldown',
            message: 'Cooldown',
        },
        {
            category: 'help',
            name: 'embedInfoNoCooldown',
            message: 'No cooldown',
        },
        {
            category: 'help',
            name: 'embedInfoGuildOnly',
            message: 'Server only?',
        },
        {
            category: 'help',
            name: 'embedInfoElevated',
            message: 'Developer only?',
        },
        {
            category: 'help',
            name: 'Yes',
            message: 'Iya',
        },
        {
            category: 'help',
            name: 'No',
            message: 'Tidak',
        },
        {
            category: 'help',
            name: 'LevelUser',
            message: 'pengguna',
        },
        {
            category: 'help',
            name: 'LevelDeveloper',
            message: 'developer',
        },
        {
            category: 'ping',
            name: 'pinging',
            message: 'Pinging..',
        },
        {
            category: 'ping',
            name: 'pong',
            message: 'Pong! (shard {0}/{1}, {2}ms gateway {3}ms REST)',
        },
        {
            category: 'shard',
            name: 'embedTitle',
            message: 'Informasi shard',
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: 'Server ini ada di shard {0}.',
        },
        {
            category: 'shard',
            name: 'embedID',
            message: 'ID',
        },
        {
            category: 'shard',
            name: 'embedGuilds',
            message: 'Servers',
        },
        {
            category: 'shard',
            name: 'embedUsers',
            message: 'Pengguna',
        },
        {
            category: 'shards',
            name: 'embedTitle',
            message: 'All shards',
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '`{0}` ada di shard {1}/{2}.',
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: 'servers',
        },
        {
            category: 'shards',
            name: 'Users',
            message: 'pengguna',
        },
        {
            category: 'shards',
            name: 'Shard',
            message: 'Shard',
        },
        {
            category: 'support',
            name: 'response',
            message: 'Anda bisa bergabung dengan server dukungan (atau undang orang ke sana) dengan <{0}>.',
        },
        {
            category: 'invite',
            name: 'response',
            message: 'Ingin mengundang YouTube ke server anda? Buka <{0}> untuk menambahkannya; ingat Anda harus menjadi pemilik atau memiliki izin \'Manage Server\'.',
        },
        {
            category: 'about',
            name: 'botDescription',
            message: 'YouTube adalah bot Discord terbaik dan satu-satunya Discord bot untuk youtube.com, menyediakan informasi video/playlist/informasi channel, video trending/acak, lirik, dan lainnya.',
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: 'Shard ini ({0})',
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: 'Total shards ({0})',
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: 'Perintah',
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: 'Pembuat:',
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: 'Dibuat saat',
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: 'Memory dipakai',
        },
        {
            category: 'about',
            name: 'Guilds',
            message: 'servers',
        },
        {
            category: 'about',
            name: 'Users',
            message: 'pengguna',
        },
        {
            category: 'about',
            name: 'Ran',
            message: 'ran',
        },
        {
            category: 'locale',
            name: 'noPermissions',
            message: 'Anda tidak memiliki izin untuk melihat atau mengubah lokal server. Untuk dapat melakukan ini, Anda harus menjadi pemilik atau memiliki izin `Manage Server`.',
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: 'Untuk mengubah lokal server Anda, gunakan `yt locale <new locale>`.',
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: 'Bahasa Aktif:',
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: 'Bahasa tersedia ({0})',
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: 'Lokal itu tidak ada. Anda dapat menemukan daftar lokal yang valid dengan `yt locale `.',
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: 'Lokal itu sudah digunakan.',
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: 'Mengubah lokal server anda ... ini mungkin memerlukan waktu.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: 'Gagal mengubah lokal server Anda. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: 'Lokal server anda telah diubah dari `{0}` ke `{1}`.',
        },
        {
            category: 'video',
            name: 'noArgs',
            message: 'Anda tidak memberikan argumen apa pun! Untuk melihat informasi video, berikan ID video, URL, atau permintaan pencarian.',
        },
        {
            category: 'video',
            name: 'searching',
            message: '{0} Mencari di YouTube ... ini mungkin memerlukan waktu.',
        },
        {
            category: 'video',
            name: 'searchFail',
            message: 'Gagal menemukan video yang cocok dengan argumen Anda, pastikan argumen yang diberikan valid. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '{0} video telah ditemukan.',
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '{0} video telah ditemukan.',
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: 'Untuk memilih video, ketikkan nomor di sebelahnya di bawah dalam 15 detik, atau ketik `cancel ` untuk membatalkan.',
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: 'Pilihan itu bukan angka, seleksi telah dibatalkan.',
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: 'Pilihan itu di luar jumlah hasil yang dikembalikan, seleksi telah dibatalkan.',
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: 'Tidak ada pilihan yang dibuat dalam 15 detik yang disediakan, pemilihan telah dibatalkan.',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: 'Diunggah oleh',
        },
        {
            category: 'video',
            name: 'embedVideoViews',
            message: 'Views',
        },
        {
            category: 'video',
            name: 'embedVideoNoViews',
            message: 'No views',
        },
        {
            category: 'video',
            name: 'embedVideoRating',
            message: 'Peringkat',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: 'Diunggah saat',
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: 'Durasi',
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'noArgs',
            message: 'Anda tidak memberikan argumen apa pun! Untuk melihat informasi playlist, berikan ID video, URL, atau permintaan pencarian.',
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '{0} Mencari di YouTube ... ini mungkin memerlukan waktu.',
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: 'Gagal menemukan playlist yang cocok dengan argumen Anda, pastikan argumen yang diberikan valid. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '{0} playlist telah ditemukan..',
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '{0} playlists telah ditemukan..',
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: 'Untuk memilih playlist, ketikkan nomor di sebelahnya di bawah dalam 15 detik, atau ketik `cancel ` untuk membatalkan.',
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: 'Pilihan itu bukan angka, seleksi telah dibatalkan.',
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: 'Pilihan itu di luar jumlah hasil yang dikembalikan, seleksi telah dibatalkan.',
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: 'Tidak ada pilihan yang dibuat dalam 15 detik yang disediakan, pemilihan telah dibatalkan.',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: 'Dibuat oleh',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: 'Videos',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: 'Tidak ada videos',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: 'Dibuat saat',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'View',
            message: 'lihat',
        },
        {
            category: 'playlist',
            name: 'Or',
            message: 'atau',
        },
        {
            category: 'playlist',
            name: 'Play',
            message: 'main',
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: 'di youtube.com',
        },
        {
            category: 'channel',
            name: 'noArgs',
            message: 'Anda tidak memberikan argumen apa pun! Untuk melihat informasi channel, berikan ID video, URL, atau permintaan pencarian.',
        },
        {
            category: 'channel',
            name: 'searching',
            message: '{0} Mencari di YouTube ... ini mungkin memerlukan waktu.',
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: 'Gagal menemukan channel yang cocok dengan argumen Anda, pastikan argumen yang diberikan valid. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '{0} channels telah ditemukan..',
        },
        {
            category: 'channel',
            name: 'embedResultsFoundMultiple',
            message: '{0} channels telah ditemukan..',
        },
        {
            category: 'channel',
            name: 'embedResultsDescription',
            message: 'Untuk memilih channel, ketikkan nomor di sebelahnya di bawah dalam 15 detik, atau ketik `cancel ` untuk membatalkan.',
        },
        {
            category: 'channel',
            name: 'choiceNotANumber',
            message: 'Pilihan itu bukan angka, seleksi telah dibatalkan.',
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: 'Pilihan itu di luar jumlah hasil yang dikembalikan, seleksi telah dibatalkan.',
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: 'Tidak ada pilihan yang dibuat dalam 15 detik yang disediakan, pemilihan telah dibatalkan.',
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: 'Subscribers',
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: 'Tersembunyi',
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: 'Tidak ada subscribers',
        },
        {
            category: 'channel',
            name: 'embedChannelViews',
            message: 'Views',
        },
        {
            category: 'channel',
            name: 'embedChannelNoViews',
            message: 'No views',
        },
        {
            category: 'channel',
            name: 'embedChannelJoinedAt',
            message: 'Bergabung saat',
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: 'Video',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: 'Tidak ada video',
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: 'Negara',
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: 'Vanity URL',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: 'Tidak ada vanity URL',
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: 'ID',
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: 'lihat di youtube.com',
        },
        {
            category: 'trending',
            name: 'invalidRegion',
            message: 'Wilayah itu tidak valid. Daftar wilayah yang valid dapat ditemukan di <https://hasteb.in/eraqafum.yaml>.',
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '{0} Mencari video yang sedang tren di YouTube ... ini mungkin memerlukan waktu.',
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: 'Gagal mengambil video yang sedang tren di YouTube. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: '5 video trending teratas untuk {0}',
        },
        {
            category: 'lyrics',
            name: 'noArgs',
            message: 'Anda tidak memberikan argumen apa pun! Untuk melihat lirik, berikan permintaan pencarian, atau URL video YouTube.',
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: 'Tidak ditemukan kecocokan untuk URL video YouTube itu, pastikan URL itu valid. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '{0} Mencari lirik {1} .. ini mungkin perlu waktu.',
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: 'Gagal menemukan lirik {0}. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'noArgs',
            message: 'Anda tidak memberikan argumen apa pun! Untuk menemukan musik yang disarankan, sediakan antara 1 dan 5 URL video YouTube dari musik yang Anda sukai atau nikmati.',
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: 'Anda memberikan URL yang tidak cukup, atau terlalu banyak. Pastikan hanya menyediakan antara 1 dan 5 URL.',
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '{0} Menemukan musik untuk Anda coba .. ini mungkin memerlukan waktu.',
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: 'Gagal menemukan saran untuk Anda. Jika masalah ini berlanjut, beri tahu tim di <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: 'Berikut adalah {0} saran musik untuk anda.',
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
