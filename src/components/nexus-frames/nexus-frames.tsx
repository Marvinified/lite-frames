import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lite-nexus-frames',
  styleUrl: 'nexus-frames.css',
  shadow: true
})
export class NexusFrames {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
