
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';


const Image = forwardRef(({ src, alt, className, customFeedback = images.noImage, ...props }, ref) => {


    const [fallback, setFallback] = useState('');
    console.log(fallback);
    const handleError = () => {
        setFallback(customFeedback)
        console.log(fallback);
    };

    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
})

export default Image;