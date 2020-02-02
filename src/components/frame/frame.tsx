import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'device-frame',
  styleUrl: 'frame.css',
  shadow: true
})
export class Frame {

  render() {
    return (
      <Host>
        <h1>Frame</h1>
        <slot></slot>
      </Host>
    );
  }

}
