import { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const DSEG7ClassicFont = localFont({src: '../../styles/fonts/DSEG7Classic-BoldItalic-nullreff-edit.woff2' })

export default function NullreffLogo() {
    const minDate = new Date(-8640000000000000).getTime();
    const birthday = Date.parse('1990-10-02');
    const [hoverTime, setHoverTime] = useState(minDate);
    const [hovering, setHovering] = useState(false);
    const [text, setText] = useState('nullreff');

    useEffect(() => {
        if (Date.now() > hoverTime + 1000) {
            if (hovering) {
                const hours = Math.abs(Date.now() - birthday) / 36e5;
                setText(hours.toFixed().padStart(8, '0'));
            } else {
                setText('nullreff');
            }
        } else if (Date.now() > hoverTime) {
            setText((Math.random() + 1).toString(36).substring(2, 10));
        } else {
            setHoverTime(Date.now());
        }
    })

    function enter() {
        setHoverTime(Date.now());
        setHovering(true);
    }

    function leave() {
        setHoverTime(Date.now());
        setHovering(false);
    }

    return (
        <div onMouseEnter={enter} onMouseLeave={leave}>
            <span className={DSEG7ClassicFont.className}>{text}</span>
        </div>
    )
}