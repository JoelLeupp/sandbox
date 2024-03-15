import { Component, Prop, h, State, Event,EventEmitter} from '@stencil/core';

/**
 * This file defines the Signal component, which displays a signal with different colors based on its status.
 * The component takes a `status` prop, which can be set to 'negative', 'positive', or 'neutral'.
 * Clicking on a signal circle updates the current status of the component.
 */

export type Status = 'negative' | 'positive' | 'neutral';

export interface SignalCircles {
  cx: number;
  color: string;
  signal: Status;
}

@Component({
  tag: 'my-signal',
  styleUrl: 'signal.css',
  shadow: true,
})
export class Signal {
  /**
   * status of the signal
   */
  @Prop({ mutable: true }) status: Status;


  @Event() statusUpdated: EventEmitter;


  setStatus(status: Status){
    this.status = status;
    this.statusUpdated.emit({status: this.status})
  }

  private getColor(status:Status): string {
      switch(status){
        case 'negative': return 'red';
        case 'positive': return 'green';
        case 'neutral': return 'yellow';
        default: return 'white';
      }
    }

  private getSignalFill(status:Status, target: Status): string {
    return status === target ? this.getColor(status) : 'white';
  }

  render() {
    const signalCircles: SignalCircles[] =
    [{cx: 7, color: 'red' , signal:"negative"},
    {cx: 20,  color: 'yellow',signal:"neutral"},
    {cx: 33,  color: 'green',signal:"positive"}]

  return (
    <div>
      <svg viewBox="0 -5 40 10" xmlns="http://www.w3.org/2000/svg">
        {signalCircles.map(item => (
          <circle
            cx={item.cx}
            cy="0"
            r="4.5"
            stroke-width="0.25"
            stroke={item.color}
            fill={this.getSignalFill(this.status, item.signal)}
            onClick={() => this.setStatus(item.signal)}
          />
        ))}
      </svg>
    </div>
  );
}
}
