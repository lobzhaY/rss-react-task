import React from 'react';
import { TitleType } from '../../interface/componentsInterface/titleInterface';

export default function TitleComponent({ name }: TitleType) {
  return (
    <div className="title-container">
      <h1>{name}</h1>
      <hr />
    </div>
  );
}
