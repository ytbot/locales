const Locale = require("./Locale.js");

module.exports = new Locale({ //INFO
    name: 'English (United States)',
    id: 'en_US',
    humanizerLanguage: 'en',
    emoji: ':flag_us:',
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
            message: '`{0}` can only be used every {1}, wait {2} before using it again.',
        },
        {
            category: 'help',
            name: 'commandNotFound',
            message: 'That command couldn\'t be found. For a list of valid commands, see `yt help`.',
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: 'There are {0} commands available.',
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: 'You are a {0}. To view information on a specific command, run `yt help {command/alias}`.',
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: 'Commands',
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: 'If you need any help, join the support server with \'yt support\'',
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: 'Module',
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: 'Aliases',
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: 'No aliases',
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
            message: 'Yes',
        },
        {
            category: 'help',
            name: 'No',
            message: 'No',
        },
        {
            category: 'help',
            name: 'LevelUser',
            message: 'user',
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
            message: 'Shard information',
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: 'This server is on shard {0}.',
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
            message: 'Users',
        },
        {
            category: 'shards',
            name: 'embedTitle',
            message: 'All shards',
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '`{0}` is on shard {1}/{2}.',
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: 'servers',
        },
        {
            category: 'shards',
            name: 'Users',
            message: 'users',
        },
        {
            category: 'shards',
            name: 'Shard',
            message: 'Shard',
        },
        {
            category: 'support',
            name: 'response',
            message: 'You can join the support server (or invite people to it) with <{0}>.',
        },
        {
            category: 'invite',
            name: 'response',
            message: 'Want to invite YouTube to your server? Head to <{0}> to add it; just remember you\'ll need to be the owner or have Manage Server permissions.',
        },
        {
            category: 'about',
            name: 'botDescription',
            message: 'YouTube is the best and only Discord bot for youtube.com, providing video/playlist/channel information, trending/random videos, lyrics and more.',
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: 'This shard ({0})',
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: 'All shards ({0})',
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: 'Commands',
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: 'Created by',
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: 'Created at',
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: 'Memory used',
        },
        {
            category: 'about',
            name: 'Guilds',
            message: 'servers',
        },
        {
            category: 'about',
            name: 'Users',
            message: 'users',
        },
        {
            category: 'about',
            name: 'Ran',
            message: 'ran',
        },
        {
            category: 'locale',
            name: 'noPermissions',
            message: 'You don\'t have permission to view or change the server\'s locale. To be able to do this, you need to be the owner or have `Manage Server` permissions.',
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: 'To change your server\'s locale, use `yt locale <new locale>`.',
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: 'Currently set as..',
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: 'Available locales ({0})',
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: 'That locale doesn\'t exist. You can find a list of valid locales with `yt locale`.',
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: 'That locale is already in use.',
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: 'Changing your server\'s locale.. this may take a moment.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: 'Failed to change your server\'s locale. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: 'Your server locale has been changed from `{0}` to `{1}`.',
        },
        {
            category: 'video',
            name: 'noArgs',
            message: 'You didn\'t provide any arguments! To view a video\'s information, provide a video ID, URL, or a search query.',
        },
        {
            category: 'video',
            name: 'searching',
            message: '{0} Searching YouTube.. this may take a moment.',
        },
        {
            category: 'video',
            name: 'searchFail',
            message: 'Failed to find any videos that matched your arguments, make sure the provided arguments are valid. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '{0} video has been found.',
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '{0} videos have been found.',
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: 'To select a video, type the number next to it below within 15 seconds, or type `cancel` to cancel.',
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: 'That choice isn\'t a number, selection has been canceled.',
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: 'That choice is outside of the returned number of results, selection has been canceled.',
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: 'No choice was made within the provided 15 seconds, selection has been canceled.',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: 'Uploaded by',
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
            message: 'Rating',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: 'Uploaded at',
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: 'Duration',
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'noArgs',
            message: 'You didn\'t provide any arguments! To view a playlist\'s information, provide a playlist ID, URL, or a search query.',
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '{0} Searching YouTube.. this may take a moment.',
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: 'Failed to find any playlists that matched your arguments, make sure the provided arguments are valid. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '{0} playlist has been found.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '{0} playlists have been found.',
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: 'To select a playlist, type the number next to it below within 15 seconds, or type `cancel` to cancel.',
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: 'That choice isn\'t a number, selection has been canceled.',
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: 'That choice is outside of the returned number of results, selection has been canceled.',
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: 'No choice was made within the provided 15 seconds, selection has been canceled.',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: 'Created by',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: 'Videos',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: 'No videos',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: 'Created at',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'View',
            message: 'View',
        },
        {
            category: 'playlist',
            name: 'Or',
            message: 'or',
        },
        {
            category: 'playlist',
            name: 'Play',
            message: 'play',
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: 'on youtube.com',
        },
        {
            category: 'channel',
            name: 'noArgs',
            message: 'You didn\'t provide any arguments! To view a channel\'s information, provide a channel ID, URL, or a search query.',
        },
        {
            category: 'channel',
            name: 'searching',
            message: '{0} Searching YouTube.. this may take a moment.',
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: 'Failed to find any channels that matched your arguments, make sure the provided arguments are valid. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '{0} channel has been found.',
        },
        {
            category: 'channel',
            name: 'embedResultsFoundMultiple',
            message: '{0} channels have been found.',
        },
        {
            category: 'channel',
            name: 'embedResultsDescription',
            message: 'To select a channel, type the number next to it below within 15 seconds, or type `cancel` to cancel.',
        },
        {
            category: 'channel',
            name: 'choiceNotANumber',
            message: 'That choice isn\'t a number, selection has been canceled.',
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: 'That choice is outside of the returned number of results, selection has been canceled.',
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: 'No choice was made within the provided 15 seconds, selection has been canceled.',
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: 'Subscribers',
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: 'Hidden',
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: 'No subscribers',
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
            message: 'Joined at',
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: 'Videos',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: 'No videos',
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: 'Country',
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: 'Vanity URL',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: 'No vanity URL',
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: 'ID',
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: 'View on youtube.com',
        },
        {
            category: 'trending',
            name: 'invalidRegion',
            message: 'That region isn\'t valid. A list of valid regions can be found at <https://hasteb.in/eraqafum.yaml>.',
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '{0} Fetching the trending videos off YouTube.. this may take a moment.',
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: 'Failed to fetch the trending videos off YouTube. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: 'Top 5 trending videos for {0}',
        },
        {
            category: 'lyrics',
            name: 'noArgs',
            message: 'You didn\'t provide any arguments! To view lyrics, provide a search query, or a YouTube video URL.',
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: 'No matches could be found for that YouTube video URL, make sure the URL is valid. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '{0} Searching for the lyrics {1}.. this may take a moment.',
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: 'Failed to find any lyrics {0}. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'noArgs',
            message: 'You didn\'t provide any arguments! To find suggested music, provide between 1 and 5 YouTube video URLs of music you like or enjoy.',
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: 'You provided either not enough URLs, or too many. Make sure to only provide between 1 and 5 URLs.',
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '{0} Finding some music for you to try.. this may take a moment.',
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: 'Failed to find any suggestions for you. If this problem persists, let the team know at <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: 'Here are {0} music suggestions for you.',
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
