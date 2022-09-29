import React from 'react';

const Accordian = () => {
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        How does React Work?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        React is a Javascript library which works based on 3 fundamental things Components, State, and Properties as Props. It has some amazing features like  JSX, Virtual DOM, One-Way Data Binding and with these things react can changed only what needs to be changed in the DOM.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        What are the difference between Props and State?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        Props are read only while State changes can be asynchronous. Props are immutable, State is mutable. Props allow you to pass data from one component to other components as an argument but State holds information about the components. Props can be accessed by the child component but State cannot be accessed by child components.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                        What are the uses of useEffect()?
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        UseEffect() has 6 different use cases. <br />
                        1. Running once on mount: fetch API data <br />
                        2. Running on state change: validating input field <br />
                        3. Running on state change: live filtering <br />
                        4. Running on state change: trigger animation on new array value <br />
                        5. Running on props change: update paragraph list on fetched API data update <br />
                        6. Running on props change: updating fetched API data to get BTC updated price
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;