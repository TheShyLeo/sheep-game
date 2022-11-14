import React, { FC, useState } from 'react';
import style from './ThemeChanger.module.scss';
import classNames from 'classnames';
import { cartoonTheme } from '../themes/cartoon';
import { emojiTheme } from '../themes/emoji';
import { jayTheme } from '../themes/jay';
import { xiaoxinTheme } from '../themes/xiaoxin';
import { shumaTheme } from '../themes/shuma';
import { shenqiTheme } from '../themes/shenqi';
import { meishaoTheme } from '../themes/meishao';
import { haliTheme } from '../themes/hali';
import { haimianTheme } from '../themes/haimian';
import { Theme } from '../themes/interface';

const BuiltinThemes = [
    cartoonTheme,
    emojiTheme,
    jayTheme,
    xiaoxinTheme,
    shumaTheme,
    shenqiTheme,
    meishaoTheme,
    haliTheme,
    haimianTheme,
];

const ThemeChanger: FC<{
    changeTheme: (theme: Theme<any>) => void;
    onDiyClick: () => void;
}> = ({ changeTheme, onDiyClick }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={classNames(style.container, open && style.open)}>
                {BuiltinThemes.map((theme, idx) => (
                    <div
                        className={classNames(style.square)}
                        key={theme.title}
                        style={{
                            opacity: open ? 1 : 0.3,
                            transform: open
                                ? `translateY(-${110 * (idx + 1)}%)`
                                : '',
                        }}
                        onClick={() => {
                            setOpen(false);
                            changeTheme(theme);
                        }}
                    >
                        {typeof theme.icons[0].content === 'string' ? (
                            theme.icons[0].content.startsWith('http') ? (
                                /*图片外链*/
                                <img src={theme.icons[0].content} alt="" />
                            ) : (
                                /*字符表情*/
                                <i>{theme.icons[0].content}</i>
                            )
                        ) : (
                            /*ReactNode*/
                            theme.icons[0].content
                        )}
                    </div>
                ))}

                <div
                    onClick={() => setOpen(!open)}
                    className={classNames(style.square)}
                >
                    {open ? '收起' : '更多'}
                </div>
            </div>
        </>
    );
};

export default ThemeChanger;
