export default function ImagePanel({src, desc, className}) {
    return (
        <div className={`${className} rounded-2xl border-2 border-theme-muted hover:border-theme-accent object-cover`}>
            <img src={src} alt="" />
        </div>
    );
};