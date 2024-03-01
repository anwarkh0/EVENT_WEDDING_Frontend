import Style from './MultiSelectList.module.css'
function MultiSelectList({ setSelectedServices, selectedServices, services }) {

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
                    {services && services.map((service) => (
                        <li>
                            <input
                                key={service._id}
                                type="checkbox"
                                id={service._id}
                                value={service.name}
                                checked={selectedServices.includes(`${service.name}`)}
                                onChange={() => handleOptionChange(`${service.name}`)}
                            />
                            <label htmlFor={`${service.name}`}>{`${service.name}`}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={Style.selectedServices}>
                <h3>Selected Services:</h3>

                <ul>
                    {selectedServices.map((option, index) => (
                        <li key={index}>{index + 1} {option}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MultiSelectList;
