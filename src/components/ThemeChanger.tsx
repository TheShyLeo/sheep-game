import React, { FC, useState } from 'react';
import style from './ThemeChanger.module.scss';
import classNames from 'classnames';
import { cartoonTheme } from '../themes/cartoon';
import { getDefaultTheme } from '../themes/default';
import { Theme } from '../themes/interface';

const BuiltinThemes = [cartoonTheme];

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
                    className={classNames(style.square, style.diy)}
                    onClick={() => {
                        setOpen(false);
                        onDiyClick();
                    }}
                    style={{
                        transform: open
                            ? `translateY(-${110 * 6}%)`
                            : 'translateX(-110%)',
                    }}
                >
                    {open ? '点我整活' : 'DIY!'}
                </div>

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
