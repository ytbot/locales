const Locale = require("./Locale.js");

module.exports = new Locale({ //INFO
    name: 'Russian (Russia)',
    id: 'ru_RU',
    humanizerLanguage: 'ru',
    emoji: ':flag_ru:',
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
            message: '`{0}`  может быть использована каждые {1}, подожди ещё {2} прежде чем использовать её опять.',
        },
        {
            category: 'help',
            name: 'commandNotFound',
            message: 'Эта команда не найдена. Напишите `yt help`.',
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: 'На данный момент доступно {0} команд(ы).',
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: 'Сейчас вы на уровне {0}. Чтобы узнать информацию по определенной команде, напишите `yt help {command/alias}`.',
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: 'Команды',
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: 'Если вам нужна помощь с ботом, зайдите на специальный сервер. Просто напишите \'yt support\'',
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: 'Модуль',
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: 'Альянсы',
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: 'Нету альянсов',
        },
        {
            category: 'help',
            name: 'embedInfoCooldown',
            message: 'Таймер',
        },
        {
            category: 'help',
            name: 'embedInfoNoCooldown',
            message: 'Таймера нет',
        },
        {
            category: 'help',
            name: 'embedInfoGuildOnly',
            message: 'Только серверам?',
        },
        {
            category: 'help',
            name: 'embedInfoElevated',
            message: 'Только разработчику?',
        },
        {
            category: 'help',
            name: 'Yes',
            message: 'Да',
        },
        {
            category: 'help',
            name: 'No',
            message: 'Нет',
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
            message: '{0} Подождите...',
        },
        {
            category: 'ping',
            name: 'pong',
            message: 'Понг! (shard {0}/{1}, {2}мс и {3}мс)',
        },
        {
            category: 'shard',
            name: 'embedTitle',
            message: 'Информация о шардах',
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: 'Шарда {0}.',
        },
        {
            category: 'shard',
            name: 'embedID',
            message: 'Айди',
        },
        {
            category: 'shard',
            name: 'embedGuilds',
            message: 'Серверов',
        },
        {
            category: 'shard',
            name: 'embedUsers',
            message: 'Человек',
        },
        {
            category: 'shards',
            name: 'embedTitle',
            message: 'Все шарды',
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '`{0}` на с {1}/{2}.',
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: 'серверах',
        },
        {
            category: 'shards',
            name: 'Users',
            message: 'человек',
        },
        {
            category: 'shards',
            name: 'Shard',
            message: 'шард',
        },
        {
            category: 'support',
            name: 'response',
            message: 'Вы можете зайти на специальный сервер для помощи с помощью <{0}>.',
        },
        {
            category: 'invite',
            name: 'response',
            message: 'Хотите добавить YouTube на сервер? Вот ссылка <{0}> для добавления. Запомните: Вам надо быть владельцем или иметь права Управления Сервером.',
        },
        {
            category: 'about',
            name: 'botDescription',
            message: 'YouTube это лучший и сделанный только для Дискорда. Этот бот показывает всю информацию с YouTube.',
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: 'Этот шард ({0})',
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: 'Все шарды ({0})',
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: 'Команды',
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: 'Сделано',
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: 'Сделано в',
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: 'Использовано памяти:',
        },
        {
            category: 'about',
            name: 'Guilds',
            message: 'серверов',
        },
        {
            category: 'about',
            name: 'Users',
            message: 'человек',
        },
        {
            category: 'about',
            name: 'Ran',
            message: 'ран',
        },
        {
            category: 'locale',
            name: 'noPermissions',
            message: 'У вас нет прав для изменения региона сервера. Чтобы сделать это, вам надо иметь права управлением сервером.',
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: 'Чтобы изменить регион сервера, напишите `yt locale <new locale>`.',
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: 'Сейчас поставлено как...',
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: 'Доступно регионов: ({0})',
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: 'Этого региона не существует. Вы можете найти список регионов написав `yt locale`.',
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: 'Этот регион сейчас используется. Выберите другой.',
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: '{0} Меняем регион сервера... Подождите.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: 'Ошибка! Я не смог изменить регион этого сервера. Проверьте синтаксис команды. Если проблема продолжается - зайдите на этот сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: 'Регион этого сервера сменен с  `{0}` на `{1}`.',
        },
        {
            category: 'video',
            name: 'noArgs',
            message: 'Вы не привели ни одного параметра! Чтобы посмотреть информацию о видео приведите ID видео, ссылку или очередь поиска.',
        },
        {
            category: 'video',
            name: 'searching',
            message: '{0} Поиск на YouTube... Подождите.',
        },
        {
            category: 'video',
            name: 'searchFail',
            message: 'Не найдено ни одного видео, которое подходит по вашим параметрам.  Удостоверьтесь, что эти параметры верны. Если эта проблема продолжается, то зайдите на этот сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '{0} видео найдено.',
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '{0} видео найдено.',
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: 'Чтобы выбрать видео, напишите цифру видео в течении 15 секунд, или напишите `cancel` для отмены.',
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: 'Этот выбор не число, попробуйте еще раз.',
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: 'Этот выбор выходит за пределы найденных результатов, попробуйте ещё раз.',
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: 'Вы ничего не написали в течении 15 секунд, попробуйте ещё раз.',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: 'Загружено:',
        },
        {
            category: 'video',
            name: 'embedVideoViews',
            message: 'просмотров',
        },
        {
            category: 'video',
            name: 'embedVideoNoViews',
            message: 'Нет просмотров',
        },
        {
            category: 'video',
            name: 'embedVideoRating',
            message: 'Рейтинг:',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: 'Загружено',
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: 'Продолжительность',
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'noArgs',
            message: 'Вы не привели ни одного параметра! Чтобы посмотреть информацию о плейлисте, приведите ID плейлиста, URL, или очередь поиска.',
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '{0} Поиск на YouTube... Подождите...',
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: 'Не найдено ни одного плейлиста, который подходит по вашим параметрам. Удостоверьтесь, что эти параметры верны. Если проблема продолжается, зайдите на этот сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '{0} плейлист найден',
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '{0} плейлистов найдено.',
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: 'Чтобы выбрать плейлист, введите число в течении 15 секунд, или напишите `cancel` для отмены.',
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: 'Этот выбор не число, попробуйте еще раз.',
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: 'Этот выбор выходит за пределы найденных результатов, попробуйте ещё раз.',
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: 'Вы ничего не написали в течении 15 секунд, попробуйте ещё раз.',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: 'Сделано',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: 'видео',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: 'Нет видео',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: 'Сделано',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'View',
            message: 'Посмотреть',
        },
        {
            category: 'playlist',
            name: 'Or',
            message: 'или',
        },
        {
            category: 'playlist',
            name: 'Play',
            message: 'послушать',
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: 'на YouTubе',
        },
        {
            category: 'channel',
            name: 'noArgs',
            message: 'Вы не привели ни одного параметра! Чтобы посмотреть информацию о канале, приведите ID канала, URL, или очередь поиска. ',
        },
        {
            category: 'channel',
            name: 'searching',
            message: '{0} Поиск на YouTube... Подождите.',
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: 'Не найдено ни одного канала, который подходит по вашим параметрам. Удостоверьтесь, что эти параметры верны. Если проблема продолжается, зайдите на сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '{0} канал был найден.',
        },
        {
            category: 'channel',
            name: 'embedResultsFoundMultiple',
            message: '{0} каналов было найдено.',
        },
        {
            category: 'channel',
            name: 'embedResultsDescription',
            message: 'Чтобы выбрать канал, напишите число в течении 15 секунд, или напишите  `cancel` для отмены.',
        },
        {
            category: 'channel',
            name: 'choiceNotANumber',
            message: 'Этот выбор не число, попробуйте еще раз.',
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: 'Этот выбор выходит за пределы найденных результатов, попробуйте ещё раз.',
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: 'Вы ничего не написали в течении 15 секунд, попробуйте ещё раз.',
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: 'подписчиков',
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: 'спрятанных подписчиков',
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: 'Нет подписчиков',
        },
        {
            category: 'channel',
            name: 'embedChannelViews',
            message: 'просмотров',
        },
        {
            category: 'channel',
            name: 'embedChannelNoViews',
            message: 'Нет просмотров',
        },
        {
            category: 'channel',
            name: 'embedChannelJoinedAt',
            message: 'Присоединился',
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: 'видео',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: 'Нет видео',
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: 'Страна',
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: 'URL',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: 'Нет URL',
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: 'ID',
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: 'Посмотреть на  youtube.com',
        },
        {
            category: 'trending',
            name: 'invalidRegion',
            message: 'Этот регион неверен. Список регионов смотрите здесь: <https://hasteb.in/eraqafum.yaml>.',
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '{0} Поиск трендовых видео... Подождите...',
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: 'Не найдено ни одного тоендового видео в YouTube. Если проблема продолжается, зайдите на сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: 'Топ 5 трендовых видео для {0}',
        },
        {
            category: 'watching',
            name: 'fetching',
            message: '{0} Подождите...',
        },
        {
            category: 'watching',
            name: 'fetchFail',
            message: 'Не удалось найти людей смотрящих YouTube. Если проблема продолжается, зайдите сюда:  <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'noArgs',
            message: 'Вы не привели ни одного параметра! Чтобы посмотреть субтитры, напишите очередь поиска или напишите URL видео на YouTube.',
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: 'Не найдено ни одного субтитра для этого видео. Проверьте, что URL этого видео верно. Если проблема продолжается, зайдите на сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '{0} Ищем субтитры типа {1}... Подождите...',
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: 'Не найдено ни одного субтитра типа {0}. Если проблема продолжается, зайдите на сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'noArgs',
            message: 'Вы не привели ни одного параметра! Чтобы найти музыку, приведите от 1 до 5 ссылок на видео YouTube.',
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: 'Вы привели или мало ссылок, или слишком много. Приведите от 1 до 5 ссылок на видео YouTube.',
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '{0} Ищем музыку... Подождите.',
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: 'Не найдено ни одного предложения для вас. Если проблема продолжается, зайдите на сервер: <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: '{0} музыкальных предложений специально для вас.',
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
