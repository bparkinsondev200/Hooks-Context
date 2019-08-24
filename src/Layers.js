import React from 'react';
import { Context } from './App';

export const FirstLayer = (props) => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div>
            {context.firstLayer}
          </div>
        )
      }}
    </Context.Consumer>
  );
}

export const SecondLayer = (props) => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div>
            {context.secondLayer}
          </div>
        )
      }}
    </Context.Consumer>
  );
}

export const ThirdLayer = (props) => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div>
            {context.thirdLayer}
          </div>
        )
      }}
    </Context.Consumer>
  );
}