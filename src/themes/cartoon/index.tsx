// 钓鱼佬主题
import React from 'react';
import { Theme } from '../interface';
import { DefaultSoundNames } from '../emoji';

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

const musicsUrls = import.meta.glob('./musics/*.mp3', {
    import: 'default',
    eager: true,
});

const musics = Object.entries(musicsUrls).map(([key, value]) => value);

const cartoon = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const cartoonTheme: Theme<DefaultSoundNames> = {
    title: '卡了个通',
    desc: '星星专享',
    dark: true,
    maxLevel: 100,
    backgroundColor: '#8fd3f4',
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
    bgm: musics.map((e) => (e ? e.toString() : '')),
};
