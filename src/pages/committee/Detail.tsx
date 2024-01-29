import React, { useState } from 'react';
import { BreadcrumbsContainer, Button, PopupContainer, PopupWrapper } from '../../components';
import { PATH_COMMITTEE } from '../../routes/paths';
import { pageNames } from '../../constants';
import { useNavigate } from 'react-router';

const pathMap = [
    { url: PATH_COMMITTEE.ROOT, title: pageNames.pages.committee },
    { url: PATH_COMMITTEE.DETAILS, title: pageNames.global.details },
];

export default function CommitteeDetailPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="p-4">
                <BreadcrumbsContainer path={pathMap}>
                    <div className="flex">
                        <Button onClick={() => navigate(`${PATH_COMMITTEE.EDIT}/id`)} title="Edit" />
                        <Button onClick={() => navigate(PATH_COMMITTEE.CREATE)} title="Create" />
                        <Button onClick={() => navigate(PATH_COMMITTEE.LIST)} title="List" />
                    </div>
                </BreadcrumbsContainer>
            </div>
        </>
    );
}