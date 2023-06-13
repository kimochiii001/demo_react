
import PropTypes from 'prop-types'; // ES6
import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    disable = false,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    onClick,
    leftIcon,
    rightIcon,
    className,
    ...passprops }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }




    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        [className]: className,
    })


    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>
                {leftIcon}
            </span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>
                {rightIcon}
            </span>}

        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
}

export default Button