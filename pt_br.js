const Locale = require("./Locale.js");

module.exports = new Locale({ //INFO
    name: 'Português (Brasil)',
    id: 'pt_BR',
    humanizerLanguage: 'pt',
    emoji: ':flag_br:',
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
            message: 'Você só pode usar `{0}` a cada {1}, espere {2} antes de poder usá-lo novamente.',
        },
        {
            category: 'help',
            name: 'commandNotFound',
            message: 'Comando não encontrado. Veja a lista de comandos com `yt help`.',
        },
        {
            category: 'help',
            name: 'embedMainTitle',
            message: 'Há {0} comandos disponíveis.',
        },
        {
            category: 'help',
            name: 'embedMainDescription',
            message: 'Você é um {0}. Para ver informações sobre um comando específico, use `yt help {comando/alcunha}`.',
        },
        {
            category: 'help',
            name: 'embedMainCommands',
            message: 'Comandos',
        },
        {
            category: 'help',
            name: 'embedMainFooter',
            message: 'Se precisar de ajuda, entre no servidor de suporte com \'yt support\'',
        },
        {
            category: 'help',
            name: 'embedInfoModule',
            message: 'Módulo',
        },
        {
            category: 'help',
            name: 'embedInfoAliases',
            message: 'Alcunhas',
        },
        {
            category: 'help',
            name: 'embedInfoNoAliases',
            message: 'Não há alcunhas',
        },
        {
            category: 'help',
            name: 'embedInfoCooldown',
            message: 'Limite de Tempo',
        },
        {
            category: 'help',
            name: 'embedInfoNoCooldown',
            message: 'Não há limite',
        },
        {
            category: 'help',
            name: 'embedInfoGuildOnly',
            message: 'Apenas para servidor?',
        },
        {
            category: 'help',
            name: 'embedInfoElevated',
            message: 'Apenas para desenvolvedor?',
        },
        {
            category: 'help',
            name: 'Yes',
            message: 'Sim',
        },
        {
            category: 'help',
            name: 'No',
            message: 'Não',
        },
        {
            category: 'help',
            name: 'LevelUser',
            message: 'usuário',
        },
        {
            category: 'help',
            name: 'LevelDeveloper',
            message: 'desenvolvedor',
        },
        {
            category: 'ping',
            name: 'pinging',
            message: 'Esperando ping..',
        },
        {
            category: 'ping',
            name: 'pong',
            message: 'Pong! (shard {0}/{1}, {2}ms gateway {3}ms REST)',
        },
        {
            category: 'shard',
            name: 'embedTitle',
            message: 'Informações da Shard',
        },
        {
            category: 'shard',
            name: 'embedDescription',
            message: 'Esse servidor está na shard {0}.',
        },
        {
            category: 'shard',
            name: 'embedID',
            message: 'ID',
        },
        {
            category: 'shard',
            name: 'embedGuilds',
            message: 'Servidores',
        },
        {
            category: 'shard',
            name: 'embedUsers',
            message: 'Usuários',
        },
        {
            category: 'shards',
            name: 'embedTitle',
            message: 'Todas as shards',
        },
        {
            category: 'shards',
            name: 'embedDescription',
            message: '`{0}` está na shard {1}/{2}.',
        },
        {
            category: 'shards',
            name: 'Guilds',
            message: 'servidores',
        },
        {
            category: 'shards',
            name: 'Users',
            message: 'usuários',
        },
        {
            category: 'shards',
            name: 'Shard',
            message: 'Shard',
        },
        {
            category: 'support',
            name: 'response',
            message: 'Você pode entrar no servidor de suporte (ou convidar pessoas à ele) com <{0}>.',
        },
        {
            category: 'invite',
            name: 'response',
            message: 'Quer convidar YouTube para seu servidor? Vá à <{0}> para adicioná-lo; lembre-se que você precisa ser o dono ou ter a permissão Gerenciar Servidor.',
        },
        {
            category: 'about',
            name: 'botDescription',
            message: 'YouTube é o melhor e único bot para youtube.com, provendo informações de vídeos/playlists/canais, vídeos em alta/aleatórios, letras e mais.',
        },
        {
            category: 'about',
            name: 'embedThisShard',
            message: 'Esse shard ({0})',
        },
        {
            category: 'about',
            name: 'embedAllShards',
            message: 'Todos shards ({0})',
        },
        {
            category: 'about',
            name: 'embedCommands',
            message: 'Comandos',
        },
        {
            category: 'about',
            name: 'embedCreatedBy',
            message: 'Criado por',
        },
        {
            category: 'about',
            name: 'embedCreatedAt',
            message: 'Criado em',
        },
        {
            category: 'about',
            name: 'embedMemoryUsed',
            message: 'Memória usada',
        },
        {
            category: 'about',
            name: 'Guilds',
            message: 'servidores',
        },
        {
            category: 'about',
            name: 'Users',
            message: 'usuários',
        },
        {
            category: 'about',
            name: 'Ran',
            message: 'executados',
        },
        {
            category: 'locale',
            name: 'noPermissions',
            message: 'Você não tem permissão para ver ou alterar a linguagem do servidor. Para fazer isso, você precisa ser o dono ou ter a permissão `Gerenciar Servidor`.',
        },
        {
            category: 'locale',
            name: 'embedInfo',
            message: 'Para alterar a linguagem do servidor, use `yt locale <nova linguagem>`.',
        },
        {
            category: 'locale',
            name: 'embedCurrent',
            message: 'No momento é..',
        },
        {
            category: 'locale',
            name: 'embedAvailable',
            message: 'Linguagens disponíveis ({0})',
        },
        {
            category: 'locale',
            name: 'localeDoesntExist',
            message: 'Essa língua não existe. Veja uma lista de linguagens válidas com `yt locale`.',
        },
        {
            category: 'locale',
            name: 'localeAlreadyInUse',
            message: 'Essa língua já está escolhida.',
        },
        {
            category: 'locale',
            name: 'updatingLocale',
            message: 'Alterando a língua do servidor.. Isso pode demorar um pouco.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleFail',
            message: 'Um erro ocorreu ao trocar de linguagem. Se esse erro persisir, informe-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'locale',
            name: 'updatingLocaleSuccess',
            message: 'A língua do seu servidor foi alterada de `{0}` para `{1}`.',
        },
        {
            category: 'video',
            name: 'noArgs',
            message: 'Você não proveu nenhum argumento! Para ver informações sobre um vídeo, informe seu ID, o URL, ou termos de pesquisa.',
        },
        {
            category: 'video',
            name: 'searching',
            message: '{0} Procurando no YouTube.. isso pode demorar um pouco.',
        },
        {
            category: 'video',
            name: 'searchFail',
            message: 'Não foi possível encontrar vídeos com seus argumentos, verifique se eles são válidos. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'video',
            name: 'embedResultsFound',
            message: '{0} vídeo foi encontrado.',
        },
        {
            category: 'video',
            name: 'embedResultsFoundMultiple',
            message: '{0} vídeos foram encontrados.',
        },
        {
            category: 'video',
            name: 'embedResultsDescription',
            message: 'Para escolher um vídeo, mande o número perto dele em 15 segundos, ou escreva `cancel` para cancelar.',
        },
        {
            category: 'video',
            name: 'choiceNotANumber',
            message: 'Essa escolha não é um número ou o tempo de escolher acabou.',
        },
        {
            category: 'video',
            name: 'choiceOutOfBounds',
            message: 'Esse número é maior do que o de opções ou o tempo de escolher acabou.',
        },
        {
            category: 'video',
            name: 'choiceRanOutOfTime',
            message: 'Nenhuma escolha foi feita em 15 segundos, seleção cancelada.',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedBy',
            message: 'Enviado por',
        },
        {
            category: 'video',
            name: 'embedVideoViews',
            message: 'Visualizações',
        },
        {
            category: 'video',
            name: 'embedVideoNoViews',
            message: 'Nenhuma visualização',
        },
        {
            category: 'video',
            name: 'embedVideoRating',
            message: 'Avaliação',
        },
        {
            category: 'video',
            name: 'embedVideoUploadedAt',
            message: 'Data de envio',
        },
        {
            category: 'video',
            name: 'embedVideoDuration',
            message: 'Duração',
        },
        {
            category: 'video',
            name: 'embedVideoID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'noArgs',
            message: 'Você não proveu nenhum argumento! Para ver informações sobre uma playlist, informe sua ID, URL, ou termos de pesquisa.',
        },
        {
            category: 'playlist',
            name: 'searching',
            message: '{0} Procurando no YouTube.. isso pode demorar um pouco.',
        },
        {
            category: 'playlist',
            name: 'searchFail',
            message: 'Não foi possível encontrar playlists com seus argumentos, verifique se eles são válidos. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFound',
            message: '{0} playlist foi encontrada.',
        },
        {
            category: 'playlist',
            name: 'embedResultsFoundMultiple',
            message: '{0} playlists foram encontradas.',
        },
        {
            category: 'playlist',
            name: 'embedResultsDescription',
            message: 'Para escolher uma playlist, mande o número perto dele em 15 segundos, ou escreva `cancel` para cancelar.',
        },
        {
            category: 'playlist',
            name: 'choiceNotANumber',
            message: 'Essa escolha não é um número ou o tempo de escolher acabou.',
        },
        {
            category: 'playlist',
            name: 'choiceOutOfBounds',
            message: 'Esse número é maior do que o de opções ou o tempo de escolher acabou.',
        },
        {
            category: 'playlist',
            name: 'choiceRanOutOfTime',
            message: 'Nenhuma escolha foi feita em 15 segundos, seleção cancelada.',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedBy',
            message: 'Criada por',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistVideos',
            message: 'Vídeos',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistNoVideos',
            message: 'Nenhum vídeo',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistCreatedAt',
            message: 'Data de criação',
        },
        {
            category: 'playlist',
            name: 'embedPlaylistID',
            message: 'ID',
        },
        {
            category: 'playlist',
            name: 'View',
            message: 'Visualizar',
        },
        {
            category: 'playlist',
            name: 'Or',
            message: 'ou',
        },
        {
            category: 'playlist',
            name: 'Play',
            message: 'reproduzir',
        },
        {
            category: 'playlist',
            name: 'OnYouTube',
            message: 'no youtube.com',
        },
        {
            category: 'channel',
            name: 'noArgs',
            message: 'Você não proveu nenhum argumento! Para ver informações sobre um canal, informe seu ID, URL, ou termos de pesquisa.',
        },
        {
            category: 'channel',
            name: 'searching',
            message: '{0} Procurando no YouTube.. isso pode demorar um pouco.',
        },
        {
            category: 'channel',
            name: 'searchFail',
            message: 'Não foi possível encontrar playlists com seus argumentos, verifique se eles são válidos. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'channel',
            name: 'embedResultsFound',
            message: '{0} canal encontrado.',
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
            message: 'Essa escolha não é um número ou o tempo de escolher acabou.',
        },
        {
            category: 'channel',
            name: 'choiceOutOfBounds',
            message: 'Esse número é maior do que o de opções ou o tempo de escolher acabou.',
        },
        {
            category: 'channel',
            name: 'choiceRanOutOfTime',
            message: 'Nenhuma escolha foi feita em 15 segundos, seleção cancelada.',
        },
        {
            category: 'channel',
            name: 'embedChannelSubscribers',
            message: 'Inscritos',
        },
        {
            category: 'channel',
            name: 'embedChannelHiddenSubscribers',
            message: 'Escondido',
        },
        {
            category: 'channel',
            name: 'embedChannelNoSubscribers',
            message: 'Nenhum inscrito',
        },
        {
            category: 'channel',
            name: 'embedChannelViews',
            message: 'Visualizações',
        },
        {
            category: 'channel',
            name: 'embedChannelNoViews',
            message: 'Nenhuma visualização',
        },
        {
            category: 'channel',
            name: 'embedChannelJoinedAt',
            message: 'Entrou em',
        },
        {
            category: 'channel',
            name: 'embedChannelVideosUploaded',
            message: 'Vídeos',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVideosUploaded',
            message: 'Nenhum vídeo',
        },
        {
            category: 'channel',
            name: 'embedChannelCountry',
            message: 'País',
        },
        {
            category: 'channel',
            name: 'embedChannelVanityURL',
            message: 'URL decorativo',
        },
        {
            category: 'channel',
            name: 'embedChannelNoVanityURL',
            message: 'Nenhum URL decorativo',
        },
        {
            category: 'channel',
            name: 'embedChannelID',
            message: 'ID',
        },
        {
            category: 'channel',
            name: 'viewOnYouTube',
            message: 'Veja no youtube.com',
        },
        {
            category: 'trending',
            name: 'invalidRegion',
            message: 'Essa região não é válida. Uma lista de regiões válidas pode ser encontrada em <https://hasteb.in/eraqafum.yaml>.',
        },
        {
            category: 'trending',
            name: 'fetching',
            message: '{0} Procurando vídeos em alta do YouTube.. isso pode demorar um pouco.',
        },
        {
            category: 'trending',
            name: 'fetchFail',
            message: 'Não foi possível encontrar vídeos em alta do YouTube. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'trending',
            name: 'embedTrendingTitle',
            message: 'Os 5 vídeos em alta em {0}',
        },
        {
            category: 'lyrics',
            name: 'noArgs',
            message: 'Você não proveu nenhum argumento! Para ver informações sobre um canal, informe seu ID, URL, ou termos de pesquisa.',
        },
        {
            category: 'lyrics',
            name: 'videoNoMatch',
            message: 'Nenhum vídeo encontrado com esses argumentos. Se esse erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'lyrics',
            name: 'fetching',
            message: '{0} Procurando por letras de {1}.. isso pode demorar um pouco.',
        },
        {
            category: 'lyrics',
            name: 'fetchFail',
            message: 'Não foi possível encontrar letras de {0}. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'noArgs',
            message: 'Você não proveu nenhum argumento! Para ver músicas recomendadas, informe os ID, URL, ou termos de pesquisa de 1 a 5 vídeos que você gosta.',
        },
        {
            category: 'suggested',
            name: 'outOfBounds',
            message: 'Você proveu poucos ou muitos URLs. Limite-se de 1 a 5 URLs.',
        },
        {
            category: 'suggested',
            name: 'fetching',
            message: '{0} Procurando músicas para você tentar.. isso pode demorar um pouco.',
        },
        {
            category: 'suggested',
            name: 'fetchFail',
            message: 'Não foi possível encontrar sugestões para você. Se o erro persistir, contate-nos em <https://discord.gg/nnpPGRy>.',
        },
        {
            category: 'suggested',
            name: 'embedTitle',
            message: 'Aqui estão {0} sugestões de música para você.',
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
