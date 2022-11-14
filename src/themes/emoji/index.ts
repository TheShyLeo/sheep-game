import { Theme } from '../interface';

const icons = <const>[
    `🎨`,
    `🌈`,
    `⚙️`,
    `💻`,
    `📚`,
    `🍨`,
    `🐯`,
    `🐤`,
    `🐼`,
    `🐏`,
    `🍀`,
    `🍔`,
    `🍧`,
];

export type DefaultSoundNames = 'button-click' | 'triple';

export const emojiTheme: Theme<DefaultSoundNames> = {
    title: 'emoji',
    desc: '',
    dark: true,
    maxLevel: 100,
    backgroundColor: '#8dac85',
    icons: icons.map((icon) => ({
        name: icon,
        content: icon,
        clickSound: 'button-click',
        tripleSound: 'triple',
    })),
    sounds: [
        {
            name: 'button-click',
            src: 'https://minio.streakingman.com/solvable-sheep-game/sound-button-click.mp3',
        },
        {
            name: 'triple',
            src: 'https://minio.streakingman.com/solvable-sheep-game/sound-triple.mp3',
        },
    ],
    bgm: 'https://minio.streakingman.com/solvable-sheep-game/sound-disco.mp3',
};
