// 钓鱼佬主题
import React from 'react';
import { Theme } from '../interface';
import { DefaultSoundNames } from '../emoji';
import back from './back.jpg';
import music from './music.mp3';

const imagesUrls = import.meta.glob('./images/*.jpeg', {
    import: 'default',
    eager: true,
});

const cartoon = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const meishaoTheme: Theme<DefaultSoundNames> = {
    title: '美少女战士',
    dark: true,
    maxLevel: 100,
    backgroundColor: `url(${back})`,
    icons: cartoon.map(({ name, content }) => ({
        name,
        content,
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
    bgm: music,
};
