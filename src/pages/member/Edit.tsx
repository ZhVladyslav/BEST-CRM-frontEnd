import React from 'react';
import { BreadcrumbsContainer, Button } from '../../components';
import { PATH_MEMBER } from '../../routes/paths';
import { useNavigate, useParams } from 'react-router-dom';
import { pageNames } from '../../constants';

const pathMapEdit = [
    { url: PATH_MEMBER.ROOT, title: pageNames.pages.member },
    { url: PATH_MEMBER.EDIT, title: pageNames.global.edit },
];

const pathMapCreate = [
    { url: PATH_MEMBER.ROOT, title: pageNames.pages.member },
    { url: PATH_MEMBER.CREATE, title: pageNames.global.create },
];

export default function MemberEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            {id ? (
                <div className="p-4">
                    <BreadcrumbsContainer path={pathMapEdit}>
                        <div className="flex">
                            <Button onClick={() => navigate(PATH_MEMBER.CREATE)} title="Create" />
                            <Button onClick={() => navigate(`${PATH_MEMBER.DETAILS}/id`)} title="Details" />
                            <Button onClick={() => navigate(PATH_MEMBER.LIST)} title="List" />
                        </div>
                    </BreadcrumbsContainer>
                </div>
            ) : (
                <div className="p-4">
                    <BreadcrumbsContainer path={pathMapCreate}>
                        <div className="flex">
                            <Button onClick={() => navigate(`${PATH_MEMBER.EDIT}/id`)} title="Edit" />
                            <Button onClick={() => navigate(`${PATH_MEMBER.DETAILS}/id`)} title="Details" />
                            <Button onClick={() => navigate(PATH_MEMBER.LIST)} title="List" />
                        </div>
                    </BreadcrumbsContainer>
                </div>
            )}
        </>
    );
}