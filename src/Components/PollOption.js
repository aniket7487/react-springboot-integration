import React from 'react'
const PollOption = ({ options, selected, onChange }) => {
    return (
      <div className="pollOption">
        {options.map((choice, index) => (
          <label key={index}>
            <input type="radio"
              name="vote"
              value={choice.value}
              key={index}
              checked={selected === choice.value}
              onChange={onChange} />
            {choice.text}
          </label>
        ))}
      </div>
    );
  };

  export default PollOption;
