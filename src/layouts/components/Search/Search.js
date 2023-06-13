import { useEffect, useState, useRef } from 'react';
// import * as request from '~/utils/request'

import * as searchService from '~/services/searchService'
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faSpinner, faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import AccountItem from '~/components/AccountItem/AccountItem';




const cx = classNames.bind(styles);
function Search() {

    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {

        if (!debounce.trim()) {
            setSearchResult([]);

            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        }

        fetchApi();



    }, [debounce]);

    // function handleChange(event) {
    //     console.log(event.target.value);
    // }

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleSearchValue = (e) => {

        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);

            console.log(searchValue);
        }


    }
    return (<HeadlessTippy

        visible={showResult && searchResult.length > 0}
        appendTo={() => document.body}
        interactive
        onClickOutside={handleHideResult}
        render={attrs => (
            <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>

                    <h4 className={cx('search_title')}>
                        Account
                    </h4>
                    {searchResult.map(result => (
                        <AccountItem key={result.id} data={result} onClick={handleHideResult} />
                    ))}

                </PopperWrapper>
            </div>

        )}>
        <div className={cx('search')}>
            <input placeholder='tim kiem'
                ref={inputRef}
                spellCheck={false}
                value={searchValue}
                onFocus={() => setShowResult(true)}
                onChange={handleSearchValue}
            />

            {!!searchValue && (
                <button className={cx('clear')} onClick={() => handleClear()}>
                    {!loading && <FontAwesomeIcon icon={faCircleXmark} />}
                </button>
            )}

            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>)
}

export default Search;