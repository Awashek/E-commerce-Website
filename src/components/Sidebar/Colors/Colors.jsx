import React from 'react';
import Input from '../../../Input';

export default function Colors() {
  return (
    <div className="pr-8">
      <h2 className="text-2xl mb-1 mt-3">Color</h2>
      <div className="flex flex-col">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}