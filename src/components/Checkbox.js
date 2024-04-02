import React, { useState } from 'react';

function Checkbox() {
    const [isCitizen, setIsCitizen] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsCitizen(event.target.checked);
    };

    return (
        <div>
            <form>
                <h1>Are you a citizen: {isCitizen ? "Yes" : "No"}</h1>
                <label htmlFor="citizenCheckbox">Are you a citizen</label>
                <input
                    id="citizenCheckbox"
                    type="checkbox"
                    checked={isCitizen}
                    onChange={handleCheckboxChange}
                />
            </form>
        </div>
    );
}

export default Checkbox;
