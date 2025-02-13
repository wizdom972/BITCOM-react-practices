import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import "./assets/scss/App.scss";

import data from "./assets/json/data.js";

function App() {
    const [emails, setEmails] = useState(data);
    const searchEmail = function (keyword) {
        const keywordLowerCase = keyword.toLowerCase();

        return setEmails(
            !keywordLowerCase
                ? data
                : data.filter(({ firstName, lastName, email }) => {
                      const firstNameLowerCase = firstName.toLowerCase();
                      const lastNameLowerCase = lastName.toLowerCase();
                      const emailLowerCase = email.toLowerCase();

                      return (
                          firstNameLowerCase.includes(keywordLowerCase) ||
                          lastNameLowerCase.includes(keywordLowerCase) ||
                          emailLowerCase.includes(keywordLowerCase)
                      );
                  })
        );
    };

    return (
        <div id={"App"}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail} />
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;
