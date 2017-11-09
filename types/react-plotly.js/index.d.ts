// Type definitions for react-plotly.js 1.0
// Project: https://github.com/plotly/react-plotly.js
// Definitions by: Facundo Fabre <https://github.com/ffabre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { StatelessComponent } from "react";
import { Data,
        Config,
        Layout,
        ScatterData,
        Root,
        Point } from "plotly.js";

interface PlotlyMouseEventPoint {
    pointNumber: number;
    curveNumber: number;
    data: ScatterData;
}
type PlotlyMouseEvent  = (data: {points: PlotlyMouseEventPoint[]}) => void;

interface PlotlySelectEventPoint {
    x: number;
    y: number;
    pointNumber: number;
}
type PlotlySelectEvent = (data: {points: PlotlySelectEventPoint[]}) => void;

export interface PlotlyComponentProps {
    fit?: boolean;
    data: Data[];
    config?: Partial<Config>;
    layout?: Partial<Layout>;
    frames?: Array<{}>;
    revision?: number;
    onInitialized?: (root: Root) => void;
    onError?: () => void;
    onUpdate?: (root: Root) => void;
    debug?: boolean;
    // Events
    afterExport?: () => void;
    afterPlot?: () => void;
    animated?: () => void;
    animatingFrame?: () => void;
    animationInterrupted?: () => void;
    autoSize?: () => void;
    beforeExport?: () => void;
    buttonClicked?: () => void;
    click?: PlotlyMouseEvent;
    clickAnnotation?: () => void;
    deselect?: () => void;
    doubleClick?: () => void;
    framework?: () => void;
    hover?: PlotlyMouseEvent;
    relayout?: (data: {
        xaxis: {
            range: [number, number],
            autorange: boolean,
        };
        yaxis: {
            range: [number, number],
            autorange: boolean,
        };
        scene: {
            center: Point,
            eye: Point,
            up: Point,
        };
    }) => void;
    restyle?: (data: [any, number[]]) => void;
    redraw?: () => void;
    selected?: PlotlySelectEvent;
    selecting?: PlotlySelectEvent;
    sliderChange?: () => void;
    sliderEnd?: () => void;
    sliderStart?: () => void;
    transitioning?: () => void;
    transitionInterrupted?: () => void;
    unhover?: PlotlyMouseEvent;
}

export const PlotComponent: StatelessComponent<PlotlyComponentProps>;
export default PlotComponent;
