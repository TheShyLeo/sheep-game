import { Theme } from '../interface';
import bgm from './HowYouLikeThat.mp3';

const icons = <const>[
    `🍇`,
    `🍈`,
    `🍉`,
    `🍊`,
    `🍋`,
    `🍌`,
    `🍍`,
    `🥭`,
    `🍎`,
    `🍏`,
    `🍑`,
    `🍒`,
    `🍓`,
    `🫐`,
    `🥝`,
    `🥩`,
    `🍔`,
    `🍟`,
    `🍕`,
    `🍔`,
    `🍟`,
    `🍕`,
    `🍧`,
    `🍨`,
];

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '星星的羊了个羊',
        desc: '给星星专供~',
        dark: true,
        maxLevel: 100,
        backgroundColor: '#8fd3f4',
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
        bgm,
    };
};
