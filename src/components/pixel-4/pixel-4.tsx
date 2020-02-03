import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lite-pixel-4',
  styleUrl: 'pixel-4.css',
  shadow: true
})
export class Pixel4 {

  @Prop({ reflect: true }) theme: string = 'dark';

  render() {

    return (
      <div class="container" >
        {/* Buttons */}
        <div class="power">
        </div>
        {/* <div class="vol-up">
        </div>
        <div class="vol-down">
        </div> */}
        <div class="vol">
        </div>
        {/* Content */}
        <div class="content">
          <div class={`frame-${this.theme}`}>
            <div class={`top-${this.theme}`}>
              <div class="camera"></div>
              <div class="earpiece"></div>
              <div class="sensor"></div>
            </div>
            <div class="screen">
              <div class="screen-area">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
