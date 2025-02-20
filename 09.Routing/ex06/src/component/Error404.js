import React from "react";
import * as styles from "../assets/scss/component/Error404.scss";
import SiteLayout from "../layout/SiteLayout";

export default function Error404() {
    return (
        <SiteLayout>
            <div className={styles.Error404}>
                <h2>Error404</h2>
            </div>
        </SiteLayout>
    );
}
