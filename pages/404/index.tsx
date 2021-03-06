// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container, TopText, ApodButton } from "@Styled/Home";
import Link from "next/link";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
    return (
        <Container>
            <div>Hello moonlight. I love you and I miss you so much.</div>
        </Container>
    );
};

export default withTranslation("common")(Custom404);
