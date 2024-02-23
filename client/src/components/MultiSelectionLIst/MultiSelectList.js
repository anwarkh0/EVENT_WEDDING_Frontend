import Style from './MultiSelectList.module.css'
function MultiSelectList({ setSelectedServices, selectedServices }) {

    const handleOptionChange = (option) => {
        const currentIndex = selectedServices.indexOf(option);
        const newselectedServices = [...selectedServices];

        if (currentIndex === -1) {
            newselectedServices.push(option);
        } else {
            newselectedServices.splice(currentIndex, 1);
        }

        setSelectedServices(newselectedServices);
    };

    return (
        <div className={Style.allservices}>
            <div>

                <h3>Choose Your Services:</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="music"
                            value="music"
                            checked={selectedServices.includes('music')}
                            onChange={() => handleOptionChange('music')}
                        />
                        <label htmlFor="music">music</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="decoration"
                            value="decoration"
                            checked={selectedServices.includes('decoration')}
                            onChange={() => handleOptionChange('decoration')}
                        />
                        <label htmlFor="decoration">decoration</label>
                    </li>
                    
                    {/* Add more list items for other options */}
                </ul>
            </div>
            <div>
                <h3>Selected Services:</h3>

                <ul>
                    {selectedServices.map((option, index) => (
                        <li key={index}>{index+1} {option}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MultiSelectList;
