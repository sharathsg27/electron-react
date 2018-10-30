//View
import React from 'react';

export default class Nav extends React.Component {
    render() {
        return(
            <div className="column is-one-third">
                <aside className="menu">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                        <li><a data-section="instructions" id="nav-instructions" className="nav-anchor">Instructions</a></li>
                        <li><a data-section="guide" id="nav-guide" className="nav-anchor">Guide</a></li>
                    </ul>
                </aside>
            </div>
        )
    }
}

document.body.addEventListener('click', (event)=> {
    if (event.target.dataset.section) {
        handleSectionTrigger(event);
    }
});


//Handle Section trigger
function handleSectionTrigger (event) {
    hideAllActivatedSectionsAndButtons();

    //Highlight clicked anchor tag
    event.target.classList.add('is-selected');

    //Show Section for the selected nav
    const sectionId = `${event.target.dataset.section}-section`;
    document.getElementById(sectionId).classList.add('is-shown');
}

//Hide other activated Sections & Buttons
function hideAllActivatedSectionsAndButtons () {
    const sections = document.querySelectorAll('.nav-section.is-shown');
    if (sections && sections.length > 0) {
        Array.prototype.forEach.call(sections, (section) => {
            section.classList.remove('is-shown');
        });
    }

    const anchors = document.querySelectorAll('.nav-anchor.is-selected');
    if (anchors && anchors.length > 0) {
        Array.prototype.forEach.call(anchors, (section) => {
            section.classList.remove('is-selected');
        });
    }
}