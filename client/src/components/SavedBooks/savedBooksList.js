import React, { Component } from 'react';
import { Container } from "../Grid";

import "./style.css";

// This file exports both the List and ListItem components

export function SavedBooksList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

