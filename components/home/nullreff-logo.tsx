import { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const DSEG7ClassicFont = localFont({src: '../../styles/fonts/DSEG7Classic-BoldItalic-nullreff-edit.woff2' })

export default function NullreffLogo() {
    const maxDate = new Date(8640000000000000).getTime();
    const birthday = Date.parse('1990-10-02');
    const [hoverTime, setHoverTime] = useState(maxDate);
    const [text, setText] = useState('nullreff');

    useEffect(() => {
        if (Date.now() > hoverTime + 1000) {
            const hours = Math.abs(Date.now() - birthday) / 36e5;
            const text = hours.toFixed().padStart(8, '0');
            setText(text);
        } else if (Date.now() > hoverTime) {
            const text = (Math.random() + 1).toString(36).substring(2, 10);
            setText(text);
        } else {
            setText('nullreff');
        }
    })

    return (
        <div onMouseEnter={() => setHoverTime(Date.now())} onMouseLeave={() => setHoverTime(maxDate)}>
            <span className={DSEG7ClassicFont.className}>{text}</span>
        </div>
    )
}