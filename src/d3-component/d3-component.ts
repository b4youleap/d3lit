import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './d3-component.style';
import { select } from '../d3-importer'

@customElement('d3-component')
export class D3Component extends LitElement {

    static styles = [styles];

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        
        const rootContainer = this.renderRoot.querySelector('.root-container');

        select(rootContainer)
            .append('p')
            .style("display", "inline")
            .style("color", "white")
            .text('and the component is working')
            .append('p')
            .style("display", "inline")
            .style("color", "grey")
            .text('!!!')
    }

    public render () { 
        return html`
            <span class="root-container"><h1>Hello D3, </h1></span>`
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'd3-component': D3Component
  }
}