const BaseLocale = require("./BaseLocale.js");

module.exports = new BaseLocale({ //INFO
        name: "",
        id: "",
        humanizerLanuage: "",
        emoji: ""
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
        //cat:global
        {
            category: 'global',
            name: 'cooldown',
            message: '', // 0: limit, 1: time left
        },

        //cat:help
        {
            category: 'help',
            name: 'commandNotFound',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: '', // 0: command count
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: '', // 0: level
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoCooldown',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoNoCooldown',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoGuildOnly',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'embedInfoElevated',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'Yes',
            message: 'Yes', // yes
        },
        {
            category: 'help',
            name: 'No',
            message: 'No', // no?
        },
        {
            category: 'help',
            name: 'LevelUser',
            message: '', // no params
        },
        {
            category: 'help',
            name: 'LevelDeveloper',
            message: '', // no params
        },

        //cat:ping
        {
            category: 'ping',
            name: 'pinging',
            message: '', // no params
        },
        {
            category: 'ping',
            name: 'pong',
            message: '', // 0: shardID, 1: shardCount, 2: gatewayPing, 3: RESTPing
        },

        //cat:shard
        {
            category: 'shard',
            name: 'embedTitle',
            message: '', // no params
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: '', // 0: shardID
        },
        {
            category: 'shard',
            name: 'embedID',
            message: '', // no params
        },
        {
            category: 'shard',
            name: 'embedGuilds',
            message: '', // no params
        },
        {
            category: 'shard',
            name: 'embedUsers',
            message: '', // no params
        },

        //cat:shards
        {
            category: 'shards',
            name: 'embedTitle',
            message: '', // no params
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '', // no params
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: '', // no params
        },
        {
            category: 'shards',
            name: 'Users',
            message: '', // no params
        },
        {
            category: 'shards',
            name: 'Shard',
            message: '', // no params
        },

        //cat:support
        {
            category: 'support',
            name: 'response',
            message: '', // 0: url
        },

        //cat:invite
        {
            category: 'invite',
            name: 'response',
            message: '', // 0: url
        },

        //cat:about
        {
            category: 'about',
            name: 'botDescription',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: '', // 0: shardID
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: '', // 0: shardCount
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'Guilds',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'Users',
            message: '', // no params
        },
        {
            category: 'about',
            name: 'Ran',
            message: '', // no params
        },

        //cat:locale
        {
            category: 'locale',
            name: 'noPermissions',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: '', // 0: count
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: '', // no params
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: '', // 0: oldLocale, 1: newLocale
        },

        //cat:video
        {
            category: 'video',
            name: 'noArgs',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'searching',
            message: '', // 0: emoji
        },
        {
            category: 'video',
            name: 'searchFail',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '', // 0: count
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '', // 0: count
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoViews',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoNoViews',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoRating',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: '', // no params
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: '', // no params
        },

        //cat:playlist
        {
            category: 'playlist',
            name: 'noArgs',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '', // 0: emoji
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '', // 0: count
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '', // 0: count
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'View',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'Or',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'Play',
            message: '', // no params
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: '', // no params
        },

        //cat:channel
        {
            category: 'channel',
            name: 'noArgs',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'searching',
            message: '', // 0: emoji
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '', // 0: count
        },
        {
            category: 'channel',
            name: 'embedResultsFoundMultiple',
            message: '', // 0: count
        },
        {
            category: 'channel',
            name: 'embedResultsDescription',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'choiceNotANumber',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelViews',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelNoViews',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelJoinedAt',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: '', // no params
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: '', // no params
        },

        //cat:trending
        {
            category: 'trending',
            name: 'invalidRegion',
            message: '', // no params
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '', // 0: emoji
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: '', // no params
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: '', // no params
        },

        //cat:lyrics
        {
            category: 'lyrics',
            name: 'noArgs',
            message: '', // no params
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: '', // no params
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '', // 0: emoji, 1: type
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: '', // 0: type
        },

        //cat:suggested
        {
            category: 'suggested',
            name: 'noArgs',
            message: '', // no params
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: '', // no params
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '', // 0: emoji
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: '', // no params
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: '', // 0: count
        },
        {
            category: 'suggested',
            name: 'YouTube',
            message: '', // no params
        },
        {
            category: 'suggested',
            name: 'Spotify',
            message: '', // no params
        },
    ]
);
