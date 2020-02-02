import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lite-iphone-frames',
  styleUrl: 'iphone-frames.css',
  shadow: true
})
export class IphoneFrames {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
