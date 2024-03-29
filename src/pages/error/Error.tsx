import React from 'react';
import style from './error.page.module.scss';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PATH_DASHBOARD, PATH_ERROR } from '../../routes/paths';
import { SvgArrow } from '../../assets/svg';
import { Button } from '../../ui';
import { joinStyle } from '../../utils/';

const text = {
    403: {
        title: 'No permission',
        description: 'The page you`re trying access has restricted access. Please refer to your system administrator',
    },
    404: {
        title: 'Sorry, Page Not Found!',
        description:
            'Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.',
    },
    500: {
        title: '500 Internal Server Error',
        description: 'There was an error, please try again later.',
    },
};

export default function ErrorPage() {
    const { code } = useParams();
    const navigate = useNavigate();

    if (!code) return <Navigate to={PATH_DASHBOARD.ROOT} />;
    const codeString = code as '403' | '404' | '500';

    if (codeString !== '403' && codeString !== '404' && codeString !== '500') return <Navigate to={PATH_ERROR[404]} />;

    return (
        <div className={joinStyle(style['errorPage'], style[`errorPage--${code}`])} data-code={codeString}>
            <div className={style['errorPage__item1']} />
            <div className={style['errorPage__item2']} />
            <div className={style['errorPage__blur']} />

            <div className={style['errorPage__container']}>
                <div className={style['errorPage__container-codeError']}>{codeString}</div>
                <div className={style['errorPage__container-title']}>{text[codeString].title}</div>
                <div className={style['errorPage__container-description']}>{text[codeString].description}</div>

                <Button onClick={() => navigate(PATH_DASHBOARD.ROOT)} svg={<SvgArrow />} title="To home" />
            </div>
        </div>
    );
}
