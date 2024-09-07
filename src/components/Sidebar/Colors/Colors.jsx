import React from 'react';
import Input from '../../Input';

export default function Colors({handleChange}) {
  return (
    <div className="pr-8">
      <h2 className="text-2xl mb-1 mt-3">Color</h2>
      <div className="flex flex-col">
      <label>
          <input 
          onClick={handleChange}
          type="radio" 
          value=""
          name="color"
          />
          <span> All</span>
        </label>

        <Input 
        onClick={handleChange}
        value="blue"
        title="Blue"
        name="color"
        />

        <Input 
        onClick={handleChange}
        value="red"
        title="Red"
        name="color"
        />

        <Input 
        onClick={handleChange}
        value="green"
        title="Green"
        name="color"
        />

        <Input 
        onClick={handleChange}
        value="white"
        title="White"
        name="color"
        />

        <Input 
        onClick={handleChange}
        value="black"
        title="Black"
        name="color"
        />

      </div>
    </div>
  );
}